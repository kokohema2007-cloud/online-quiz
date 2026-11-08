// =========================================================================
// 💀 EXTREME QUESTIONS BANK - FINAL BOSS LEVEL (أسئلة الدمار - ليفل الوحش)
// مجموعة شاملة تضم كافة أنواع الأسئلة: صح أو خطأ، تصحيح أخطاء الكود،
// حسابات أنظمة العد و IEEE-754، أسئلة مقالية وبراهين، وتتبع الأكواد المعقدة.
// =========================================================================

const extremeQuestionsData = [
  // ==========================================
  // 1. EXTREME TRUE / FALSE (صح أو خطأ - ليفل الوحش)
  // ==========================================
  {
    id: "ext_tf_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "sizeof Character Literal: C vs C++",
    text: "In C++, sizeof('a') is strictly 1 byte, whereas in the C language, sizeof('a') is typically 4 bytes (sizeof(int)).",
    textAr: "في لغة C++، ناتج sizeof('a') يساوي دائماً 1 بايت، بينما في لغة C الأصلية يساوي حجم int (عادة 4 بايت).",
    type: "boolean",
    correctAnswer: true,
    source: "C++ vs C Standard Type Difference [lex.ccon]",
    explanation: "صحيح (True). في لغة C، الثوابت المحرفية (Character Literals) تُعامل كأرقام صحيحة من النوع int (لذلك sizeof('a') == 4). أما في C++، فقد تم تصحيح هذا السلوك وأصبح نوع الثابت المحرفي هو char بدقة (لذلك sizeof('a') == 1 بايت).",
    details: "In C, 'a' has type int. In C++, 'a' has type char. Thus sizeof('a') is 1 in C++, but sizeof(int) in C."
  },
  {
    id: "ext_tf_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Floating-Point Division by Zero Crash",
    text: "In IEEE-754 floating-point standard, dividing a non-zero float by zero (1.0f / 0.0f) crashes the program with a runtime exception.",
    textAr: "وفقاً لمعيار IEEE-754، فإن قسمة رقم عشري غير صفري على صفر (1.0f / 0.0f) تؤدي لانهيار البرنامج بخطأ تشغيل (Runtime Crash).",
    type: "boolean",
    correctAnswer: false,
    source: "IEEE-754 Floating-Point Arithmetic Rules",
    explanation: "خطأ (False). في الأعداد العشرية العائمة (Floating-point) وفق معيار IEEE-754، القسمة على صفر لا تسبب انهيار البرنامج إطلاقاً! بل تعيد قيمة خاصة قياسية هي المالانهاية الموجبة (+Infinity أو inf) بدون أي استثناء.",
    details: "Integer division by zero causes a crash/SIGFPE, but floating-point 1.0f / 0.0f yields +inf peacefully."
  },
  {
    id: "ext_tf_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "INT_MIN % -1 Hardware Crash",
    text: "Executing the expression INT_MIN % -1 causes a hardware Divide Error exception that crashes the program on x86 processors.",
    textAr: "تنفيذ العملية INT_MIN % -1 يُحدث استثناء خطأ قسمة عتادي (Hardware Divide Error) يؤدي لتحطم البرنامج فوراً على معالجات x86.",
    type: "boolean",
    correctAnswer: true,
    source: "x86 IDIV Hardware Instruction Specification",
    explanation: "صحيح (True). في معالجات x86، تُنفذ تعليمة idiv العتادية كلاً من القسمة وباقي القسمة معاً في نفس السجل. وبما أن قسمة INT_MIN (-2147483648) على -1 تُنتج +2147483648 وهي خارج مدى السجل، فإن المعالج يطلق استثناء طفحان القسمة (Division Overflow Exception) ويتحطم البرنامج فوراً!",
    details: "On x86, idiv computes quotient and remainder together. Since quotient INT_MIN / -1 overflows, INT_MIN % -1 triggers a fatal CPU fault."
  },
  {
    id: "ext_tf_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Const Reference Temporary Lifetime Extension",
    text: "In C++, binding a temporary rvalue object to a const reference extends the lifetime of the temporary object to match the reference's lifetime.",
    textAr: "في لغة C++، ربط كائن مؤقت (Temporary object) بمرجع ثابت (const reference) يؤدي لتمديد عمر الكائن المؤقت ليتطابق مع عمر المرجع.",
    type: "boolean",
    correctAnswer: true,
    source: "C++ Standard Temporary Object Lifetime [class.temporary]",
    explanation: "صحيح (True). هذه قاعدة شهيرة في C++ تُسمى (Lifetime Extension). الكائن المؤقت الذي يُفترض أن يُدمر في نهاية السطر يمتد عمره ويظل حياً طالما أن المرجع الثابت const& المرتبط به لا يزال داخل النطاق (In Scope).",
    details: "A temporary bound to a const reference is not destroyed at the end of the full expression, but when the reference itself goes out of scope."
  },
  {
    id: "ext_tf_5",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Overflow in Subtracting Negative from Positive",
    text: "In signed Two's Complement arithmetic, subtracting a negative number from a positive number can cause an Overflow condition.",
    textAr: "في نظام المكمل الثنائي بإشارة، طرح عدد سالب من عدد موجب يمكن أن يُحدث فيضاً حسابياً (Overflow).",
    type: "boolean",
    correctAnswer: true,
    source: "Two's Complement Subtraction Rules",
    explanation: "صحيح (True). طرح عدد سالب يكافئ جبرياً إضافة عدد موجب: (Positive - Negative = Positive + Positive). وجمع عددين موجبين كبيرين يمكن أن يتجاوز الحد الأقصى للمدى الموجب، فيتحول الناتج لعدد سالب وهو تعريف الـ Overflow!",
    details: "Positive - Negative == Positive + Positive. If the sum exceeds 2^(n-1) - 1, signed overflow occurs."
  },
  {
    id: "ext_tf_6",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "delete Pointer Nullification Myth",
    text: "Executing 'delete ptr;' in C++ automatically resets the pointer 'ptr' to nullptr to prevent dangling pointers.",
    textAr: "تنفيذ الأمر 'delete ptr;' في C++ يقوم تلقائياً بضبط المؤشر 'ptr' إلى nullptr لمنع المؤشرات المعلقة.",
    type: "boolean",
    correctAnswer: false,
    source: "C++ Memory Management & Dangling Pointers",
    explanation: "خطأ (False). أمر delete يقوم بتحرير مساحة الذاكرة في الـ Heap فقط، ولكنه يترك المؤشر ptr محتفظاً بنفس عنوان الذاكرة المحررة القديم (Dangling Pointer)! والمبرمج هو المسؤول حصراً عن كتابة ptr = nullptr; لتجنب الأخطاء الكارثية.",
    details: "delete deallocates memory but never clears the pointer variable. It remains a dangling pointer unless explicitly set to nullptr."
  },
  {
    id: "ext_tf_7",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "new Array Zero-Initialization Myth",
    text: "In C++, executing 'int *arr = new int[100];' guarantees that all 100 elements are initialized to zero.",
    textAr: "في لغة C++، كتابة 'int *arr = new int[100];' تضمن تهيئة جميع العناصر المائة بالصفر تلقائياً.",
    type: "boolean",
    correctAnswer: false,
    source: "Default vs Value Initialization in C++ [dcl.init]",
    explanation: "خطأ (False). كتابة new int[100] (بدون أقواس دائرية) تطبق التهيئة الافتراضية (Default Initialization)، مما يترك عناصر المصفوفة محتوية على قيم عشوائية غير محددة (Garbage values)! لتهيئتها بالصفر يجب كتابة: new int[100]() مع القوسين.",
    details: "new int[100] leaves memory uninitialized (garbage). new int[100]() value-initializes all elements to 0."
  },
  {
    id: "ext_tf_8",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "inline Keyword Guarantee Myth",
    text: "Declaring a function with the 'inline' keyword guarantees that the C++ compiler will substitute the function code at every call site.",
    textAr: "الإعلان عن دالة باستخدام الكلمة المحجوزة 'inline' يضمن أن مترجم C++ سيقوم باستبدال كود الدالة في مكان كل استدعاء بدون استثناء.",
    type: "boolean",
    correctAnswer: false,
    source: "C++ inline Specifier Semantics [dcl.inline]",
    explanation: "خطأ (False). الكلمة inline في لغة C++ هي مجرد اقتراح وتوجيه للمترجم وليست أمراً ملزماً! يحق للمترجم تماماً رفض تضمين الدالة (Inlining) إذا كانت معقدة أو تحتوي على تكرار ذاتي (Recursion). كما أن وظيفتها الأساسية المعيارية هي السماح بتعريف الدالة في ملفات رأسية متعددة دون خرق قاعدة التعريف الواحد (ODR).",
    details: "The inline specifier is merely an optimization hint and linkage directive (ODR relaxation), not a mandatory command to the compiler."
  },

  // ==========================================
  // 2. EXTREME IDENTIFY & FIX CODE ERRORS (اكتشف وصحح الأخطاء - ليفل الوحش)
  // ==========================================
  {
    id: "ext_err_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Unsigned Counter Loop Underflow Bug",
    text: "Identify and correct the fatal infinite loop bug in: for (unsigned int i = 10; i >= 0; i--) cout << i;",
    textAr: "اكتب الكود المصحح لحلقة التكرار التالية التي تسبب حلقة لا نهائية بسبب طفحان unsigned: for (unsigned int i = 10; i >= 0; i--) cout << i;",
    codeSnippet: `for (unsigned int i = 10; i >= 0; i--)
    cout << i;`,
    type: "interactive_fix",
    source: "Unsigned Loop Underflow Elimination",
    hint: "المتغير بدون إشارة لا يمكن أن يكون سالباً أبداً، فما هو النوع الصحيح للمتغير؟",
    identifiedErrors: [
      "استخدام unsigned int كعداد للحلقة التنازلية مع شرط (i >= 0)، مما يسبب طفحاناً عكسياً (Underflow) عند 0 إلى 4294967295 ويجعل الحلقة لا نهائية."
    ],
    correctCode: `for (int i = 10; i >= 0; i--) cout << i;`,
    explanation: `الخطأ القاتل:
المتغير unsigned int لا يقبل قيماً سالبة، فعندما يصل إلى 0 وينقص يصبح 4294967295، فيظل الشرط i >= 0 محققاً دائماً!
التصحيح:
تغيير نوع المتغير إلى signed int (أو ببساطة int).`
  },
  {
    id: "ext_err_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "String Literal Mutation Access Violation Bug",
    text: "Identify and correct the crash bug in: char *str = \"antigravity\"; str[0] = 'A';",
    textAr: "اكتب الكود المصحح لمنع انهيار البرنامج عند تعديل النص: char *str = \"antigravity\"; str[0] = 'A';",
    codeSnippet: `char *str = "antigravity";
str[0] = 'A';`,
    type: "interactive_fix",
    source: "Read-Only Memory Protection Fix",
    hint: "كيف تجعل السلسلة مصفوفة قابلة للتعديل في الـ Stack بدلاً من مؤشر لـ .rodata؟",
    identifiedErrors: [
      "تعريف السلسلة النصية كمؤشر char* يشير إلى نص حرفي مخزن في منطقة الذاكرة للقراءة فقط (.rodata)، مما يسبب انهيار البرنامج (Access Violation) عند محاولة تعديل المحرف الأول."
    ],
    correctCode: `char str[] = "antigravity"; str[0] = 'A';`,
    explanation: `الخطأ:
المؤشر char *str يؤشر إلى ذاكرة للقراءة فقط.
التصحيح:
تحويل المؤشر إلى مصفوفة محارف char str[]، حيث يتم نسخ النص إلى ذاكرة المكدس (Stack) المتاحة للقراءة والكتابة.`
  },
  {
    id: "ext_err_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Scalar delete on Array Allocation Bug",
    text: "Identify and correct the undefined behavior bug in: int *ptr = new int[50]; delete ptr;",
    textAr: "اكتب الكود المصحح لتحرير مصفوفة ديناميكية وتفادي السلوك غير المحدد: int *ptr = new int[50]; delete ptr;",
    codeSnippet: `int *ptr = new int[50];
delete ptr;`,
    type: "interactive_fix",
    source: "C++ Memory Mismatch Standard Rule [expr.delete]",
    hint: "ما هو المعامل المخصص لتحرير المصفوفات المحجوزة بـ new[]؟",
    identifiedErrors: [
      "استخدام معامل الحذف الفردي 'delete ptr;' مع مصفوفة تم حجزها بـ 'new int[50];' بدلاً من استخدام معامل حذف المصفوفات 'delete[] ptr;'."
    ],
    correctCode: `int *ptr = new int[50]; delete[] ptr;`,
    explanation: `الخطأ:
حجز الذاكرة تم باستخدام new[]، وتحريرها بـ delete الفردية يُعتبر سلوكاً غير محدد (Undefined Behavior) يسبب تسريب ذاكرة أو انهيار البرنامج.
التصحيح:
استخدام delete[] ptr; المخصصة للمصفوفات.`
  },
  {
    id: "ext_err_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Bitwise AND vs Short-Circuit Logical AND Bug",
    text: "Identify and correct the divide-by-zero crash in: int a = 10, b = 0; if (b != 0 & a / b > 2) cout << \"OK\";",
    textAr: "اكتب الكود المصحح لمنع انهيار القسمة على صفر في جملة الشرط التالية: if (b != 0 & a / b > 2)",
    codeSnippet: `int a = 10, b = 0;
if (b != 0 & a / b > 2)
    cout << "OK";`,
    type: "interactive_fix",
    source: "Bitwise AND vs Short-Circuit Logical Operator",
    hint: "أي معامل يضمن عدم تقييم الطرف الأيمن عند فشل الطرف الأيسر؟",
    identifiedErrors: [
      "استخدام معامل البتات الفردي '&' بدلاً من معامل الربط المنطقي '&&'. المعامل '&' لا يطبق قصر الدائرة (No Short-Circuit) ويقيم كلاً من الطرفين، فيقسم على صفر وتتحطم الدالة."
    ],
    correctCode: `if (b != 0 && a / b > 2) cout << "OK";`,
    explanation: `الخطأ:
المعامل & يقيم الطرفين دائماً، فيحسب a / b و b تساوي 0 مما يسبب خطأ قسمة على صفر عتادي!
التصحيح:
استخدام المعامل المنطقي && الذي يطبق قصر الدائرة ويتوقف فوراً إذا كان b == 0.`
  },

  // ==========================================
  // 3. EXTREME NUMBER SYSTEMS & IEEE-754 CALCULATIONS (حسابات أنظمة العد - ليفل الوحش)
  // ==========================================
  {
    id: "ext_num_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "IEEE-754 Hexadecimal Pattern of -2.5f",
    text: "Calculate the exact 32-bit Hexadecimal IEEE-754 single-precision bit pattern of the negative float -2.5f.",
    textAr: "احسب النمط الست عشري الدقيق المكون من 32 بت وفق معيار IEEE-754 للرقم العشري السالب -2.5f (اكتبه بصيغة 0x... أو 8 خانات hex):",
    type: "number_system",
    source: "IEEE-754 Floating-Point Calculation Challenge",
    inputs: [
      { label: "Hexadecimal Pattern (32-bit)", expected: "C0200000", hint: "Sign: 1, Exponent: 128 (0x80), Mantissa: .01 (0x200000)" }
    ],
    stepByStep: `خطوات حساب نمط IEEE-754 للرقم -2.5f بالتفصيل:
1) خانة الإشارة (Sign bit):
   الرقم سالب -> Sign bit = 1.

2) التحويل إلى ثنائي عادي:
   2.5 = 2 + 0.5 = 10.1 ثنائياً.

3) التنسيق العلمي المعياري (Normalized Scientific Notation):
   10.1 = 1.01 × 2^1.
   قيمة الأس الحقيقي (E) = 1.

4) حساب الأس المنحاز (Biased Exponent):
   الانحياز في 32-bit هو 127:
   Biased Exponent = 1 + 127 = 128.
   128 ثنائياً في 8 بت = 10000000.

5) استخراج الكسر (Mantissa / Fraction):
   نحذف الواحد الضمني (Implicit 1) من 1.01:
   المتبقي هو: 01.
   نكمل 23 بت بإضافة أصفار: 01000000000000000000000.

6) تجميع الـ 32 بت:
   Sign (1 بت): 1
   Exponent (8 بت): 10000000
   Fraction (23 بت): 01000000000000000000000
   السلسلة الكاملة:
   1100 0000 0010 0000 0000 0000 0000 0000

7) التحويل إلى Hexadecimal:
   1100 = C
   0000 = 0
   0010 = 2
   0000 = 0
   0000 = 0
   0000 = 0
   0000 = 0
   0000 = 0
   الناتج النهائي = C0200000 (أو 0xC0200000).`
  },
  {
    id: "ext_num_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Signed Fixed-Point Q4.4 of -6.75",
    text: "Calculate the exact 8-bit Two's Complement representation of decimal -6.75 in Q4.4 format (4 integer bits, 4 fractional bits).",
    textAr: "احسب التمثيل الثنائي الدقيق بالمكمل الثنائي (Two's Complement) في نظام الفاصلة الثابتة Q4.4 المكون من 8 بت للرقم السالب -6.75:",
    type: "number_system",
    source: "Fixed-Point Two's Complement DSP Challenge",
    inputs: [
      { label: "8-bit Q4.4 Binary", expected: "10010100", hint: "احسب +6.75 ثم طبق مكمل ثنائي كامل" }
    ],
    stepByStep: `خطوات الحل لنظام Q4.4 (4 بت للصحيح، 4 بت للكسر):
1) تمثيل القيمة الموجبة (+6.75):
   - الجزء الصحيح (6) في 4 بت: 0110
   - الجزء الكسري (0.75): 0.75 = 0.5 + 0.25 = 1100 في 4 بت
   - القيمة الموجبة الكاملة: 0110.1100 (أو 01101100)

2) إيجاد المكمل الأحادي (1's complement) بقلب جميع البتات:
   01101100 -> 10010011

3) إيجاد المكمل الثنائي (2's complement) بإضافة 1:
     10010011
   +        1
   ----------
     10010100

الناتج النهائي لـ -6.75 هو: 10010100.`
  },
  {
    id: "ext_num_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Double Dabble: 255.0625 to Hexadecimal",
    text: "Convert decimal 255.0625 to its exact Hexadecimal representation.",
    textAr: "حوّل الرقم العشري 255.0625 إلى مكافئه الدقيق في النظام الست عشري (Hexadecimal):",
    type: "number_system",
    source: "Advanced Fractional Base Conversion",
    inputs: [
      { label: "Hexadecimal Equivalent", expected: "FF.1", hint: "255 ست عشرياً + 0.0625 * 16" }
    ],
    stepByStep: `خطوات التحويل الدقيقة:
1) الجزء الصحيح (255):
   255 / 16 = 15 والباقي 15 (F)
   15  / 16 = 0  والباقي 15 (F)
   الجزء الصحيح = FF ست عشرياً (15*16 + 15 = 255).

2) الجزء الكسري (0.0625) بالضرب في 16:
   0.0625 × 16 = 1.0
   الجزء الصحيح الناتج هو 1، والكسر المتبقي 0 (توقف فوري!).
   الكسر ست عشرياً = .1

3) الناتج الست عشري الإجمالي: FF.1.`
  },
  {
    id: "ext_num_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "8-bit Two's Complement Arithmetic Overflow & Hex Result",
    text: "Perform signed 8-bit Two's Complement addition of (+75)_10 and (+85)_10. Compute the 8-bit binary sum, its hexadecimal representation, its signed decimal value, and whether signed overflow occurred.",
    textAr: "احسب ناتج جمع (+75) مع (+85) بنظام المكمل الثنائي (8-bit Two's Complement)، واكتب الناتج الثنائي، الست عشري، القيمة العشرية الناتجة، وهل حدث طفحان (Overflow)؟",
    type: "number_system",
    source: "ALU Overflow Detection & Signed Arithmetic",
    inputs: [
      { label: "8-bit Binary Sum", expected: "10100000", hint: "01001011 + 01010101" },
      { label: "Hexadecimal Pattern", expected: "A0", hint: "1010 0000 ست عشرياً" },
      { label: "Signed Decimal Interpretation", expected: "-96", hint: "قيمة 10100000 في المكمل الثنائي (سالب)" },
      { label: "Signed Overflow Occurred? (YES/NO)", expected: "YES", hint: "جمع عددين موجبين أعطى سالباً (V=1)" }
    ],
    stepByStep: `خطوات الحل واكتشاف الطفحان (Overflow Detection):
1) تمثيل العددين في 8-bit signed binary:
   - (+75)_10:
     75 = 64 + 8 + 2 + 1 -> (01001011)_2
   - (+85)_10:
     85 = 64 + 16 + 4 + 1 -> (01010101)_2

2) الجمع الثنائي بت بالبت:
      0 1 0 0 1 0 1 1  (+75)
    + 0 1 0 1 0 1 0 1  (+85)
    ------------------
      1 0 1 0 0 0 0 0

3) النمط الست عشري:
   1010 0000 = A0 (أو 0xA0).

4) التفسير العشري ذو الإشارة (Signed 2's Complement):
   - البت الأثقل (MSB) = 1، إذاً العدد سالب!
   - لإيجاد قيمته المطلقة، نأخذ المكمل الثنائي لـ 10100000:
     قلب البتات: 01011111
     إضافة 1:    01100000 = 64 + 32 = 96
   - القيمة العشرية الناتجة = -96!

5) كشف الطفحان العتادي (Signed Overflow Flag V):
   - جمعنا عددين موجبين (+75 و +85) وكان الناتج سالباً (-96)، وهذا مستحيل رياضياً!
   - السبب: الناتج الصحيح (+160) أكبر من الحد الأقصى المسموح به في 8 بت (+127).
   - الحمل المنقول إلى خانة الإشارة (Carry-in to MSB) = 1.
   - الحمل المنقول خارج خانة الإشارة (Carry-out of MSB) = 0.
   - قاعدة علم العتاد: V = Carry_in XOR Carry_out = 1 XOR 0 = 1 (حدث طفحان YES).`
  },

  // ==========================================
  // 4. EXTREME ESSAY & ARCHITECTURAL PROOFS (أسئلة مقالية وبراهين معمارية - ليفل الوحش)
  // ==========================================
  {
    id: "ext_essay_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Mathematical Impossibility of Exact 0.1 in Binary",
    text: "Explain mathematically why decimal 0.1 cannot be represented with finite bits in binary floating-point, and detail how repeated multiplication produces an infinite recurring expansion.",
    textAr: "سؤال مقالي معمق: برهن رياضياً لماذا يستحيل تمثيل الكسر العشري البسيط 0.1 بعدد منتهٍ من البتات في النظام الثنائي ومعيار IEEE-754، موضحاً متسلسلة الضرب التكراري الناتجة.",
    type: "essay",
    source: "Discrete Mathematics & Number Representation Limits",
    questionDetails: "اشرح شرط قابلية التمثيل المنتهي في أي نظام عد، واكتب خطوات الضرب المتكرر التي تثبت الدورية.",
    modelAnswerAr: `البرهان الرياضي لعدم إمكانية تمثيل 0.1 ثنائياً:
1. النظرية الرياضية الأساسية للكسور المنتهية:
   في أي نظام عد أساسه B، الكسر العادي (P / Q) يكون له تمثيل منتهٍ إذا وفقط إذا كانت جميع العوامل الأولية للمقام Q من ضمن العوامل الأولية للأساس B.
   - في النظام العشري (Base 10): العوامل الأولية لـ 10 هي (2 و 5). الكسر 1/10 مقامه 10 عوامله 2 و 5، ولذلك يُكتب منتهياً: 0.1.
   - في النظام الثنائي (Base 2): العامل الأولي الوحيد هو 2 فقط. وحيث إن مقام الكسر (1/10) يحتوي على العامل 5، فإنه يستحيل تمثيله بعدد منتهٍ من قوى 2!

2. إثبات الدورية بالضرب المتكرر في 2:
   0.1 × 2 = 0.2 -> الجزء الصحيح 0
   0.2 × 2 = 0.4 -> الجزء الصحيح 0
   0.4 × 2 = 0.8 -> الجزء الصحيح 0
   0.8 × 2 = 1.6 -> الجزء الصحيح 1
   0.6 × 2 = 1.2 -> الجزء الصحيح 1
   0.2 × 2 = 0.4 -> الجزء الصحيح 0 (عدنا لنفس الخطوة الثانية!)
   ينتج الكسر الدوري اللا نهائي: 0.00011001100110011..._2

3. النتيجة في الحواسب:
   معيار IEEE-754 يقتطع السلسلة بعد 23 بت (في float) أو 53 بت (في double)، مما يؤدي لخطأ تقريب متأصل (Rounding Error)، ولذلك التعبير (0.1 + 0.2 == 0.3) يعيد false في لغات البرمجة!`,
    modelAnswer: `A fraction P/Q has a finite representation in base B if and only if all prime factors of Q divide B. For base 2, the only prime factor is 2. The fraction 1/10 has denominator factors 2 and 5. Since 5 does not divide 2, 0.1 produces an infinite repeating binary expansion (0.000110011...). Rounding at bit 23/53 creates inherent representation error.`,
    rubricChecklist: [
      "ذكر شرط العوامل الأولية لمقام الكسر وعلاقته بأساس النظام الثنائي (الرقم 5 لا يقسم 2).",
      "كتابة خطوات الضرب التكراري وإثبات تكرار النمط 0011 الدوري.",
      "توضيح اقتطاع المعالج للبتات في معيار IEEE-754 وحدوث خطأ التقريب Rounding Error.",
      "الربط مع فشل مقارنة (0.1 + 0.2 == 0.3) في الحواسب."
    ]
  },
  {
    id: "ext_essay_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "MESI Cache Coherency Protocol & False Sharing",
    text: "Explain the four states of the MESI cache coherency protocol and detail how False Sharing severely degrades multi-core CPU throughput, explaining the solution using memory padding.",
    textAr: "سؤال مقالي معمارية حاسب: اشرح الحالات الأربع لبروتوكول تماسك الكاش MESI، وكيف تتسبب ظاهرة 'المشاركة الكاذبة' (False Sharing) في انهيار كفاءة المعالجات متعددة الأنوية، موضحاً الحل الهندسي باستخدام الـ Padding.",
    type: "essay",
    source: "Advanced Multi-Core Cache Architecture & High-Performance Computing",
    questionDetails: "اشرح الحالات: Modified, Exclusive, Shared, Invalid وكيف يؤدي سطر الكاش المشترك لـ Cache Invalidation ping-pong.",
    modelAnswerAr: `بروتوكول MESI وظاهرة المشاركة الكاذبة:

1. الحالات الأربع لسطر الكاش في بروتوكول MESI:
   - Modified (M): السطر تم تعديله بواسطة هذه النواة فقط، والبيانات في الـ RAM أصبحت قديمة (Dirty)، ويجب كتابتها للـ RAM قبل إخلاء السطر.
   - Exclusive (E): السطر موجود في كاش هذه النواة فقط ومطابق تماماً للبيانات في الـ RAM (Clean).
   - Shared (S): السطر موجود في كاش هذه النواة ونواة أخرى أو أكثر ومطابق للذاكرة (للقراءة فقط).
   - Invalid (I): السطر غير صالح ولا يحتوي على بيانات موثوقة ويجب إعادة سحبه من الذاكرة أو الكاشات الأخرى.

2. آلية حدوث المشاركة الكاذبة (False Sharing):
   - في المعالجات الحديثة، أصغر وحدة نقل للبيانات هي سطر الكاش (Cache Line بحجم 64 بايت).
   - إذا كان الخيط Thread 1 على النواة Core 1 يعدل المتغير varA، والخيط Thread 2 على النواة Core 2 يعدل المتغير varB.
   - وكان المتغيران متجاورين في الذاكرة بحيث يقعان معاً داخل نفس الـ 64 بايت!
   - في كل مرة يكتب فيها Core 1 على varA، يرسل بروتوكول MESI إشارة إبطال (Invalidate) لسطر الكاش بالكامل في Core 2 فتتحول حالته إلى Invalid!
   - وعندما يحاول Core 2 تعديل varB، يكتشف أن السطر Invalid، فيطلب السطر مجدداً عبر الـ Bus، ويبطل سطر Core 1 بدوره!
   - ينتج عن ذلك صراع مستمر (Cache Line Bouncing / Ping-Pong) يعطل خطوط أنابيب المعالج ويهدر زمن الـ Bus بالكامل.

3. الحل الهندسي (Memory Alignment & Padding):
   - فصل المتغيرين بحشو فارغ (Padding) أو استخدام مواصفة المحاذاة في C++: alignas(64).
   - هذا يضمن أن كل متغير يقع في سطر كاش مستقل ومنفصل بحجم 64 بايت، فتعدل الأنوية في هدوء واستقلالية تامة دون أي إبطال متبادل.`,
    modelAnswer: `MESI States: Modified (dirty, exclusive), Exclusive (clean, exclusive), Shared (clean, multiple cores), Invalid (stale). False Sharing occurs when two threads on different cores modify independent variables located on the exact same 64-byte cache line. Each write triggers an Invalid state on the other core's cache, forcing continuous cache line reloading across the interconnect (cache ping-pong). Solution: Align variables to 64-byte boundaries using alignas(64) or structure padding.`,
    rubricChecklist: [
      "شرح الحالات الأربع: Modified, Exclusive, Shared, Invalid بدقة.",
      "توضيح أن وحدة النقل والإبطال العتادية هي سطر الكاش (Cache Line 64 Bytes).",
      "شرح صراع الإبطال المتبادل (Invalidation Ping-Pong) بين النواتين.",
      "ذكر الحل المعماري باستخدام المحاذاة alignas(64) أو الـ Padding."
    ]
  },
  {
    id: "ext_essay_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Memory Alignment, Structure Padding & Hardware Split Cycles",
    text: "Explain how 64-bit CPU data bus architecture enforces memory alignment, why struct { char a; double b; int c; } occupies 24 bytes instead of 13, and the hardware cost of unaligned memory access.",
    textAr: "سؤال مقالي معماري: اشرح كيف تفرض معمارية الحواسب الحديثة 64-bit محاذاة الذاكرة (Memory Alignment)، ولماذا يشغل الهيكل struct { char a; double b; int c; } مساحة 24 بايت بدلاً من 13 بايت، موضحاً التكلفة العتادية للوصول غير المحاذي (Unaligned Access).",
    type: "essay",
    source: "Computer Architecture, Bus Protocols & Data Alignment",
    questionDetails: "اشرح قاعدة Natural Alignment، واحسب الـ Padding لكل حقل، واشرح ما يفعله المعالج عند قراءة متغير غير محاذٍ.",
    modelAnswerAr: `محاذاة الذاكرة وحشو الهياكل (Struct Padding & Alignment):

1. مفهوم المحاذاة الطبيعية (Natural Alignment):
   - في معمارية الحواسب، خطوط نقل البيانات (Data Bus) بعرض 64 بت (8 بايت) تقرأ البيانات من عناوين تكون مضاعفات لـ 8 بايت (0x0, 0x8, 0x10...).
   - قاعدة المحاذاة: أي نوع بياني بحجم N بايت يجب أن يقع في عنوان ذاكرة يقبل القسمة على N (العنوان % N == 0).
   - المتغير char (1 بايت) يحاذى عند مضاعفات 1.
   - المتغير int (4 بايت) يحاذى عند مضاعفات 4.
   - المتغير double (8 بايت) يحاذى عند مضاعفات 8.

2. تحليل حجم الهيكل { char a; double b; int c; }:
   - الإزاحة 0: الحقل 'a' بحجم 1 بايت (العنوان 0).
   - الحقل التالي 'b' بحجم 8 بايت، فيجب أن يبدأ عند عنوان من مضاعفات 8! لذلك يضيف المترجم (Compiler) حشواً فارغاً (Padding) مقداره 7 بايت (العناوين 1 إلى 7 مهدرة).
   - الإزاحة 8: الحقل 'b' يشغل 8 بايت (العناوين 8 إلى 15).
   - الإزاحة 16: الحقل 'c' بحجم 4 بايت يشغل (العناوين 16 إلى 19).
   - الحجم الإجمالي حتى الآن = 20 بايت.
   - قاعدة الحجم الكلي للهيكل: يجب أن يكون مضاعفاً لأكبر محاذاة في الهيكل (alignof(double) = 8). لذلك يضاف حشو أخير مقداره 4 بايت في نهاية الهيكل (العناوين 20 إلى 23).
   - الحجم النهائي في الذاكرة = 24 بايت (مع أن البيانات الفعلية 13 بايت فقط!).

3. الحل الهندسي لتقليل الهدر (Field Reordering):
   - إعادة ترتيب الحقول تنازلياً حسب الحجم: { double b; int c; char a; }
   - double b: 8 بايت (0-7).
   - int c: 4 بايت (8-11).
   - char a: 1 بايت (12).
   - حشو أخير 3 بايت (13-15) ليصبح المجموع 16 بايت فقط! (وفرنا 33% من الذاكرة).

4. التكلفة العتادية للوصول غير المحاذي (Unaligned Access):
   - إذا سُمح لمتغير double (8 بايت) أن يبدأ عند عنوان فردي (مثلاً 0x5)، فإنه يمتد عبر كلمتي ذاكرة (Memory Words)!
   - المعالج يضطر لتنفيذ دورتي ناقل ذاكرة (Two Memory Bus Cycles) بدلاً من دورة واحدة، ثم يقوم بوحدة العتاد بعمل Shift و Mask لدمج الجزأين في السجل.
   - في بعض معماريات RISC و ARM الصارمة، الوصول غير المحاذي يولد فوراً استثناء عتادياً قاتلاً (Hardware Fault / Alignment Exception / SIGBUS) يؤدي لإيقاف البرنامج.`,
    modelAnswer: `Memory alignment ensures data addresses are multiples of data size (address % sizeof(T) == 0) matching CPU word fetch lines. In {char a; double b; int c;}: 'a' takes 1 byte + 7 bytes padding so 'b' (8 bytes) aligns at offset 8. 'c' takes 4 bytes (offsets 16-19) + 4 bytes tail padding to make total size a multiple of alignof(double)=8 -> 24 bytes total. Unaligned access spans two cache lines/bus words, triggering two memory read cycles plus bitwise shifts, degrading performance or causing hardware alignment traps (SIGBUS) on RISC systems.`,
    rubricChecklist: [
      "شرح مفهوم Natural Alignment (العنوان يقبل القسمة على حجم المتغير).",
      "تفصيل حساب الـ Padding في الهيكل الأول (7 بايت بعد char و 4 بايت بعد int) ليصل المجموع إلى 24 بايت.",
      "ذكر تقنية إعادة ترتيب الحقول لتقليص الحجم إلى 16 بايت.",
      "شرح التكلفة العتادية للوصول غير المحاذي (دورتي ناقل ذاكرة أو استثناء عتادي SIGBUS)."
    ]
  },
  {
    id: "ext_essay_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "C++ Virtual Method Table (vtable), vptr & Dynamic Dispatch Internals",
    text: "Detail the compiler and runtime mechanics of C++ virtual functions, explaining vtable storage, object vptr layout, indirect CPU calling sequence, and why dynamic dispatch is disabled during object construction and destruction.",
    textAr: "سؤال مقالي C++ معمق: اشرح بالتفصيل الآلية الداخلية التي ينفذ بها المترجم والمعالج الدوال الافتراضية (Virtual Functions) وتعدد الأشكال الديناميكي (Dynamic Polymorphism) عبر جدول الدوال الافتراضية (vtable) والمؤشر الافتراضي (vptr)، معللاً لماذا يتعطل الاستدعاء المتعدد داخل البواني (Constructors) والمهدمات (Destructors).",
    type: "essay",
    source: "C++ ABI (Itanium/MSVC) & Dynamic Dispatch Internals",
    questionDetails: "اشرح بنية vtable ومكانها في الذاكرة، وبنية vptr في الكائن، وكيفية ترجمة الاستدعاء لتعليمات تجميع غير مباشرة، وخطر الاستدعاء في الباني.",
    modelAnswerAr: `الآلية الداخلية للدوال الافتراضية والربط الديناميكي في C++:

1. جدول الدوال الافتراضية (vtable - Virtual Method Table):
   - لكل فئة (Class) تحتوي على دالة افتراضية واحدة على الأقل، ينشئ المترجم جدولاً ثابتاً (Static Array of Function Pointers) أثناء وقت التصريف.
   - يحتوي الجدول على عناوين الدوال الافتراضية بالترتيب.
   - يتم تخزين الـ vtable في قسم البيانات المخصصة للقراءة فقط (.rodata / Text segment) في الذاكرة، ويوجد جدول واحد فقط لكل فئة تشترك فيه جميع كائنات تلك الفئة.

2. المؤشر الافتراضي (vptr - Virtual Pointer):
   - في كل كائن ينتمي لفئة فيها دوال افتراضية، يزرع المترجم حقلاً خفياً غير مرئي يسمى vptr (عادة في أول 8 بايت من الكائن في معمارية 64-bit).
   - هذا المؤشر يشير إلى الـ vtable الخاصة بالفئة التي ينتمي إليها الكائن الفعلي في الـ Run-time.
   - يتولى الباني (Constructor) تهيئة قيمة الـ vptr ليشير للجدول الصحيح.

3. تسلسل الاستدعاء العتادي (Assembly Indirect Call Sequence):
   - عند تنفيذ السطر: ptr->speak();
   - لا ينفذ المعالج قفزاً مباشراً (call address)، بل ينفذ استدعاء غير مباشر:
     1) قراءة مؤشر الكائن في السجل (mov rax, [ptr]).
     2) فك إرجاع الـ vptr من أول الكائن (mov rdx, [rax]).
     3) جلب عنوان الدالة speak من الفهرس المخصص لها في الـ vtable (مثلاً الإزاحة 0: mov rcx, [rdx + 0]).
     4) القفز غير المباشر وتنفيذ الدالة (call rcx).
   - هذا يسبب تكلفة إضافية طفيفة (Pointer Dereference و Branch Misprediction محتمل).

4. تعطل الربط الديناميكي داخل الباني والمُهدم (Constructor / Destructor Traps):
   - عند إنشاء كائن مشتق Derived من فئة قاعدة Base:
     يتم تنفيذ باني Base أولاً! وأثناء تنفيذ باني Base، يكون الـ vptr يشير إلى vtable الخاصة بـ Base فقط!
   - السبب الجوهري: حقول الفئة المشتقة Derived لم تُبنَ بعد في الذاكرة. إذا سُمح باستدعاء الدالة المتعددة لـ Derived، فإنها قد تقرأ حقولاً غير مهيأة تسبب انهيار البرنامج.
   - لذلك، يضمن معيار C++ أنه داخل الباني والمُهدم، يتم استدعاء دالة الفئة الحالية فقط بشكل مبكر وتتعطل آلية التعددية الحقيقية (No Dynamic Dispatch to Derived).`,
    modelAnswer: `For each class with virtual functions, the compiler generates a static vtable (array of function pointers stored in .rodata). Each object contains an implicit hidden pointer (vptr, 8 bytes on 64-bit) pointing to its class vtable. Dynamic dispatch ptr->foo() resolves via indirect call: load object -> dereference vptr -> index vtable -> indirect call (call [vptr + offset]). In constructors/destructors, vptr points strictly to the currently executing class vtable because derived members are uninitialized/already destroyed; polymorphic calls to derived overrides are prohibited to prevent undefined behavior.`,
    rubricChecklist: [
      "شرح جدول الـ vtable وتخزينه في منطقة القراءة فقط (.rodata) كجدول مؤشرات دوال.",
      "شرح المؤشر الافتراضي vptr وحجمه (8 بايت في 64-bit) وتخزينه داخل بنية كل كائن.",
      "توضيح خطوات الاستدعاء غير المباشر على مستوى المعالج (Dereference vptr -> Index vtable -> Indirect Call).",
      "تعليل سلوك الدوال الافتراضية داخل الباني والمهدم وحماية الكائن من استخدام حقول غير مهيأة."
    ]
  },

  // ==========================================
  // 5. EXTREME CODE TRACING & ARCHITECTURAL LOGIC (تتبع الأكواد العميقة ليفل الوحش)
  // ==========================================
  {
    id: "ext_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Unsigned Underflow Infinite Loop Trap",
    text: "What will happen when the following C++ loop executes?",
    textAr: "ماذا سيحدث عند تنفيذ حلقة C++ التالية؟ (احذر الفخ القاتل!)",
    codeSnippet: `for (unsigned int i = 5; i >= 0; i--) {
    cout << i << " ";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Prints: 5 4 3 2 1 0 and terminates." },
      { id: "b", text: "b) Infinite loop: underflows to 4294967295 when i reaches -1." },
      { id: "c", text: "c) Compile Error: unsigned int cannot be compared with 0." },
      { id: "d", text: "d) Prints: 5 4 3 2 1 and terminates." }
    ],
    correctAnswer: "b",
    source: "C++ Standard Unsigned Wrap-around [basic.fundamental]",
    explanation: `الخيار (b) هو الصحيح: حلقة لا نهائية (Infinite Loop)!
المصيدة القاتلة:
المتغير i هو unsigned int (بدون إشارة)، مما يعني أنه لا يمكن أن يكون سالباً أبداً رياضياً وبرمجياً!
عندما يصل i إلى 0 ويتم إنقاصه (i--)، يحدث طفحان عكسي (Underflow / Wrap-around) وفقاً لقواعد C++ ليتحول 0 - 1 إلى أكبر قيمة موجبة ممكنة في 32-bit وهي (4,294,967,295)!
وبالتالي الشرط (i >= 0) يظل صحيحاً دائماً وأبداً، ولن تتوقف الحلقة إطلاقاً!`,
    details: "Unsigned integers modulo 2^N can never be negative; (unsigned)0 - 1 == UINT_MAX."
  },
  {
    id: "ext_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Pointer to Entire Array vs First Element",
    text: "What will be printed by this tricky pointer arithmetic?",
    textAr: "ما هو الناتج المطبوع من عملية المؤشرات المعقدة التالية؟",
    codeSnippet: `int a[5] = {10, 20, 30, 40, 50};
int *p = (int*)(&a + 1);
cout << *(p - 1);`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 10" },
      { id: "b", text: "b) 50" },
      { id: "c", text: "c) Undefined garbage value" },
      { id: "d", text: "d) Compilation Error" }
    ],
    correctAnswer: "b",
    source: "Pointer Types & Array Decay Nuances",
    explanation: `الخيار (b) هو الصحيح: 50!
السر الهندسي العميق:
1) التعبير a يشير لمؤشر إلى أول عنصر int* (بقفزة قدرها 4 بايت).
2) أما التعبير &a فهو مؤشر إلى المصفوفة بالكامل من النوع int(*)[5]!
3) عند كتابة (&a + 1)، فإن المعالج يقفز بمقدار حجم المصفوفة كاملة (5 × 4 = 20 بايت)، فيشير إلى العنوان الموجود مباشرة بعد نهاية المصفوفة a.
4) عند تحويله إلى (int*) ثم إنقاصه بمقدار 1 (p - 1)، فإنه يرجع خطوة واحدة للوراء بحجم int (4 بايت)، فيشير بالضبط إلى العنصر الأخير وهو 50!`,
    details: "&a has type int(*)[5]. Adding 1 advances by sizeof(a) = 20 bytes. (p - 1) steps back by sizeof(int) = 4 bytes."
  },
  {
    id: "ext_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Bitwise Shift vs Addition Precedence",
    text: "What will be printed by: cout << (1 << 2 + 3); ?",
    textAr: "ما هو الناتج المطبوع من المعادلة التالية: cout << (1 << 2 + 3); ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 7" },
      { id: "b", text: "b) 32" },
      { id: "c", text: "c) 11" },
      { id: "d", text: "d) 8" }
    ],
    correctAnswer: "b",
    source: "C++ Operator Precedence Table Trap",
    explanation: `الخيار (b) هو الصحيح: 32 وليس 7!
