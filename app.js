// State Management
const state = {
  currentCategory: "all",
  searchQuery: "",
  showMistakesOnly: false,
  answers: {}, // { [questionId]: { userAnswer, isCorrect, answeredAt } }
  stats: {
    total: 0,
    correct: 0,
    wrong: 0,
    streak: 0,
    bestStreak: 0
  },
  theme: "dark",
  soundEnabled: true
};

// Audio Synthesizer using Web Audio API
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
  }

  playCorrect() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(587.33, now); // D5
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.15); // A5

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.35);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }

  playWrong() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(220, now); // A3
      osc.frequency.linearRampToValueAtTime(140, now + 0.25);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.3);
    } catch (e) {
      console.warn("Audio error", e);
    }
  }
}

const sfx = new SoundFX();

// Storage helpers
function loadSavedState() {
  const savedAnswers = localStorage.getItem("cs_quiz_answers");
  const savedTheme = localStorage.getItem("cs_quiz_theme");
  const savedSound = localStorage.getItem("cs_quiz_sound");

  if (savedAnswers) {
    try {
      state.answers = JSON.parse(savedAnswers);
    } catch (e) {
      state.answers = {};
    }
  }
  if (savedTheme) {
    state.theme = savedTheme;
  }
  if (savedSound !== null) {
    state.soundEnabled = savedSound === "true";
  }

  applyTheme(state.theme);
  updateSoundIcon();
  calculateStats();
}

function saveState() {
  localStorage.setItem("cs_quiz_answers", JSON.stringify(state.answers));
  localStorage.setItem("cs_quiz_theme", state.theme);
  localStorage.setItem("cs_quiz_sound", state.soundEnabled.toString());
}

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.innerHTML = theme === "dark" ? "☀️" : "🌙";
    themeBtn.title = theme === "dark" ? "التبديل إلى الوضع الفاتح" : "التبديل إلى الوضع الليلي";
  }
}

function updateSoundIcon() {
  const soundBtn = document.getElementById("soundToggleBtn");
  if (soundBtn) {
    soundBtn.innerHTML = state.soundEnabled ? "🔊" : "🔇";
    soundBtn.title = state.soundEnabled ? "كتم الصوت" : "تشغيل الصوت";
  }
}

function calculateStats() {
  let correct = 0;
  let wrong = 0;
  const answeredIds = Object.keys(state.answers);

  answeredIds.forEach(id => {
    if (state.answers[id].isCorrect) {
      correct++;
    } else {
      wrong++;
    }
  });

  state.stats.total = answeredIds.length;
  state.stats.correct = correct;
  state.stats.wrong = wrong;

  const totalQuestions = questionsData.length;
  const pct = state.stats.total > 0 ? Math.round((correct / state.stats.total) * 100) : 0;
  const progressPct = Math.round((state.stats.total / totalQuestions) * 100);

  // Update DOM elements
  document.getElementById("statTotal").textContent = `${state.stats.total} / ${totalQuestions}`;
  document.getElementById("statCorrect").textContent = correct;
  document.getElementById("statWrong").textContent = wrong;
  document.getElementById("statScorePct").textContent = `${pct}%`;
  document.getElementById("statStreak").textContent = state.stats.streak;

  const progressFill = document.getElementById("progressFill");
  if (progressFill) {
    progressFill.style.width = `${progressPct}%`;
  }
  const progressText = document.getElementById("progressText");
  if (progressText) {
    progressText.textContent = `مستوى الإنجاز: ${state.stats.total} من ${totalQuestions} (${progressPct}%)`;
  }

  // Update Category Badge Counts
  updateCategoryCounts();
}

function updateCategoryCounts() {
  const tabs = document.querySelectorAll(".category-tabs .tab-btn");
  tabs.forEach(tab => {
    const cat = tab.getAttribute("data-category");
    let count = 0;
    if (cat === "all") {
      count = questionsData.length;
    } else {
      count = questionsData.filter(q => q.category === cat).length;
    }
    const countBadge = tab.querySelector(".tab-count");
    if (countBadge) countBadge.textContent = count;
  });
}

// User Answer Event Handlers
function handleAnswer(questionId, userAnswer, isCorrect) {
  state.answers[questionId] = {
    userAnswer,
    isCorrect,
    answeredAt: Date.now()
  };

  if (isCorrect) {
    state.stats.streak++;
    sfx.playCorrect();
  } else {
    state.stats.streak = 0;
    sfx.playWrong();
  }

  saveState();
  calculateStats();
  renderSingleCard(questionId);
}

