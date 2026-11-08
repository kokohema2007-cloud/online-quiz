// =========================================================================
// 💀 EXTREME QUESTIONS BANK - FINAL BOSS LEVEL (أسئلة الدمار - ليفل الوحش)
// ⚠️ جميع الأسئلة هنا مأخوذة 100% من صميم منهج السلايدز وورقة الامتحان!
// تركز على الفخاخ العميقة، التريكات الخادعة، الحسابات المعقدة، وأسرار C++
// =========================================================================

const extremeQuestionsData = [
  // =========================================================================
  // 1. EXTREME TRUE / FALSE (صح أو خطأ - فخاخ وتريكات من صميم المنهج) [10 أسئلة]
  // =========================================================================
  {
    id: "ext_tf_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Integer Division in Temperature Formula",
    text: "In C++, the expression (9 / 5) in the formula F = (C * (9 / 5)) + 32 evaluates to 1.8 because division automatically produces a floating-point result.",
    textAr: "في لغة C++، ناتج التعبير (9 / 5) في معادلة التحويل F = (C * (9 / 5)) + 32 يساوي 1.8 لأن عملية القسمة تعطي دائماً ناتجاً كسرياً تلقائياً.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 6 (Temperature Conversion) & C++ Arithmetic Rules",
    explanation: "خطأ (False). في لغة C++، قسمة عدد صحيح على عدد صحيح (Integer / Integer) تؤدي إلى اقتطاع الجزء الكسري تماماً (Truncation) وإعطاء الناتج الصحيح 1 فقط وليس 1.8! لكي يعطي 1.8 يجب كتابة 9.0 / 5.0.",
    details: "Integer division in C++ always truncates fractions toward zero. 9 / 5 == 1. To get 1.8, write 9.0 / 5.0 or 1.8."
  },
  {
    id: "ext_tf_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Modulo Operator with Floating-Point Types",
    text: "In C++, the modulo operator (%) can be used with floating-point variables, for example: double r = 7.5 % 2.0;",
    textAr: "في لغة C++، يمكن استخدام معامل باقي القسمة (%) مع المتغيرات الكسرية مثل: double r = 7.5 % 2.0;",
    type: "boolean",
    correctAnswer: false,
    source: "C++ Operators Standard Rules & Slide 7",
    explanation: "خطأ (False). معامل باقي القسمة (%) في C++ مخصص للأعداد الصحيحة (integers) فقط! استخدامه مع float أو double يسبب خطأ تصريف (Compile Error). لحساب باقي قسمة الكسور يُستخدم دالة fmod().",
    details: "The % operator requires integer operands. Floating-point types cause a compilation error."
  },
  {
    id: "ext_tf_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "4-bit Two's Complement Range & Overflow",
    text: "In a 4-bit Two's Complement system, adding binary 0110 (+6) and 0011 (+3) produces the correct positive decimal value +9 without overflow.",
    textAr: "في نظام المكمل الثنائي المكون من 4 بت، ناتج جمع 0110 (+6) مع 0011 (+3) يعطي القيمة الصحيحة +9 دون حدوث طفحان (Overflow).",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 10 (4-bit Two's Complement Overflow)",
    explanation: "خطأ (False). أقصى رقم موجب يمكن تمثيله في 4 بت بنظام المكمل الثنائي هو +7 (المدى من -8 إلى +7). ناتج الجمع الثنائي هو 1001 والذي يمثل الرقم السالب -7! جمع موجبين أعطى سالباً، وحدث فيض حسابي (Signed Overflow).",
    details: "4-bit signed 2's complement range is -8 to +7. (+6) + (+3) = +9 exceeds +7, causing signed overflow (result becomes 1001 = -7)."
  },
  {
    id: "ext_tf_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Compiler Error Correction Capability",
    text: "Modern C++ compilers have the built-in capability to automatically detect and correct all syntax errors in source code before compiling.",
    textAr: "تمتلك مترجمات C++ الحديثة القدرة المدمجة على اكتشاف وتصحيح جميع الأخطاء النحوية (Syntax Errors) تلقائياً قبل التصريف.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 9 (A compiler can correct syntax errors automatically: False)",
    explanation: "خطأ (False). المترجم (Compiler) يكتشف الأخطاء النحوية ويُبلغ عنها في رسائل الخطأ، لكنه لا يستطيع تصحيحها تلقائياً على الإطلاق، بل يجب على المبرمج تصحيحها يدوياً.",
    details: "Compilers can only diagnose and report syntax errors; they cannot automatically correct them."
  },
  {
    id: "ext_tf_5",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Postfix Increment Precedence in r = x + y++",
    text: "In the C++ statement: r = x + y++; if x = 3 and y = 6, the variable r will be assigned 10 because y is incremented before the addition.",
    textAr: "في جملة C++ التالية: r = x + y++; إذا كانت x = 3 و y = 6، فإن المتغير r سيأخذ القيمة 10 لأن y تزداد قبل الجمع.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 7 - Question 5 (int main: r = x + y++)",
    explanation: "خطأ (False). المعامل البعدي (Postfix y++) يستخدم القيمة الحالية لـ y (وهي 6) في عملية الجمع أولاً: 3 + 6 = 9، ثم بعد الانتهاء من السطر تزداد y لتصبح 7. لذلك r تأخذ القيمة 9 وليس 10!",
    details: "Postfix increment returns the old value before incrementing. r = 3 + 6 = 9, and y becomes 7."
  },
  {
    id: "ext_tf_6",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Accidental Semicolon After if Condition",
    text: "In the code: if (x < 0); { cout << \"Negative\"; } the word 'Negative' will strictly only be printed if x is indeed less than 0.",
    textAr: "في الكود: if (x < 0); { cout << \"Negative\"; } ستتم طباعة كلمة 'Negative' فقط وحصرياً إذا كانت x أقل من صفر بالفعل.",
    type: "boolean",
    correctAnswer: false,
    source: "C++ Syntax Traps & Slide 8 (Check Positive/Negative)",
    explanation: "خطأ (False). وجود الفاصلة المنقوطة (;) مباشرة بعد قوس الشرط ينهي جملة if بجسم فارغ (Empty Statement)، مما يجعل القوسين المعقوفين التاليين { cout << \"Negative\"; } كتلة برمجية مستقلة تُنفذ دائماً بغض النظر عن قيمة x!",
    details: "A semicolon after if(...) terminates the conditional branch with a null statement; the following block executes unconditionally."
  },
  {
    id: "ext_tf_7",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Floating-Point Expression in switch Statement",
    text: "In C++, the switch statement can evaluate floating-point expressions directly, such as switch (gpa) where gpa is of type double.",
    textAr: "في لغة C++، يمكن لجملة switch تقييم المتغيرات ذات الفاصلة العائمة مباشرة، مثل switch (gpa) حيث gpa من نوع double.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 10 (Convert if/else to switch) & C++ Standard Rules",
    explanation: "خطأ (False). جملة switch في C++ تشترط أن يكون التعبير من نوع صحيح (integral type مثل int أو char). يمنع المعيار تماماً استخدام double أو float في جملة switch ويعطي خطأ تصريف.",
    details: "The switch condition must evaluate to an integral or enumeration type; floating-point types (float, double) are illegal."
  },
  {
    id: "ext_tf_8",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Uniqueness of Zero in Two's Complement",
    text: "Unlike Signed Magnitude and 1's Complement, the Two's Complement system has only one unique binary representation for the number zero.",
    textAr: "على عكس نظام الإشارة والمقدار والمكمل الأحادي، يمتلك نظام المكمل الثنائي (Two's Complement) تمثيلاً ثنائياً وحيداً وموحداً للرقم صفر.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 3 & Number Systems Curriculum",
    explanation: "صحيح (True). في نظام الإشارة والمقدار والمكمل الأحادي يوجد صفران (+0 و -0) مما يسبب هدراً وتعقيداً في العتاد. أما في المكمل الثنائي فالصفر له تمثيل واحد فقط (00000000)، وهذا من أهم أسباب اعتماده في كافة المعالجات.",
    details: "Two's complement eliminates the dual-zero problem (+0 and -0) found in signed magnitude and 1's complement."
  },
  {
    id: "ext_tf_9",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Logic Error vs Syntax Error Detection",
    text: "If a programmer accidentally writes 'area = width + height;' instead of 'area = width * height;', the compiler will detect this and report it as a syntax error.",
    textAr: "إذا كتب المبرمج بالخطأ 'area = width + height;' بدلاً من 'area = width * height;'، سيكتشف المترجم ذلك ويبلغ عنه كخطأ نحوي (Syntax Error).",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 7 & Slide 7 Question 1",
    explanation: "خطأ (False). هذا خطأ منطقي (Logic Error). الجملة صحيحة تماماً من حيث قواعد اللغة (Syntax)، ولذلك سيقوم المترجم بتصريف البرنامج بنجاح دون أي تنبيه، ولكن البرنامج سيعطي نواتج خاطئة أثناء التشغيل.",
    details: "Logic errors violate problem requirements, not language grammar. Compilers cannot detect logic errors."
  },
  {
    id: "ext_tf_10",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Variable Identifier Starting with Underscore",
    text: "In C++, a variable name can legally begin with an underscore character (_), such as _counter.",
    textAr: "في لغة C++، يجوز قانونياً أن يبدأ اسم المتغير برمز الشرطة السفلية (_)، مثل _counter.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 7 (Variable naming rules in C++)",
    explanation: "صحيح (True). قواعد تسمية المتغيرات في C++ تنص على أن الاسم يجب أن يبدأ بحرف هجائي (A-Z أو a-z) أو بشرطة سفلية (_). الشيء الممنوع هو أن يبدأ برقم.",
    details: "Valid C++ identifiers can begin with a letter or an underscore (_); only numbers cannot be the first character."
  },

  // =========================================================================
  // 2. EXTREME CODE ERROR FIXING (تصحيح الكود التفاعلي الذكي من المنهج) [6 أسئلة]
  // =========================================================================
  {
    id: "ext_err_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Integer Division Bug in Temperature Conversion Formula",
    text: "Identify and correct the integer truncation bug in the following temperature conversion statement: double F = C * (9 / 5) + 32;",
    textAr: "اكتب السطر المصحح لمعادلة تحويل الحرارة لمنع حدوث خطأ اقتطاع القسمة الصحيحة في C++: double F = C * (9 / 5) + 32;",
    codeSnippet: `double F = C * (9 / 5) + 32;`,
    type: "interactive_fix",
    source: "Slide 6 (Temperature Conversion Formula F = (C * (9/5)) + 32)",
    hint: "كيف تجعل ناتج قسمة 9 على 5 يساوي 1.8 بدلاً من 1 في C++؟",
    identifiedErrors: [
      "القسمة (9 / 5) بين عددين صحيحين تُنتج 1 فقط وتقتطع الكسر (0.8)، مما يجعل المعادلة تحسب دائماً C * 1 + 32 وتُعطي نتائج خاطئة تماماً."
    ],
    correctCode: `double F = C * (9.0 / 5.0) + 32;`,
    explanation: `الخطأ المنهجي القاتل:
في C++، التعبير (9 / 5) يقسم أعداداً صحيحة فيكون الناتج 1 فقط ويضيع الكسر 0.8!
التصحيح الدقيق:
تحويل أحد العددين أو كلاهما إلى عدد كسري:
double F = C * (9.0 / 5.0) + 32;
أو: double F = C * 1.8 + 32;`
  },
  {
    id: "ext_err_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Identify & Correct Errors in cout Statement (Exam Paper)",
    text: "Identify and correct all errors in the following C++ statement from the exam: cout >> count >> '/n'",
    textAr: "اكتب السطر المصحح بالكامل لجملة الطباعة الواردة في ورقة الامتحان: cout >> count >> '/n'",
    codeSnippet: `cout >> count >> '/n'`,
    type: "interactive_fix",
    source: "Exam Paper - Question 4(a)",
    hint: "معامل الإخراج هو << والسطر الجديد هو '\\n' أو endl مع فاصلة منقوطة في النهاية.",
    identifiedErrors: [
      "استخدام معامل الإدخال والاستخراج >> بدلاً من معامل الإخراج والإدراج << مع cout.",
      "استخدام الشرطة المائلة العادية '/n' بدلاً من الشرطة المائلة العكسية للصوت السطري '\\n'.",
      "غياب الفاصلة المنقوطة (;) في نهاية الجملة."
    ],
    correctCode: `cout << count << '\\n';`,
    explanation: `الأخطاء الثلاثة وتصحيحها:
1. استبدال >> بالمعامل الصحيح <<.
2. تصحيح '/n' إلى '\\n' (أو endl).
3. إضافة الفاصلة المنقوطة ; في نهاية السطر.`
  },
  {
    id: "ext_err_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Reserved Keyword Variable Declaration (Exam Paper)",
    text: "Identify and correct the error in the following C++ variable declaration from the exam: int double = 44;",
    textAr: "اكتب السطر المصحح للإعلان عن المتغير من ورقة الامتحان مع تجنب الكلمات المحجوزة: int double = 44;",
    codeSnippet: `int double = 44;`,
    type: "interactive_fix",
    source: "Exam Paper - Question 4(b)",
    hint: "كلمة double هي كلمة محجوزة في C++، استبدلها بأي اسم متغير قانوني مثل num أو d.",
    identifiedErrors: [
      "استخدام الكلمة المحجوزة 'double' كاسم للمتغير، وقواعد C++ تحظر تماماً استخدام الكلمات المفتاحية كأسماء متغيرات."
    ],
    correctCode: `int num = 44;`,
    explanation: `الخطأ:
الكلمة 'double' نوع بياني محجوز في لغة C++.
التصحيح:
تغيير اسم المتغير إلى أي اسم صالح (مثل int num = 44; أو int val = 44; أو تعريف double d = 44;).`
  },
  {
    id: "ext_err_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Typo in iostream Header & Namespace Case Sensitivity",
    text: "Identify and correct the syntax errors in: #include <iostrem> and Using namespace std;",
    textAr: "اكتب السطرين مصححين تماماً لتضمين المكتبة وفضاء الأسماء: #include <iostrem> و Using namespace std;",
    codeSnippet: `#include <iostrem>
Using namespace std;`,
    type: "interactive_fix",
    source: "Slide 9 - Calculator Code Errors",
    hint: "اسم المكتبة هو iostream وحرف u في using يجب أن يكون صغيراً (lowercase).",
    identifiedErrors: [
      "خطأ إملائي في اسم المكتبة <iostrem> بدلاً من <iostream>.",
      "كتابة كلمة Using بحرف كبير 'U' ولغة C++ حساسة لحالة الأحرف (Case Sensitive)، فالصحيح هو using بحرف صغير."
    ],
    correctCode: `#include <iostream> using namespace std;`,
    explanation: `الأخطاء والتصحيح:
1. تصحيح المكتبة إلى #include <iostream>.
2. تصحيح Using إلى using بحرف صغير (lowercase).`
  },
  {
    id: "ext_err_5",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Missing Division by Zero Guard in Calculator",
    text: "Identify and correct the fatal division by zero bug in the calculator logic: else if(oper=='/') { result = x/y; cout<<\"the result =\"<< result; }",
    textAr: "اكتب الكود المصحح لفرع القسمة في الآلة الحاسبة لحمايته من الانهيار عند إدخال y = 0:",
    codeSnippet: `else if(oper=='/') {
    result = x/y;
    cout<<"the result ="<< result;
}`,
    type: "interactive_fix",
    source: "Slide 9 - Simple Calculator Implementation",
    hint: "أضف فحص إذا كانت y تساوي صفر اطبع خطأ error وإلا نفذ القسمة.",
    identifiedErrors: [
      "عدم التحقق من قيمة المقسوم عليه (y)، مما يؤدي إلى انهيار البرنامج فورياً (Runtime Crash) في حال إدخال المستخدم y = 0."
    ],
    correctCode: `else if(oper=='/') { if (y==0) cout<<"error"; else { result = x/y; cout<<"the result ="<< result; } }`,
    explanation: `الخطأ والتصحيح (من سلايد 9):
يجب فحص y قبل إجراء القسمة:
if (y == 0) cout << "error";
else { result = x / y; cout << "the result =" << result; }`
  },
  {
    id: "ext_err_6",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Assignment vs Equality & Accidental Semicolon Bug",
    text: "Identify and correct the logic and syntax bugs in: if (score = 100); cout << \"Perfect Score\";",
    textAr: "اكتب جملة الشرط المصححة لمنع الإسناد الخاطئ والفاصلة المنقوطة العارضة: if (score = 100); cout << \"Perfect Score\";",
    codeSnippet: `if (score = 100);
    cout << "Perfect Score";`,
    type: "interactive_fix",
    source: "C++ Conditional Statements & Logic Error Principles",
    hint: "استخدم معامل المقارنة == واحذف الفاصلة المنقوطة بعد القوس.",
    identifiedErrors: [
      "استخدام معامل الإسناد '=' بدلاً من معامل المقارنة '=='.",
      "وضع فاصلة منقوطة ';' بعد شرط if مما يُبطل الشرط ويجعل الطباعة تنفذ دائماً."
    ],
    correctCode: `if (score == 100) cout << "Perfect Score";`,
    explanation: `الخطأ والتصحيح:
1. استبدال الإسناد = بالمقارنة ==.
2. حذف الفاصلة المنقوطة التي تلي القوس مباشرة.`
  },

  // =========================================================================
  // 3. EXTREME NUMBER SYSTEMS & DIGITAL ARITHMETIC (حسابات أنظمة العد والمكملات) [6 أسئلة]
  // =========================================================================
  {
    id: "ext_num_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Double Dabble: Complete Conversion of Decimal 175.625",
    text: "Convert decimal 175.625 to Binary, Octal, and Hexadecimal using the Double Dabble method (repeated division & multiplication by 2).",
    textAr: "حوّل الرقم العشري 175.625 إلى الأنظمة: الثنائي، الثماني، والست عشري مع كتابة الأجزاء الكسرية بدقة:",
    type: "number_system",
    source: "Exam Paper Table Style & Slide 3/4 Double Dabble Method",
    inputs: [
      { label: "Binary Equivalent", expected: "10101111.101", hint: "الجزء الصحيح 175 + الكسر 0.625" },
      { label: "Octal Equivalent", expected: "257.5", hint: "تجميع ثلاثيات من اليمين واليسار" },
      { label: "Hexadecimal Equivalent", expected: "AF.A", hint: "تجميع رباعيات: 175 ست عشرياً هو AF و 0.625*16 = 10 = A" }
    ],
    stepByStep: `خطوات الحل المفصلة بطريقة Double Dabble:
1) تحويل الجزء الصحيح (175) بالقسمة المتكررة على 2:
   175 / 2 = 87 والباقي 1
   87  / 2 = 43 والباقي 1
   43  / 2 = 21 والباقي 1
   21  / 2 = 10 والباقي 1
   10  / 2 = 5  والباقي 0
   5   / 2 = 2  والباقي 1
   2   / 2 = 1  والباقي 0
   1   / 2 = 0  والباقي 1
   قراءة البواقي من الأسفل للأعلى: (10101111)_2.

2) تحويل الكسر (0.625) بالضرب المتكرر في 2:
   0.625 × 2 = 1.25 -> الجزء الصحيح 1
   0.250 × 2 = 0.50 -> الجزء الصحيح 0
   0.500 × 2 = 1.00 -> الجزء الصحيح 1 (توقف)
   الكسر ثنائياً = .101.
   الناتج الثنائي الكلي = 10101111.101.

3) التحويل إلى ثماني (Octal) بتجميع 3 بت:
   الصحيح: 010 101 111 = 2 5 7 -> 257
   الكسر:   101 = 5 -> .5
   الناتج الثماني = 257.5.

4) التحويل إلى ست عشري (Hex) بتجميع 4 بت:
   الصحيح: 1010 1111 = A F -> AF
   الكسر:   1010 = A (10) -> .A
   الناتج الست عشري = AF.A.`
  },
  {
    id: "ext_num_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "8-bit Two's Complement Subtraction: (-25)_10 - (18)_10",
    text: "Calculate (-25)_10 - (18)_10 in 8-bit Two's Complement arithmetic, showing the decimal result and the exact 8-bit binary pattern.",
    textAr: "احسب ناتج العملية الحسابية: (-25) - (18) بنظام المكمل الثنائي المكون من 8 بت مع توضيح خطوات الجمع الثنائي:",
    type: "number_system",
    source: "Exam Paper Question 2(b) & Slide 3 Two's Complement Arithmetic",
    inputs: [
      { label: "Decimal Result", expected: "-43", hint: "-25 - 18 = -43" },
      { label: "8-bit Binary Result", expected: "11010101", hint: "جمع تمثيل -25 مع تمثيل -18 في 8 بت" }
    ],
    stepByStep: `خطوات الحل بالمكمل الثنائي (2's Complement):
العملية المطلوبة: (-25) - (+18) = (-25) + (-18) = -43.

1) إيجاد تمثيل (-25) في 8 بت:
   - (+25) ثنائياً: 00011001 (16 + 8 + 1)
   - المكمل الأحادي (قلب البتات): 11100110
   - إضافة 1 لإيجاد المكمل الثنائي: 11100111 = (-25)

2) إيجاد تمثيل (-18) في 8 بت:
   - (+18) ثنائياً: 00010010 (16 + 2)
   - المكمل الأحادي: 11101101
   - إضافة 1: 11101110 = (-18)

3) إجراء عملية الجمع الثنائي:
      1 1 1 0 0 1 1 1   (-25)
    + 1 1 1 0 1 1 1 0   (-18)
    ------------------
    1 1 1 0 1 0 1 0 1
   يتم إهمال بت الحمل الزائد التاسع (Discard End-around Carry):
   الناتج النهائي في 8 بت = 11010101.

4) التحقق من القيمة:
   البت الأخير 1 (سالب). نأخذ المكمل الثنائي لمعرفة المقدار:
   قلب البتات: 00101010
   إضافة 1: 00101011 = 32 + 8 + 2 + 1 = 43.
   إذاً القيمة هي -43 (صحيح 100%).`
  },
  {
    id: "ext_num_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Exam Paper Question 2(b): (-13)_10 - (6)_10",
    text: "Solve Exam Question 2(b): Showing your steps in details to answer (-13)_10 - (6)_10 = (?)_10 using 8-bit Two's complement.",
    textAr: "حل مسألة الامتحان نصاً: احسب (-13) - (6) بنظام المكمل الثنائي في 8 بت موضحاً الناتج العشري والثنائي:",
    type: "number_system",
    source: "Exam Paper - Question 2(b)",
    inputs: [
      { label: "Decimal Result", expected: "-19", hint: "-13 - 6 = -19" },
      { label: "8-bit Binary Result", expected: "11101101", hint: "تمثيل -19 في 8 بت" }
    ],
    stepByStep: `خطوات حل مسألة الامتحان بالتفصيل:
المعادلة: (-13) - (6) = (-13) + (-6) = -19.

1) تمثيل (-13) بالمكمل الثنائي (8 بت):
   - (+13) = 00001101
   - المكمل الأحادي = 11110010
   - المكمل الثنائي (+1) = 11110011

2) تمثيل (-6) بالمكمل الثنائي (8 بت):
   - (+6) = 00000110
   - المكمل الأحادي = 11111001
   - المكمل الثنائي (+1) = 11111010

3) الجمع الثنائي:
      1 1 1 1 0 0 1 1   (-13)
    + 1 1 1 1 1 0 1 0   (-6)
    ------------------
    1 1 1 1 0 1 1 0 1
   نهمل الحمل التاسع، فيتبقى: 11101101.

4) التحقق:
   مكمل 11101101 هو: 00010010 + 1 = 00010011 = 16 + 2 + 1 = 19.
   الناتج العشري = -19.`
  },
  {
    id: "ext_num_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "4-bit Two's Complement Overflow Verification",
    text: "Add binary 0101 (+5) and 0011 (+3) in 4-bit Two's complement. Write the 4-bit sum, its signed decimal interpretation, and whether signed overflow occurred.",
    textAr: "اجمع 0101 (+5) مع 0011 (+3) بنظام المكمل الثنائي 4 بت، واكتب الناتج الثنائي، قيمته العشرية، وهل حدث طفحان؟",
    type: "number_system",
    source: "Slide 2 - Question 10 (Adding 0101 and 0011 in 4-bit two's complement causes overflow)",
    inputs: [
      { label: "4-bit Binary Sum", expected: "1000", hint: "0101 + 0011" },
      { label: "Signed Decimal Interpretation", expected: "-8", hint: "قيمة 1000 في المكمل الثنائي 4 بت" },
      { label: "Overflow Occurred? (YES/NO)", expected: "YES", hint: "جمع موجبين أعطى سالباً" }
    ],
    stepByStep: `خطوات التحليل واكتشاف الطفحان (من سلايد 2):
1) الجمع الثنائي:
     0 1 0 1   (+5)
   + 0 0 1 1   (+3)
   ---------
     1 0 0 0

2) التفسير العشري ذو الإشارة (Signed 4-bit):
   - البت الأثقل هو 1، فالرقم سالب.
   - في المكمل الثنائي 4 بت، النمط 1000 يمثل القيمة الصغرى: -8.

3) اكتشاف الفيض الحسابي (Overflow):
   - جمعنا عددين موجبين (+5 و +3) والمفترض رياضياً أن الناتج +8.
   - لكن أقصى قيمة موجبة يسمح بها نظام 4 بت هي +7 فقط (من -8 إلى +7).
   - ولأن خانة الإشارة تحولت إلى 1 (سالب)، فقد حدث طفحان عتادي (Overflow = YES).`
  },
  {
    id: "ext_num_5",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Signed Representations Table for -45 (8-bit)",
    text: "Calculate the negative representations of decimal 45 in 8-bit using Signed Magnitude, 1's Complement, and 2's Complement.",
    textAr: "احسب التمثيلات السالبة للرقم 45 في 8 بت بالأنظمة الثلاثة: الإشارة والمقدار، المكمل الأحادي، والمكمل الثنائي:",
    type: "number_system",
    source: "Slide 3 - Table Exercise Style",
    inputs: [
      { label: "Signed Magnitude (sm)", expected: "10101101", hint: "بت الإشارة 1 + قيمة 45 في 7 بت" },
      { label: "1's Complement (c1)", expected: "11010010", hint: "قلب بتات +45 بالكامل" },
      { label: "2's Complement (c2)", expected: "11010011", hint: "المكمل الأحادي + 1" }
    ],
    stepByStep: `خطوات حساب الأنظمة الثلاثة لـ -45:
1) تمثيل +45 في 8 بت:
   45 = 32 + 8 + 4 + 1 -> 00101101.

2) نظام الإشارة والمقدار (Signed Magnitude):
   نضع بت الإشارة في أقصى اليسار = 1 (للسالب)، وباقي الـ 7 بت هي مقدار 45:
   الناتج = 10101101.

3) نظام المكمل الأحادي (1's Complement):
   نقلب كل بت من بتات +45 (الصفر يصبح 1 والواحد يصبح 0):
   00101101 -> 11010010.

4) نظام المكمل الثنائي (2's Complement):
   نضيف 1 إلى المكمل الأحادي:
     11010010 + 1 = 11010011.`
  },
  {
    id: "ext_num_6",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Hexadecimal Fraction Conversion: 2B.4 to Decimal, Binary, Octal",
    text: "Convert the fractional Hexadecimal number 2B.4 to its exact Decimal, Binary, and Octal equivalents.",
    textAr: "حوّل الرقم الست عشري الكسري 2B.4 إلى مكافئاته الدقيقة في الأنظمة: العشري، الثنائي، والثماني:",
    type: "number_system",
    source: "Exam Paper Table Row 4 Style (1F.C conversion)",
    inputs: [
      { label: "Decimal Equivalent", expected: "43.25", hint: "2*16 + 11 + 4/16" },
      { label: "Binary Equivalent", expected: "101011.01", hint: "تحويل كل خانة إلى 4 بت" },
      { label: "Octal Equivalent", expected: "53.2", hint: "تجميع ثلاثيات ثنائية" }
    ],
    stepByStep: `خطوات التحويل للرقم الست عشري 2B.4:
1) التحويل إلى ثنائي (Binary) بفرد كل خانة إلى 4 بت:
   2 = 0010
   B = 1011
   .4 = .0100
   الناتج الثنائي = 00101011.0100 (بحذف الأصفار الزائدة: 101011.01).

2) التحويل إلى عشري (Decimal):
   الجزء الصحيح: 2 × 16^1 + 11 × 16^0 = 32 + 11 = 43.
   الجزء الكسري: 4 × 16^(-1) = 4 / 16 = 0.25.
   الناتج العشري = 43.25.

3) التحويل إلى ثماني (Octal) بتجميع 3 بت:
   الصحيح: 101 011 = 5 3 -> 53.
   الكسر:   010 = 2 -> .2.
   الناتج الثماني = 53.2.`
  },

  // =========================================================================
  // 4. EXTREME ESSAY & CONCEPTUAL QUESTIONS (أسئلة مقالية شاملة للمنهج) [4 أسئلة]
  // =========================================================================
  {
    id: "ext_essay_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Computer System Elements & System Buses (Exam Paper Q1)",
    text: "Describe briefly the primary computer system elements (Hardware, Software, People, Data), detailing the CPU internal units (ALU, CU, Registers) and the role of the three system buses (Data bus, Address bus, Control bus).",
    textAr: "سؤال مقالي شامل (ورقة الامتحان س1): اشرح باختصار عناصر نظام الحاسوب، مع تفصيل مكونات وحدة المعالجة المركزية CPU (ALU, CU, Registers) ووظيفة نواقل النظام الثلاثة (Data, Address, Control Buses).",
    type: "essay",
    source: "Exam Paper - Question 1 & Slide 2, 5, 7",
    questionDetails: "اذكر العناصر الأربعة، ثم فصل وحدات الـ CPU الثلاث، ووظيفة كل ناقل من النواقل الثلاثة.",
    modelAnswerAr: `عناصر نظام الحاسوب ونواقل النظام بالتفصيل:

1. عناصر نظام الحاسوب الأساسية (Computer System Elements):
   - العتاد (Hardware): المكونات المادية الملموسة (وحدة المعالجة، الذاكرة، وحدات الإدخال والإخراج).
   - البرمجيات (Software): البرامج والتعليمات التي تدير الحاسوب، وتنقسم إلى برمجيات النظام (System Software كالأنظمة والمترجمات) وبرمجيات تطبيقية (Application Software).
   - المستخدمون (People / Users): العنصر البشري الذي يصمم البرامج ويشغلها ويستفيد منها.
   - البيانات (Data): الحقائق الأولية غير المعالجة التي تُدخل للحاسوب لتتحول إلى معلومات (Information).

2. مكونات وحدة المعالجة المركزية (CPU Components):
   - وحدة الحساب والمنطق (ALU - Arithmetic Logic Unit): المسؤولة عن تنفيذ العمليات الحسابية (+, -, *, /) والعمليات المنطقية والمقارنات (<, >, ==).
   - وحدة التحكم (CU - Control Unit): المسؤولة عن إدارة وتنسيق عمل كافة وحدات الحاسوب وجلب التعليمات وفك تشفيرها وتوجيه تدفق البيانات.
   - السجلات (Registers): مساحات تخزين صغيرة جداً وفائقة السرعة داخل المعالج للاحتفاظ بالبيانات والتعليمات قيد التنفيذ اللحظي.

3. نواقل النظام الثلاثة (System Buses):
   - ناقل البيانات (Data Bus): ثنائي الاتجاه (Bidirectional)، يُستخدم لنقل البيانات الفعلية بين المعالج والذاكرة ووحدات الإدخال/الإخراج.
   - ناقل العناوين (Address Bus): أحادي الاتجاه (Unidirectional) يخرج من المعالج، لتحديد عنوان موقع الذاكرة أو المنفذ المراد القراءة منه أو الكتابة إليه.
   - ناقل التحكم (Control Bus): يُستخدم لنقل إشارات التحكم والتنسيق والتوقيت (مثل إشارة Read أو Write) عبر مكونات النظام.`,
    modelAnswer: `1. System Elements: Hardware, Software (System & Application), Peopleware, Data. 2. CPU: ALU (arithmetic & logical ops), Control Unit (supervises & decodes), Registers (ultra-fast internal storage). 3. System Buses: Data Bus (carries data, bidirectional), Address Bus (carries memory addresses, unidirectional), Control Bus (carries timing and control signals).`,
    rubricChecklist: [
      "ذكر العناصر الأساسية الأربعة لنظام الحاسوب (Hardware, Software, People, Data).",
      "شرح دور ALU و CU و Registers داخل المعالج بدقة.",
      "توضيح دور ناقل البيانات (Data Bus) وأنه ثنائي الاتجاه.",
      "توضيح دور ناقل العناوين (Address Bus) وناقل التحكم (Control Bus)."
    ]
  },
  {
    id: "ext_essay_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Why Two's Complement Dominates & Overflow Conditions",
    text: "Explain why computer systems universally prefer Two's Complement over Signed Magnitude and 1's Complement, and detail the hardware conditions under which signed overflow occurs during addition.",
    textAr: "سؤال مقالي نظري: علل تفضيل الحواسب لنظام المكمل الثنائي (Two's Complement) على نظامي الإشارة والمقدار والمكمل الأحادي، واشرح الشروط الرياضية والعتادية لحدوث الفيض الحسابي (Signed Overflow).",
    type: "essay",
    source: "Slide 2 (Q10 Overflow) & Slide 3 (Signed Representations)",
    questionDetails: "وضح مشكلة الصفر المزدوج، تعقيد عتاد الطرح، وشروط الـ Overflow في الإشارات المتشابهة.",
    modelAnswerAr: `أسباب تفضيل المكمل الثنائي وشروط حدوث الفيض الحسابي:

1. أسباب تفضيل المكمل الثنائي (Two's Complement):
   - القضاء على مشكلة الصفر المزدوج: في نظام الإشارة والمقدار والمكمل الأحادي يوجد تمثيلان للصفر (+0 و -0)، مما يهدر شفرة ثنائية ويتطلب دارات مقارنة خاصة. في المكمل الثنائي يوجد صفر واحد فقط (00000000).
   - توحيد دارات الجمع والطرح: يمكن تنفيذ عملية الطرح كعملية جمع عادية: A - B = A + (Two's complement of B). هذا يتيح استخدام دارة الجامع (Adder) نفسها للطرح دون الحاجة لتصميم دارة طارح منفصلة، مما يقلل تكلفة وحجم المعالج.
   - اتساع المدى للأعداد السالبة: يتيح تمثيل رقم سالب إضافي في المدى: من -2^(n-1) إلى +2^(n-1) - 1.

2. شروط حدوث الفيض الحسابي (Signed Overflow):
   - يحدث الفيض الحسابي عندما يتجاوز ناتج العملية الحسابية المدى الأقصى المسموح به لعدد البتات المتاح.
   - شرط الحدوث في الإشارات:
     1) عند جمع عددين موجبين وينتج عدد سالب (تغير بت الإشارة إلى 1).
     2) عند جمع عددين سالبين وينتج عدد موجب (تغير بت الإشارة إلى 0).
   - لا يمكن حدوث Overflow أبداً عند جمع عدد موجب مع عدد سالب.
   - القاعدة العتادية: يحدث Overflow عندما يختلف الحمل المنقول إلى خانة الإشارة (Carry into MSB) عن الحمل الخارج من خانة الإشارة (Carry out of MSB):
     Overflow = Carry_in XOR Carry_out = 1.`,
    modelAnswer: `Two's complement is preferred because: 1) It has a unique representation for zero (no +0 and -0). 2) Subtraction uses standard addition hardware: A - B = A + (~B + 1). Overflow occurs when adding two positive numbers yields a negative, or adding two negative numbers yields a positive. Hardware detects this via Carry_in XOR Carry_out into the sign bit.`,
    rubricChecklist: [
      "شرح التخلص من الصفر المزدوج (+0 و -0) كفائدة أساسية للمكمل الثنائي.",
      "توضيح إمكانية استخدام نفس دارة الجمع لإجراء الطرح: A - B = A + (-B).",
      "شرح شرطي حدوث الـ Overflow (موجب + موجب = سالب، أو سالب + سالب = موجب).",
      "ذكر قاعدة اختلاف الحمل المنقول إلى خانة الإشارة عن الخارج منها (Carry-in != Carry-out)."
    ]
  },
  {
    id: "ext_essay_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Compilers, Translators & The Three Types of Errors",
    text: "Define the Compiler and contrast it with Interpreters and Assemblers. Then, explain in detail the three types of programming errors (Syntax, Logic, Runtime), stating when each is detected and how they are handled.",
    textAr: "سؤال مقالي مقارن: عرّف المترجم (Compiler) وقارنه بالمفسر (Interpreter) ومجمع لغة التجميع (Assembler)، ثم قارن بالتفصيل بين أنواع الأخطاء البرمجية الثلاثة (Syntax, Logic, Runtime) موضحاً وقت اكتشاف كل منها.",
    type: "essay",
    source: "Slide 2 (Q7, Q9, Q14) & Slide 4 (What is a Compiler) & Slide 7 (Syntax Error)",
    questionDetails: "عرف المترجم، وقارن بين أنواع الأخطاء من حيث وقت الاكتشاف والأثر وإمكانية تصحيحها.",
    modelAnswerAr: `المترجمات وأنواع الأخطاء البرمجية بالتفصيل:

1. المترجم (Compiler) والمترجمات الأخرى:
   - المترجم (Compiler): برنامج نظام يترجم الكود المصدري المكتوب بلغة عالية المستوى (مثل C++) بالكامل إلى كود الهدف (Object Code) الذي يحتوي على تعليمات قابلة للقراءة للآلة (Machine Code).
   - المجمع (Assembler): يترجم برامج لغة التجميع (Assembly Language) المكتوبة بالحروف والرموز إلى لغة الآلة الثنائية (0 و 1).
   - المفسر (Interpreter): يترجم وينفذ الكود البرمجي سطراً بسطر في الوقت الحقيقي دون إنشاء ملف تنفيذي مستقل.

2. أنواع الأخطاء البرمجية الثلاثة (Types of Errors):
   - الأخطاء النحوية (Syntax Errors):
     * السبب: مخالفة قواعد لغة البرمجة (مثل نسيان الفاصلة المنقوطة، كتابة cout >>، استخدام كلمة محجوزة).
     * وقت الاكتشاف: يتم اكتشافها بواسطة المترجم وقت التصريف (Compile-Time).
     * الأثر: يمنع المترجم من إكمال التصريف ولن يتم بناء البرنامج أو تشغيله نهائياً حتى يتم تصحيحها يدوياً.
   - الأخطاء المنطقية (Logic Errors):
     * السبب: خطأ في صياغة المعادلة أو منطق الخوارزمية (مثل كتابة area = w + h بدلاً من w * h).
     * وقت الاكتشاف: وقت التشغيل من قِبل المستخدم عند مراجعة النواتج. المترجم لا يكتشفها لأن الكود سليم لغوياً.
     * الأثر: البرنامج يُصرف ويعمل دون انهيار ولكنه يعطي نتائج غير صحيحة.
   - أخطاء وقت التشغيل (Runtime Errors):
     * السبب: عمليات مستحيلة عتادياً أثناء تنفيذ البرنامج (مثل القسمة على صفر y = 0، أو نفاذ الذاكرة).
     * وقت الاكتشاف: أثناء عمل البرنامج الفعلي (Run-Time).
     * الأثر: توقف مفاجئ لانهيار البرنامج (Crash).`,
    modelAnswer: `Compiler translates preprocessed high-level source code into machine-readable object code. Syntax errors violate language grammar, detected at compile-time, and prevent compilation. Logic errors occur when the program compiles and runs but gives incorrect outputs due to algorithmic flaws; compilers cannot detect them. Runtime errors occur during execution (e.g. divide by zero) and crash the program.`,
    rubricChecklist: [
      "تعريف المترجم (Compiler) كبرنامج يترجم الكود المصدري لكود هدف قابل للتنفيذ.",
      "شرح الأخطاء النحوية Syntax Errors وتأكيد اكتشافها وقت الـ Compile ومنعها لإنشاء البرنامج.",
      "شرح الأخطاء المنطقية Logic Errors وتأكيد أن المترجم لا يستطيع اكتشافها.",
      "شرح أخطاء التشغيل Runtime Errors (كالقسمة على صفر) وسبب انهيار البرنامج بها."
    ]
  },
  {
    id: "ext_essay_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Algorithm Properties & Flowchart to Sum Squares from 1 to 50",
    text: "List the essential properties of an algorithm, state the standard flowchart symbols, and detail the complete pseudocode and flowchart logic to find the sum of squares of integers from 1 to 50 (Exam Question 3).",
    textAr: "سؤال مقالي خوارزميات (ورقة الامتحان س3): اذكر خصائص الخوارزمية، والأشكال القياسية لخرائط التدفق، واشرح الكود الزائف ومنطق خريطة التدفق لحساب مجموع مربعات الأعداد من 1 إلى 50.",
    type: "essay",
    source: "Exam Paper - Question 3 & Slide 2, 5, 8 (Flowcharts & Problem Solving)",
    questionDetails: "اذكر أشكال خريطة التدفق، وحدد خطوات الخوارزمية والكود الزائف والمتغيرات الابتدائية.",
    modelAnswerAr: `خصائص الخوارزميات وخريطة تدفق مجموع المربعات:

1. خصائص الخوارزمية (Algorithm Properties):
   - النهاية (Finiteness): يجب أن تتوقف الخوارزمية بعد عدد محدود من الخطوات ولا تستمر للأبد.
   - الوضوح والدقة (Definiteness): كل خطوة يجب أن تكون محددة ولا تقبل التأويل.
   - المدخلات (Input): صفر أو أكثر من المدخلات المحددة.
   - المخرجات (Output): مخرج واحد على الأقل يمثل حل المشكلة.
   - الفعالية (Effectiveness): العمليات بسيطة وممكنة التنفيذ يدوياً أو عبر الحاسوب.

2. الأشكال القياسية لخرائط التدفق (Flowchart Symbols):
   - الشكل البيضاوي (Oval): البداية والنهاية (Start / Stop - Terminator).
   - المستطيل (Rectangle): المعالجة والعمليات الحسابية (Process).
   - متوازي الأضلاع (Parallelogram): الإدخال والإخراج (Input / Output).
   - المعين (Diamond): اتخاذ القرار والشرط (Decision - Yes/No).
   - الأسهم (Flowlines): تحديد اتجاه سير العمليات.

3. حل مسألة الامتحان (مجموع مربعات الأعداد من 1 إلى 50):
   - الكود الزائف (Pseudocode):
     1) Start
     2) Set sum = 0, i = 1
     3) While i <= 50 Do:
        a) sum = sum + (i * i)
        b) i = i + 1
     4) End While
     5) Output sum
     6) End
   - تسلسل خريطة التدفق (Flowchart Flow):
     [Start (Oval)] ->
     [sum = 0, i = 1 (Rectangle)] ->
     < i <= 50 ? (Diamond) >
       - إذا كان نعم (Yes): [sum = sum + i*i, i = i + 1 (Rectangle)] -> عودة إلى فحص الشرط.
       - إذا كان لا (No): [Print sum (Parallelogram)] -> [Stop (Oval)].`,
    modelAnswer: `Algorithm properties: Finiteness, Definiteness, Input, Output, Effectiveness. Standard symbols: Oval (Terminal), Rectangle (Process), Parallelogram (I/O), Diamond (Decision). Sum of squares 1 to 50: Initialize sum = 0, i = 1. Loop while i <= 50: sum = sum + i*i, i = i + 1. Print sum, then Stop.`,
    rubricChecklist: [
      "ذكر خصائص الخوارزمية (Finiteness, Definiteness, Inputs, Outputs, Effectiveness).",
      "تحديد الأشكال الهندسية القياسية لخريطة التدفق (Oval, Rectangle, Parallelogram, Diamond).",
      "كتابة الكود الزائف أو خطوات الحل المنطقية لمسألة الامتحان بدقة.",
      "توضيح تهيئة المتغيرات (sum = 0, i = 1) وشرط التكرار (i <= 50) وزيادة العداد (i = i + 1)."
    ]
  },

  // =========================================================================
  // 5. EXTREME CODE TRACING & LOGICAL MCQs (تتبع الأكواد وتريكات C++ من المنهج) [24 سؤالاً]
  // =========================================================================
  {
    id: "ext_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Chained Increment & Postfix Evaluation (Slide 7 Exam Variant)",
    text: "What is the exact output of the following C++ code?",
    textAr: "ما هو الناتج الدقيق للكود التالي في C++؟ (تتبع دقيق للمعاملات البعدية)",
    codeSnippet: `int x = 3, y = 6;
int r = x + y++;
cout << x << "\\t" << y << "\\t" << r;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 3 \\t 7 \\t 9" },
      { id: "b", text: "b) 3 \\t 6 \\t 9" },
      { id: "c", text: "c) 3 \\t 7 \\t 10" },
      { id: "d", text: "d) 4 \\t 7 \\t 10" }
    ],
    correctAnswer: "a",
    source: "Slide 7 - Main function code output question",
    explanation: `الخيار (a) هو الصحيح: 3 \\t 7 \\t 9.
خطوات التتبع:
1. x = 3, y = 6.
2. في السطر r = x + y++; المعامل هو Postfix (بعدي)، فيتم استخدام قيمة y الأصلية (6) في الجمع:
   r = 3 + 6 = 9.
3. بعد حساب العملية، تزداد قيمة y بمقدار 1 فتصبح y = 7.
4. قيمة x لم تتغير (x = 3).
5. جملة الطباعة تُخرج: 3 ثم علامة جدولة ثم 7 ثم علامة جدولة ثم 9.`,
    details: "In r = x + y++, y's original value 6 is added to x (3), so r=9. Afterwards y increments to 7."
  },
  {
    id: "ext_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Prefix Increment Evaluation Before Assignment",
    text: "What will be printed by the following code snippet?",
    textAr: "ماذا سيطبع مقطع الكود التالي في C++؟",
    codeSnippet: `int a = 5;
int b = ++a * 2;
cout << a << " " << b;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 5 10" },
      { id: "b", text: "b) 6 12" },
      { id: "c", text: "c) 5 12" },
      { id: "d", text: "d) 6 10" }
    ],
    correctAnswer: "b",
    source: "C++ Increment Operators & Precedence Rules",
    explanation: `الخيار (b) هو الصحيح: 6 12.
خطوات التتبع:
1. المعامل ++a هو قبلي (Prefix): يتم تزويد a أولاً لتصبح a = 6.
2. ثم يُضرب الناتج الجديد في 2: 6 * 2 = 12، فيتم إسناد 12 إلى b.
3. الطباعة: a = 6 و b = 12.`,
    details: "Prefix ++a increments 'a' to 6 first; then 6 * 2 = 12 is stored in 'b'."
  },
  {
    id: "ext_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Short-Circuit Logical AND Traps",
    text: "What is the output of the following C++ program?",
    textAr: "ما هو ناتج تنفيذ البرنامج التالي؟ (احذر قصر الدائرة المنطقي Short-Circuit)",
    codeSnippet: `int a = 0, b = 5;
if (a != 0 && ++b > 5) {
    cout << "Yes ";
} else {
    cout << "No ";
}
cout << b;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) No 5" },
      { id: "b", text: "b) No 6" },
      { id: "c", text: "c) Yes 6" },
      { id: "d", text: "d) Compile Error" }
    ],
    correctAnswer: "a",
    source: "C++ Short-Circuit Evaluation & Logical Operators",
    explanation: `الخيار (a) هو الصحيح: No 5.
المصيدة:
في المعامل المنطقي &&، إذا كان الطرف الأيسر كاذباً (a != 0 يعطي false لأن a = 0)، فإن المعالج يطبق خاصية قصر الدائرة (Short-Circuit) ويتوقف فوراً عن تقييم الطرف الأيمن!
لذلك التعبير ++b لا يتم تنفيذه نهائياً وتظل قيمة b كما هي 5!
يدخل البرنامج إلى فرع else ويطبع: No 5.`,
    details: "Logical AND short-circuits: when the left operand is false, the right operand (++b) is never evaluated."
  },
  {
    id: "ext_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Short-Circuit Logical OR Traps",
    text: "What will be printed by the following code snippet?",
    textAr: "ماذا سيطبع مقطع الكود التالي في C++؟",
    codeSnippet: `int x = 10, y = 20;
if (x == 10 || ++y > 20) {
    cout << y;
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 20" },
      { id: "b", text: "b) 21" },
      { id: "c", text: "c) 10" },
      { id: "d", text: "d) Nothing is printed" }
    ],
    correctAnswer: "a",
    source: "C++ Short-Circuit Evaluation in || Operator",
    explanation: `الخيار (a) هو الصحيح: 20.
في المعامل المنطقي ||، إذا كان الطرف الأيسر صحيحاً (x == 10 يعطي true)، فإن المعالج يتأكد أن النتيجة الإجمالية true دون الحاجة للنظر للطرف الأيمن!
لذلك لا يتم تنفيذ ++y، وتظل y تساوي 20.`,
    details: "Logical OR short-circuits when the left operand is true; ++y is skipped, leaving y = 20."
  },
  {
    id: "ext_5",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Integer Truncation Trap in Celsius to Fahrenheit",
    text: "What will be the output of this code snippet when converting C = 100 degrees?",
    textAr: "ما هو ناتج الكود التالي لتحويل درجة الحرارة C = 100؟",
    codeSnippet: `int c = 100;
double f = c * (9 / 5) + 32;
cout << f;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 132" },
      { id: "b", text: "b) 212" },
      { id: "c", text: "c) 180" },
      { id: "d", text: "d) 212.0" }
    ],
    correctAnswer: "a",
    source: "Slide 6 (Temperature Conversion Formula F=(C*(9/5))+32)",
    explanation: `الخيار (a) هو الصحيح: 132.
الفخ المنهجي:
(9 / 5) هي قسمة أعداد صحيحة ناتجها 1 فقط (يتم حذف 0.8)!
المعادلة المنفذة تصبح:
f = 100 * 1 + 32 = 132 (بدلاً من 212 لو كانت القسمة كسرية 1.8)!`,
    details: "Due to integer division, (9 / 5) evaluates to 1. f = 100 * 1 + 32 = 132."
  },
  {
    id: "ext_6",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Semicolon Immediately After if Condition",
    text: "What will be printed when the following code is executed?",
    textAr: "ماذا ستكون نتيجة تنفيذ مقطع الكود التالي في C++؟",
    codeSnippet: `int x = 5;
if (x > 10);
x += 2;
cout << x;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 7" },
      { id: "b", text: "b) 5" },
      { id: "c", text: "c) 12" },
      { id: "d", text: "d) Compile error" }
    ],
    correctAnswer: "a",
    source: "C++ Common Logic & Syntax Traps",
    explanation: `الخيار (a) هو الصحيح: 7.
الفخ:
الفاصلة المنقوطة بعد if (x > 10); تنهي جملة الشرط مباشرة. السطر التالي x += 2; ليس تابعاً للشرط بل هو سطر مستقل ينفذ دائماً!
لذلك تزداد x بمقدار 2 لتصبح 7.`,
    details: "The semicolon creates an empty statement for the if condition. x += 2 executes unconditionally, printing 7."
  },
  {
    id: "ext_7",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Assignment Operator Inside if Condition",
    text: "What will be printed by the following code snippet?",
    textAr: "ماذا سيطبع مقطع الكود التالي؟ (انتبه للفرق بين = و ==)",
    codeSnippet: `int score = 0;
if (score = 5) {
    cout << "Pass ";
} else {
    cout << "Fail ";
}
cout << score;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Pass 5" },
      { id: "b", text: "b) Fail 0" },
      { id: "c", text: "c) Fail 5" },
      { id: "d", text: "d) Pass 0" }
    ],
    correctAnswer: "a",
    source: "C++ Assignment vs Relational Equality",
    explanation: `الخيار (a) هو الصحيح: Pass 5.
الفخ:
تم استخدام معامل الإسناد (=) بدلاً من المقارنة (==).
التعبير (score = 5) يضع 5 في المتغير score، وقيمة التعبير تصبح 5.
في C++، أي رقم غير الصفر يُعتبر True (صحيح)، فيدخل البرنامج فرع if ويطبع 'Pass '، ثم يطبع قيمة score التي أصبحت 5!`,
    details: "score = 5 assigns 5 to score and evaluates to 5 (truthy). The if-branch executes, printing 'Pass 5'."
  },
  {
    id: "ext_8",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Zero Assignment Inside if Condition",
    text: "What will be printed by this C++ code snippet?",
    textAr: "ماذا سيطبع الكود التالي في C++؟",
    codeSnippet: `int val = 10;
if (val = 0) {
    cout << "A";
} else {
    cout << "B";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) B" },
      { id: "b", text: "b) A" },
      { id: "c", text: "c) AB" },
      { id: "d", text: "d) Compile error" }
    ],
    correctAnswer: "a",
    source: "C++ Boolean Interpretation of Zero",
    explanation: `الخيار (a) هو الصحيح: B.
التعبير (val = 0) يسند القيمة 0 إلى val. قيمة التعبير 0 تعامل في C++ كـ false منطقياً، فيتجه التنفيذ مباشرة إلى فرع else ويطبع 'B'.`,
    details: "val = 0 assigns 0 to val and evaluates to 0 (false), triggering the else block."
  },
  {
    id: "ext_9",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Switch Statement Fall-Through Trap (Missing break)",
    text: "What is the exact output of this switch statement?",
    textAr: "ما هو الناتج الدقيق لجملة switch التالية عند غياب كلمة break؟",
    codeSnippet: `int n = 2;
switch (n) {
    case 1: cout << "1";
    case 2: cout << "2";
    case 3: cout << "3"; break;
    default: cout << "D";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 23" },
      { id: "b", text: "b) 2" },
      { id: "c", text: "c) 23D" },
      { id: "d", text: "d) 123D" }
    ],
    correctAnswer: "a",
    source: "Slide 10 - Switch statement mechanics and fall-through",
    explanation: `الخيار (a) هو الصحيح: 23.
المطابقة تحدث عند case 2 فيطبع '2'.
ولكن لا توجد كلمة break بعد case 2! فتتدفق عملية التنفيذ (Fall-Through) إلى الحالة التالية case 3 ويطبع '3'.
في نهاية case 3 توجد break، فيتوقف ويخرج من الـ switch. الناتج الإجمالي هو: 23.`,
    details: "Without a break statement after case 2, execution falls through into case 3, printing '23'."
  },
  {
    id: "ext_10",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Grouped Switch Cases from Slide 10",
    text: "What will be printed when x = 3 in this code adapted directly from slide 10?",
    textAr: "ماذا سيطبع الكود التالي عند إدخال x = 3 (مأخوذ مباشرة من سلايد 10)؟",
    codeSnippet: `int x = 3;
switch (x) {
    case 2:
        cout << "x=2";
        break;
    case 3:
    case 5:
        cout << "x=3 or 5";
        x++;
        break;
    case 4:
        cout << "x=4";
        break;
    default:
        cout << "Else.";
}
cout << " " << x;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) x=3 or 5 4" },
      { id: "b", text: "b) x=3 or 5 3" },
      { id: "c", text: "c) x=3 or 5 x=4 4" },
      { id: "d", text: "d) Else. 3" }
    ],
    correctAnswer: "a",
    source: "Slide 10 - Convert if/else to switch statement",
    explanation: `الخيار (a) هو الصحيح: x=3 or 5 4.
القيمة x = 3 تطابق الحالة case 3 التي تتدفق فوراً إلى كود case 5 المشترك، فيطبع 'x=3 or 5'.
ثم ينفذ x++ فتصبح قيمة x تساوي 4.
ثم يقابل break فيخرج من الـ switch، ويطبع المسافة وقيمة x الجديدة (4).`,
    details: "Case 3 falls into case 5, prints 'x=3 or 5', increments x to 4, and breaks. Prints 'x=3 or 5 4'."
  },
  {
    id: "ext_11",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Floating-Point Case Expression in switch",
    text: "What will happen when attempting to compile this C++ code?",
    textAr: "ماذا سيحدث عند محاولة تصريف هذا الكود في C++؟",
    codeSnippet: `double gpa = 3.5;
switch (gpa) {
    case 3.5: cout << "A"; break;
    default: cout << "B";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Compile Error: switch condition must be an integral type" },
      { id: "b", text: "b) Prints: A" },
      { id: "c", text: "c) Prints: B" },
      { id: "d", text: "d) Runtime Crash" }
    ],
    correctAnswer: "a",
    source: "Slide 10 & C++ Syntax Rules for switch",
    explanation: `الخيار (a) هو الصحيح: خطأ تصريف (Compile Error).
معيار C++ يشترط بشكل حاسم أن يكون المتغير الذي يفحصه switch من نوع صحيح (int أو char). يمنع استخدام double أو float.`,
    details: "C++ requires the switch condition and case labels to be integral types. Using floating-point values causes a compile error."
  },
  {
    id: "ext_12",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Modulo Operator with Negative Dividend in C++",
    text: "What is the exact result of the expression (-14 % 4) in standard C++?",
    textAr: "ما هو الناتج الدقيق للتعبير (-14 % 4) في لغة C++ القياسية؟",
    codeSnippet: `int r = -14 % 4;
cout << r;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) -2" },
      { id: "b", text: "b) 2" },
      { id: "c", text: "c) -3" },
      { id: "d", text: "d) Compile error" }
    ],
    correctAnswer: "a",
    source: "C++ Operator Standards & Arithmetic Remainder",
    explanation: `الخيار (a) هو الصحيح: -2.
في لغة C++، إشارة ناتج باقي القسمة (%) تتبع دائماً إشارة المقسوم (الطرف الأيسر). بما أن المقسوم سالب (-14)، فإن الباقي يكون سالباً: -14 = (-3 * 4) + (-2)، فالناتج هو -2.`,
    details: "In standard C++, the sign of the remainder from % matches the sign of the dividend (numerator): -14 % 4 == -2."
  },
  {
    id: "ext_13",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Character Arithmetic with ASCII Codes",
    text: "What will be printed by the following code snippet?",
    textAr: "ماذا سيطبع مقطع الكود التالي في C++؟ (التعامل مع رموز ASCII للحروف)",
    codeSnippet: `char ch = 'A';
ch = ch + 3;
cout << ch;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) D" },
      { id: "b", text: "b) 68" },
      { id: "c", text: "c) A3" },
      { id: "d", text: "d) Compile error" }
    ],
    correctAnswer: "a",
    source: "C++ char Data Type & ASCII Encoding",
    explanation: `الخيار (a) هو الصحيح: D.
المحارف في C++ تُخزن كأرقام ASCII صحيحة. رمز 'A' هو 65.
65 + 3 = 68.
الرقم 68 في جدول ASCII يقابل الحرف 'D'. وبما أن المتغير من نوع char، فإن cout تطبعه كحرف: 'D'.`,
    details: "'A' has ASCII value 65. 65 + 3 = 68, which corresponds to character 'D'."
  },
  {
    id: "ext_14",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Boolean Variable Integer Promotion",
    text: "What is the output of the following C++ code?",
    textAr: "ما هو ناتج الكود التالي في C++؟",
    codeSnippet: `bool flag = 25;
cout << flag + 5;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 6" },
      { id: "b", text: "b) 30" },
      { id: "c", text: "c) 1" },
      { id: "d", text: "d) true5" }
    ],
    correctAnswer: "a",
    source: "Slide 2 - Question 12 & C++ bool conversion rules",
    explanation: `الخيار (a) هو الصحيح: 6.
عند إسناد أي رقم غير الصفر (مثل 25) لمتغير من نوع bool، فإنه يتحول إلى true والتي تقابل رقمياً 1 فقط!
لذلك flag قيمتها 1.
وعند إجراء عملية الجمع: 1 + 5 = 6.`,
    details: "Assigning any non-zero value to a bool converts it to true (1). flag + 5 = 1 + 5 = 6."
  },
  {
    id: "ext_15",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "For Loop Boundary Off-by-One Calculation",
    text: "What is the final value of sum printed by this loop?",
    textAr: "ما هي القيمة النهائية المطبوعة للمتغير sum في الحلقة التالية؟",
    codeSnippet: `int sum = 0;
for (int i = 1; i < 5; i++) {
    sum += i;
}
cout << sum;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 10" },
      { id: "b", text: "b) 15" },
      { id: "c", text: "c) 6" },
      { id: "d", text: "d) 4" }
    ],
    correctAnswer: "a",
    source: "Loop Logic & Trace Table Fundamentals",
    explanation: `الخيار (a) هو الصحيح: 10.
الشرط هو i < 5 (أصغر تماماً من 5)، لذلك قيم i داخل الحلقة هي: 1, 2, 3, 4 فقط (الرقم 5 مستبعد!).
مجموع القيم: 1 + 2 + 3 + 4 = 10.`,
    details: "The loop condition i < 5 terminates when i = 5. sum = 1 + 2 + 3 + 4 = 10."
  },
  {
    id: "ext_16",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "do-while Loop Execution Guarantee",
    text: "What is the output of the following do-while loop?",
    textAr: "ما هو ناتج حلقة do-while التالية بالرغم من أن الشرط كاذب من البداية؟",
    codeSnippet: `int k = 10;
do {
    k++;
} while (k < 5);
cout << k;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 11" },
      { id: "b", text: "b) 10" },
      { id: "c", text: "c) Infinite loop" },
      { id: "d", text: "d) 5" }
    ],
    correctAnswer: "a",
    source: "C++ Repetition Structures (do-while guarantee)",
    explanation: `الخيار (a) هو الصحيح: 11.
حلقة do-while تتميز بأن جسم الحلقة يُنفذ مرة واحدة على الأقل قبل فحص الشرط!
تزداد k لتصبح 11، ثم يفحص الشرط (11 < 5) فيكون كاذباً ويتوقف. فتُطبع القيمة 11.`,
    details: "A do-while loop always executes its body at least once. k increments from 10 to 11 before checking the condition."
  },
  {
    id: "ext_17",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Flowchart Decision for Negative Value (Slide 8)",
    text: "In the flowchart to determine if a number is negative or positive (Slide 8), what decision outcome is followed if user inputs -0.5?",
    textAr: "في خريطة التدفق لتحديد ما إذا كان الرقم سالباً أم موجباً (سلايد 8)، أي مسار يتم اتباعه إذا أدخل المستخدم -0.5؟",
    codeSnippet: `// Flowchart decision:
Is Number >= 0 ?`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 'No' branch -> Prints: Negative" },
      { id: "b", text: "b) 'Yes' branch -> Prints: Positive" },
      { id: "c", text: "c) Error branch: decimals not supported" },
      { id: "d", text: "d) Loop terminates without output" }
    ],
    correctAnswer: "a",
    source: "Slide 8 - Algorithm and Flowchart: Print if number is negative or positive",
    explanation: `الخيار (a) هو الصحيح: مسار 'No' يطبع Negative.
الرقم -0.5 أصغر من الصفر، لذلك ناتج فحص الشرط (Is Number >= 0) هو No، فيتجه المسار لطباعة Negative.`,
    details: "-0.5 is less than 0; the decision condition >= 0 evaluates to false (No), branching to Negative."
  },
  {
    id: "ext_18",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Chained cin Extraction Stream Order (Slide 9)",
    text: "In the calculator program (Slide 9): cin >> x >> y >> oper; if the input is: 12.5 4.0 *, what are the stored values?",
    textAr: "في برنامج الآلة الحاسبة (سلايد 9): cin >> x >> y >> oper; إذا أدخل المستخدم: 12.5 4.0 *، ما هي القيم المخزنة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) x = 12.5, y = 4.0, oper = '*'" },
      { id: "b", text: "b) x = 12, y = 5, oper = '4'" },
      { id: "c", text: "c) x = '*', y = 12.5, oper = 4.0" },
      { id: "d", text: "d) Input failure runtime error" }
    ],
    correctAnswer: "a",
    source: "Slide 9 - Simple Calculator Implementation (cin >> x >> y >> oper)",
    explanation: `الخيار (a) هو الصحيح: x = 12.5, y = 4.0, oper = '*'.
معامل الاستخراج >> يتجاهل المسافات البيضاء تلقائياً ويقرأ البيانات بالترتيب: الرقم الأول في x، والثاني في y، ورمز العملية في oper.`,
    details: "Chained cin extractions skip whitespace and parse inputs sequentially: x=12.5, y=4.0, oper='*'."
  },
  {
    id: "ext_19",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Semicolon Immediately After for Loop Header",
    text: "What will be printed by the following C++ code snippet?",
    textAr: "ماذا سيطبع مقطع الكود التالي في C++؟ (احذر الفاصلة المنقوطة بعد قوس الـ for)",
    codeSnippet: `int count = 0;
for (int i = 0; i < 5; i++);
count++;
cout << count;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 1" },
      { id: "b", text: "b) 5" },
      { id: "c", text: "c) 6" },
      { id: "d", text: "d) 0" }
    ],
    correctAnswer: "a",
    source: "C++ Repetition Structures & Syntax Traps",
    explanation: `الخيار (a) هو الصحيح: 1.
الفاصلة المنقوطة بعد رأس حلقة for تجعل الحلقة تدور 5 مرات بجسم فارغ تماماً دون تنفيذ أي شيء!
وعند انتهاء الحلقة، يُنفذ السطر المستقل count++ مرة واحدة فقط، فتطبع القيمة 1.`,
    details: "The semicolon creates a null body loop repeating 5 times. count++ runs only once after loop completion, printing 1."
  },
  {
    id: "ext_20",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Dangling Else Association Trap",
    text: "What is printed by the following nested if-else structure?",
    textAr: "ماذا سيطبع الهيكل الشرطي المتداخل التالي؟ (فخ الـ Dangling Else)",
    codeSnippet: `int a = 1, b = 2;
if (a == 0)
    if (b == 2)
        cout << "X";
else
    cout << "Y";`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Nothing is printed" },
      { id: "b", text: "b) Y" },
      { id: "c", text: "c) X" },
      { id: "d", text: "d) XY" }
    ],
    correctAnswer: "a",
    source: "C++ Dangling Else Standard Binding Rules",
    explanation: `الخيار (a) هو الصحيح: لا يتم طباعة أي شيء (Nothing is printed).
قاعدة C++ الصارمة: ترتبط جملة else دائماً بأقرب if سابقة لها غير مكتملة، وهي if (b == 2) بالرغم من المسافات البادئة المخادعة!
وحيث إن الشرط الخارجي الأول if (a == 0) كاذب (false)، فإن الكتلة بالكامل يتم تخطيها ولا يطبع شيء!`,
    details: "In C++, an 'else' binds to the nearest unmatched 'if' (if b==2). Since the outer if (a==0) is false, nothing executes."
  },
  {
    id: "ext_21",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Final Loop Counter Value in Sum of Squares (Exam Q3)",
    text: "In the flowchart loop to sum squares from 1 to 50: sum = 0, i = 1; while (i <= 50) { sum += i*i; i++; } what is the value of 'i' immediately after the loop terminates?",
    textAr: "في خوارزمية مجموع المربعات من 1 إلى 50 (س3 في الامتحان)، ما هي قيمة العداد i فور انتهاء وتوقف الحلقة مباشرة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 51" },
      { id: "b", text: "b) 50" },
      { id: "c", text: "c) 49" },
      { id: "d", text: "d) 500" }
    ],
    correctAnswer: "a",
    source: "Exam Paper - Question 3 (Flowchart sum of squares from 1 to 50)",
    explanation: `الخيار (a) هو الصحيح: 51.
الحلقة تستمر طالما i <= 50. في الدورة الأخيرة عندما تكون i = 50، ينفذ السطر i++ فتصبح i = 51.
عند فحص الشرط مجدداً: 51 <= 50 يكون false فتتوقف الحلقة وتكون قيمة i هي 51!`,
    details: "When i reaches 50, it is incremented to 51. The condition 51 <= 50 fails, exiting the loop with i = 51."
  },
  {
    id: "ext_22",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Memory Hierarchy Speed Sequence (Slide 5)",
    text: "Which sequence correctly arranges memory types from fastest to slowest access speed according to slide 5?",
    textAr: "أي تسلسل يرتب أنواع الذاكرة من الأسرع إلى الأبطأ في سرعة الوصول وفقاً لسلايد 5؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Cache memory > Primary memory (RAM) > Secondary memory (Hard disk)" },
      { id: "b", text: "b) Primary memory (RAM) > Cache memory > Secondary memory (Hard disk)" },
      { id: "c", text: "c) Secondary memory (Hard disk) > Primary memory (RAM) > Cache memory" },
      { id: "d", text: "d) RAM > Hard disk > Cache memory" }
    ],
    correctAnswer: "a",
    source: "Slide 5 - Primary memory vs Secondary memory vs Cache memory speed",
    explanation: `الخيار (a) هو الصحيح: Cache > RAM > Hard disk.
نص سلايد 5:
- ذاكرة الكاش (Cache memory) هي الأسرع على الإطلاق.
- الذاكرة الأساسية (Primary memory like RAM) أسرع من القرص الصلب ولكنها أصغر.
- الذاكرة الثانوية (Secondary memory like Hard disk) هي الأبطأ وأكبرها سعة.`,
    details: "Cache memory is fastest, followed by primary RAM, while secondary storage (hard disk) is the slowest."
  },
  {
    id: "ext_23",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "System Bus for Transmitting Control Signals (Slide 7)",
    text: "Which bus in the computer system is specifically responsible for transmitting control signals between components?",
    textAr: "أي ناقل في نظام الحاسوب مسؤول تحديداً عن نقل إشارات التحكم والتنسيق بين المكونات؟ (سلايد 7)",
    type: "mcq",
    options: [
      { id: "a", text: "a) Control bus" },
      { id: "b", text: "b) Data bus" },
      { id: "c", text: "c) Address bus" },
      { id: "d", text: "d) None of previous" }
    ],
    correctAnswer: "a",
    source: "Slide 7 - Which of the following is used to transmit control signal in computer?",
    explanation: `الخيار (a) هو الصحيح: Control bus (ناقل التحكم).
سلايد 7 نصاً: يُستخدم ناقل التحكم (Control bus) لنقل إشارات التحكم والتوقيت (مثل إشارات القراءة والكتابة) بين مكونات الحاسوب. ناقل البيانات ينقل البيانات، وناقل العناوين يحدد مواقع الذاكرة.`,
    details: "Slide 7 specifies that the Control bus is used to transmit control signals in computer systems."
  },
  {
    id: "ext_24",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Valid Variable Identifier Rules in C++",
    text: "Which of the following is a legal C++ variable identifier according to language grammar?",
    textAr: "أي من المعرفات التالية يُعتبر اسم متغير صالح وقانوني في لغة C++ وفقاً للمنهج؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) _totalScore" },
      { id: "b", text: "b) 2ndNumber" },
      { id: "c", text: "c) total-score" },
      { id: "d", text: "d) double" }
    ],
    correctAnswer: "a",
    source: "Slide 5 - Variable naming rules in programming languages",
    explanation: `الخيار (a) هو الصحيح: _totalScore.
قواعد التسمية:
1. _totalScore: قانوني وصحيح، يبدأ بشرطة سفلية.
2. 2ndNumber: غير قانوني لأنه يبدأ برقم (سلايد 5).
3. total-score: غير قانوني لاحتوائه على علامة الطرح (-).
4. double: غير قانوني لأنه كلمة محجوزة (ورقة الامتحان).`,
    details: "_totalScore is valid. Identifiers cannot start with a number (2ndNumber), contain hyphens (total-score), or use keywords (double)."
  }
];

// Automatically register into questionsData if loaded
if (typeof questionsData !== 'undefined') {
  const nonExtreme = questionsData.filter(q => q.category !== 'extreme');
  questionsData.length = 0;
  questionsData.push(...nonExtreme, ...extremeQuestionsData);
}