المصيدة:
معظم المبرمجين يظنون أن العملية تُحسب: (1 << 2) + 3 = 4 + 3 = 7.
لكن في جدول أسبقية العمليات في C++:
معامل الجمع (+) له أسبقية أعلى من معامل الإزاحة الثنائية (<<)!
لذلك يُنفذ أولاً: 2 + 3 = 5.
ثم تُنفذ الإزاحة: 1 << 5 = 2^5 = 32!`,
    details: "Addition (+) has higher precedence than bitwise left shift (<<). Expression evaluates as 1 << (2 + 3)."
  },
  {
    id: "ext_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Mixed Signed/Unsigned Comparison Trap",
    text: "What will be printed by the following comparison?",
    textAr: "ماذا سيطبع هذا الشرط الخادع؟",
    codeSnippet: `int a = -1;
unsigned int b = 1;
if (a < b) {
    cout << "Less";
} else {
    cout << "Greater";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Less" },
      { id: "b", text: "b) Greater" },
      { id: "c", text: "c) Compile Error" },
      { id: "d", text: "d) Undefined Behavior" }
    ],
    correctAnswer: "b",
    source: "Usual Arithmetic Conversions [expr.arith.conv]",
    explanation: `الخيار (b) هو الصحيح: Greater!
المصيدة الصادمة:
عند إجراء أي مقارنة بين عدد بإشارة (signed int) وعدد بدون إشارة (unsigned int) بنفس الحجم، تنص قواعد C++ الصارمة على ترقية العدد السالب إلى unsigned int أولاً!
الرقم -1 عند تحويله إلى unsigned في 32-bit يصبح 4,294,967,295 (جميع البتات آحاد 0xFFFFFFFF).
و 4,294,967,295 ليست أقل من 1، فيدخل في else ويطبع "Greater"!`,
    details: "When comparing signed int with unsigned int, signed int is implicitly converted to unsigned int."
  },
  {
    id: "ext_5",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "String Literal Mutation Undefined Behavior",
    text: "What happens at runtime when executing: char *s = \"hello\"; s[0] = 'H';",
    textAr: "ماذا يحدث عند تشغيل الكود التالي: char *s = \"hello\"; s[0] = 'H'; ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Modifies s to \"Hello\" successfully." },
      { id: "b", text: "b) Runtime Crash (Segmentation Fault / Access Violation)." },
      { id: "c", text: "c) Ignored silently without change." },
      { id: "d", text: "d) Compile-time syntax error." }
    ],
    correctAnswer: "b",
    source: "Memory Segments & .rodata Section Protection",
    explanation: `الخيار (b) هو الصحيح: انهيار البرنامج فوراً (Crash / Segfault)!
السبب المعماري:
السلاسل النصية الحرفية (String Literals) مثل "hello" تُخزن بواسطة المترجم ونظام التشغيل في قسم الذاكرة المخصص للقراءة فقط (.rodata / Read-Only Data Segment).
المؤشر s يؤشر إلى عنوان في هذه المنطقة، وعند محاولة الكتابة وتعديل s[0] يتدخل نظام التشغيل ويطلق استثناء حماية الذاكرة (Memory Access Violation) ويوقف البرنامج فوراً!`,
    details: "String literals are stored in read-only memory. Modifying them causes undefined behavior (OS page fault crash)."
  },
  {
    id: "ext_6",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Signed 8-bit Overflow Wrap-Around",
    text: "What will be printed by this code on an architecture with 8-bit signed char?",
    textAr: "ما هو الناتج المطبوع من الكود التالي؟",
    codeSnippet: `char c = 127;
c++;
cout << (int)c;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 128" },
      { id: "b", text: "b) -128" },
      { id: "c", text: "c) 0" },
      { id: "d", text: "d) -1" }
    ],
    correctAnswer: "b",
    source: "Two's Complement 8-bit Overflow Mechanics",
    explanation: `الخيار (b) هو الصحيح: -128!
الشرح:
المدى الأقصى لـ signed char (8 بت) هو من -128 إلى +127.
تمثيل +127 ثنائياً هو: 01111111.
عند إضافة 1 (c++):
01111111 + 1 = 10000000.
في نظام المكمل الثنائي (Two's complement)، الشفرة 10000000 تمثل بدقة الرقم -128!`,
    details: "In signed 8-bit two's complement: 01111111 (+127) + 1 = 10000000 (-128)."
  },
  {
    id: "ext_7",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Ternary Operator Common Type Promotion",
    text: "What is the data type and exact output of the expression: (true ? 1 : 2.5)?",
    textAr: "ما هو نوع البيانات والناتج الدقيق للتعبير: (true ? 1 : 2.5)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) int with value 1" },
      { id: "b", text: "b) double with value 1.0" },
      { id: "c", text: "c) Compile Error: mismatched branch types" },
      { id: "d", text: "d) float with value 1.0f" }
    ],
    correctAnswer: "b",
    source: "Conditional Operator Common Type [expr.cond]",
    explanation: `الخيار (b) هو الصحيح: double بقيمة 1.0!
المصيدة:
المعامل الشرطي (Ternary Operator) يجب أن يكون لكلا فرعيه نوع بيانات مشترك وموحد (Common Type) يتم تحديده وقت الترجمة (Compile-time).
نظراً لأن الطرف الثاني 2.5 هو double، يتم ترقية الطرف الأول (الرقم الصحيح 1) تلقائياً إلى double (1.0) حتى لو كان الشرط صحيحاً دائماً!`,
    details: "The conditional operator determines a single common type for both operands at compile-time (int promotes to double)."
  },
  {
    id: "ext_8",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Bitwise XOR Swap Trap on Same Memory",
    text: "What happens if you execute XOR swap on the same memory location: *a ^= *a; *a ^= *a; *a ^= *a;?",
    textAr: "ماذا يحدث عند تنفيذ خوارزمية التبديل بـ XOR الشهيرة على نفس عنوان المتغير في الذاكرة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) The variable retains its original value." },
      { id: "b", text: "b) The variable becomes 0." },
      { id: "c", text: "c) Syntax Error." },
      { id: "d", text: "d) Undefined Behavior." }
    ],
    correctAnswer: "b",
    source: "XOR Swap Algorithm Edge Case Trap",
    explanation: `الخيار (b) هو الصحيح: يصبح المتغير صفراً (0)!
المصيدة:
السطر الأول: *a ^= *a يقوم بتنفيذ عملية XOR بين الرقم ونفسه، وناتج x ^ x هو دائماً 0!
يتم تخزين 0 في مكان الذاكرة، ثم أي عمليات XOR لاحقة مع 0 تظل 0.
لذلك دوال التبديل بـ XOR تفشل وتدمر البيانات إذا كان المؤشران يشيران إلى نفس العنصر (Self-swap)!`,
    details: "x ^ x == 0. When both operands point to the same memory address, the first step zeros the variable permanently."
  },
  {
    id: "ext_9",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Relational Operator Chaining Trap",
    text: "What will be printed by the chained comparison: cout << (5 < 4 < 3); ?",
    textAr: "ما هو الناتج المطبوع من المقارنة المتسلسلة: cout << (5 < 4 < 3); ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 0 (False)" },
      { id: "b", text: "b) 1 (True)" },
      { id: "c", text: "c) Compile Error" },
      { id: "d", text: "d) 3" }
    ],
    correctAnswer: "b",
    source: "Relational Operator Associativity",
    explanation: `الخيار (b) هو الصحيح: 1 (True)!
المصيدة الرياضية:
في الرياضيات 5 < 4 < 3 تعني (5 < 4 و 4 < 3) وهي خطأ.
أما في C++، المعامل < يترابط من اليسار إلى اليمين:
1) يُحسب أولاً: 5 < 4 وهو False (يعيد 0).
2) تصبح المعادلة: 0 < 3.
3) وبما أن الصفر أصغر من 3، فالناتج هو True (يعيد 1)!`,
    details: "Evaluates as (5 < 4) < 3 -> 0 < 3 -> 1 (true)."
  },
  {
    id: "ext_10",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "auto Keyword Type Deduction Stripping const",
    text: "What will be printed by this code snippet?",
    textAr: "ما هو الناتج المطبوع من استنتاج النوع بـ auto التالي؟",
    codeSnippet: `const int x = 10;
auto y = x;
y++;
cout << y;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Compile Error: cannot increment read-only variable y." },
      { id: "b", text: "b) 11" },
      { id: "c", text: "c) 10" },
      { id: "d", text: "d) Undefined" }
    ],
    correctAnswer: "b",
    source: "Modern C++ Auto Type Deduction Rules",
    explanation: `الخيار (b) هو الصحيح: 11 (ويعمل بدون أي خطأ تجميع)!
المصيدة:
قواعد auto في C++ تنص على أنها عند إنشاء نسخة جديدة بالقيمة (By-value deduction)، تقوم بحذف الكلمة المفتاحية const العلوية (Top-level const)!
لذلك نوع y هو int عادي وليس const int، وبالتالي يمكن تعديله وزيادته ليصبح 11!`,
    details: "By-value auto deduction strips top-level const and reference qualifiers."
  },
  {
    id: "ext_11",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Array Parameter Decay Inside Function",
    text: "On a 64-bit architecture, what is printed by: void f(int arr[100]) { cout << sizeof(arr); }?",
    textAr: "على نظام 64-bit، ما هو الناتج المطبوع من دالة تستقبل مصفوفة محددة الحجم بـ 100 عنصر؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 400 (100 * 4 bytes)" },
      { id: "b", text: "b) 8" },
      { id: "c", text: "c) 100" },
      { id: "d", text: "d) 4" }
    ],
    correctAnswer: "b",
    source: "Array-to-Pointer Decay [dcl.fct]",
    explanation: `الخيار (b) هو الصحيح: 8 بايت!
المصيدة الكلاسيكية:
في لغة C++، لا يمكن لدالة أن تستقبل مصفوفة بالقيمة على الإطلاق.
أي وسيط مصفوفة مثل int arr[100] أو int arr[] يتحول تلقائياً بواسطة المترجم إلى مؤشر عادي: int* arr (وهذا ما يُسمى Array Decay).
وحيث إن حجم المؤشر في معمارية 64-bit هو 8 بايت، فإن sizeof(arr) تعيد 8 بايت وليس 400 بايت!`,
    details: "Array parameter declarations decay into pointer parameters; sizeof(arr) evaluates to sizeof(int*) = 8 bytes on 64-bit."
  },
  {
    id: "ext_12",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Bitwise NOT on unsigned char Promotion",
    text: "What will be printed by: unsigned char c = 0; cout << (int)(~c); on a 32-bit int architecture?",
    textAr: "ما هو الناتج المطبوع من التعبير: unsigned char c = 0; cout << (int)(~c); ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 255" },
      { id: "b", text: "b) -1" },
      { id: "c", text: "c) 0" },
      { id: "d", text: "d) 65535" }
    ],
    correctAnswer: "b",
    source: "Integer Promotion Rules [conv.prom]",
    explanation: `الخيار (b) هو الصحيح: -1 وليس 255!
المصيدة الفتاكة:
قبل تطبيق أي معامل بتات (Bitwise operator مثل ~)، تفرض لغة C++ ترقية الأنواع الصغيرة (Integer Promotion) إلى نوع int قياسي (32-bit signed)!
1) المتغير c (قيمة 0) تتم ترقيته إلى signed int ذي 32 صفراً: (0x00000000).
2) معامل النفي ~c يقلب الـ 32 بت لتصبح كلها آحاد: (0xFFFFFFFF).
3) وفي نظام Two's complement، القيمة 0xFFFFFFFF تمثل بدقة الرقم -1!`,
    details: "unsigned char is promoted to signed int before applying ~. ~0 in 32-bit signed int equals -1."
  },
  {
    id: "ext_13",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Pointer Negative Subscript Arithmetic",
    text: "What is printed by: int a[] = {10, 20, 30, 40}; int *p = a + 3; cout << p[-2];?",
    textAr: "ما هو الناتج المطبوع من استخدام فهرس سالب مع مؤشر: int *p = a + 3; cout << p[-2]; ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 20" },
      { id: "b", text: "b) 30" },
      { id: "c", text: "c) 10" },
      { id: "d", text: "d) Compile Error: negative subscript is illegal" }
    ],
    correctAnswer: "a",
    source: "Pointer Offset Syntax & Negative Indices",
    explanation: `الخيار (a) هو الصحيح: 20!
المفهوم:
في C++، التعبير p[-2] يُترجم بدقة إلى: *(p - 2).
المؤشر p يشير إلى العنصر في الفهرس 3 (قيمة 40).
عند طرح 2 (p - 2)، يرجع المؤشر خطوتين للوراء ليشير إلى الفهرس 1 (العنصر 20)!`,
    details: "p[-2] is strictly equivalent to *(p - 2). From index 3, moving back 2 positions lands at index 1 (value 20)."
  },
  {
    id: "ext_14",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Static Local Variable Persistence Across Calls",
    text: "What will be printed when calling this function three consecutive times?",
    textAr: "ماذا سيطبع هذا البرنامج عند استدعاء الدالة ثلاث مرات متتالية؟",
    codeSnippet: `void counter() {
    static int count = 10;
    cout << count++ << " ";
}
int main() {
    counter(); counter(); counter();
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 10 10 10" },
      { id: "b", text: "b) 10 11 12" },
      { id: "c", text: "c) 11 12 13" },
      { id: "d", text: "d) 10 12 14" }
    ],
    correctAnswer: "b",
    source: "Static Storage Duration Mechanics",
    explanation: `الخيار (b) هو الصحيح: 10 11 12!
المفهوم:
المتغير المعرف بـ static داخل دالة يتم تهيئته لمرة واحدة فقط طوال فترة تشغيل البرنامج (في أول استدعاء)، ويحتفظ بقيمته في الذاكرة الثابتة (Data Segment) بين الاستدعاءات المختلفة.`,
    details: "Static local variables maintain their value across function invocations and are initialized only once."
  },
  {
    id: "ext_15",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Branchless Absolute Value Formula",
    text: "What does the formula: (x ^ (x >> 31)) - (x >> 31) calculate for any 32-bit signed integer x?",
    textAr: "ماذا تحسب المعادلة البرمجية الفتاكة: (x ^ (x >> 31)) - (x >> 31) لأي رقم صحيح x بدون أي تفرع (Branchless)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Always returns 0" },
      { id: "b", text: "b) Computes abs(x) (Absolute Value)" },
      { id: "c", text: "c) Multiplies x by 31" },
      { id: "d", text: "d) Reverses all bits of x" }
    ],
    correctAnswer: "b",
    source: "Hacker's Delight Bit Twiddling Hacks",
    explanation: `الخيار (b) هو الصحيح: القيمة المطلقة abs(x) بدقة فائقة وبدون أي أمر if!
الشرح العبقري:
1) إذا كان x موجباً: x >> 31 ينتج 0. فتكون المعادلة: (x ^ 0) - 0 = x (يبقى كما هو).
2) إذا كان x سالباً: x >> 31 ينتج -1 (جميع البتات آحاد 1111...1111).
فتكون المعادلة: (x ^ -1) - (-1) = (~x) + 1، وهذا هو تعريف المكمل الثنائي لتحويل الرقم السالب إلى موجب تماماً!`,
    details: "If positive, mask=0 -> (x^0)-0=x. If negative, mask=-1 -> (x^-1)-(-1) = ~x + 1 = -x. Computes abs(x) with zero CPU branch penalties."
  },
  {
    id: "ext_16",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "IEEE-754 Single-Precision Representation of +1.0f",
    text: "What is the exact 32-bit Hexadecimal representation of floating-point number +1.0f under IEEE-754?",
    textAr: "ما هو التمثيل الست عشري الدقيق للرقم العشري +1.0f وفقاً لمعيار IEEE-754 في 32 بت؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 0x00000001" },
      { id: "b", text: "b) 0x3F800000" },
      { id: "c", text: "c) 0x40000000" },
      { id: "d", text: "d) 0x7F800000" }
    ],
    correctAnswer: "b",
    source: "IEEE-754 Floating-Point Standard Bit Layout",
    explanation: `الخيار (b) هو الصحيح: 0x3F800000!