function resetAllProgress() {
  if (confirm("هل أنت متأكد من تصفير جميع إجاباتك وإعادة البدء من جديد؟")) {
    state.answers = {};
    state.stats.streak = 0;
    saveState();
    calculateStats();
    renderQuestions();
  }
}

// Rendering Logic
function getFilteredQuestions() {
  return questionsData.filter(q => {
    // Category match
    const matchesCategory = state.currentCategory === "all" || q.category === state.currentCategory;

    // Search query match
    const qText = `${q.title} ${q.text} ${q.textAr} ${q.source}`.toLowerCase();
    const matchesSearch = !state.searchQuery || qText.includes(state.searchQuery.toLowerCase());

    // Mistakes only filter
    const ans = state.answers[q.id];
    const matchesMistakes = !state.showMistakesOnly || (ans && !ans.isCorrect);

    return matchesCategory && matchesSearch && matchesMistakes;
  });
}

function renderQuestions() {
  const listEl = document.getElementById("questionsList");
  if (!listEl) return;

  const filtered = getFilteredQuestions();

  if (filtered.length === 0) {
    listEl.innerHTML = `
      <div class="empty-state">
        <div style="font-size: 3rem; margin-bottom: 1rem;">🔍</div>
        <h3>لا توجد أسئلة مطابقة للبحث أو التصنيف المحدد</h3>
        <p style="color: var(--text-muted); margin-top: 0.5rem;">
          ${state.showMistakesOnly ? 'رائع! لا توجد أسئلة أخطأت فيها في هذا القسم 🎉' : 'جرب تغيير شروط البحث أو التصفية.'}
        </p>
      </div>
    `;
    return;
  }

  listEl.innerHTML = filtered.map(q => renderQuestionCardHTML(q)).join("");
  attachCardEventListeners();
}

function renderSingleCard(questionId) {
  const cardEl = document.getElementById(`card-${questionId}`);
  if (!cardEl) return;

  const q = questionsData.find(item => item.id === questionId);
  if (!q) return;

  const temp = document.createElement("div");
  temp.innerHTML = renderQuestionCardHTML(q);
  const newCard = temp.firstElementChild;

  cardEl.replaceWith(newCard);
  attachCardEventListenersFor(questionId);
}

function renderQuestionCardHTML(q) {
  const answerInfo = state.answers[q.id];
  const isAnswered = !!answerInfo;
  const isCorrect = isAnswered && answerInfo.isCorrect;

  let cardStatusClass = "";
  if (isAnswered) {
    cardStatusClass = isCorrect ? "answered-correct" : "answered-wrong";
  }

  return `
    <div class="question-card ${cardStatusClass}" id="card-${q.id}">
      <div class="q-meta">
        <span class="q-badge">🏷️ ${q.categoryName}</span>
        <span class="q-source">📍 ${q.source}</span>
      </div>

      <h3 class="q-title">${q.title}</h3>
      <p class="q-text-en">${q.text}</p>
      <p class="q-text-ar">${q.textAr}</p>

      ${q.codeSnippet ? `
        <div class="code-box">
          <span class="code-tag">C++ Code</span>
          <pre><code>${escapeHTML(q.codeSnippet)}</code></pre>
        </div>
      ` : ''}

      ${renderQuestionActionArea(q, answerInfo)}

      ${isAnswered ? renderFeedbackArea(q, answerInfo) : ''}
    </div>
  `;
}

