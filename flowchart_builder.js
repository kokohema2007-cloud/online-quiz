// =========================================================================
// 📐 INTERACTIVE FLOWCHART BUILDER (محرر خرائط التدفق التفاعلي بالسحب والإفلات)
// يتيح للطالب سحب الأشكال الهندسية القياسية وكتابة الأوامر بداخلها
// مطابقة 100% للسلايد 5 و 6 و 8 وورقة الامتحان (س3)
// =========================================================================

// Definition of standard shapes from the uploaded lecture slide
const FLOWCHART_SHAPES_DEF = [
  {
    type: "Oval",
    nameAr: "شكل بيضاوي (Oval)",
    symbolText: "(   Start / End   )",
    usage: "Denotes the beginning or end of the program (بداية أو نهاية البرنامج)",
    badgeColor: "#10b981",
    cssClass: "shape-oval"
  },
  {
    type: "Parallelogram",
    nameAr: "متوازي أضلاع (Parallelogram)",
    symbolText: "[/   Input / Output   /]",
    usage: "Denotes an input or output operation (عمليات الإدخال أو الإخراج: Read, Print)",
    badgeColor: "#3b82f6",
    cssClass: "shape-parallelogram"
  },
  {
    type: "Rectangle",
    nameAr: "مستطيل (Rectangle)",
    symbolText: "[   Process / Calculation   ]",
    usage: "Denotes a process to be carried out (العمليات الحسابية والمعالجة: sum=0, i=i+1)",
    badgeColor: "#8b5cf6",
    cssClass: "shape-rectangle"
  },
  {
    type: "Diamond",
    nameAr: "معين (Diamond)",
    symbolText: "<   Decision / Condition   >",
    usage: "Denotes a decision or branch (اتخاذ القرار وفحص الشروط: If / Else / While)",
    badgeColor: "#f59e0b",
    cssClass: "shape-diamond"
  }
];

// Helper to get or initialize flowchart state for a question
function getFlowchartUserState(qid) {
  if (!state.flowchartUserSlots) {
    state.flowchartUserSlots = {};
    const saved = localStorage.getItem("cs_quiz_flowcharts");
    if (saved) {
      try { state.flowchartUserSlots = JSON.parse(saved); } catch (e) {}
    }
  }
  if (!state.flowchartUserSlots[qid]) {
    state.flowchartUserSlots[qid] = { slots: {}, validationResult: null };
  }
  return state.flowchartUserSlots[qid];
}

function saveFlowchartUserState() {
  if (state.flowchartUserSlots) {
    localStorage.setItem("cs_quiz_flowcharts", JSON.stringify(state.flowchartUserSlots));
  }
}

