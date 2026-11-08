/**
 * number_converter.js
 * محاكي أنظمة العد التفاعلي المتبادل (Multi-Directional Live Converter & 2's Complement)
 * يدعم التحويل في كل الاتجاهات: عشري، ثنائي، ثماني، ست عشري، ومكمل أحادي وثنائي
 * يدعم الكسور بدقة مطابقة لجدول امتحان مبادئ الحاسوب وتوليد خطوات الحل الرياضية
 */

(function () {
  "use strict";

  // Elements cache
  let decInput, binInput, octInput, hexInput, c1Input, c2Input;
  let decWarn, binWarn, octWarn, hexWarn, c1Warn, c2Warn;
  let activeSourceBadge, stepsContainer, stepsList;

  // State
  let activeFieldId = null;

  function initConverter() {
    decInput = document.getElementById("liveDecInput");
    binInput = document.getElementById("liveBinInput");
    octInput = document.getElementById("liveOctInput");
    hexInput = document.getElementById("liveHexInput");
    c1Input = document.getElementById("liveC1Input");
    c2Input = document.getElementById("liveC2Input");

    decWarn = document.getElementById("liveDecWarn");
    binWarn = document.getElementById("liveBinWarn");
    octWarn = document.getElementById("liveOctWarn");
    hexWarn = document.getElementById("liveHexWarn");
    c1Warn = document.getElementById("liveC1Warn");
    c2Warn = document.getElementById("liveC2Warn");

    activeSourceBadge = document.getElementById("calcActiveSource");
    stepsContainer = document.getElementById("calcStepsContainer");
    stepsList = document.getElementById("calcStepsList");

    if (!decInput) return;

    // Attach input listeners
    decInput.addEventListener("input", () => handleInput("dec"));
    binInput.addEventListener("input", () => handleInput("bin"));
    octInput.addEventListener("input", () => handleInput("oct"));
    hexInput.addEventListener("input", () => handleInput("hex"));
    c1Input.addEventListener("input", () => handleInput("c1"));
    c2Input.addEventListener("input", () => handleInput("c2"));

    // Attach focus listeners for highlighting
    [
      { el: decInput, id: "dec", name: "العشري (Decimal - Base 10)" },
      { el: binInput, id: "bin", name: "الثنائي (Binary - Base 2)" },
      { el: octInput, id: "oct", name: "الثماني (Octal - Base 8)" },
      { el: hexInput, id: "hex", name: "الست عشري (Hex - Base 16)" },
      { el: c1Input, id: "c1", name: "المكمل الأحادي (1's Comp 8-bit)" },
      { el: c2Input, id: "c2", name: "المكمل الثنائي (2's Comp 8-bit)" }
    ].forEach(item => {
      if (!item.el) return;
      item.el.addEventListener("focus", () => {
        activeFieldId = item.id;
        highlightActiveField(item.id);
        if (activeSourceBadge) {
          activeSourceBadge.textContent = item.name;
        }
      });
      item.el.addEventListener("blur", () => {
        // keep highlight or clear if empty
      });
    });

    // Preset buttons
    document.querySelectorAll(".calc-preset-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const type = btn.getAttribute("data-type");
        const val = btn.getAttribute("data-value");
        loadPreset(type, val);
      });
    });

    // Reset button
    const resetBtn = document.getElementById("calcResetBtn");
    if (resetBtn) {
      resetBtn.addEventListener("click", clearAllFields);
    }

    // Toggle steps collapse
    const toggleStepsBtn = document.getElementById("calcToggleStepsBtn");
    if (toggleStepsBtn) {
      toggleStepsBtn.addEventListener("click", () => {
        if (!stepsContainer) return;
        const isHidden = stepsContainer.style.display === "none";
        stepsContainer.style.display = isHidden ? "block" : "none";
        toggleStepsBtn.textContent = isHidden ? "إخفاء الخطوات 🔼" : "عرض الخطوات التفصيلية 🔽";
      });
    }

    // Initial run with default value
    if (decInput.value) {
      handleInput("dec");
    }
  }

  function highlightActiveField(activeId) {
    document.querySelectorAll(".calc-input-group").forEach(group => {
      group.classList.remove("active-source");
    });
    const targetGroup = document.getElementById(`group-${activeId}`);
    if (targetGroup) {
      targetGroup.classList.add("active-source");
    }
  }

  function clearWarnings() {
    [decWarn, binWarn, octWarn, hexWarn, c1Warn, c2Warn].forEach(w => {
      if (w) w.textContent = "";
    });
  }

  function clearAllFields() {
    [decInput, binInput, octInput, hexInput, c1Input, c2Input].forEach(inp => {
      if (inp) inp.value = "";
    });
    clearWarnings();
    if (stepsList) stepsList.innerHTML = "<p style='color: var(--text-muted); font-size: 0.9rem;'>أدخل رقماً في أي خانة بالأعلى لمشاهدة خطوات التحويل الرياضية بالتفصيل.</p>";
    if (activeSourceBadge) activeSourceBadge.textContent = "في انتظار الإدخال...";
    document.querySelectorAll(".calc-input-group").forEach(group => {
      group.classList.remove("active-source");
    });
  }

  function loadPreset(type, value) {
    clearWarnings();
    activeFieldId = type;
    highlightActiveField(type);

    if (type === "dec") decInput.value = value;
    else if (type === "bin") binInput.value = value;
    else if (type === "oct") octInput.value = value;
    else if (type === "hex") hexInput.value = value;
    else if (type === "c1") c1Input.value = value;
    else if (type === "c2") c2Input.value = value;

    handleInput(type);
  }

  // Fractional conversion helper
  function decFractionToBase(fracVal, base, maxDigits = 8) {
    if (!fracVal || fracVal <= 0) return "";
    let res = "";
    let current = fracVal;
    for (let i = 0; i < maxDigits; i++) {
      current = current * base;
      const digit = Math.floor(current);
      res += digit.toString(base).toUpperCase();
      current = current - digit;
      if (Math.abs(current) < 1e-9) break;
    }
    return res;
  }

  // Master update function from Decimal Value
  function updateOutputsFromDecimal(decimalVal, isNegative = false, source = "dec") {
    const absVal = Math.abs(decimalVal);
    const intPart = Math.floor(absVal);
    const fracPart = parseFloat((absVal - intPart).toFixed(8));

    // Binary
    const binInt = intPart.toString(2);
    const binFrac = decFractionToBase(fracPart, 2);
    const binFull = (isNegative ? "-" : "") + binInt + (binFrac ? "." + binFrac : "");

    // Octal
    const octInt = intPart.toString(8);
    const octFrac = decFractionToBase(fracPart, 8);
    const octFull = (isNegative ? "-" : "") + octInt + (octFrac ? "." + octFrac : "");

    // Hexadecimal
    const hexInt = intPart.toString(16).toUpperCase();
    const hexFrac = decFractionToBase(fracPart, 16);
    const hexFull = (isNegative ? "-" : "") + hexInt + (hexFrac ? "." + hexFrac : "");

    // 8-bit complement (only for integers within -128 .. 127)
    let c1_8 = "N/A (كسر/خارج نطاق 8-bit)";
    let c2_8 = "N/A (كسر/خارج نطاق 8-bit)";

    if (fracPart === 0 && intPart <= 128) {
      const bin8 = intPart.toString(2).padStart(8, "0");
      if (isNegative) {
        // 1's comp
        let ones = "";
        for (let ch of bin8) ones += ch === "0" ? "1" : "0";
        c1_8 = ones;
        // 2's comp
        const twos = (parseInt(ones, 2) + 1) & 0xFF;
        c2_8 = twos.toString(2).padStart(8, "0");
      } else {
        c1_8 = bin8;
        c2_8 = bin8;
      }
    }

    // Update fields except the source that the user is currently typing in
    if (source !== "dec") {
      decInput.value = (isNegative ? "-" : "") + (fracPart > 0 ? (intPart + fracPart) : intPart);
    }
    if (source !== "bin") {
      binInput.value = binFull;
    }
    if (source !== "oct") {
      octInput.value = octFull;
    }
    if (source !== "hex") {
      hexInput.value = hexFull;
    }
    if (source !== "c1") {
      c1Input.value = c1_8;
    }
    if (source !== "c2") {
      c2Input.value = c2_8;
    }

    // Render Steps
    renderSteps(intPart, fracPart, isNegative, binFull, octFull, hexFull, c1_8, c2_8, source);
  }

  // Input router
  function handleInput(source) {
    clearWarnings();
    activeFieldId = source;
    highlightActiveField(source);

    if (source === "dec") {
      const raw = decInput.value.trim();
      if (!raw || raw === "-") {
        clearNonActive("dec");
        return;
      }
      const isNeg = raw.startsWith("-");
      const clean = isNeg ? raw.slice(1) : raw;
      if (!/^\d+(\.\d+)?$/.test(clean)) {
        if (decWarn) decWarn.textContent = "⚠️ أدخل أرقاماً عشرية صالحة (0-9) مع إمكانية علامة السالب والكسر.";
        return;
      }
      const val = parseFloat(clean);
      updateOutputsFromDecimal(val, isNeg, "dec");
    }

    else if (source === "bin") {
      const raw = binInput.value.trim();
      if (!raw || raw === "-") {
        clearNonActive("bin");
        return;
      }
      const isNeg = raw.startsWith("-");
      const clean = isNeg ? raw.slice(1) : raw;
      if (!/^[01]+(\.[01]+)?$/.test(clean)) {
        if (binWarn) binWarn.textContent = "⚠️ النظام الثنائي يقبل فقط الأرقام 0 و 1 والنقطة للكسر.";
        return;
      }
      const [intStr, fracStr] = clean.split(".");
      const intVal = parseInt(intStr, 2);
      let fracVal = 0;
      if (fracStr) {
        for (let i = 0; i < fracStr.length; i++) {
          if (fracStr[i] === "1") {
            fracVal += Math.pow(2, -(i + 1));
          }
        }
      }
      updateOutputsFromDecimal(intVal + fracVal, isNeg, "bin");
    }

    else if (source === "oct") {
      const raw = octInput.value.trim();
      if (!raw || raw === "-") {
        clearNonActive("oct");
        return;
      }
      const isNeg = raw.startsWith("-");
      const clean = isNeg ? raw.slice(1) : raw;
      if (!/^[0-7]+(\.[0-7]+)?$/.test(clean)) {
        if (octWarn) octWarn.textContent = "⚠️ النظام الثماني يقبل فقط الأرقام من 0 إلى 7.";
        return;
      }
      const [intStr, fracStr] = clean.split(".");
      const intVal = parseInt(intStr, 8);
      let fracVal = 0;
      if (fracStr) {
        for (let i = 0; i < fracStr.length; i++) {
          fracVal += parseInt(fracStr[i], 8) * Math.pow(8, -(i + 1));
        }
      }
      updateOutputsFromDecimal(intVal + fracVal, isNeg, "oct");
    }

    else if (source === "hex") {
      const raw = hexInput.value.trim();
      if (!raw || raw === "-") {
        clearNonActive("hex");
        return;
      }
      const isNeg = raw.startsWith("-");
      const clean = isNeg ? raw.slice(1) : raw;
      if (!/^[0-9a-fA-F]+(\.[0-9a-fA-F]+)?$/.test(clean)) {
        if (hexWarn) hexWarn.textContent = "⚠️ النظام الست عشري يقبل فقط 0-9 وحروف A-F.";
        return;
      }
      const [intStr, fracStr] = clean.split(".");
      const intVal = parseInt(intStr, 16);
      let fracVal = 0;
      if (fracStr) {
        for (let i = 0; i < fracStr.length; i++) {
          fracVal += parseInt(fracStr[i], 16) * Math.pow(16, -(i + 1));
        }
      }
      updateOutputsFromDecimal(intVal + fracVal, isNeg, "hex");
    }

    else if (source === "c1") {
      const raw = c1Input.value.trim();
      if (!raw) {
        clearNonActive("c1");
        return;
      }
      if (!/^[01]{8}$/.test(raw)) {
        if (c1Warn) c1Warn.textContent = "⚠️ أدخل سلسلة ثنائية مكونة من 8 بت بالضبط (مثلاً: 11110010).";
        return;
      }
      if (raw[0] === "1") {
        // Negative in 1's complement
        let inverted = "";
        for (let c of raw) inverted += c === "0" ? "1" : "0";
        const magnitude = parseInt(inverted, 2);
        updateOutputsFromDecimal(magnitude, true, "c1");
      } else {
        const val = parseInt(raw, 2);
        updateOutputsFromDecimal(val, false, "c1");
      }
    }

    else if (source === "c2") {
      const raw = c2Input.value.trim();
      if (!raw) {
        clearNonActive("c2");
        return;
      }
      if (!/^[01]{8}$/.test(raw)) {
        if (c2Warn) c2Warn.textContent = "⚠️ أدخل سلسلة ثنائية مكونة من 8 بت بالضبط (مثلاً: 11110011).";
        return;
      }
      const rawInt = parseInt(raw, 2);
      if (raw[0] === "1") {
        // Negative in 2's comp
        const decVal = rawInt - 256;
        updateOutputsFromDecimal(Math.abs(decVal), true, "c2");
      } else {
        updateOutputsFromDecimal(rawInt, false, "c2");
      }
    }
  }

  function clearNonActive(source) {
    if (source !== "dec") decInput.value = "";
    if (source !== "bin") binInput.value = "";
    if (source !== "oct") octInput.value = "";
    if (source !== "hex") hexInput.value = "";
    if (source !== "c1") c1Input.value = "";
    if (source !== "c2") c2Input.value = "";
    if (stepsList) stepsList.innerHTML = "<p style='color: var(--text-muted); font-size: 0.9rem;'>أدخل قيمة صالحة في الحقل النشط للمتابعة.</p>";
  }

  // Render mathematical steps
  function renderSteps(intPart, fracPart, isNegative, binFull, octFull, hexFull, c1_8, c2_8, source) {
    if (!stepsList) return;

    let html = "";

    // Header note
    html += `
      <div style="background: rgba(56, 189, 248, 0.1); border-right: 4px solid #38bdf8; padding: 0.75rem 1rem; border-radius: 6px; margin-bottom: 1rem; font-size: 0.88rem;">
        <strong>🎯 المصدر الذي أدخلته:</strong> [${source.toUpperCase()}] 
        | <strong>القيمة العشرية المكافئة:</strong> <span style="color:#38bdf8; font-family:'Fira Code'; font-weight:bold;">${isNegative ? '-' : ''}${intPart}${fracPart > 0 ? '.' + String(fracPart).split('.')[1] : ''}</span>
        ${isNegative ? ' | <strong>نوع الإشارة:</strong> سالب (Negative Signed)' : ' | <strong>نوع الإشارة:</strong> موجب (Positive)'}
      </div>
    `;

    // Integer conversion steps
    if (intPart > 0) {
      // Binary division
      let temp = intPart;
      let divBin = [];
      while (temp > 0) {
        const q = Math.floor(temp / 2);
        const r = temp % 2;
        divBin.push(`${temp} ÷ 2 = ${q} | الباقي [${r}]`);
        temp = q;
      }

      // Octal division
      temp = intPart;
      let divOct = [];
      while (temp > 0) {
        const q = Math.floor(temp / 8);
        const r = temp % 8;
        divOct.push(`${temp} ÷ 8 = ${q} | الباقي [${r}]`);
        temp = q;
      }

      // Hex division
      temp = intPart;
      const hexChars = {10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'};
      let divHex = [];
      while (temp > 0) {
        const q = Math.floor(temp / 16);
        const r = temp % 16;
        const rRep = r >= 10 ? `${r} (${hexChars[r]})` : `${r}`;
        divHex.push(`${temp} ÷ 16 = ${q} | الباقي [${rRep}]`);
        temp = q;
      }

      html += `
        <div class="calc-step-item">
          <h4>1️⃣ تحويل الجزء الصحيح (${intPart}) بالقسمة المتتالية (Double-Dabble)</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
            نقوم بقسمة العدد على أساس النظام المستهدف، ونأخذ البواقي ونقرأها من أسفل إلى أعلى (من اليمين إلى اليسار):
          </p>
          <pre>• إلى ثنائي (Base 2):
${divBin.join("\n")}
📌 الناتج الثنائي الصحيح: (${intPart.toString(2)})₂

• إلى ثماني (Base 8):
${divOct.join("\n")}
📌 الناتج الثماني الصحيح: (${intPart.toString(8)})₈

• إلى ست عشري (Base 16):
${divHex.join("\n")}
📌 الناتج الست عشري الصحيح: (${intPart.toString(16).toUpperCase()})₁₆</pre>
        </div>
      `;
    }

    // Fraction conversion steps
    if (fracPart > 0) {
      let cur = fracPart;
      let mulBin = [];
      for (let i = 0; i < 6; i++) {
        const next = cur * 2;
        const digit = Math.floor(next);
        mulBin.push(`${cur.toFixed(4)} × 2 = ${next.toFixed(4)}  ← نأخذ الصحيح [${digit}]`);
        cur = parseFloat((next - digit).toFixed(6));
        if (cur === 0) break;
      }

      cur = fracPart;
      let mulOct = [];
      for (let i = 0; i < 4; i++) {
        const next = cur * 8;
        const digit = Math.floor(next);
        mulOct.push(`${cur.toFixed(4)} × 8 = ${next.toFixed(4)}  ← نأخذ الصحيح [${digit}]`);
        cur = parseFloat((next - digit).toFixed(6));
        if (cur === 0) break;
      }

      cur = fracPart;
      const hexChars = {10:'A', 11:'B', 12:'C', 13:'D', 14:'E', 15:'F'};
      let mulHex = [];
      for (let i = 0; i < 4; i++) {
        const next = cur * 16;
        const digit = Math.floor(next);
        const dRep = digit >= 10 ? `${digit}=${hexChars[digit]}` : `${digit}`;
        mulHex.push(`${cur.toFixed(4)} × 16 = ${next.toFixed(4)} ← نأخذ الصحيح [${dRep}]`);
        cur = parseFloat((next - digit).toFixed(6));
        if (cur === 0) break;
      }

      html += `
        <div class="calc-step-item">
          <h4>2️⃣ تحويل الجزء الكسري (0.${String(fracPart).split('.')[1]}) بالضرب المتتالي في الأساس</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
            نضرب الكسر العشري في أساس النظام ونأخذ الرقم الصحيح ونقرأ النتائج من أعلى إلى أسفل بعد الفاصلة:
          </p>
          <pre>• الكسر إلى ثنائي (× 2):
${mulBin.join("\n")}

• الكسر إلى ثماني (× 8):
${mulOct.join("\n")}

• الكسر إلى ست عشري (× 16):
${mulHex.join("\n")}</pre>
        </div>
      `;
    }

    // Direct Bit Grouping (الثنائي إلى ثماني وست عشري)
    html += `
      <div class="calc-step-item">
        <h4>3️⃣ التحويل المباشر بالتجميع (Bit Grouping / Splitting) كما في الامتحان</h4>
        <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">
          قاعدة الامتحان الذهبية: للتحويل بين الثنائي والثماني نجمع كل <strong>3 بتات</strong>، وللست عشري نجمع كل <strong>4 بتات</strong>:
        </p>
        <pre>• الثنائي الكامل: ${binFull}
• للثماني (مجموعات 3 بت): كل رقم ثماني يعادل 3 خانات ثنائية (2³ = 8) ← الناتج: ${octFull}
• للست عشري (مجموعات 4 بت): كل رقم ست عشري يعادل 4 خانات ثنائية (2⁴ = 16) ← الناتج: ${hexFull}</pre>
      </div>
    `;

    // 2's Complement Steps
    if (fracPart === 0 && intPart <= 128) {
      const bin8 = intPart.toString(2).padStart(8, "0");
      let ones = "";
      for (let ch of bin8) ones += ch === "0" ? "1" : "0";
      const twos = ((parseInt(ones, 2) + 1) & 0xFF).toString(2).padStart(8, "0");

      html += `
        <div class="calc-step-item" style="border-color: #818cf8;">
          <h4 style="color: #a5b4fc;">⚡ خطوات حساب المكمل الثنائي (2's Complement) في نظام 8-bit</h4>
          <pre>• خطوة 1: نكتب القيمة الموجبة المطلقة (${intPart}) في 8 بتات:
  ${bin8}
• خطوة 2: نحسب المكمل الأحادي (1's Complement) بقلب كل 0 إلى 1 وكل 1 إلى 0:
  ${ones}
• خطوة 3: نضيف 1 ثنائي (+1) إلى المكمل الأحادي للحصول على المكمل الثنائي (2's Complement):
  ${ones} + 00000001 = ${twos}

${isNegative ? `✅ بما أن العدد الأصلي سالب (-${intPart})، فإن تمثيله في الحاسوب بـ 2's Complement هو: ${twos}` : `ℹ️ بما أن العدد موجب (+${intPart})، فإن تمثيله في 2's Complement هو نفسه الثنائي الموجب: ${bin8}`}</pre>
        </div>
      `;
    }

    stepsList.innerHTML = html;
  }

  // Auto init when DOM ready
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initConverter);
  } else {
    initConverter();
  }

  // Export to global for debug/tests
  window.NumberConverter = {
    updateOutputsFromDecimal,
    loadPreset,
    clearAllFields
  };
})();