function renderQuestionActionArea(q, answerInfo) {
  // 1. Boolean (True/False)
  if (q.type === "boolean") {
    const userAnswer = answerInfo ? answerInfo.userAnswer : null;
    const isAnswered = answerInfo !== undefined;

    let trueClass = "";
    let falseClass = "";

    if (isAnswered) {
      if (userAnswer === true) {
        trueClass = answerInfo.isCorrect ? "selected-correct" : "selected-wrong";
      }
      if (userAnswer === false) {
        falseClass = answerInfo.isCorrect ? "selected-correct" : "selected-wrong";
      }

      // Highlight the correct answer if user answered wrong
      if (!answerInfo.isCorrect) {
        if (q.correctAnswer === true) trueClass += " show-correct";
        if (q.correctAnswer === false) falseClass += " show-correct";
      }
    }

    return `
      <div class="tf-actions">
        <button class="tf-btn ${trueClass}" data-action="answer-tf" data-qid="${q.id}" data-val="true" ${isAnswered ? 'disabled' : ''}>
          <span>✅ True (صحيح)</span>
        </button>
        <button class="tf-btn ${falseClass}" data-action="answer-tf" data-qid="${q.id}" data-val="false" ${isAnswered ? 'disabled' : ''}>
          <span>❌ False (خطأ)</span>
        </button>
      </div>
      ${isAnswered ? '<div style="margin-top: 0.6rem; font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;"><span>🔒</span> تم تسجيل إجابتك وإقفال السؤال (لا يمكن تعديل الاختيار).</div>' : ''}
    `;
  }

  // 2. MCQ
  if (q.type === "mcq") {
    const userAnswer = answerInfo ? answerInfo.userAnswer : null;
    const isAnswered = answerInfo !== undefined;

    return `
      <div class="mcq-options">
        ${q.options.map(opt => {
          let optClass = "";
          if (isAnswered) {
            if (userAnswer === opt.id) {
              optClass = answerInfo.isCorrect ? "selected-correct" : "selected-wrong";
            }
            if (!answerInfo.isCorrect && opt.id === q.correctAnswer) {
              optClass = "show-correct";
            }
          }
          return `
            <button class="mcq-option-btn ${optClass}" data-action="answer-mcq" data-qid="${q.id}" data-opt="${opt.id}" ${isAnswered ? 'disabled' : ''}>
              <span>${escapeHTML(opt.text)}</span>
              ${isAnswered && opt.id === q.correctAnswer ? '<span style="color: var(--success); font-weight: bold;">(الإجابة الصحيحة)</span>' : ''}
              ${isAnswered && userAnswer === opt.id && !answerInfo.isCorrect ? '<span style="color: var(--danger); font-weight: bold;">(إجابتك ❌)</span>' : ''}
            </button>
          `;
        }).join("")}
      </div>
      ${isAnswered ? '<div style="margin-top: 0.6rem; font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;"><span>🔒</span> تم تسجيل إجابتك وإقفال السؤال (لا يمكن تعديل الاختيار).</div>' : ''}
    `;
  }

  // 3. Number Systems / Multi-input Calculator
  if (q.inputs) {
    const isAnswered = answerInfo !== undefined;
    return `
      <div class="calc-inputs-grid">
        ${q.inputs.map((inp, idx) => {
          const val = answerInfo?.userAnswer?.[idx] || "";
          const isFieldCorrect = isAnswered && normalizeStr(val) === normalizeStr(inp.expected);
          const inputStatus = isAnswered ? (isFieldCorrect ? "is-correct" : "is-wrong") : "";

          return `
            <div class="calc-input-group">
              <label>${inp.label} <small style="color: var(--primary-light);">(${inp.hint})</small></label>
              <input type="text" 
                     id="input-${q.id}-${idx}" 
                     class="${inputStatus}" 
                     placeholder="المتوقع: ${isAnswered ? inp.expected : 'اكتب إجابتك هنا'}" 
                     value="${val}"
                     ${isAnswered ? 'disabled readonly' : ''}>
              ${isAnswered && !isFieldCorrect ? `
                <small style="color: var(--danger); font-family: monospace; font-size: 0.85rem;">
                  الصحيح: <strong>${inp.expected}</strong>
                </small>
              ` : ''}
            </div>
          `;
        }).join("")}
      </div>
      <div class="action-row">
        <button class="btn-primary" data-action="check-inputs" data-qid="${q.id}" ${isAnswered ? 'disabled style="opacity: 0.6; cursor: not-allowed;"' : ''}>
          <span>${isAnswered ? '🔒 تم إرسال الإجابة وقفل السؤال' : '🔍 تحقق من صحة إجاباتي'}</span>
        </button>
      </div>
    `;
  }

  // 4. Interactive Fix (Identify & Correct Code Errors)
  if (q.type === "interactive_fix") {
    const isAnswered = answerInfo !== undefined;
    const userCode = answerInfo ? answerInfo.userAnswer : "";
    const inputStatus = isAnswered ? (answerInfo.isCorrect ? "is-correct" : "is-wrong") : "";

    return `
      <div class="code-fix-editor-container">
        ${q.hint ? `
          <div class="code-hint-box">
            💡 <strong>تلميح:</strong> ${escapeHTML(q.hint)}
          </div>
        ` : ''}
        <label style="font-size: 0.85rem; font-weight: 600; color: var(--text-muted); display: block;">
          اكتب الكود المصحح بنفسك هنا (سيتم فحصه برمجياً فور إرساله):
        </label>
        <textarea class="code-fix-input ${inputStatus}" 
                  id="code-fix-input-${q.id}" 
                  placeholder="مثال: اكتب السطر بعد التصحيح كاملاً..." 
                  ${isAnswered ? 'disabled readonly' : ''}>${escapeHTML(userCode)}</textarea>
        <div class="action-row">
          <button class="btn-primary" data-action="check-code-fix" data-qid="${q.id}" ${isAnswered ? 'disabled style="opacity: 0.6; cursor: not-allowed;"' : ''}>
            <span>${isAnswered ? '🔒 تم إرسال وفحص الكود' : '🚀 فحص تصحيحي للكود'}</span>
          </button>
        </div>
        ${isAnswered ? '<div style="margin-top: 0.4rem; font-size: 0.8rem; color: var(--text-muted); display: flex; align-items: center; gap: 0.3rem;"><span>🔒</span> تم تسجيل وفحص إجابتك وقفل السؤال (لا يمكن تعديل الكود بعد النتيجة).</div>' : ''}
      </div>
    `;
  }

  // 5. Conceptual Flowcharts
  if (q.type === "conceptual_flow") {
    return `
      <div class="flowchart-diagram">
        ${q.flowchartSteps.map((step, idx) => {
          let shapeClass = "flow-rect";
          if (step.shape.includes("Oval")) shapeClass = "flow-oval";
          if (step.shape.includes("Diamond")) shapeClass = "flow-diamond";
          if (step.shape.includes("Parallelogram")) shapeClass = "flow-parallelogram";

          return `
            <div class="flow-step ${shapeClass}">${escapeHTML(step.text)}</div>
            ${idx < q.flowchartSteps.length - 1 ? '<div class="flow-arrow">↓</div>' : ''}
          `;
        }).join("")}
      </div>

      <div style="margin-top: 1rem;">
        <button class="btn-primary" data-action="toggle-pseudo" data-qid="${q.id}">
          <span>📜 عرض الكود الزائف (Pseudocode) والخوارزمية</span>
        </button>
      </div>
    `;
  }

  // 6. Theory & Definitions Reveal
  if (q.type === "theory_reveal") {
    return `
      <div style="margin: 1rem 0;">
        <button class="btn-primary" data-action="reveal-theory" data-qid="${q.id}">
          <span>📖 إظهار الإجابة النموذجية والنقاط الأساسية</span>
        </button>
      </div>
    `;
  }

  // 7. Essay & Detailed Conceptual Questions
  if (q.type === "essay") {
    const isAnswered = answerInfo !== undefined;
    const draftText = answerInfo?.draftText || "";
    return `
      <div class="essay-container">
        ${q.questionDetails ? `
          <div class="essay-prompt-box">
            💡 <strong>إرشادات السؤال:</strong> ${escapeHTML(q.questionDetails)}
          </div>
        ` : ''}
        <textarea class="essay-textarea" 
                  id="essay-draft-${q.id}" 
                  placeholder="اكتب إجابتك أو مسودتك هنا للتدريب الذاتي ومقارنتها بالإجابة النموذجية...">${escapeHTML(draftText)}</textarea>
        <div class="action-row">
          <button class="btn-primary" data-action="reveal-essay" data-qid="${q.id}">
            <span>${isAnswered ? '🔄 تحديث الإجابة النموذجية ومعايير التصحيح' : '💡 اعرض نموذج الإجابة ومعايير التصحيح الذاتي'}</span>
          </button>
        </div>
      </div>
    `;
  }

  return "";
}

