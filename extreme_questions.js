// ========================================================
// 💀 EXTREME QUESTIONS BANK (أسئلة الدمار والتعجيز - 50 سؤالاً)
// أسئلة استثنائية مميتة ومصائد امتحانية للمحترفين والـ 1% الأوائل
// ========================================================

const extremeQuestionsData = [
  // ==========================================
  // PART 1: C++ TRICKY CODE TRACES & PITFALLS (1 to 20)
  // ==========================================
  {
    id: "ext_1",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "The Octal Literal Trap",
    text: "What will be printed by the following code snippet?",
    textAr: "ما هو الناتج المطبوع من الكود التالي؟ (احذر المصيدة!)",
    codeSnippet: `int a = 016;
int b = a + 4;
cout << b;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 20" },
      { id: "b", text: "b) 18" },
      { id: "c", text: "c) 22" },
      { id: "d", text: "d) Compilation Error" }
    ],
    correctAnswer: "b",
    source: "C++ Literal Traps (Professor Exam Favorite)",
    explanation: `الخيار (b) هو الصحيح: 18 وليس 20!
المصيدة المميتة:
في لغة C++، أي رقم يبدأ بالصفر 0 يُعتبر تلقائياً رقماً بالنظام الثماني (Octal Literal)!
الرقم 016 ثمانياً = (1 × 8^1) + (6 × 8^0) = 8 + 6 = 14 عشرياً.
ثم b = 14 + 4 = 18!
معظم الطلاب يحسبونها 16 + 4 = 20 ويقعون في الفخ!`,
    details: "Rule: Leading zero (e.g. 016) denotes Octal (Base 8). 0x denotes Hexadecimal."
  },
  {
    id: "ext_2",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Short-Circuit Logical Evaluation",
    text: "What will be printed by the following code snippet?",
    textAr: "ما هو الناتج المطبوع من تنفيذ كود C++ التالي؟",
    codeSnippet: `int a = 0, b = 2;
if (a++ && ++b) {
    cout << "Yes ";
}
cout << a << " " << b;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 1 3" },
      { id: "b", text: "b) 1 2" },
      { id: "c", text: "c) Yes 1 3" },
      { id: "d", text: "d) 0 2" }
    ],
    correctAnswer: "b",
    source: "Logical Operators Short-Circuit Trap",
    explanation: `الخيار (b) هو الصحيح: 1 2.
المصيدة:
معامل الربط المنطقي && يعتمد على التقييم قصير الدائرة (Short-Circuit Evaluation):
1) a++ تعيد قيمة a الحالية (0) ثم تزيدها إلى 1.
2) بما أن الطرف الأول هو 0 (False)، فإن لغة C++ لا تُنفذ الطرف الثاني (++b) على الإطلاق!
3) لذلك تظل قيمة b كما هي 2 دون زيادة، وتكون قيمة a هي 1.
الناتج المطبوع هو: 1 2.`,
    details: "Rule: In (A && B), if A is false, B is NOT evaluated. In (A || B), if A is true, B is NOT evaluated."
  },
  {
    id: "ext_3",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Negative Modulo & Truncating Division",
    text: "What is the exact output of: cout << (-17 / 5) << \" \" << (-17 % 5); ?",
    textAr: "ما هو الناتج الدقيق لطباعة: cout << (-17 / 5) << \" \" << (-17 % 5); ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) -3 -2" },
      { id: "b", text: "b) -4 3" },
      { id: "c", text: "c) -3 2" },
      { id: "d", text: "d) -4 -2" }
    ],
    correctAnswer: "a",
    source: "C++11 Arithmetic Standards",
    explanation: `الخيار (a) هو الصحيح: -3 -2.
القاعدة القياسية في C++:
1) القسمة الصحيحة تقتطع دائماً باتجاه الصفر (Truncates toward zero):
   -17 / 5 = -3.4 -> تصبح -3 (وليس -4).
2) إشارة باقي القسمة (%) تتبع دائماً إشارة المقسوم (Dividend) وهو -17 هنا:
   لذلك (-17 % 5) = -2 (لأن: -17 = 5 * -3 + (-2)).`,
    details: "Formula: (a / b) * b + (a % b) == a. Sign of (a % b) matches sign of a."
  },
  {
    id: "ext_4",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "sizeof Operator Non-Evaluation",
    text: "What will be printed by the following code snippet?",
    textAr: "ما هو الناتج المطبوع من مقطع الكود التالي؟",
    codeSnippet: `int x = 10;
sizeof(x++);
cout << x;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 11" },
      { id: "b", text: "b) 10" },
      { id: "c", text: "c) 4" },
      { id: "d", text: "d) Compilation Error" }
    ],
    correctAnswer: "b",
    source: "Compile-time Operators Traps",
    explanation: `الخيار (b) هو الصحيح: 10!
المصيدة:
معامل sizeof في C++ يتم حسابه في وقت الترجمة (Compile-time)، والتعبير الموجود بداخله لا يتم تنفيذه في وقت التشغيل (Unevaluated Operand)!
لذلك العملية x++ لا تُنفذ إطلاقاً، وتظل قيمة x كما هي 10.`,
    details: "Rule: Expressions inside sizeof() are never executed at runtime."
  },
  {
    id: "ext_5",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Accidental Semicolon After Condition",
    text: "What will be printed by this code?",
    textAr: "ماذا سيطبع هذا الكود؟",
    codeSnippet: `int x = 5;
if (x > 10);
{
    cout << "Passed";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Nothing (Blank)" },
      { id: "b", text: "b) Passed" },
      { id: "c", text: "c) Syntax Error" },
      { id: "d", text: "d) Infinite Loop" }
    ],
    correctAnswer: "b",
    source: "Classic C++ Logic Traps",
    explanation: `الخيار (b) هو الصحيح: Passed!
المصيدة:
وجود فاصلة منقوطة بعد جملة if مباشرة (if (x > 10);) يُنهي جملة الشرط كجملة فارغة (Null Statement).
القوسان {...} التاليان يصبحان مجرد كتلة برمجية منفصلة (Independent Block) تنفذ دائماً بدون أي قيد! فيطبع "Passed".`,
    details: "A semicolon after if(...) turns it into an empty statement."
  },
  {
    id: "ext_6",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Float vs Double Precision Comparison Trap",
    text: "What will be printed by this snippet?",
    textAr: "ما هو الناتج المطبوع من مقارنة الرقم العشري التالية؟",
    codeSnippet: `float x = 0.7;
if (x == 0.7) {
    cout << "Equal";
} else {
    cout << "Not Equal";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Equal" },
      { id: "b", text: "b) Not Equal" },
      { id: "c", text: "c) Compile Error" },
      { id: "d", text: "d) Undefined" }
    ],
    correctAnswer: "b",
    source: "IEEE 754 Floating-point Nuance",
    explanation: `الخيار (b) هو الصحيح: Not Equal!
المصيدة الكبرى:
في لغة C++، الرقم 0.7 المكتوب بدون لاحقة يُعتبر من النوع double (دقة 64 بت).
بينما المتغير x هو من النوع float (دقة 32 بت).
نظراً لأن 0.7 لا يمكن تمثيله بدقة منتهية في النظام الثنائي، فإن دقة 32 بت تختلف في البتات الأخيرة عن دقة 64 بت، فتفشل المقارنة ويطبع "Not Equal"!
لتكون متساوية يجب كتابتها: if (x == 0.7f).`,
    details: "Floating point literals default to double. float and double representations of non-power-of-2 fractions differ."
  },
  {
    id: "ext_7",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Comma Operator Precedence & Evaluation",
    text: "What is the value printed for a?",
    textAr: "ما هي القيمة المطبوعة للمتغير a؟",
    codeSnippet: `int a = (10, 20, 30);
cout << a;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 10" },
      { id: "b", text: "b) 20" },
      { id: "c", text: "c) 30" },
      { id: "d", text: "d) Compile Error" }
    ],
    correctAnswer: "c",
    source: "Comma Operator Mechanics",
    explanation: `الخيار (c) هو الصحيح: 30!
المصيدة:
معامل الفاصلة (Comma Operator) يقوم بتقييم كل التعبيرات من اليسار إلى اليمين، ويعيد قيمة التعبير الأخير فقط في أقصى اليمين.
لذلك (10, 20, 30) تعيد القيمة 30 ويتم تخزينها في a.`,
    details: "Comma operator evaluates expressions left-to-right and yields the rightmost operand's value."
  },
  {
    id: "ext_8",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Array Subscript Commutativity Mystery",
    text: "What will be printed by this unusual array syntax?",
    textAr: "ما هو الناتج المطبوع من هذه الجملة غير المعتادة؟",
    codeSnippet: `int arr[] = {5, 15, 25, 35};
cout << 2[arr];`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 25" },
      { id: "b", text: "b) 15" },
      { id: "c", text: "c) 2" },
      { id: "d", text: "d) Syntax Error" }
    ],
    correctAnswer: "a",
    source: "Pointer Arithmetic & Array Syntax Definition",
    explanation: `الخيار (a) هو الصحيح: 25!
المصيدة العبقرية:
في لغة C++، التعبير arr[2] يُعرّف في المعيار بأنه: *(arr + 2).
ونظراً لأن الجمع تبادلي (Commutative)، فإن: *(arr + 2) هي نفسها *(2 + arr)، والتي يمكن كتابتها بالصيغة القانونية: 2[arr]!
العنصر في الفهرس 2 هو 25.`,
    details: "Rule: arr[i] == *(arr + i) == *(i + arr) == i[arr]."
  },
  {
    id: "ext_9",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Switch Fall-through Cascade Trap",
    text: "What will be printed by the following code snippet?",
    textAr: "ما هو الناتج المطبوع من كود الـ switch التالي؟",
    codeSnippet: `int x = 1;
switch (x) {
    case 1: x += 2;
    case 2: x *= 3;
        break;
    default: x += 10;
}
cout << x;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 3" },
      { id: "b", text: "b) 9" },
      { id: "c", text: "c) 19" },
      { id: "d", text: "d) 1" }
    ],
    correctAnswer: "b",
    source: "Slide 10 Switch Fallthrough Traps",
    explanation: `الخيار (b) هو الصحيح: 9!
تتبع الخطوات:
1) يبدأ x بقيمة 1، فيدخل إلى case 1.
2) ينفذ x += 2 فتصبح x = 3.
3) لا توجد جملة break في نهاية case 1، فيحدث انزلاق (Fall-through) مباشر إلى case 2!
4) ينفذ x *= 3 فتصبح x = 3 * 3 = 9.
5) يصادف break فيخرج من الـ switch. الناتج النهائي = 9.`,
    details: "Without break, execution cascades directly into the next case regardless of matching."
  },
  {
    id: "ext_10",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Block Scope Variable Shadowing",
    text: "What will be printed by the following nested block code?",
    textAr: "ما هو الناتج المطبوع من الكود المتداخل التالي؟",
    codeSnippet: `int x = 5;
{
    int x = 20;
    x++;
}
cout << x;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 21" },
      { id: "b", text: "b) 6" },
      { id: "c", text: "c) 5" },
      { id: "d", text: "d) Compile Error: Redefinition of x" }
    ],
    correctAnswer: "c",
    source: "Variable Scope & Lifetime Traps",
    explanation: `الخيار (c) هو الصحيح: 5!
المصيدة:
المتغير x داخل القوسين {...} هو متغير محلي جديد تماماً يحجب (Shadows) المتغير الخارجي.
عندما ينتهي القوس المغلق }، يتم تدمير المتغير الداخلي من الذاكرة.
السطر الخارجي cout << x يطبع المتغير الخارجي الأصلي الذي ظلت قيمته 5 دون أي تغيير!`,
    details: "Inner block variables mask outer variables of the same name and are destroyed when exiting the scope."
  },
  {
    id: "ext_11",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Logical NOT vs Bitwise NOT on Zero",
    text: "What is printed by: cout << !0 << \" \" << ~0; ?",
    textAr: "ما هو الناتج المطبوع من العملية التالية في C++؟",
    codeSnippet: `cout << !0 << " " << ~0;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 1 1" },
      { id: "b", text: "b) 1 -1" },
      { id: "c", text: "c) 0 -1" },
      { id: "d", text: "d) 1 0" }
    ],
    correctAnswer: "b",
    source: "Bitwise Operators vs Logical Operators",
    explanation: `الخيار (b) هو الصحيح: 1 -1!
1) معامل النفي المنطقي (!0): الصفر منطقياً هو False، ونفيه يعطي True الذي يطبع كالرقم 1.
2) معامل قلب البتات (~0): يقلب كل بتات الصفر المكونة من 32 صفراً لتصبح كلها آحاد (1111...1111)، وهو في نظام المكمل الثنائي Two's Complement يمثل بدقة الرقم -1!`,
    details: "!x is boolean negation (0 or 1). ~x flips all bits; in two's complement, ~0 == -1."
  },
  {
    id: "ext_12",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Modulus Sign When Divisor is Negative",
    text: "What will be printed by: cout << (13 % -5); ?",
    textAr: "ما هو ناتج العملية التالية: cout << (13 % -5); ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) -2" },
      { id: "b", text: "b) -3" },
      { id: "c", text: "c) 3" },
      { id: "d", text: "d) 2" }
    ],
    correctAnswer: "c",
    source: "C++ Modulus Operator Standard",
    explanation: `الخيار (c) هو الصحيح: 3!
المصيدة:
إشارة المقسوم عليه (Divisor) السالبة (-5) يتم تجاهلها تماماً في حساب باقي القسمة في C++!
إشارة الباقي تتحدد فقط وحصراً بإشارة المقسوم (13)، وبما أنه موجب فالناتج هو موجب 3.`,
    details: "In C++, sign of (a % b) is completely independent of the sign of b."
  },
  {
    id: "ext_13",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Boolean Representation of Negative Values",
    text: "What will be printed by this bool assignment?",
    textAr: "ماذا سيطبع هذا الكود؟",
    codeSnippet: `bool b = -42;
cout << b;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) -42" },
      { id: "b", text: "b) 0" },
      { id: "c", text: "c) 1" },
      { id: "d", text: "d) Compilation Error" }
    ],
    correctAnswer: "c",
    source: "Type Conversion to bool",
    explanation: `الخيار (c) هو الصحيح: 1!
القاعدة:
في C++، أي قيمة رقمية غير الصفر (سواء كانت موجبة أو سالبة مثل -42) تتحول عند إسنادها لمتغير bool إلى true (أي 1). القيمة 0 فقط هي التي تتحول إلى false (0).`,
    details: "Any non-zero value converts to true (1) in boolean context."
  },
  {
    id: "ext_14",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Loop With Post-Decrement Condition",
    text: "How many times does this loop print and what is the output?",
    textAr: "ما هو الناتج المطبوع من حلقة while التالية؟",
    codeSnippet: `int n = 3;
while (n--) {
    cout << n << " ";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 3 2 1" },
      { id: "b", text: "b) 2 1 0" },
      { id: "c", text: "c) 2 1" },
      { id: "d", text: "d) 3 2 1 0" }
    ],
    correctAnswer: "b",
    source: "Loop Termination Trap",
    explanation: `الخيار (b) هو الصحيح: 2 1 0.
التتبع:
1) n=3: الشرط (3) صحيح، ينقص n ليصبح 2، يطبع 2.
2) n=2: الشرط (2) صحيح، ينقص n ليصبح 1، يطبع 1.
3) n=1: الشرط (1) صحيح، ينقص n ليصبح 0، يطبع 0.
4) n=0: الشرط (0) خاطئ، يتوقف التكرار.`,
    details: "Post-decrement evaluates the condition before decrementing."
  },
  {
    id: "ext_15",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Integer Division Order in Floating Calculations",
    text: "What will be printed for variable result?",
    textAr: "ما هي القيمة المخزنة في المتغير result؟",
    codeSnippet: `double result = 1 / 2 * 100.0;
cout << result;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 50" },
      { id: "b", text: "b) 0" },
      { id: "c", text: "c) 50.0" },
      { id: "d", text: "d) 0.5" }
    ],
    correctAnswer: "b",
    source: "Operator Precedence & Mixed Type Trap",
    explanation: `الخيار (b) هو الصحيح: 0!
المصيدة:
العمليات تُنفذ من اليسار إلى اليمين:
1) 1 / 2 هي قسمة عددين صحيحين (Integer division)، ناتجها 0 وليس 0.5!
2) ثم 0 * 100.0 = 0.0.
للحصول على 50 يجب كتابة أحد العددين ككسر: 1.0 / 2.`,
    details: "Integer division precedes multiplication when on the left: (1 / 2) evaluates to 0 first."
  },
  {
    id: "ext_16",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "String Literal Pointer Comparison Trap",
    text: "What will be printed by comparing two identical char arrays?",
    textAr: "ماذا سيطبع هذا الكود؟",
    codeSnippet: `char s1[] = "hello";