// Render the interactive Flowchart Builder UI inside the question card
function renderInteractiveFlowchartArea(q, answerInfo) {
  const userFlowState = getFlowchartUserState(q.id);
  const slots = q.interactiveSlots || [];
  const valResult = userFlowState.validationResult;
  const isAllCorrect = valResult && valResult.allCorrect;

  return `
    <div class="flow-builder-container" id="flow-builder-${q.id}">
      <!-- 1. Task Instructions & Shape Legend Palette -->
      <div class="flow-legend-card">
        <div class="flow-legend-header">
          <span class="legend-badge">🎨 صندوق الأشكال القياسية (اسحب أو انقر لوضع الشكل)</span>
          <span style="font-size: 0.8rem; color: var(--text-muted);">مطابق لمعيار السلايدز (Oval, Parallelogram, Rectangle, Diamond)</span>
        </div>
        <div class="flow-shapes-palette">
          ${FLOWCHART_SHAPES_DEF.map(sh => `
            <div class="flow-draggable-shape ${sh.cssClass}" 
                 draggable="true" 
                 data-shape="${sh.type}"
                 data-qid="${q.id}"
                 title="${sh.usage}">
              <div class="shape-icon-preview">${sh.symbolText}</div>
              <div class="shape-name-tag">${sh.nameAr}</div>
              <div class="shape-usage-hint">${sh.usage.split('(')[0]}</div>
            </div>
          `).join('')}
        </div>
        <div class="flow-drag-hint">
          💡 <strong>طريقة الاستخدام:</strong> اسحب أي شكل من الصندوق أعلاه وأفلته في الخطوة المطلوبة، أو <em>انقر على الشكل</em> لإضافته في الخطوة الخالية، ثم <em>اكتب الأمر المطلوب داخل الشكل</em>!
        </div>
      </div>

      <!-- 2. Workflow Slots Drop Canvas -->
      <div class="flow-canvas-wrapper">
        <div class="flow-canvas-header">
          <span>📐 مخطط خريطة التدفق المطلوب بناؤها:</span>
          ${isAllCorrect ? '<span class="status-pill green">✅ خريطة تدفق مكتملة وصحيحة 100%!</span>' : ''}
        </div>

        <div class="flow-slots-list">
          ${slots.map((slot, idx) => {
            const userSlotData = userFlowState.slots[idx] || null;
            const placedShape = userSlotData ? userSlotData.shape : null;
            const userText = userSlotData ? userSlotData.text : "";
            const slotValidation = valResult ? valResult.slots[idx] : null;

            let slotStatusClass = "";
            let feedbackMsg = "";

            if (slotValidation) {
              if (slotValidation.shapeCorrect && slotValidation.textCorrect) {
                slotStatusClass = "slot-correct";
                feedbackMsg = '<div class="slot-feedback success">✅ الشكل والأمر صحيح ودقيق!</div>';
              } else if (!slotValidation.shapeCorrect) {
                slotStatusClass = "slot-wrong-shape";
                feedbackMsg = `<div class="slot-feedback error">❌ الشكل غير صحيح! ${slot.hint}</div>`;
              } else if (!slotValidation.textCorrect) {
                slotStatusClass = "slot-wrong-text";
                feedbackMsg = `<div class="slot-feedback warning">⚠️ الشكل صحيح، لكن النص غير مكتمل! المطلوب مثلاً: <strong>${escapeHTML(slot.modelText)}</strong></div>`;
              }
            }

            return `
              <div class="flow-slot-card ${slotStatusClass}" id="flow-slot-${q.id}-${idx}">
                <div class="flow-slot-meta">
                  <span class="slot-number-tag">الخطوة ${idx + 1}: ${escapeHTML(slot.label)}</span>
                  ${placedShape ? `
                    <button class="slot-clear-btn" data-action="clear-slot" data-qid="${q.id}" data-idx="${idx}" title="إزالة الشكل وإعادة الاختيار">✕ مسح الشكل</button>
                  ` : ''}
                </div>

                <!-- Drop Target Box -->
                <div class="flow-drop-zone ${placedShape ? 'has-shape ' + getShapeCssClass(placedShape) : 'is-empty'}"
                     data-qid="${q.id}"
                     data-slot-idx="${idx}">
                  
                  ${placedShape ? `
                    <div class="placed-shape-inner">
                      <div class="placed-shape-label">${getShapeArabicName(placedShape)}</div>
                      <input type="text" 
                             class="flow-shape-input" 
                             id="flow-input-${q.id}-${idx}" 
                             placeholder="اكتب الأمر أو العملية هنا (مثلاً: ${escapeHTML(slot.modelText)})..." 
                             value="${escapeHTML(userText)}"
                             data-qid="${q.id}"
                             data-idx="${idx}"
                             ${isAllCorrect ? 'readonly' : ''}>
                    </div>
                  ` : `
                    <div class="empty-drop-placeholder">
                      <span class="drop-icon">➕</span>
                      <span>اسحب الشكل المناسب هنا أو انقر عليه من صندوق الأشكال</span>
                    </div>
                  `}
                </div>

                ${feedbackMsg}

                <!-- Flow arrow to next slot -->
                ${idx < slots.length - 1 ? `
                  <div class="flow-connector-arrow">
                    <span class="arrow-symbol">↓</span>
                    ${slot.branchLabel ? `<span class="arrow-branch-label">${slot.branchLabel}</span>` : ''}
                  </div>
                ` : ''}
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3. Builder Action Buttons -->
      <div class="flow-builder-actions">
        <button class="btn-primary" data-action="check-flowchart" data-qid="${q.id}">
          <span>🚀 فحص وتصحيح خريطة التدفق الخاصة بي</span>
        </button>
        <button class="btn-secondary" data-action="reveal-model-flow" data-qid="${q.id}">
          <span>💡 إظهار الحل النموذجي التوضيحي</span>
        </button>
        <button class="btn-secondary" data-action="reset-flowchart-user" data-qid="${q.id}">
          <span>🔄 إعادة بناء الخريطة من الصفر</span>
        </button>
      </div>

      <!-- Hidden Collapsible: Model Solution Flowchart & Pseudocode -->
      <div class="flow-model-solution" id="flow-model-sol-${q.id}" style="display: none;">
        <div class="model-sol-header">
          <span>🌟 الحل النموذجي المكتمل وفق معايير الامتحان:</span>
        </div>
        <div class="model-steps-display">
          ${slots.map((s, i) => `
            <div class="model-step-row">
              <span class="model-step-badge ${getShapeCssClass(s.expectedShape)}">${s.expectedShape}</span>
              <div class="model-step-content">
                <strong>الخطوة ${i + 1}:</strong> ${escapeHTML(s.modelText)}
                <span class="model-step-hint">(${s.hint})</span>
              </div>
            </div>
            ${i < slots.length - 1 ? '<div class="model-step-arrow">↓</div>' : ''}
          `).join('')}
        </div>
        ${q.pseudocode ? `
          <div class="model-pseudo-box">
            <h4>📜 الكود الزائف (Pseudocode) المقابل:</h4>
            <pre><code>${escapeHTML(q.pseudocode)}</code></pre>
          </div>
        ` : ''}
        ${q.explanation ? `
          <div class="model-explanation-box">
            💡 <strong>شرح الخوارزمية:</strong> ${escapeHTML(q.explanation)}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

// Helpers for shape naming
function getShapeCssClass(shapeType) {
  if (shapeType === "Oval") return "shape-oval";
  if (shapeType === "Parallelogram") return "shape-parallelogram";
  if (shapeType === "Rectangle") return "shape-rectangle";
  if (shapeType === "Diamond") return "shape-diamond";
  return "shape-rectangle";
}

function getShapeArabicName(shapeType) {
  if (shapeType === "Oval") return "شكل بيضاوي (Oval)";
  if (shapeType === "Parallelogram") return "متوازي أضلاع (Parallelogram)";
  if (shapeType === "Rectangle") return "مستطيل (Rectangle)";
  if (shapeType === "Diamond") return "معين اتخاذ القرار (Diamond)";
  return shapeType;
}

// Event Attachments for Flowchart Interactive Elements
function attachFlowchartCardListeners(qid) {
  const container = document.getElementById(`flow-builder-${qid}`);
  if (!container) return;

  const q = questionsData.find(item => item.id === qid);
  if (!q) return;

  // 1. Setup HTML5 Drag & Drop on shapes
  const draggableShapes = container.querySelectorAll(".flow-draggable-shape");
  draggableShapes.forEach(shapeEl => {
    shapeEl.ondragstart = (e) => {
      const shapeType = shapeEl.getAttribute("data-shape");
      e.dataTransfer.setData("text/plain", shapeType);
      shapeEl.classList.add("dragging");
    };
    shapeEl.ondragend = () => {
      shapeEl.classList.remove("dragging");
    };

    // Click to place in first empty slot
    shapeEl.onclick = () => {
      const shapeType = shapeEl.getAttribute("data-shape");
      placeShapeInFirstEmptySlot(qid, shapeType);
    };
  });

  // 2. Setup Drop Zones
  const dropZones = container.querySelectorAll(".flow-drop-zone");
  dropZones.forEach(zone => {
    zone.ondragover = (e) => {
      e.preventDefault();
      zone.classList.add("drag-over");
    };
    zone.ondragleave = () => {
      zone.classList.remove("drag-over");
    };
    zone.ondrop = (e) => {
      e.preventDefault();
      zone.classList.remove("drag-over");
      const shapeType = e.dataTransfer.getData("text/plain");
      const slotIdx = parseInt(zone.getAttribute("data-slot-idx"), 10);
      if (shapeType && !isNaN(slotIdx)) {
        placeShapeInSlot(qid, slotIdx, shapeType);
      }
    };
  });

  // 3. Setup Input change listeners
  const shapeInputs = container.querySelectorAll(".flow-shape-input");
  shapeInputs.forEach(input => {
    input.oninput = () => {
      const idx = parseInt(input.getAttribute("data-idx"), 10);
      const userFlowState = getFlowchartUserState(qid);
      if (userFlowState.slots[idx]) {
        userFlowState.slots[idx].text = input.value;
        saveFlowchartUserState();
      }
    };
  });

  // 4. Clear Slot button
  container.querySelectorAll("[data-action='clear-slot']").forEach(btn => {
    btn.onclick = () => {
      const idx = parseInt(btn.getAttribute("data-idx"), 10);
      const userFlowState = getFlowchartUserState(qid);
      delete userFlowState.slots[idx];
      userFlowState.validationResult = null;
      saveFlowchartUserState();
      renderSingleCard(qid);
    };
  });

  // 5. Check Flowchart button
  const checkBtn = container.querySelector("[data-action='check-flowchart']");
  if (checkBtn) {
    checkBtn.onclick = () => {
      validateAndScoreFlowchart(q);
    };
  }

  // 6. Reveal Model Flowchart button
  const revealBtn = container.querySelector("[data-action='reveal-model-flow']");
  if (revealBtn) {
    revealBtn.onclick = () => {
      const solEl = document.getElementById(`flow-model-sol-${qid}`);
      if (solEl) {
        solEl.style.display = solEl.style.display === "none" ? "block" : "none";
      }
    };
  }

  // 7. Reset User Flowchart button
  const resetBtn = container.querySelector("[data-action='reset-flowchart-user']");
  if (resetBtn) {
    resetBtn.onclick = () => {
      if (confirm("هل تريد مسح الخريطة بالكامل وإعادة بنائها من البداية؟")) {
        const userFlowState = getFlowchartUserState(qid);
        userFlowState.slots = {};
        userFlowState.validationResult = null;
        saveFlowchartUserState();
        renderSingleCard(qid);
      }
    };
  }
}

// Logic: Place a shape in a specific slot
function placeShapeInSlot(qid, slotIdx, shapeType) {
  const userFlowState = getFlowchartUserState(qid);
  const existingText = userFlowState.slots[slotIdx]?.text || "";
  userFlowState.slots[slotIdx] = {
    shape: shapeType,
    text: existingText
  };
  userFlowState.validationResult = null;
  saveFlowchartUserState();
  renderSingleCard(qid);

  // Focus the input inside this newly placed shape
  setTimeout(() => {
    const inputEl = document.getElementById(`flow-input-${qid}-${slotIdx}`);
    if (inputEl) inputEl.focus();
  }, 50);
}

// Logic: Place in first empty slot
function placeShapeInFirstEmptySlot(qid, shapeType) {
  const q = questionsData.find(item => item.id === qid);
  if (!q || !q.interactiveSlots) return;

  const userFlowState = getFlowchartUserState(qid);
  let targetIdx = -1;

  for (let i = 0; i < q.interactiveSlots.length; i++) {
    if (!userFlowState.slots[i] || !userFlowState.slots[i].shape) {
      targetIdx = i;
      break;
    }
  }

  if (targetIdx !== -1) {
    placeShapeInSlot(qid, targetIdx, shapeType);
  } else {
    alert("جميع الخانات ممتلئة بأشكال حالياً! يمكنك مسح أي خانة لإعادة اختيار شكلها.");
  }
}

// Logic: Validate and Score the User's Flowchart
function validateAndScoreFlowchart(q) {
  const userFlowState = getFlowchartUserState(q.id);
  const slots = q.interactiveSlots || [];
  const results = {};
  let allCorrect = true;

  // Sync inputs from DOM first
  slots.forEach((s, idx) => {
    const inputEl = document.getElementById(`flow-input-${q.id}-${idx}`);
    if (inputEl && userFlowState.slots[idx]) {
      userFlowState.slots[idx].text = inputEl.value;
    }
  });

  slots.forEach((slot, idx) => {
    const userSlot = userFlowState.slots[idx];
    if (!userSlot || !userSlot.shape) {
      results[idx] = { shapeCorrect: false, textCorrect: false, missing: true };
      allCorrect = false;
      return;
    }

    const shapeCorrect = userSlot.shape.toLowerCase() === slot.expectedShape.toLowerCase();
    
    // Validate text: check if user wrote any of accepted keywords
    const userTextNorm = (userSlot.text || "").toLowerCase().trim();
    let textCorrect = false;

    if (slot.acceptedKeywords && slot.acceptedKeywords.length > 0) {
      textCorrect = slot.acceptedKeywords.some(kw => userTextNorm.includes(kw.toLowerCase()));
    } else {
      textCorrect = userTextNorm.length > 1; // fallback
    }

    results[idx] = { shapeCorrect, textCorrect };

    if (!shapeCorrect || !textCorrect) {
      allCorrect = false;
    }
  });

  userFlowState.validationResult = {
    allCorrect,
    slots: results
  };

  saveFlowchartUserState();

  // If all correct -> award score, play sound, and update quiz state
  if (allCorrect) {
    handleAnswer(q.id, "flowchart_built_perfect", true);
  } else {
    if (sfx) sfx.playWrongSound();
  }

  renderSingleCard(q.id);
}