function renderFeedbackArea(q, answerInfo) {
  const isCorrect = answerInfo.isCorrect;
  const statusClass = isCorrect ? "correct" : "wrong";
  let statusIcon = isCorrect ? "✅ إجابة صحيحة! أحسنت 🌟" : "❌ إجابة غير صحيحة";

  if (q.type === "interactive_fix") {
    statusIcon = isCorrect 
      ? "✅ أحسنت! تصحيحك للكود دقيق وسليم برمجياً 100% 🌟" 
      : "❌ تصحيح الكود غير دقيق، راجع الأخطاء والحل النموذجي أدناه";
  }

  let specificDetails = "";

  if (q.type === "interactive_fix" && answerInfo.userAnswer) {
    specificDetails += `
      <div style="margin-bottom: 0.75rem;">
        <span style="font-size: 0.85rem; color: var(--text-muted);">الكود الذي كتبته أنت:</span>
        <pre style="background: #090d16; padding: 0.6rem 0.8rem; border-radius: 6px; font-size: 0.9rem; color: ${isCorrect ? '#a7f3d0' : '#fca5a5'}; margin-top: 0.2rem;"><code>${escapeHTML(answerInfo.userAnswer)}</code></pre>
      </div>
    `;
  }

  if (q.explanation) {
    specificDetails += `<p>${q.explanation}</p>`;
  }

  if (q.details) {
    specificDetails += `<div class="feedback-details">💡 <strong>قاعدة منهجية:</strong> ${q.details}</div>`;
  }

  if (q.stepByStep) {
    specificDetails += `
      <div class="steps-card">
        <div style="color: var(--primary-light); font-weight: 700; margin-bottom: 0.5rem;">📝 خطوات الحل بالتفصيل:</div>
        <pre>${escapeHTML(q.stepByStep)}</pre>
      </div>
    `;
  }

  if (q.identifiedErrors) {
    specificDetails += `
      <div class="steps-card">
        <div style="color: #ef4444; font-weight: 700; margin-bottom: 0.5rem;">🚨 الأخطاء المحددة في الكود:</div>
        <ul style="padding-right: 1.2rem; color: #f87171; line-height: 1.8;">
          ${q.identifiedErrors.map(err => `<li>${err}</li>`).join("")}
        </ul>
        <div style="color: #10b981; font-weight: 700; margin-top: 0.75rem; margin-bottom: 0.3rem;">✨ الكود بعد التصحيح:</div>
        <pre><code style="color: #a7f3d0;">${escapeHTML(q.correctCode)}</code></pre>
      </div>
    `;
  }

  if (q.modelAnswerAr) {
    specificDetails += `
      <div class="steps-card">
        <div style="color: #10b981; font-weight: 700; margin-bottom: 0.5rem;">📚 الإجابة النموذجية:</div>
        <p style="white-space: pre-line; color: #f8fafc;">${q.modelAnswerAr}</p>
        <div style="margin-top: 0.75rem; color: #94a3b8; font-size: 0.9rem;">
          <strong>Model English Answer:</strong>
          <p style="direction: ltr; text-align: left; font-family: sans-serif; color: #e2e8f0; margin-top: 0.3rem;">${q.modelAnswer}</p>
        </div>
      </div>
    `;
  }

  if (q.pseudocode) {
    specificDetails += `
      <div class="steps-card">
        <div style="color: #38bdf8; font-weight: 700; margin-bottom: 0.5rem;">📜 الخوارزمية (Pseudocode):</div>
        <pre>${escapeHTML(q.pseudocode)}</pre>
      </div>
    `;
  }

  if (q.type === "essay" && q.rubricChecklist) {
    specificDetails += `
      <div class="rubric-box">
        <div class="rubric-title">🎯 معايير التقييم الذاتي (Rubric Checklist):</div>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.75rem;">
          راجع إجابتك وضع علامة على النقاط التي ذكرتها بنجاح:
        </p>
        <ul class="rubric-list">
          ${q.rubricChecklist.map((item, idx) => `
            <li class="rubric-item">
              <input type="checkbox" class="rubric-checkbox" id="rubric-${q.id}-${idx}">
              <label for="rubric-${q.id}-${idx}">${escapeHTML(item)}</label>
            </li>
          `).join("")}
        </ul>
        <div class="self-assessment-row">
          <button class="self-grade-btn perfect" data-action="self-grade" data-qid="${q.id}" data-grade="perfect">
            <span>✅ إجابتي كاملة وشاملة (+100%)</span>
          </button>
          <button class="self-grade-btn partial" data-action="self-grade" data-qid="${q.id}" data-grade="partial">
            <span>⚠️ إجابتي مقبولة (ذكرت معظم النقاط)</span>
          </button>
          <button class="self-grade-btn retry" data-action="self-grade" data-qid="${q.id}" data-grade="retry">
            <span>❌ أحتاج مراجعتها مجدداً</span>
          </button>
        </div>
      </div>
    `;
  }

  return `
    <div class="feedback-box ${statusClass}">
      <div class="feedback-header">
        <span>${statusIcon}</span>
      </div>
      <div class="feedback-content">
        ${specificDetails}
      </div>
    </div>
  `;
}