التفكيك المعماري للرقم +1.0:
1) بت الإشارة: 0 (موجب).
2) الأس المنحاز: 0 + 127 = 127 = 01111111 ثنائياً.
3) الكسر: 23 صفراً بعد حذف الـ 1 الضمني.
تجميع البتات: 0011 1111 1000 0000 ... = 0x3F800000.`,
    details: "Sign: 0, Exponent: 127 (01111111), Fraction: 0. Hex = 0x3F800000."
  },
  {
    id: "ext_17",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "IEEE-754 NaN Self-Equality Property",
    text: "In IEEE-754 floating-point standard, what is the result of the expression: (NAN == NAN)?",
    textAr: "في معيار IEEE-754، ما هو ناتج مقارنة القيمة الخاصة (NAN == NAN)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) true" },
      { id: "b", text: "b) false" },
      { id: "c", text: "c) Undefined compilation error" },
      { id: "d", text: "d) Throws FloatingPointException" }
    ],
    correctAnswer: "b",
    source: "IEEE-754 Section 5.11 Comparison Specifications",
    explanation: `الخيار (b) هو الصحيح: false دائماً!
القيمة NaN (Not a Number) هي القيمة الوحيدة في معمارية الحواسب التي لا تساوي نفسها أبداً رياضياً وبرمجياً (NaN == NaN يعيد false دائماً).`,
    details: "By IEEE-754 definition, any comparison involving NaN (except !=) returns false. NaN != NaN returns true."
  },
  {
    id: "ext_18",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Cache Line Spatial Locality & Matrix Traversal",
    text: "Why is iterating through a 2D matrix in C++ row-by-row (matrix[i][j]) up to 20x faster than column-by-column (matrix[j][i])?",
    textAr: "لماذا يكون مسح المصفوفة ثنائية الأبعاد في C++ صفاً بصف (matrix[i][j]) أسرع بـ 20 ضعفاً من مسحها عموداً بعمود (matrix[j][i])؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Row-major layout enables spatial locality, filling 64-byte CPU cache lines sequentially." },
      { id: "b", text: "b) The compiler optimizes row loops automatically." },
      { id: "c", text: "c) Columns consume more memory than rows." },
      { id: "d", text: "d) Rows are stored in CPU registers." }
    ],
    correctAnswer: "a",
    source: "Hardware Spatial Locality & CPU Cache Lines",
    explanation: `الخيار (a) هو الصحيح!