char s2[] = "hello";
if (s1 == s2) {
    cout << "Equal";
} else {
    cout << "Different";
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) Equal" },
      { id: "b", text: "b) Different" },
      { id: "c", text: "c) Syntax Error" },
      { id: "d", text: "d) Undefined" }
    ],
    correctAnswer: "b",
    source: "C-string Pointer Comparison Trap",
    explanation: `الخيار (b) هو الصحيح: Different!
المصيدة:
المعامل == عند استخدامه مع مصفوفات المحارف (C-style strings) لا يقارن النصوص بداخلها، بل يقارن عناوين الذاكرة (Memory Addresses) للمصفوفتين!
وحيث إن s1 و s2 تقعان في مكانين مختلفين في الذاكرة، فإن عنوانيهما مختلفان فيطبع "Different". لمقارنة النصوص نستخدم strcmp أو std::string.`,
    details: "Array names decay into pointers; == compares memory addresses, not string contents."
  },
  {
    id: "ext_17",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Assignment Expression Result in C++",
    text: "What will be printed by this chained assignment?",
    textAr: "ما هو الناتج المطبوع من التعبير التالي؟",
    codeSnippet: `int a, b;
a = (b = 7) + 3;
cout << a << " " << b;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 10 7" },
      { id: "b", text: "b) 7 7" },
      { id: "c", text: "c) 10 0" },
      { id: "d", text: "d) Compilation Error" }
    ],
    correctAnswer: "a",
    source: "Assignment Operator Return Value",
    explanation: `الخيار (a) هو الصحيح: 10 7.
في C++، معامل التعيين = هو تعبير يعيد القيمة المسندة نفسها!
التعبير (b = 7) يقوم بإسناد 7 إلى b ثم يعيد القيمة 7.
ثم a = 7 + 3 = 10. فيصبح a = 10 و b = 7.`,
    details: "Assignment expressions evaluate to the assigned lvalue."
  },
  {
    id: "ext_18",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Pointer Size on 64-bit Architecture",
    text: "On a 64-bit operating system, what is the output of: cout << sizeof(char*) << \" \" << sizeof(double*); ?",
    textAr: "على نظام تشغيل 64-bit، ما هو الناتج المطبوع من معرفة حجم المؤشرات التالية؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 1 8" },
      { id: "b", text: "b) 8 8" },
      { id: "c", text: "c) 4 8" },
      { id: "d", text: "d) 4 4" }
    ],
    correctAnswer: "b",
    source: "Memory Architecture & Pointer Sizing",
    explanation: `الخيار (b) هو الصحيح: 8 8!
المصيدة:
حجم المؤشر (Pointer Size) لا يعتمد نهائياً على نوع البيانات التي يؤشر عليها (سواء كانت char أو int أو double). المؤشر يخزن عنوان ذاكرة، وعلى معمارية 64-bit كل عناوين الذاكرة حجمها 8 بايت (64 بت)!`,
    details: "All pointers on a 64-bit architecture are 8 bytes in size."
  },
  {
    id: "ext_19",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Division and Multiplication Precedence Tie",
    text: "What will be printed by: cout << 16 / 4 * 2; ?",
    textAr: "ما هو الناتج الدقيق لحساب: cout << 16 / 4 * 2; ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 2" },
      { id: "b", text: "b) 8" },
      { id: "c", text: "c) 16" },
      { id: "d", text: "d) 1" }
    ],
    correctAnswer: "b",
    source: "Operator Associativity Rules",
    explanation: `الخيار (b) هو الصحيح: 8 وليس 2!
المصيدة:
الضرب والقسمة لهما نفس مستوى الأسبقية (Precedence)، وقاعدة الترابط (Associativity) لهما هي من اليسار إلى اليمين (Left-to-Right):
1) 16 / 4 = 4 أولاً.
2) ثم 4 * 2 = 8.
(الطلاب الذين يحسبون 4 * 2 = 8 ثم 16 / 8 = 2 يقعون في فخ خاطئ!).`,
    details: "* and / share equal precedence and associate left-to-right."
  },
  {
    id: "ext_20",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Double Logical OR Short-Circuit Modification",
    text: "What will be printed by this condition?",
    textAr: "ما هو الناتج المطبوع من الشرط التالي؟",
    codeSnippet: `int x = 1, y = 0;