// Event Delegation & Listeners
function attachCardEventListeners() {
  const container = document.getElementById("questionsList");
  if (!container) return;

  container.onclick = function (e) {
    const btn = e.target.closest("button");
    if (!btn) return;

    const action = btn.getAttribute("data-action");
    const qid = btn.getAttribute("data-qid");
    if (!action || !qid) return;

    const q = questionsData.find(item => item.id === qid);
    if (!q) return;

    // Lock check: if question is already answered, prevent changing answer
    if ((action === "answer-tf" || action === "answer-mcq" || action === "check-inputs" || action === "check-code-fix") && state.answers[qid]) {
      return;
    }

    if (action === "answer-tf") {
      const chosenVal = btn.getAttribute("data-val") === "true";
      const isCorrect = chosenVal === q.correctAnswer;
      handleAnswer(qid, chosenVal, isCorrect);
    } 
    else if (action === "answer-mcq") {
      const chosenOpt = btn.getAttribute("data-opt");
      const isCorrect = chosenOpt === q.correctAnswer;
      handleAnswer(qid, chosenOpt, isCorrect);
    }
    else if (action === "check-inputs") {
      const userInputs = [];
      let allCorrect = true;

      q.inputs.forEach((inp, idx) => {
        const inputElem = document.getElementById(`input-${qid}-${idx}`);
        const userVal = inputElem ? inputElem.value.trim() : "";
        userInputs.push(userVal);

        if (normalizeStr(userVal) !== normalizeStr(inp.expected)) {
          allCorrect = false;
        }
      });

      handleAnswer(qid, userInputs, allCorrect);
    }
    else if (action === "check-code-fix") {
      const inputElem = document.getElementById(`code-fix-input-${qid}`);
      const userCode = inputElem ? inputElem.value.trim() : "";
      if (!userCode) {
        alert("الرجاء كتابة الكود المصحح في المربع أولاً قبل الضغط على زر الفحص!");
        return;
      }
      const isCorrect = validateUserCodeFix(qid, userCode);
      handleAnswer(qid, userCode, isCorrect);
    }
    else if (action === "reveal-fix") {
      handleAnswer(qid, "reviewed_fix", true);
    }
    else if (action === "toggle-pseudo") {
      handleAnswer(qid, "reviewed_flow", true);
    }
    else if (action === "reveal-theory") {
      handleAnswer(qid, "reviewed_theory", true);
    }
    else if (action === "reveal-essay") {
      const draftEl = document.getElementById(`essay-draft-${qid}`);
      const draftVal = draftEl ? draftEl.value : "";
      state.answers[qid] = {
        userAnswer: "drafted",
        draftText: draftVal,
        isCorrect: true,
        answeredAt: Date.now()
      };
      saveState();
      calculateStats();
      renderSingleCard(qid);
    }
    else if (action === "self-grade") {
      const grade = btn.getAttribute("data-grade");
      const isCorrect = grade === "perfect" || grade === "partial";
      const draftEl = document.getElementById(`essay-draft-${qid}`);
      const draftVal = draftEl ? draftEl.value : (state.answers[qid]?.draftText || "");
      state.answers[qid] = {
        userAnswer: grade,
        draftText: draftVal,
        isCorrect: isCorrect,
        answeredAt: Date.now()
      };
      if (isCorrect) {
        state.stats.streak++;
        sfx.playCorrect();
      } else {
        state.stats.streak = 0;
        sfx.playWrong();
      }
      saveState();
      calculateStats();
      renderSingleCard(qid);
    }
  };
}