في C++ المصفوفات تُخزن في الذاكرة بنظام Row-Major (عناصر الصف الواحد متجاورة).
مسح الصفوف يسحب سطور الكاش (64 بايت) بالتتابع ويحقق 100% Cache Hits، بينما مسح الأعمدة يقفز بمسافات هائلة ويحدث Cache Miss في كل وصول.`,
    details: "C++ stores 2D arrays in contiguous row-major order. Sequential access leverages 64-byte L1 cache lines."
  },
  {
    id: "ext_19",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Branch Predictor Penalty in Unsorted vs Sorted Arrays",
    text: "Why does summing array elements greater than 128 (if arr[i] > 128) run 3x-5x faster on a sorted array than an unsorted array?",
    textAr: "لماذا تعمل حلقة شرطية (if arr[i] > 128) أسرع بـ 3 إلى 5 أضعاف على مصفوفة مرتبة مقارنة بنفس المصفوفة غير المرتبة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) The CPU branch predictor achieves near 100% accuracy on sorted data, avoiding pipeline branch stalls." },
      { id: "b", text: "b) Sorting shrinks the data size in memory." },
      { id: "c", text: "c) Unsorted arrays cause memory fragmentation." },
      { id: "d", text: "d) Sorted arrays bypass the ALU." }
    ],
    correctAnswer: "a",
    source: "Stack Overflow #1 All-time Question (CPU Branch Prediction)",
    explanation: `الخيار (a) هو الصحيح!