if (x || (y = 99)) {
    cout << y;
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 99" },
      { id: "b", text: "b) 0" },
      { id: "c", text: "c) 1" },
      { id: "d", text: "d) Nothing" }
    ],
    correctAnswer: "b",
    source: "Short-circuit OR Assignment Trap",
    explanation: `الخيار (b) هو الصحيح: 0!
المصيدة:
في المعامل ||، إذا كان الطرف الأول صحيحاً (x = 1 وهو True)، فإن المعالج يقرر فوراً أن النتيجة الكلية True دون النظر للطرف الثاني!
وبالتالي التعبير (y = 99) لا يتم تنفيذه نهائياً وتظل y بقيمتها الأصلية 0.`,
    details: "In (A || B), when A is true, B is skipped completely."
  },

  // ==========================================
  // PART 2: EXTREME NUMBER SYSTEMS & BINARY TRAPS (21 to 35)
  // ==========================================
  {
    id: "ext_21",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Negating -128 in 8-bit Two's Complement",
    text: "In an 8-bit signed two's complement system, what happens when you negate the value -128 (-(-128))?",
    textAr: "في نظام المكمل الثنائي المكون من 8 بت، ماذا يحدث عند عكس إشارة الرقم -128 للحصول على +128؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Successfully becomes +128" },
      { id: "b", text: "b) Overflow occurs and the result is still -128" },
      { id: "c", text: "c) Becomes +127" },
      { id: "d", text: "d) Becomes 0" }
    ],
    correctAnswer: "b",
    source: "Two's Complement Asymmetry Property",
    explanation: `الخيار (b) هو الصحيح: يحدث Overflow وتبقى النتيجة -128!
السر الرياضي المميت:
مدى الأعداد في 8-bit Two's complement هو من -128 إلى +127.
الرقم +128 غير موجود أصلاً خارج المدى!
تمثيل -128 ثنائياً هو: 10000000.
إذا أردت إيجاد مكمّله الثنائي:
1) اقلب البتات: 01111111 (+127)
2) أضف 1: 01111111 + 1 = 10000000 (وهي نفس الشفرة -128 مجدداً!).`,
    details: "The most negative value (-2^(n-1)) has no positive counterpart in two's complement."
  },
  {
    id: "ext_22",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Minimum Bits Needed to Represent -32",
    text: "What is the minimum number of bits required to represent the decimal number -32 in two's complement notation?",
    textAr: "ما هو أقل عدد من البتات (Bits) اللازمة لتمثيل الرقم العشري -32 بنظام المكمل الثنائي؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 5 bits" },
      { id: "b", text: "b) 6 bits" },
      { id: "c", text: "c) 7 bits" },
      { id: "d", text: "d) 8 bits" }
    ],
    correctAnswer: "b",
    source: "Bit Range Formula Traps",
    explanation: `الخيار (b) هو الصحيح: 6 بت!
القاعدة:
مدى n بت بنظام Two's complement هو من -2^(n-1) إلى +(2^(n-1) - 1).
- لو استخدمنا 5 بت: المدى من -2^4 إلى +(2^4 - 1) = من -16 إلى +15 (لا يكفي لـ -32!).
- لو استخدمنا 6 بت: المدى من -2^5 إلى +(2^5 - 1) = من -32 إلى +31 (يكفي بالضبط ويغطي -32).`,
    details: "For 6 bits, range is [-2^5, 2^5 - 1] = [-32, +31]. Minimum bits = 6."
  },
  {
    id: "ext_23",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Sign Extension from 8-bit to 16-bit",
    text: "If an 8-bit signed variable contains 11110000 (-16), what will its 16-bit representation be after sign extension?",
    textAr: "إذا كان متغير 8-bit يحتوي على القيمة الثنائية 11110000 (الرقم -16)، فكيف سيكون شكله بعد تمديد الإشارة إلى 16-bit؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 00000000 11110000" },
      { id: "b", text: "b) 11111111 11110000" },
      { id: "c", text: "c) 10000000 11110000" },
      { id: "d", text: "d) 11110000 00000000" }
    ],
    correctAnswer: "b",
    source: "Sign Extension Hardware Logic",
    explanation: `الخيار (b) هو الصحيح: 11111111 11110000!
قاعدة تمديد الإشارة (Sign Extension):
عند ترقية رقم بإشارة إلى حجم أكبر (من 8 بت إلى 16 بت)، يقوم المعالج بنسخ بت الإشارة الأيسر (MSB) وتكراره في كل البتات الإضافية الجديدة للمحافظة على القيمة السالبة للرقم!
بما أن البت الأيسر هو 1، يتم ملء البايت الإضافي بـ 8 آحاد: 11111111.`,
    details: "Sign extension copies the MSB (sign bit) into all upper bits."
  },
  {
    id: "ext_24",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Repeating Binary Decimal 0.2",
    text: "What is the binary equivalent of decimal 0.2 when converted using repeated multiplication?",
    textAr: "ما هو المكافئ الثنائي للكسر العشري 0.2 عند تحويله بالضرب المتكرر في 2؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 0.0011 (Finite)" },
      { id: "b", text: "b) 0.00110011... (Infinite repeating)" },
      { id: "c", text: "c) 0.01" },
      { id: "d", text: "d) 0.1" }
    ],
    correctAnswer: "b",
    source: "Fractional Precision Traps",
    explanation: `الخيار (b) هو الصحيح: كسر دوري لا نهائي 0.00110011... !
خطوات التحويل:
0.2 * 2 = 0.4 (0)
0.4 * 2 = 0.8 (0)
0.8 * 2 = 1.6 (1)
0.6 * 2 = 1.2 (1)
0.2 * 2 = 0.4 (0) -> عدنا لنفس البداية 0.2!
لذلك يتكرر النمط 0011 إلى ما لا نهاية، ولهذا السبب لا تستطيع الحواسيب تمثيل 0.2 بدقة تامة.`,
    details: "Decimal fractions whose denominators are not powers of 2 produce infinite recurring binary expansions."
  },
  {
    id: "ext_25",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Arithmetic Right Shift on Negative Integer",
    text: "What is the result of shifting -8 by 1 bit to the right ((-8) >> 1) in C++?",
    textAr: "ما هو ناتج إزاحة الرقم السالب -8 بمقدار خانة واحدة لليمين ((-8) >> 1)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) +4" },
      { id: "b", text: "b) -4" },
      { id: "c", text: "c) 2147483644" },
      { id: "d", text: "d) -16" }
    ],
    correctAnswer: "b",
    source: "Arithmetic vs Logical Bit Shift",
    explanation: `الخيار (b) هو الصحيح: -4!
المفهوم:
الإزاحة لليمين (Right Shift) للأعداد السالبة ذات الإشارة تُسمى Arithmetic Right Shift، وتقوم بالحفاظ على خانة الإشارة عن طريق إدخال 1 من اليسار بدلاً من 0، مما يكافئ رياضياً القسمة على 2: (-8 / 2 = -4).`,
    details: "Arithmetic right shift preserves the sign bit, dividing signed integers by 2."
  },
  {
    id: "ext_26",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Hexadecimal Subtraction with Borrow",
    text: "Calculate Hexadecimal: 0x32 - 0x19 = ?",
    textAr: "احسب ناتج الطرح الست عشري: 0x32 - 0x19 = ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 0x19" },
      { id: "b", text: "b) 0x13" },
      { id: "c", text: "c) 0x17" },
      { id: "d", text: "d) 0x15" }
    ],
    correctAnswer: "a",
    source: "Hexadecimal Arithmetic Operations",
    explanation: `الخيار (a) هو الصحيح: 0x19!
طريقة الاستلاف في الست عشري:
- الخانة الأولى: 2 ناقص 9 لا تصح، فنستلف 1 من الخانة التالية (3 تصبح 2).
- قيمة الاستلاف في النظام الست عشري هي 16!
- تصبح الخانة: 2 + 16 = 18.
- 18 - 9 = 9.
- الخانة الثانية: 2 - 1 = 1.
الناتج الست عشري = 0x19 (عشرياً: 50 - 25 = 25 وهو 0x19).`,
    details: "In base 16, a borrow transfers a value of 16 (not 10)."
  },
  {
    id: "ext_27",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Bitwise Trick x & (x - 1)",
    text: "What does the expression (x & (x - 1)) == 0 determine for any positive integer x?",
    textAr: "ماذا تفحص المعادلة البرمجية الثنائية الشهيرة (x & (x - 1)) == 0 لأي رقم موجب x؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) If x is an even number" },
      { id: "b", text: "b) If x is a power of 2 (e.g. 1, 2, 4, 8, 16...)" },
      { id: "c", text: "c) If x is a prime number" },
      { id: "d", text: "d) If x is negative" }
    ],
    correctAnswer: "b",
    source: "Famous Bit-Manipulation Algorithms",
    explanation: `الخيار (b) هو الصحيح: فحص ما إذا كان x قوة للرقم 2 (Power of 2)!
الشرح:
قوى الرقم 2 تحتوي على بت واحد فقط قيمته 1 (مثلاً 8 هي 1000).
عند طرح 1 نحصل على: 7 وهي 0111.
عند عمل AND بينهما: 1000 & 0111 = 0000 دائماً!
وهذه أسرع خوارزمية في علوم الحاسوب لفحص قوى الرقم 2 بزمن O(1).`,
    details: "x & (x - 1) clears the lowest set bit. If result is 0, x had only one 1-bit (power of 2)."
  },
  {
    id: "ext_28",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Signed Addition Overflow Detection Rule",
    text: "When adding two 8-bit two's complement numbers A = 01000000 (+64) and B = 01000001 (+65), what is the result?",
    textAr: "عند جمع العددين 8-bit بنظام المكمل الثنائي A = 01000000 (+64) و B = 01000001 (+65)، ما هي النتيجة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) +129 with no overflow" },
      { id: "b", text: "b) Overflow occurs and result becomes negative (-127)" },
      { id: "c", text: "c) Zero" },
      { id: "d", text: "d) +127" }
    ],
    correctAnswer: "b",
    source: "Slide 2 (Q10) Overflow Verification",
    explanation: `الخيار (b) هو الصحيح: يحدث Overflow وتصبح النتيجة سالبة (-127)!
السبب:
المدى الأقصى الموجب في 8-bit هو +127.
ناتج جمع 64 + 65 = 129 وهو خارج المدى.
عند الجمع ثنائياً: 01000000 + 01000001 = 10000001.
الخانة اليسرى أصبحت 1 (إشارة سالبة)، وبحساب مكملها الثنائي تمثل الرقم -127!`,
    details: "Adding two positives produced a negative result -> Overflow Flag is set."
  },
  {
    id: "ext_29",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Two's Complement of Zero",
    text: "What is the two's complement of 00000000 in an 8-bit system?",
    textAr: "ما هو المكمل الثنائي (Two's complement) للرقم 00000000 في نظام 8-bit؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 11111111" },
      { id: "b", text: "b) 00000000" },
      { id: "c", text: "c) 10000000" },
      { id: "d", text: "d) Overflow Error" }
    ],
    correctAnswer: "b",
    source: "Slide 2 & Zero Representation",
    explanation: `الخيار (b) هو الصحيح: 00000000!
الخطوات:
1) اقلب البتات (المكمل الأحادي): 11111111.
2) أضف 1: 11111111 + 1 = 1 00000000.
3) في نظام 8-bit، يتم تجاهل الحمل التاسع الزائد (Discard Carry).
يتبقى: 00000000.
وهذا يثبت أن للصفر تمثيلاً واحداً فريداً في المكمل الثنائي!`,
    details: "Two's complement of 0 yields 0 with discarded carry, proving single unique zero."
  },
  {
    id: "ext_30",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "BCD vs Binary Representation of 25",
    text: "What is the BCD (Binary Coded Decimal) representation of decimal 25?",
    textAr: "ما هو تمثيل BCD (Binary Coded Decimal) للرقم العشري 25؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 00011001" },
      { id: "b", text: "b) 00100101" },
      { id: "c", text: "c) 11001" },
      { id: "d", text: "d) 00101001" }
    ],
    correctAnswer: "b",
    source: "BCD Digital Logic Systems",
    explanation: `الخيار (b) هو الصحيح: 0010 0101!
المصيدة:
في نظام BCD، لا يتم تحويل الرقم كاملاً إلى ثنائي، بل يتم تحويل كل خانة عشرية منفصلة إلى 4 بت:
- الخانة 2 = 0010
- الخانة 5 = 0101
إذن BCD هو: 00100101.
(أما 00011001 فهو التحويل الثنائي الخالص Pure Binary لـ 25).`,
    details: "BCD encodes each decimal digit separately into 4 binary bits."
  },
  {
    id: "ext_31",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Hexadecimal Fraction 0.8 to Decimal",
    text: "What is the exact decimal value of Hexadecimal fraction (0.8)_16?",
    textAr: "ما هي القيمة العشرية الدقيقة للكسر الست عشري (0.8)₁₆؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 0.8" },
      { id: "b", text: "b) 0.5" },
      { id: "c", text: "c) 0.08" },
      { id: "d", text: "d) 0.125" }
    ],
    correctAnswer: "b",
    source: "Fractional Base Weights",
    explanation: `الخيار (b) هو الصحيح: 0.5!
المصيدة:
في النظام الست عشري، وزن الخانة الأولى بعد الفاصلة هو 16^-1 = (1 / 16).
إذن: 8 × (1 / 16) = 8 / 16 = 1 / 2 = 0.5 عشرياً!`,
    details: "(0.8)_16 = 8 * 16^(-1) = 8 / 16 = 0.5 (Decimal)."
  },
  {
    id: "ext_32",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "1's Complement Negative Zero Code",
    text: "In an 8-bit One's Complement system, what binary pattern represents negative zero (-0)?",
    textAr: "في نظام المكمل الأحادي 8-bit، ما هي الشفرة الثنائية التي تمثل السالب صفر (-0)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 10000000" },
      { id: "b", text: "b) 11111111" },
      { id: "c", text: "c) 00000000" },
      { id: "d", text: "d) Negative zero doesn't exist" }
    ],
    correctAnswer: "b",
    source: "Slide 3 & Dual Zero Flaw",
    explanation: `الخيار (b) هو الصحيح: 11111111!
في المكمل الأحادي:
+0 هو 00000000.
بقلب جميع البتات للحصول على -0 ينتج: 11111111.
(أما 10000000 فهو السالب صفر في نظام Signed Magnitude).`,
    details: "In 1's complement, +0 is 00000000 and -0 is 11111111."
  },
  {
    id: "ext_33",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Fast Conversion: Hexadecimal to Binary",
    text: "What is the binary equivalent of Hexadecimal 0x5D.4?",
    textAr: "ما هو المكافئ الثنائي للرقم الست عشري 0x5D.4؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 01011101.0100" },
      { id: "b", text: "b) 01011110.0100" },
      { id: "c", text: "c) 01011100.1000" },
      { id: "d", text: "d) 01101101.0100" }
    ],
    correctAnswer: "a",
    source: "Hex to Binary Nibble Mapping",
    explanation: `الخيار (a) هو الصحيح: 01011101.0100!
فصل كل خانة إلى 4 بت:
5 = 0101
D (13) = 1101
.4 = .0100
الإجمالي: 01011101.0100.`,
    details: "5 = 0101, D = 1101, 4 = 0100."
  },
  {
    id: "ext_34",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Carry vs Overflow Distinction",
    text: "Which of the following statements correctly distinguishes between Carry Flag (CF) and Overflow Flag (OF)?",
    textAr: "أي مما يلي يفرق بشكل صحيح بين علم الحمل (Carry Flag) وعلم الفيض (Overflow Flag)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) CF is for unsigned arithmetic, while OF is for signed arithmetic." },
      { id: "b", text: "b) Both CF and OF are identical in all architectures." },
      { id: "c", text: "c) CF is for floating point, OF is for integer arithmetic." },
      { id: "d", text: "d) OF indicates division by zero, CF indicates addition." }
    ],
    correctAnswer: "a",
    source: "Processor Status Register Concepts",
    explanation: `الخيار (a) هو الصحيح!
قاعدة معمارية الحاسوب:
- Carry Flag (CF): يُستخدم عند التعامل مع الأرقام بدون إشارة (Unsigned) ليشير إلى خروج حمل من البت الأخير.
- Overflow Flag (OF): يُستخدم حصراً عند التعامل مع الأرقام بإشارة (Signed Two's complement) ليشير إلى خطأ في إشارة الناتج.`,
    details: "CF = Unsigned overflow/carry out of MSB. OF = Signed overflow (CarryIn != CarryOut at MSB)."
  },
  {
    id: "ext_35",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Double Dabble: 100.125 to Hexadecimal",
    text: "Convert decimal 100.125 directly to Hexadecimal notation.",
    textAr: "حوّل الرقم العشري 100.125 إلى النظام الست عشري:",
    type: "mcq",
    options: [
      { id: "a", text: "a) 64.2" },
      { id: "b", text: "b) 64.125" },
      { id: "c", text: "c) 64.1" },
      { id: "d", text: "d) 62.4" }
    ],
    correctAnswer: "a",
    source: "Exam Paper Table Conversion Pattern",
    explanation: `الخيار (a) هو الصحيح: 64.2!
1) الجزء الصحيح 100:
   100 / 16 = 6 والباقي 4 -> 64 ست عشرياً (6*16 + 4 = 100).
2) الجزء الكسري 0.125 بالضرب في 16:
   0.125 × 16 = 2.0 (الجزء الصحيح 2 وتوقف).
الناتج النهائي = 64.2 ست عشرياً.`,
    details: "100 = 0x64. 0.125 * 16 = 2. Total = 64.2."
  },

  // ==========================================
  // PART 3: EXTREME ALGORITHMS, FLOWCHARTS & THEORY (36 to 50)
  // ==========================================
  {
    id: "ext_36",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Flowchart Negative Counter Infinite Loop",
    text: "A flowchart initializes x = -1, and in a loop performs x = x - 1 with condition 'Is x == 0 ?'. What will happen?",
    textAr: "في خريطة تدفق تبدأ بـ x = -1، وداخل التكرار تنفذ x = x - 1 مع شرط التوقف 'هل x == 0 ؟'. ماذا سيحدث؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Stops after 1 iteration" },
      { id: "b", text: "b) Infinite loop because x moves away from 0 (-2, -3...)" },
      { id: "c", text: "c) Stops after 256 iterations" },
      { id: "d", text: "d) Syntax error in flowchart" }
    ],
    correctAnswer: "b",
    source: "Algorithm Termination Criteria",
    explanation: `الخيار (b) هو الصحيح: حلقة لا نهائية (Infinite Loop)!
السبب:
x تبدأ سالبة (-1) والعملية تنقصها أكثر (-2, -3, -4...)، فهي تبتعد باستمرار عن الصفر ولا تساويه أبداً، مما ينتهك خاصية النهاية (Finiteness) في الخوارزمية.`,
    details: "A loop moving away from the termination condition creates an infinite loop."
  },
  {
    id: "ext_37",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Binary Search Time Complexity",
    text: "Why is the time complexity of the Binary Search algorithm O(log2 n) instead of O(n)?",
    textAr: "لماذا يكون التعقيد الزمني لخوارزمية البحث الثنائي (Binary Search) هو O(log2 n) وليس O(n)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Because it divides the search space in half at every step." },
      { id: "b", text: "b) Because it searches elements one by one." },
      { id: "c", text: "c) Because it requires a sorted list." },
      { id: "d", text: "d) Because it uses two pointers." }
    ],
    correctAnswer: "a",
    source: "Algorithm Complexity Fundamentals",
    explanation: `الخيار (a) هو الصحيح: لأنها تقسم مساحة البحث إلى النصف في كل خطوة!
في كل مقارنة، تستبعد الخوارزمية نصف العناصر المتبقية (n/2, n/4, n/8...). عدد مرات قسمة n على 2 حتى الوصول لعنصر واحد هو log2(n).`,
    details: "Halving the problem size at each step yields logarithmic time complexity O(log n)."
  },
  {
    id: "ext_38",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "The Dangling Else Ambiguity Trap",
    text: "To which 'if' does the 'else' attach in: if (a > 0) if (b > 0) cout << 1; else cout << 2; ?",
    textAr: "إلى أي 'if' ترتبط جملة 'else' في الكود التالي؟",
    codeSnippet: `if (a > 0)
    if (b > 0)
        cout << 1;
else
    cout << 2;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) The outer if (a > 0)" },
      { id: "b", text: "b) The inner if (b > 0)" },
      { id: "c", text: "c) Both ifs" },
      { id: "d", text: "d) Syntax error" }
    ],
    correctAnswer: "b",
    source: "Dangling Else Ambiguity in C++",
    explanation: `الخيار (b) هو الصحيح: الـ if الداخلية if (b > 0)!
المصيدة:
المسافات البادئة (Indentation) خادعة ولا تؤثر في C++!
قاعدة اللغة الصارمة: ترتبط جملة else دائماً بأقرب if سابقة لها وغير مقترنة بـ else، وهي if (b > 0) هنا.`,
    details: "An else always binds to the nearest preceding unmatched if."
  },
  {
    id: "ext_39",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Powers of Two Multiplicative Loop Iterations",
    text: "How many times does this loop execute for n = 32?",
    textAr: "كم عدد مرات تنفيذ هذه الحلقة التكرارية عندما n = 32؟",
    codeSnippet: `int count = 0;
for (int i = 1; i <= 32; i *= 2) {
    count++;
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 5 times" },
      { id: "b", text: "b) 6 times" },
      { id: "c", text: "c) 32 times" },
      { id: "d", text: "d) 16 times" }
    ],
    correctAnswer: "b",
    source: "Loop Analysis & Logarithmic Traps",
    explanation: `الخيار (b) هو الصحيح: 6 مرات!
قيم العداد i في كل دورة:
1) i = 1 (الدورة 1)
2) i = 2 (الدورة 2)
3) i = 4 (الدورة 3)
4) i = 8 (الدورة 4)
5) i = 16 (الدورة 5)
6) i = 32 (الدورة 6 - لأن الشرط <= 32)
عندما يصبح i = 64 يتوقف التكرار. إجمالي الدورات = 6.`,
    details: "Values: 1, 2, 4, 8, 16, 32 -> exactly 6 iterations."
  },
  {
    id: "ext_40",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Off-by-One Fencepost Error in Loops",
    text: "A programmer wants to print numbers 1 to 10 inclusive, but writes: for(int i=1; i<10; i++) cout << i;. What is the bug?",
    textAr: "أراد مبرمج طباعة الأرقام من 1 إلى 10، لكنه كتب `i < 10`. ما هو هذا الخطأ الشهير؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Syntax Error" },
      { id: "b", text: "b) Off-by-one logic error (prints 1 to 9 only)" },
      { id: "c", text: "c) Infinite loop" },
      { id: "d", text: "d) Runtime crash" }
    ],
    correctAnswer: "b",
    source: "Slide 2 (Q7) Logic Errors Identification",
    explanation: `الخيار (b) هو الصحيح: خطأ منطقي شهير يُعرف بـ (Off-by-one error)!
البرنامج يعمل بدون أي خطأ نحوي، لكنه يتوقف عند 9 ولا يطبع الرقم 10، لأن الشرط الصحيح يجب أن يكون i <= 10.`,
    details: "Off-by-one is a logic error where an iteration boundary is missed by 1."
  },
  {
    id: "ext_41",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "SRAM vs DRAM Core Differences",
    text: "Which of the following correctly describes why Cache memory uses SRAM while Main Memory (RAM) uses DRAM?",
    textAr: "لماذا تستخدم الـ Cache ذاكرة من النوع SRAM بينما تستخدم الـ RAM ذاكرة من النوع DRAM؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) SRAM uses flip-flops (faster, no refresh needed); DRAM uses capacitors (cheaper, requires refresh cycles)." },
      { id: "b", text: "b) SRAM is non-volatile; DRAM is volatile." },
      { id: "c", text: "c) DRAM is faster than SRAM." },
      { id: "d", text: "d) SRAM is cheaper to manufacture than DRAM." }
    ],
    correctAnswer: "a",
    source: "Memory Hierarchy & Hardware Differences",
    explanation: `الخيار (a) هو الصحيح!
- SRAM (Static RAM): تُبنى من دوائر Flip-Flops (ترانزستورات متعددة)، وهي فائقة السرعة ولا تحتاج لدورة إنعاش كهربائي، ولذلك تُستخدم في الـ Cache رغم تكلفتها العالية.
- DRAM (Dynamic RAM): تُبنى من مكثف وترانزستور واحد لكل بت، رخيصة السعة ولكنها تسرب الشحنة وتحتاج لإنعاش دائم (Refresh cycles)، ولذلك تُستخدم في الذاكرة الرئيسية.`,
    details: "SRAM: 6 transistors per cell, no refresh, ultra-fast (Cache). DRAM: 1 transistor + 1 capacitor, requires periodic refresh (Main RAM)."
  },
  {
    id: "ext_42",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Von Neumann Bottleneck Definition",
    text: "What is the 'Von Neumann Bottleneck' in computer architecture?",
    textAr: "ما هو 'عنق زجاجة فون نيومان' (Von Neumann Bottleneck) في معمارية الحواسب؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Throughput limit caused by sharing a single bus for both data and instructions between CPU and memory." },
      { id: "b", text: "b) Slow hard disk read speed." },
      { id: "c", text: "c) CPU overheating during compilation." },
      { id: "d", text: "d) Lack of RAM storage capacity." }
    ],
    correctAnswer: "a",
    source: "Computer System Elements & CPU Buses",
    explanation: `الخيار (a) هو الصحيح!
في معمارية فون نيومان (Von Neumann Architecture)، يشترك كود البرنامج والبيانات في نفس الذاكرة ونفس الناقل (Shared Bus)، مما يجعل المعالج ينتظر نقل البيانات والتعليمات بالتناوب، وهو ما يُعرف بـ Von Neumann Bottleneck.`,
    details: "Shared bus between CPU and memory limits overall system throughput."
  },
  {
    id: "ext_43",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Algorithm Finiteness Violation",
    text: "If an algorithm produces correct output for 99% of inputs but enters an infinite loop for x = 0, which property is violated?",
    textAr: "إذا كانت الخوارزمية تعطي حلاً صحيحاً لـ 99% من المدخلات، ولكنها تدخل في حلقة لا نهائية عند x = 0، فأي خاصية من خصائص الخوارزمية تم انتهاكها؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Definiteness" },
      { id: "b", text: "b) Finiteness" },
      { id: "c", text: "c) Input" },
      { id: "d", text: "d) Generality" }
    ],
    correctAnswer: "b",
    source: "Slide 2 (Q1) Algorithm Characteristics",
    explanation: `الخيار (b) هو الصحيح: خاصية النهاية (Finiteness)!
تنص خاصية النهاية على أن الخوارزمية يجب أن تتوقف بعد عدد محدد من الخطوات لجميع المدخلات الممكنة دون استثناء.`,
    details: "Finiteness requires termination for every valid input."
  },
  {
    id: "ext_44",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Preprocessor Macro Expansion Trap",
    text: "What will be printed by this C++ preprocessor macro?",
    textAr: "ماذا سيطبع هذا الكود بسبب فخ استبدال الماكرو؟",
    codeSnippet: `#define SQUARE(x) x * x
int ans = SQUARE(2 + 3);
cout << ans;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 25" },
      { id: "b", text: "b) 11" },
      { id: "c", text: "c) 16" },
      { id: "d", text: "d) Compile Error" }
    ],
    correctAnswer: "b",
    source: "C++ Preprocessor Pitfalls",
    explanation: `الخيار (b) هو الصحيح: 11 وليس 25!
المصيدة:
الماكرو يقوم باستبدال نصي أعمى (Textual Substitution) بدون مراعاة أسبقية العمليات:
SQUARE(2 + 3) تُستبدل بـ:
2 + 3 * 2 + 3
الضرب أولاً: 3 * 2 = 6
ثم: 2 + 6 + 3 = 11!
لتصحيحها يجب وضع أقواس: #define SQUARE(x) ((x) * (x)).`,
    details: "Macros perform textual replacement without mathematical precedence."
  },
  {
    id: "ext_45",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Bubble Sort Number of Comparisons Formula",
    text: "What is the total number of comparisons performed by basic Bubble Sort on an array of n elements in the worst case?",
    textAr: "ما هو إجمالي عدد المقارنات التي تجريها خوارزمية الترتيب الفقاعي (Bubble Sort) لمصفوفة من n عنصر في أسوأ حالة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) n" },
      { id: "b", text: "b) n * (n - 1) / 2" },
      { id: "c", text: "c) n^2" },
      { id: "d", text: "d) n * log2(n)" }
    ],
    correctAnswer: "b",
    source: "Sorting Algorithm Comparisons Analysis",
    explanation: `الخيار (b) هو الصحيح: n * (n - 1) / 2!
في الدورة الأولى تقارن (n - 1) مرة، وفي الثانية (n - 2)، وهكذا حتى 1.
مجموع المتسلسلة: (n-1) + (n-2) + ... + 1 = n * (n - 1) / 2، وهو ما يعطي التعقيد O(n^2).`,
    details: "Sum of integers from 1 to n-1 is n(n-1)/2."
  },
  {
    id: "ext_46",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Stack vs Heap Memory Allocation",
    text: "In C++, where is a local variable declared inside a function stored versus dynamic memory allocated with 'new'?",
    textAr: "في C++، أين يُخزن المتغير المحلي داخل دالة مقارنة بالذاكرة الديناميكية المحجوزة بأمر 'new'؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Local variable on Stack; 'new' on Heap." },
      { id: "b", text: "b) Local variable on Heap; 'new' on Stack." },
      { id: "c", text: "c) Both on Stack." },
      { id: "d", text: "d) Both on Heap." }
    ],
    correctAnswer: "a",
    source: "Operating System & Memory Layout",
    explanation: `الخيار (a) هو الصحيح!
- المكدس (Stack): ذاكرة سريعة تدار تلقائياً لتخزين المتغيرات المحلية واستدعاءات الدوال.
- الكومة (Heap): ذاكرة ديناميكية يطلبها المبرمج يدوياً باستخدام new ويجب تحريرها باستخدام delete.`,
    details: "Automatic local storage lives on the Stack; dynamic storage via new lives on the Heap."
  },
  {
    id: "ext_47",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Pipeline Hazards in CPU Architecture",
    text: "When a conditional branch (like an if-statement) causes the CPU pipeline to flush instructions, what type of hazard is this?",
    textAr: "عندما تتسبب جملة شرطية (مثل if) في تفريغ خط أنابيب المعالج (Pipeline Flush)، فما هو نوع هذا الخطر (Hazard)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Data Hazard" },
      { id: "b", text: "b) Control (Branch) Hazard" },
      { id: "c", text: "c) Structural Hazard" },
      { id: "d", text: "d) Memory Hazard" }
    ],
    correctAnswer: "b",
    source: "Advanced CPU Architecture Concepts",
    explanation: `الخيار (b) هو الصحيح: خطأ التحكم والتفرع (Control / Branch Hazard)!
يحدث عندما يتنبأ المعالج بمسار شرطي خاطئ، فيضطر لإلغاء وتفريغ التعليمات المسحوبة مسبقاً من الـ Pipeline.`,
    details: "Branch instructions alter program flow, causing Control Hazards in pipelined CPUs."
  },
  {
    id: "ext_48",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Recursive Function Missing Base Case",
    text: "What runtime error occurs when a recursive function lacks a base case or has an unreachable base case?",
    textAr: "ما هو الخطأ الذي يحدث أثناء التشغيل عندما تفقد الدالة التكرارية (Recursive) شرط التوقف (Base Case)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Stack Overflow" },
      { id: "b", text: "b) Segmentation Fault via Heap" },
      { id: "c", text: "c) Syntax Compile Error" },
      { id: "d", text: "d) Type Mismatch" }
    ],
    correctAnswer: "a",
    source: "Recursion & Call Stack Management",
    explanation: `الخيار (a) هو الصحيح: طفحان المكدس (Stack Overflow)!
كل استدعاء للدالة يستهلك إطاراً في ذاكرة المكدس (Call Stack Frame)، وغياب شرط التوقف يؤدي لاستهلاك كل مساحة الـ Stack حتى ينهار البرنامج.`,
    details: "Unbounded recursion exhausts call stack space, triggering a Stack Overflow."
  },
  {
    id: "ext_49",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Char Arithmetic: '9' - '0'",
    text: "What is the exact result of the C++ expression: ('9' - '0')?",
    textAr: "ما هو الناتج الحسابي الدقيق للتعبير التالي في C++: ('9' - '0')؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) The character '9'" },
      { id: "b", text: "b) The integer 9" },
      { id: "c", text: "c) Syntax Error" },
      { id: "d", text: "d) 0" }
    ],
    correctAnswer: "b",
    source: "ASCII Representation of Digits",
    explanation: `الخيار (b) هو الصحيح: الرقم الصحيح 9!
في جدول ASCII، الأرقام من '0' إلى '9' مرتبة بالتتالي:
رمز '9' هو 57
رمز '0' هو 48
57 - 48 = 9 (عدد صحيح int).
وهذه هي الطريقة القياسية لتحويل رمز محرفي لرقم عددي.`,
    details: "'9' (ASCII 57) - '0' (ASCII 48) evaluates to integer 9."
  },
  {
    id: "ext_50",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "The Ultimate Overflow Condition in Two's Complement",
    text: "In Two's Complement hardware addition, overflow occurs IF AND ONLY IF:",
    textAr: "في الجمع الحسابي بنظام المكمل الثنائي، يحدث الفيض الحسابي (Overflow) إذا وفقط إذا كان:",
    type: "mcq",
    options: [
      { id: "a", text: "a) The carry into the sign bit is different from the carry out of the sign bit (Carry-in != Carry-out)." },
      { id: "b", text: "b) There is a carry out from the sign bit." },
      { id: "c", text: "c) The result is zero." },
      { id: "d", text: "d) Two numbers of opposite signs are added." }
    ],
    correctAnswer: "a",
    source: "Digital Logic Design & CPU ALU Circuitry",
    explanation: `الخيار (a) هو الصحيح!
القاعدة الهندسية الذهبية لدوائر ALU:
الفيض الحسابي (Overflow) يحدث فقط عندما يختلف الحمل الداخل لخانة الإشارة (Carry-in to MSB) عن الحمل الخارج منها (Carry-out from MSB)، أي:
Overflow = Carry_in XOR Carry_out.
وهذا هو التعريف الهاردويري الدقيق والصارم للـ Overflow في معالجات الحواسب!`,
    details: "Hardware ALU rule: Overflow = CarryIn[MSB] XOR CarryOut[MSB]."
  }
];

// Automatically register into questionsData if loaded
if (typeof questionsData !== 'undefined') {
  questionsData.push(...extremeQuestionsData);
}