function attachCardEventListenersFor(qid) {
  // delegation handles everything
}

// Global UI listeners
function initGlobalListeners() {
  // Theme Toggle
  const themeBtn = document.getElementById("themeToggleBtn");
  if (themeBtn) {
    themeBtn.onclick = () => {
      state.theme = state.theme === "dark" ? "light" : "dark";
      applyTheme(state.theme);
      saveState();
    };
  }

  // Sound Toggle
  const soundBtn = document.getElementById("soundToggleBtn");
  if (soundBtn) {
    soundBtn.onclick = () => {
      state.soundEnabled = !state.soundEnabled;
      updateSoundIcon();
      saveState();
    };
  }

  // Reset Progress
  const resetBtn = document.getElementById("resetAllBtn");
  if (resetBtn) {
    resetBtn.onclick = resetAllProgress;
  }

  // Mistakes Only Filter
  const mistakesBtn = document.getElementById("mistakesOnlyBtn");
  if (mistakesBtn) {
    mistakesBtn.onclick = () => {
      state.showMistakesOnly = !state.showMistakesOnly;
      mistakesBtn.classList.toggle("active-filter", state.showMistakesOnly);
      mistakesBtn.innerHTML = state.showMistakesOnly 
        ? "❌ الأخطاء فقط (مفعل)" 
        : "🎯 مراجعة الأخطاء فقط";
      renderQuestions();
    };
  }

  // Search Input
  const searchInput = document.getElementById("searchQuestionsInput");
  if (searchInput) {
    searchInput.oninput = (e) => {
      state.searchQuery = e.target.value.trim();
      renderQuestions();
    };
  }

  // Category Tabs
  const tabButtons = document.querySelectorAll(".category-tabs .tab-btn");
  tabButtons.forEach(btn => {
    btn.onclick = () => {
      tabButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      state.currentCategory = btn.getAttribute("data-category");
      renderQuestions();
    };
  });
}