وحدة متنبئ التفرع (Branch Predictor) تتوقع نتائج الشروط مسبقاً في الـ Pipeline.
في المصفوفة المرتبة تأتي كل الـ Falses معاً ثم كل الـ Trues معاً فتكون الدقة 99%، بينما في غير المرتبة يفشل التنبؤ (Branch Misprediction) ويفرغ المعالج الـ Pipeline بالكامل.`,
    details: "Branch misprediction flushes the entire instruction pipeline, wasting 15-20 CPU cycles per miss."
  },
  {
    id: "ext_20",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Struct Memory Alignment & Padding Trap",
    text: "On a 64-bit compiler, what is sizeof(struct S { char a; int b; char c; })?",
    textAr: "على مترجم 64-bit، ما هو الحجم الفعلي للـ struct التالي في الذاكرة؟",
    codeSnippet: `struct S {
    char a;
    int b;
    char c;
};
cout << sizeof(S);`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 6 bytes (1 + 4 + 1)" },
      { id: "b", text: "b) 12 bytes" },
      { id: "c", text: "c) 8 bytes" },
      { id: "d", text: "d) 16 bytes" }
    ],
    correctAnswer: "b",
    source: "Data Structure Alignment & Hardware Padding Rules",
    explanation: `الخيار (b) هو الصحيح: 12 بايت وليس 6 بايت!
بسبب محاذاة العناوين (Data Alignment) بمضاعفات الـ 4 بايت:
char a (1 بايت) + 3 بايت حشو (Padding).
int b (4 بايت).
char c (1 بايت) + 3 بايت حشو نهائي (Tail Padding).
الإجمالي = 12 بايت!`,
    details: "Alignment requires variables to sit on memory addresses multiples of their size. Padding expands size from 6 to 12 bytes."
  },
  {
    id: "ext_21",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Nested Multiplicative Loop Exact Complexity",
    text: "What is the exact tight asymptotic time complexity of the following nested loop?",
    textAr: "ما هو التعقيد الزمني المقارب الدقيق للحلقة المتداخلة التالية؟",
    codeSnippet: `int sum = 0;
for (int i = 1; i <= n; i *= 2) {
    for (int j = 1; j <= i; j++) {
        sum++;
    }
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) O(n log n)" },
      { id: "b", text: "b) O(n)" },
      { id: "c", text: "c) O(n^2)" },
      { id: "d", text: "d) O(log^2 n)" }
    ],
    correctAnswer: "b",
    source: "Geometric Series Loop Analysis Trap",
    explanation: `الخيار (b) هو الصحيح: O(n) خطي وليس O(n log n)!
عدد التكرارات: 1 + 2 + 4 + 8 + ... + n = 2n - 1.
وحيث إن (2n - 1) دالة خطية بحتة، فالتعقيد هو O(n).`,
    details: "Sum: 1 + 2 + 4 + ... + 2^k where 2^k <= n is bounded by 2n - 1 = O(n)."
  },
  {
    id: "ext_22",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Floyd's Cycle Detection Space Complexity",
    text: "Why is Floyd's Cycle-Finding Algorithm (Tortoise and Hare) superior to hash-table based cycle detection in linked lists?",
    textAr: "لماذا تتفوق خوارزمية السلحفاة والأرنب (Floyd's Algorithm) على جداول الهاش في كشف الحلقات المغلقة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) It requires only O(1) auxiliary space versus O(n) space for hash tables." },
      { id: "b", text: "b) It runs in O(log n) time." },
      { id: "c", text: "c) It can only work on doubly linked lists." },
      { id: "d", text: "d) It sorts the list while detecting cycles." }
    ],
    correctAnswer: "a",
    source: "Competitive Programming Classic Algorithms",
    explanation: `الخيار (a) هو الصحيح: تحتاج فقط مساحة ذاكرة إضافية O(1) ثابتة بدلاً من O(n)!
تستخدم مؤشرين فقط (Slow يتحرك خطوة، و Fast يتحرك خطوتين)، وتلتقي في أي حلقة مغلقة بزمن O(n) وبدون أي مصفوفات أو جداول هاش إضافية.`,
    details: "Floyd's algorithm runs in O(n) time and O(1) auxiliary space."
  },
  {
    id: "ext_23",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Extended Master Theorem Recurrence Case",
    text: "What is the time complexity of the recurrence relation: T(n) = 2T(n/2) + n log n?",
    textAr: "ما هو التعقيد الزمني لمعادلة التكرار: T(n) = 2T(n/2) + n log n؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) O(n log n)" },
      { id: "b", text: "b) O(n log^2 n)" },
      { id: "c", text: "c) O(n^2)" },
      { id: "d", text: "d) O(n)" }
    ],
    correctAnswer: "b",
    source: "Extended Master Theorem Case 2b",
    explanation: `الخيار (b) هو الصحيح: O(n log^2 n)!
وفق الحالة الممتدة من نظرية الماستر (Case 2 Extended Master Theorem):
حيث إن a=2, b=2, n^(log_b a) = n، ودالة العمل f(n) = n log^1 n، فإن الناتج يرفع قوة اللوغاريتم بمقدار 1: Θ(n log^2 n).`,
    details: "By Extended Master Theorem Case 2: when f(n) = Theta(n^(log_b a) * log^k n), T(n) = Theta(n^(log_b a) * log^(k+1) n)."
  },
  {
    id: "ext_24",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "QuickSort Inherent Instability Cause",
    text: "Why is standard QuickSort classified as an UNSTABLE sorting algorithm?",
    textAr: "لماذا تُصنف خوارزمية الترتيب السريع (QuickSort) بأنها غير مستقرة (Unstable)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Long-distance swaps across the pivot can reorder identical elements." },
      { id: "b", text: "b) It has worst-case O(n^2) complexity." },
      { id: "c", text: "c) It uses recursion." },
      { id: "d", text: "d) It cannot sort strings." }
    ],
    correctAnswer: "a",
    source: "Sorting Stability Definitions",
    explanation: `الخيار (a) هو الصحيح!
في QuickSort، عمليات التبديل تتم عبر مسافات بعيدة عبر المحور (Pivot Partitioning)، مما قد يقفز بعنصر فوق عنصر مساوٍ له ويغير ترتيبهما النسبي الأصلي في المصفوفة.`,
    details: "Partitioning swaps non-adjacent elements over the pivot, disrupting relative order of equal keys."
  },
  {
    id: "ext_25",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Turing's Halting Problem Impossibility",
    text: "What fundamental mathematical truth was proven by Alan Turing regarding the Halting Problem (1936)?",
    textAr: "ما هي الحقيقة الرياضية الكبرى التي أثبتها آلان تورينج في معضلة التوقف (Halting Problem)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) It is impossible for any general algorithm to determine whether every arbitrary program halts." },
      { id: "b", text: "b) All C++ programs halt within finite memory." },
      { id: "c", text: "c) Infinite loops can be detected 100% by modern compilers." },
      { id: "d", text: "d) Recursion is faster than iteration." }
    ],
    correctAnswer: "a",
    source: "Theoretical Computer Science & Computability Theory",
    explanation: `الخيار (a) هو الصحيح!
أثبت تورينج بالبرهان الرياضي أنه يستحيل وجود خوارزمية حاسوبية عامة يمكنها فحص أي كود عشوائي وتحديد ما إذا كان سيتوقف حتماً أم سيدخل في حلقة لا نهائية (Undecidable Problem).`,
    details: "The Halting Problem is undecidable; no universal algorithm can solve it for all program-input pairs."
  },
  {
    id: "ext_26",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Two's Complement Fraction Overflow Edge",
    text: "In 8-bit two's complement, what is the binary result of (-128) / (-1)?",
    textAr: "في نظام 8-bit Two's complement، ما هي النتيجة الحسابية لقسمة: (-128) / (-1)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) +128" },
      { id: "b", text: "b) Hardware Overflow Exception (Integer Overflow Crash)" },
      { id: "c", text: "c) -128" },
      { id: "d", text: "d) 0" }
    ],
    correctAnswer: "b",
    source: "x86 IDIV Hardware Division Overflow Trap",
    explanation: `الخيار (b) هو الصحيح: خطأ فيض عتادي مميت يوقف البرنامج (Divide Error)!
في معالجات x86 و C++، قسمة أصغر رقم سالب INT_MIN على -1 تُنتج رياضياً +128، وهو خارج المدى الموجب الأقصى (+127)، فيطلق المعالج استثناء عتادياً فتاكاً (Divide Error) ويتحطم البرنامج فوراً!`,
    details: "INT_MIN / -1 overflows positive signed range, triggering an x86 integer division exception crash."
  },
  {
    id: "ext_27",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Dutch National Flag Algorithm Passes",
    text: "How many passes over the array does Dijkstra's Dutch National Flag algorithm take to sort an array containing only values 0, 1, and 2?",
    textAr: "كم عدد مرات المرور (Passes) التي تحتاجها خوارزمية علم هولندا (Dijkstra) لترتيب مصفوفة تحتوي فقط على القيم 0 و 1 و 2؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Exactly 1 pass (Single linear pass O(n))" },
      { id: "b", text: "b) 2 passes" },
      { id: "c", text: "c) 3 passes" },
      { id: "d", text: "d) O(log n) passes" }
    ],
    correctAnswer: "a",
    source: "Dijkstra's Three-Way Partitioning",
    explanation: `الخيار (a) هو الصحيح: مرور واحد فقط (Single Pass O(n))!
تستخدم 3 مؤشرات وتفرز المصفوفة في مسح واحد مستمر دون أي مصفوفات مساعدة O(1) space.`,
    details: "Dijkstra's Dutch National Flag algorithm partitions 3 distinct keys in exactly one pass using 3 pointers."
  },
  {
    id: "ext_28",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Sign-Magnitude Multiplication Sign Rule",
    text: "In Sign-Magnitude arithmetic hardware, how is the sign of the product determined when multiplying two numbers?",
    textAr: "في دوائر العتاد الرقمي بنظام الإشارة والمقدار، كيف تُحسب إشارة ناتج الضرب؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Sign_A XOR Sign_B" },
      { id: "b", text: "b) Sign_A AND Sign_B" },
      { id: "c", text: "c) Sign_A OR Sign_B" },
      { id: "d", text: "d) Two's complement addition" }
    ],
    correctAnswer: "a",
    source: "Computer Arithmetic Hardware Design",
    explanation: `الخيار (a) هو الصحيح: Sign_A XOR Sign_B!
بوابة XOR تعيد 0 إذا تماثلت الإشارات (موجب × موجب = موجب، وسالب × سالب = موجب)، وتعيد 1 إذا اختلفت الإشارات، في دورة ساعة واحدة.`,
    details: "XOR gate directly mirrors the mathematical multiplication sign rule: same signs -> 0, different signs -> 1."
  },
  {
    id: "ext_29",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Virtual Table (vtable) Pointer Overhead",
    text: "In C++, what does adding the keyword 'virtual' to a class method add to each instance of that class in memory?",
    textAr: "في C++، ما الذي يضيفه وجود دالة وهمية 'virtual' داخل الكلاس إلى كل كائن من هذا الكلاس في الذاكرة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) A virtual table pointer (vptr) of size 8 bytes on 64-bit systems." },
      { id: "b", text: "b) Nothing (purely compile-time)." },
      { id: "c", text: "c) Copies the whole function code into the object." },
      { id: "d", text: "d) 4 bytes regardless of architecture." }
    ],
    correctAnswer: "a",
    source: "C++ Object Model & Dynamic Polymorphism",
    explanation: `الخيار (a) هو الصحيح: مؤشر خفي vptr بحجم 8 بايت!
يُنشئ المترجم جدول دوال وهمية (vtable)، ويضع داخل كل كائن مؤشراً خفياً (vptr) بحجم 8 بايت في معمارية 64-bit.`,
    details: "Classes with virtual functions contain an implicit vptr pointing to the class's vtable."
  },
  {
    id: "ext_30",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Order of Evaluation in Function Arguments C++17",
    text: "In modern C++17, what is the order of evaluation of arguments in a function call f(a(), b(), c())?",
    textAr: "في معيار C++17، ما هو ترتيب تقييم وسائط استدعاء الدالة f(a(), b(), c())؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Left-to-right strictly." },
      { id: "b", text: "b) Unspecified order, but no interleaving of subexpressions." },
      { id: "c", text: "c) Right-to-left strictly." },
      { id: "d", text: "d) Simultaneous parallel execution." }
    ],
    correctAnswer: "b",
    source: "C++17 Order of Evaluation [expr.call]",
    explanation: `الخيار (b) هو الصحيح: ترتيب غير محدد (Unspecified)، ولكن بدون تداخل!
معيار C++ لا يفرض ما إذا كان المترجم سيبدأ بـ a() أو b() أو c()، ولكنه يضمن في C++17 أن كل استدعاء يكتمل كلياً قبل بدء التالي دون تداخل.`,
    details: "Function arguments have unspecified evaluation order; code depending on a specific argument evaluation order is non-portable."
  }
];

// Automatically register into questionsData if loaded
if (typeof questionsData !== 'undefined') {
  const nonExtreme = questionsData.filter(q => q.category !== 'extreme');
  questionsData.length = 0;
  questionsData.push(...nonExtreme, ...extremeQuestionsData);
}