// Intelligent C++ Code Correction Validator
function validateUserCodeFix(qid, rawCode) {
  if (!rawCode) return false;
  const code = rawCode.trim();

  if (qid === "err_1") {
    // Original: cout >> count >> '/n'
    // Requirements: uses cout, uses <<, no >>, outputs count, newline character/endl, ends with semicolon ;
    const hasCout = /\bcout\b/.test(code);
    const noExtract = !/>>/.test(code);
    const hasInsert = /<</.test(code);
    const hasCount = /\bcount\b/.test(code);
    const hasNewline = /('\\n'|"\n"|\bendl\b|\bstd::endl\b)/.test(code);
    const noWrongSlash = !/('\/n'|"\/n")/.test(code);
    const hasSemi = /;\s*$/.test(code);
    return hasCout && noExtract && hasInsert && hasCount && hasNewline && noWrongSlash && hasSemi;
  }

  if (qid === "err_2") {
    // Original: int double = 44;
    // Requirements: must NOT use 'double' as variable identifier.
    // Must declare variable of valid type and assign 44 (or 44.0) with semicolon.
    const hasReservedIdentifier = /\b(?:int|double|float|long|short|auto)\s+double\s*=/i.test(code);
    const match = code.match(/\b(int|double|float|long|auto)\s+([a-zA-Z_][a-zA-Z0-9_]*)\s*=\s*44(?:\.0*)?\s*;/);
    if (!match || hasReservedIdentifier) return false;
    const varName = match[2];
    const reservedKeywords = ["double", "int", "float", "char", "bool", "void", "return", "if", "else", "switch", "case", "while", "for", "do"];
    return !reservedKeywords.includes(varName);
  }

  if (qid === "err_3") {
    // Original: #include <iostrem> \n Using namespace std;
    const norm = code.replace(/\r?\n/g, " ");
    const hasInclude = /#include\s*<\s*iostream\s*>/.test(norm);
    const hasNamespace = /\busing\s+namespace\s+std\s*;/.test(norm);
    return hasInclude && hasNamespace;
  }

  if (qid === "err_4") {
    // Original: cin << number
    const hasCin = /\bcin\b/.test(code);
    const hasExtract = />>/.test(code);
    const noInsert = !/<</.test(code);
    const hasNumber = /\bnumber\b/.test(code);
    const hasSemi = /;\s*$/.test(code);
    return hasCin && hasExtract && noInsert && hasNumber && hasSemi;
  }

  if (qid === "err_5") {
    // Original: if (score = 100);
    const hasIf = /\bif\s*\(\s*score\s*==\s*100\s*\)/.test(code);
    const noSemiAfterParen = !/\bif\s*\([^)]*\)\s*;/.test(code);
    return hasIf && noSemiAfterParen;
  }

  return false;
}

// String Helper for matching binary/hex answers
function normalizeStr(str) {
  if (!str) return "";
  return str.toString().trim().toUpperCase().replace(/\s+/g, "");
}

function escapeHTML(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Initial Boot
document.addEventListener("DOMContentLoaded", () => {
  loadSavedState();
  initGlobalListeners();
  renderQuestions();
});
