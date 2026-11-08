// =========================================================================
// 💀 EXTREME QUESTIONS BANK - FINAL BOSS LEVEL (أسئلة الدمار - ليفل الوحش)
// 50 سؤالاً تعجيزياً وفخاخاً برمجية ومعمارية عميقة للـ 1% الأوائل
// =========================================================================

const extremeQuestionsData = [
  // ==========================================
  // PART 1: THE DARK CORNERS OF C++ (ألغام C++ العميقة)
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
لذلك نوع y هو int عادي وليس const int، وبالتالي يمكن تعديله وزيادته ليصبح 11!
لو أردت الحفاظ على الثبات يجب كتابة: const auto y = x أو auto& y = x.`,
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
عند طرح 2 (p - 2)، يرجع المؤشر خطوتين للوراء ليشير إلى الفهرس 1 (العنصر 20)!
الفهارس السالبة قانونية تماماً مع المؤشرات إذا ظلت ضمن حدود الذاكرة المخصصة.`,
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
المتغير المعرف بـ static داخل دالة يتم تهيئته لمرة واحدة فقط طوال فترة تشغيل البرنامج (في أول استدعاء)، ويحتفظ بقيمته في الذاكرة الثابتة (Data Segment) بين الاستدعاءات المختلفة.
الاستدعاء الأول: يطبع 10 ثم يصبح 11.
الاستدعاء الثاني: يطبع 11 ثم يصبح 12.
الاستدعاء الثالث: يطبع 12.`,
    details: "Static local variables maintain their value across function invocations and are initialized only once."
  },
  {
    id: "ext_15",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Ternary False Branch Execution Only",
    text: "What is the final value of x in: int x = 0; 0 ? x++ : x--; cout << x;?",
    textAr: "ما هي القيمة النهائية للمتغير x في: int x = 0; 0 ? x++ : x--; cout << x; ؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 0" },
      { id: "b", text: "b) -1" },
      { id: "c", text: "c) 1" },
      { id: "d", text: "d) Undefined" }
    ],
    correctAnswer: "b",
    source: "Ternary Operator Conditional Execution",
    explanation: `الخيار (b) هو الصحيح: -1!
المعامل الثلاثي ?: يضمن تنفيذ فرع واحد فقط حصرياً:
بما أن الشرط هو 0 (False)، فإن فرع True (وهو x++) يتم تجاهله تماماً دون أي أثر جانبي، ويُنفذ فقط فرع False (وهو x--)، فتنقص قيمة x من 0 إلى -1.`,
    details: "The ternary operator evaluates only the chosen branch, guaranteeing no side effects from the unchosen branch."
  },
  {
    id: "ext_16",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Preprocessor Macro Side-Effect Multiplication",
    text: "What will be printed by: #define CUBE(x) x*x*x when called as CUBE(1 + 2)?",
    textAr: "ما هو الناتج المطبوع من استدعاء الماكرو التالي: CUBE(1 + 2)؟",
    codeSnippet: `#define CUBE(x) x * x * x
cout << CUBE(1 + 2);`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 27" },
      { id: "b", text: "b) 7" },
      { id: "c", text: "c) 9" },
      { id: "d", text: "d) 15" }
    ],
    correctAnswer: "b",
    source: "C Preprocessor Replacement Pitfalls",
    explanation: `الخيار (b) هو الصحيح: 7 وليس 27!
المصيدة:
الماكرو لا يحسب (1 + 2 = 3) أولاً، بل يستبدل النص حرفياً:
1 + 2 * 1 + 2 * 1 + 2
أسبقية الضرب أولاً:
(2 * 1) = 2، و (2 * 1) = 2
تصبح المعادلة:
1 + 2 + 2 + 2 = 7!`,
    details: "Textual expansion yields 1 + 2 * 1 + 2 * 1 + 2 = 1 + 2 + 2 + 2 = 7."
  },
  {
    id: "ext_17",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Rightmost Bit Clearing Expression",
    text: "What does the bitwise operation: n = n & (n - 1) do in a single step?",
    textAr: "ماذا تفعل العملية الثنائية n = n & (n - 1) في خطوة واحدة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Clears the most significant bit (MSB)." },
      { id: "b", text: "b) Clears the least significant set bit (rightmost 1-bit)." },
      { id: "c", text: "c) Inverts all bits of n." },
      { id: "d", text: "d) Multiplies n by 2." }
    ],
    correctAnswer: "b",
    source: "Brian Kernighan's Bit Manipulation Algorithm",
    explanation: `الخيار (b) هو الصحيح: تطفئ أول بت قيمته 1 من جهة اليمين (Clears the rightmost 1-bit)!
مثال: إذا كان n = 12 (ثنائياً 1100).
n - 1 = 11 (ثنائياً 1011).
عند إجراء AND بينهما:
1100 & 1011 = 1000 (تم مسح البت 1 الأيمن).
هذه الخدعة هي أساس خوارزمية Brian Kernighan لعد الآحاد في زمن قياسي O(عدد الآحاد).`,
    details: "n & (n - 1) resets the lowest set bit to 0."
  },
  {
    id: "ext_18",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Isolating the Lowest Set Bit",
    text: "What does the expression (x & -x) compute in two's complement arithmetic?",
    textAr: "ماذا تعيد المعادلة الثنائية السحرية (x & -x) في نظام المكمل الثنائي؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Always zero." },
      { id: "b", text: "b) Isolates the lowest (rightmost) set 1-bit as a power of 2." },
      { id: "c", text: "c) Inverts the sign of x." },
      { id: "d", text: "d) Checks if x is odd." }
    ],
    correctAnswer: "b",
    source: "Binary Indexed Trees (Fenwick Tree) Core Formula",
    explanation: `الخيار (b) هو الصحيح: تعزل البت 1 الأيمن وتصفر جميع البتات الأخرى!
البرهان:
في نظام Two's complement: -x = (~x + 1).
عملية إضافة 1 تقلب كل الأصفار السفلية حتى تصل لأول 1 فتتركه كما هو وتقلب ما بعده.
عند عمل AND بين x و -x، تصبح كل الخانات 0 باستثناء خانة البت 1 الأقل وزناً!
وهي المعادلة المستخدمة في خوارزميات Fenwick Trees الشهيرة في المسابقات البرمجية العالمية.`,
    details: "x & -x isolates the least significant 1-bit (LSB)."
  },

  // ==========================================
  // PART 2: HARDCORE NUMBER SYSTEMS & IEEE-754 TRAPS (أنظمة العد ليفل الوحش)
  // ==========================================
  {
    id: "ext_19",
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
    id: "ext_20",
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
1) بت الإشارة (Sign bit): 0 (موجب).
2) الأس المنحاز (Biased Exponent): 1.0 = 1.0 × 2^0. الأس هو 0.
   مع الانحياز (Bias = 127): 0 + 127 = 127 = (01111111) ثنائياً.
3) الكسر (Mantissa): 1.0 يحتوي على 1 ضمني (Implicit 1)، والجزء الكسري المتبقي هو 23 صفراً.
تجميع البتات:
0 01111111 00000000000000000000000
تجميع رباعيات:
0011 1111 1000 0000 0000 0000 0000 0000
= 0x3F800000!`,
    details: "Sign: 0, Exponent: 127 (01111111), Fraction: 0. Hex = 0x3F800000."
  },
  {
    id: "ext_21",
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
القاعدة الفريدة في علوم الحاسوب:
القيمة NaN (Not a Number) هي القيمة الوحيدة في معمارية الحواسب التي لا تساوي نفسها أبداً رياضياً وبرمجياً (NaN == NaN يعيد false دائماً)!
ولذلك، الطريقة القياسية لفحص ما إذا كان المتغير x هو NaN هي: if (x != x) { /* x is NaN */ }.`,
    details: "By IEEE-754 definition, any comparison involving NaN (except !=) returns false. NaN != NaN returns true."
  },
  {
    id: "ext_22",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "IEEE-754 Denormalized (Subnormal) Numbers",
    text: "In IEEE-754 single precision, when the exponent bits are all zeros (00000000) and the fraction is non-zero, what is this number called?",
    textAr: "في معيار IEEE-754، عندما تكون جميع بتات الأس أصفاراً والكسر غير صفري، ماذا يُسمى هذا الرقم؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Normalized Number" },
      { id: "b", text: "b) Subnormal (Denormalized) Number" },
      { id: "c", text: "c) Quiet NaN" },
      { id: "d", text: "d) Negative Infinity" }
    ],
    correctAnswer: "b",
    source: "IEEE-754 Gradual Underflow Architecture",
    explanation: `الخيار (b) هو الصحيح: الأرقام دون الطبيعية (Subnormal / Denormalized)!
الأهمية المعمارية:
في الأرقام الطبيعية، يوجد 1 ضمني قبل الفاصلة (1.fraction).
لكن عند الاقتراب الشديد من الصفر، تصبح بتات الأس كلها 0، ويسقط الواحد الضمني ليصبح 0 (0.fraction)، مما يتيح تمثيل أرقام فائقة الصغر ويمنع حدوث انقطاع حاد (Underflow Cliff) فيما يعرف بـ Gradual Underflow.`,
    details: "Subnormals have exponent = 0, implicit leading bit = 0, enabling gradual underflow near zero."
  },
  {
    id: "ext_23",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Floating-Point Non-Associativity Trap",
    text: "Why does (1e20 + -1e20) + 1.0 evaluate to 1.0, while 1e20 + (-1e20 + 1.0) evaluates to 0.0 in C++?",
    textAr: "لماذا ينتج عن (1e20 + -1e20) + 1.0 الناتج 1.0، بينما ينتج عن 1e20 + (-1e20 + 1.0) الناتج 0.0؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Floating point arithmetic is NOT associative due to finite mantissa precision." },
      { id: "b", text: "b) Compiler optimization bug." },
      { id: "c", text: "c) 1e20 exceeds the maximum limit of double." },
      { id: "d", text: "d) Undefined sequence point." }
    ],
    correctAnswer: "a",
    source: "Floating-Point Loss of Significance Trap",
    explanation: `الخيار (a) هو الصحيح: الجمع العشري غير تبادلي تجميعياً (Non-associative) بسبب محدودية خانات الدقة (Mantissa)!
في المعادلة الثانية:
عند محاولة جمع الرقم الضخم -1e20 مع الرقم الصغير 1.0، ولأن دقة double تحتوي على 53 بت فقط، فإن الرقم 1.0 يقع خارج نطاق الخانات المتاحة تماماً ويسقط بالتقريب (Round-off to -1e20)، ثم 1e20 + (-1e20) = 0.0!
أما في المعادلة الأولى:
(1e20 + -1e20) تصبح 0.0 أولاً، ثم 0.0 + 1.0 = 1.0!`,
    details: "Floating point addition does not obey mathematical associativity because small numbers are lost when aligned with huge exponents."
  },
  {
    id: "ext_24",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Branchless Signed Overflow Detection Formula",
    text: "Given sum = a + b for two 32-bit signed integers, which formula correctly detects signed overflow?",
    textAr: "بافتراض أن sum = a + b لعددين صحيحين 32-bit، أي صيغة منطقية تكشف حدوث الـ Overflow بدقة متناهية؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) ((a ^ sum) & (b ^ sum)) < 0" },
      { id: "b", text: "b) (a + b) > sum" },
      { id: "c", text: "c) (a > 0) && (b > 0)" },
      { id: "d", text: "d) (sum & 0x80000000) == 0" }
    ],
    correctAnswer: "a",
    source: "ALU Overflow Logic Implementation",
    explanation: `الخيار (a) هو الصحيح: ((a ^ sum) & (b ^ sum)) < 0!
البرهان المنطقي:
1) (a ^ sum) خانتها اليسرى 1 إذا وفقط إذا اختلفت إشارة a عن إشارة الناتج sum.
2) (b ^ sum) خانتها اليسرى 1 إذا وفقط إذا اختلفت إشارة b عن إشارة الناتج sum.
3) عند عمل AND بينهما، تكون الخانة اليسرى 1 (أي < 0) إذا وفقط إذا كان للرقمين a و b نفس الإشارة، ولكن الناتج sum جاء بإشارة مختلفة عنهما معاً! وهذا هو تعريف الـ Overflow الصارم.`,
    details: "Checks if both a and b have sign bits different from sum. Negative result indicates sign bit 1 (overflow)."
  },
  {
    id: "ext_25",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Fast Parity Check Bit Trick",
    text: "What does the expression (x ^ (x >> 1) ^ (x >> 2) ... ) determine about a binary number?",
    textAr: "ماذا يحدد فحص التماثل (Parity) لسلسلة بتات ثنائية؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Whether the total count of 1-bits is odd or even." },
      { id: "b", text: "b) If the number is negative." },
      { id: "c", text: "c) The position of the highest 1-bit." },
      { id: "d", text: "d) If the number is a palindrome." }
    ],
    correctAnswer: "a",
    source: "Error Detection Coding (Parity Bit Theory)",
    explanation: `الخيار (a) هو الصحيح: فحص ما إذا كان عدد الآحاد فردياً أم زوجياً (Parity Check)!
تطبيق المعامل XOR التراكمي على كل البتات يعيد 1 إذا كان عدد الآحاد فردياً (Odd Parity)، ويعيد 0 إذا كان عدد الآحاد زوجياً (Even Parity)، وهو أساس بروتوكولات كشف الأخطاء في الشبكات وذواكر ECC.`,
    details: "Parity is the XOR sum of all bits, indicating whether the count of 1s is odd (1) or even (0)."
  },
  {
    id: "ext_26",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Q3.4 Fixed-Point Binary Format",
    text: "In a signed Q3.4 fixed-point representation (1 sign bit, 3 integer bits, 4 fractional bits), what is the binary representation of decimal +2.75?",
    textAr: "في نظام الفاصلة الثابتة Q3.4 (بت إشارة، 3 بت للصحيح، و 4 بت للكسر)، كيف يُكتب الرقم +2.75؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 00101100" },
      { id: "b", text: "b) 00111100" },
      { id: "c", text: "c) 00100110" },
      { id: "d", text: "d) 10101100" }
    ],
    correctAnswer: "a",
    source: "Fixed-Point Arithmetic in Embedded DSPs",
    explanation: `الخيار (a) هو الصحيح: 00101100!
التفكيك:
- بت الإشارة: 0 (موجب).
- الجزء الصحيح (2): 010 في 3 بت.
  (يصبح الجزء الصحيح كاملاً مع الإشارة: 0010).
- الجزء الكسري (0.75):
  0.75 = 0.5 + 0.25 = (1100) في 4 بت ثنائية.
الدمج الكامل: 0010 1100.`,
    details: "Sign + 3 int bits = 0010 (2). 4 fractional bits = 1100 (0.75). Total 8-bit word = 00101100."
  },
  {
    id: "ext_27",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Carry Out with Two Positive Numbers",
    text: "Can adding two POSITIVE numbers in two's complement generate a Carry-out from the MSB?",
    textAr: "هل يمكن لجمع عددين موجبين بنظام المكمل الثنائي أن يُنتج حملاً خارجاً (Carry-out = 1) من الخانة اليسرى MSB؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Impossible: adding two positives never generates carry-out from MSB." },
      { id: "b", text: "b) Yes, whenever overflow occurs." },
      { id: "c", text: "c) Yes, always." },
      { id: "d", text: "d) Only in 64-bit architectures." }
    ],
    correctAnswer: "a",
    source: "Digital Logic Design Truth Tables",
    explanation: `الخيار (a) هو الصحيح: مستحيل هندسياً ورياضياً!
البرهان:
العدد الموجب تكون خانة إشارته MSB دائماً 0.
جمع الخانتين الأيسرين: 0 + 0 لا يمكن أن يُنتج حملاً 1 أبداً، حتى وإن كان هناك حمل قادم من الخانة السابقة (0 + 0 + 1 = 1 والحمل الخارج = 0).
لذلك جمع عددين موجبين لا يمكن أن يُنتج Carry-out = 1 إطلاقاً!`,
    details: "Since MSBs of both positives are 0, max sum at MSB is 0 + 0 + 1(carry-in) = 1 with carry-out = 0."
  },

  // ==========================================
  // PART 3: CPU ARCHITECTURE, CACHE & PIPELINE (المعمارية والكاش ميموري)
  // ==========================================
  {
    id: "ext_28",
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
السر المعماري:
في لغة C++، تُخزن المصفوفات في الذاكرة بنظام Row-Major (عناصر الصف الواحد متجاورة وراء بعضها).
عندما يطلب المعالج عنصراً، يسحب خط كاش كامل (Cache Line بحجم 64 بايت) يحتوي على العناصر المجاورة فوراً في الـ L1 Cache.
- في مسح الصفوف: 100% Cache Hits!
- في مسح الأعمدة: المعالج يقفز في الذاكرة بمسافات ضخمة، فيحدث Cache Miss في كل دورة ويضطر لانتظار الـ RAM البطيئة!`,
    details: "C++ stores 2D arrays in contiguous row-major order. Sequential access leverages 64-byte L1 cache lines."
  },
  {
    id: "ext_29",
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
اللغز الأكثر شهرة في تاريخ البرمجة:
المعالجات الحديثة تمتلك وحدة متقدمة تسمى متنبئ التفرع (Branch Predictor) لتوقع نتيجة الشرط وسحب التعليمات مسبقاً في الـ Pipeline.
- في المصفوفة المرتبة: تأتي كل العناصر الأصغر أولاً (كلها False) ثم كل العناصر الأكبر (كلها True)، فتكون دقة التنبؤ 99%!
- في المصفوفة غير المرتبة: الشرط يتأرجح عشوائياً (True, False, True...)، مما يفشل التنبؤ (Branch Misprediction) ويضطر المعالج لتفريغ الـ Pipeline بالكامل وإعادة العمل من الصفر!`,
    details: "Branch misprediction flushes the entire instruction pipeline, wasting 15-20 CPU cycles per miss."
  },
  {
    id: "ext_30",
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
المصيدة المعمارية:
المعالج لا يقرأ البايتات عشوائياً، بل يتطلب محاذاة العناوين (Data Alignment) لتسريع القراءة:
1) char a يحجز 1 بايت، يليه 3 بايت حشو فارغ (Padding) حتى يبدأ int b على عنوان مضاعف لـ 4.
2) int b يحجز 4 بايت.
3) char c يحجز 1 بايت، يليه 3 بايت حشو إضافي (Tail Padding) حتى يكون الحجم الكلي مضاعفاً لأكبر عنصر (4 بايت).
الإجمالي: 1 + 3(pad) + 4 + 1 + 3(pad) = 12 بايت!
(لو أعدنا ترتيب الحقول: int b; char a; char c; لأصبح الحجم 8 بايت فقط!).`,
    details: "Alignment requires variables to sit on memory addresses multiples of their size. Padding expands size from 6 to 12 bytes."
  },
  {
    id: "ext_31",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "False Sharing in Multi-Core CPU Caching",
    text: "What is 'False Sharing' in high-performance multithreaded systems?",
    textAr: "ما هو مفهوم 'المشاركة الكاذبة' (False Sharing) في المعالجات متعددة الأنوية؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Two CPU cores modifying independent variables that happen to share the same 64-byte cache line." },
      { id: "b", text: "b) Sharing RAM with GPU." },
      { id: "c", text: "c) An illegal thread access to private memory." },
      { id: "d", text: "d) Multiple threads reading the same constant." }
    ],
    correctAnswer: "a",
    source: "Multi-core Cache Coherency (MESI Protocol)",
    explanation: `الخيار (a) هو الصحيح!
الكارثة الصامتة في الأنظمة متعددة الأنوية:
عندما يُعدل الخيط A المتغير x، ويُعدل الخيط B المتغير y، ورغم أنهما متغيران مختلفان تماماً، إلا أنهما متجاوران في الذاكرة ويقعان على نفس سطر الكاش (Cache Line 64 بايت)!
بروتوكول تماسك الكاش (MESI) يُبطل سطر الكاش بالكامل في النواة الأخرى في كل كتابة، مما يُجبر الأنوية على تبادل البيانات ذهاباً وإياباً في الـ Bus وبطء هائل للنظام.`,
    details: "False sharing causes destructive cache line invalidations across cores without actual data dependency."
  },
  {
    id: "ext_32",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Virtual Memory Page Size Standard",
    text: "What is the standard hardware memory page size on modern x86/x86-64 architectures?",
    textAr: "ما هو الحجم القياسي لصفحة الذاكرة الافتراضية (Memory Page Size) في معمارية x86 و x64؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 64 Bytes" },
      { id: "b", text: "b) 4 Kilobytes (4096 Bytes)" },
      { id: "c", text: "c) 1 Megabyte" },
      { id: "d", text: "d) 512 Bytes" }
    ],
    correctAnswer: "b",
    source: "Operating System Virtual Memory Paging",
    explanation: `الخيار (b) هو الصحيح: 4 كيلوبايت (4096 بايت)!
وحدة إدارة الذاكرة (MMU) في المعالج ونظام التشغيل تقسم الذاكرة الفيزيائية والافتراضية إلى وحدات قياسية ثابتة الحجم تُسمى Pages، وحجمها الأساسي هو 4KB (4096 بايت = 2^12 بايت، حيث تخصص 12 بت للإزاحة Offset).`,
    details: "Standard x86/x64 memory page size is 4KB (2^12 bytes offset)."
  },

  // ==========================================
  // PART 4: ALGORITHMIC FINAL BOSS & MATHEMATICAL COMPLEXITY (خوارزميات ليفل الوحش)
  // ==========================================
  {
    id: "ext_33",
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
المصيدة الرياضية التي تسقط 95% من أساتذة الخوارزميات:
عدد العمليات في كل دورة داخلية:
1 + 2 + 4 + 8 + 16 + ... + n
هذه متسلسلة هندسية أساسها 2:
مجموع المتسلسلة = (2 × n) - 1.
وحيث إن (2n - 1) دالة خطية، فإن التعقيد الزمني الكلي هو O(n) حصراً!`,
    details: "Sum: 1 + 2 + 4 + ... + 2^k where 2^k <= n is bounded by 2n - 1 = O(n)."
  },
  {
    id: "ext_34",
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
الخوارزمية تستخدم مؤشرين فقط (Slow يتحرك خطوة، و Fast يتحرك خطوتين).
الفارق النسبي بينهما هو خطوة واحدة في كل تكرار، مما يضمن لقاءهما داخل أي حلقة خلال O(n) من الزمن وبدون استهلاك أي ذاكرة إضافية إطلاقاً (O(1) Memory).`,
    details: "Floyd's algorithm runs in O(n) time and O(1) auxiliary space."
  },
  {
    id: "ext_35",
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
الشرح:
هنا a = 2, b = 2, f(n) = n log n.
قيمة n^(log_b a) = n^(log_2 2) = n^1 = n.
بما أن f(n) = n * log^k(n) مع k = 1:
طبقاً للحالة الممتدة من نظرية الماستر (Case 2 Extended Master Theorem):
T(n) = Θ(n * log^(k+1) n) = Θ(n * log^2 n)!`,
    details: "By Extended Master Theorem Case 2: when f(n) = Theta(n^(log_b a) * log^k n), T(n) = Theta(n^(log_b a) * log^(k+1) n)."
  },
  {
    id: "ext_36",
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
الخوارزمية المستقرة (Stable Sort) تحافظ على الترتيب النسبي الأصلي للعناصر المتساوية في القيمة.
في QuickSort، عمليات التبديل تتم عبر مسافات بعيدة عبر المحور (Pivot Partitioning)، مما قد يقفز بعنصر فوق عنصر مساوٍ له ويغير ترتيبهما النسبي الأصلي.`,
    details: "Partitioning swaps non-adjacent elements over the pivot, disrupting relative order of equal keys."
  },
  {
    id: "ext_37",
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
أحد أعظم إنجازات علوم الحاسوب: أثبت تورينج باستخدام برهان التناقض (Diagonalization) أنه يستحيل وجود خوارزمية حاسوبية عامة يمكنها فحص أي كود عشوائي وتحديد ما إذا كان سيتوقف حتماً أم سيدخل في حلقة لا نهائية! المشكلة غير قابلة للحل حاسوبياً (Undecidable Problem).`,
    details: "The Halting Problem is undecidable; no universal algorithm can solve it for all program-input pairs."
  },
  {
    id: "ext_38",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Amortized Complexity of Dynamic Array Doubling",
    text: "What is the amortized time complexity of inserting n elements into a std::vector using capacity doubling?",
    textAr: "ما هو التعقيد الزمني المستهلك (Amortized Complexity) لكل عملية إضافة عنصر في std::vector عند مضاعفة السعة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) O(1) amortized per insertion" },
      { id: "b", text: "b) O(n) per insertion" },
      { id: "c", text: "c) O(log n) per insertion" },
      { id: "d", text: "d) O(n^2) total" }
    ],
    correctAnswer: "a",
    source: "Amortized Analysis (Aggregate & Banker's Method)",
    explanation: `الخيار (a) هو الصحيح: O(1) مستهلك لكل عملية!
الشرح:
رغم أن بعض عمليات الإضافة تتطلب نسخ المصفوفة بالكامل بزمن O(n) عند امتلاء السعة، إلا أن هذا يحدث بتباعد متضاعف (1, 2, 4, 8, 16...).
إجمالي تكلفة نسخ n عنصر عبر التاريخ هو: n + n/2 + n/4 + ... < 2n.
بقسمة إجمالي التكلفة 2n على عدد العمليات n، يكون نصيب كل عملية فردية O(1) ثابت فقط!`,
    details: "Total reallocation cost for n items is bounded by 2n, yielding O(1) amortized cost per push_back."
  },
  {
    id: "ext_39",
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
المصيدة النادرة:
في معالجات x86 و C++، قسمة أصغر رقم سالب INT_MIN على -1 تُنتج رياضياً +128 (أو +2147483648 في 32-bit).
وحيث إن الحد الأقصى الموجب هو +127 (أو +2147483647)، فإن الناتج لا يمكن تمثيله في السجل، فيطلق المعالج مقاطعة عتادية فتاكة: Divide Error / SIGFPE ويتحطم البرنامج فوراً!`,
    details: "INT_MIN / -1 overflows positive signed range, triggering an x86 integer division exception crash."
  },
  {
    id: "ext_40",
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
    explanation: `الخيار (a) هو الصحيح: مرور واحد فقط (Single Pass)!
خوارزمية ديكسترا العبقرية تستخدم 3 مؤشرات (Low, Mid, High).
في كل خطوة يتم فحص العنصر عند Mid وتبديله إما مع Low أو High، وبذلك تترتب المصفوفة في مسح واحد مستمر من البداية للنهاية بزمن O(n) وبدون أي مصفوفات إضافية O(1) space.`,
    details: "Dijkstra's Dutch National Flag algorithm partitions 3 distinct keys in exactly one pass using 3 pointers."
  },
  {
    id: "ext_41",
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
جدول الحقيقة:
- موجب (0) × موجب (0) = 0 ^ 0 = 0 (موجب).
- موجب (0) × سالب (1) = 0 ^ 1 = 1 (سالب).
- سالب (1) × سالب (1) = 1 ^ 1 = 0 (موجب).
لذلك تستخدم المعالجات بوابة XOR وحيدة لحساب إشارة ناتج الضرب في دورة ساعة واحدة.`,
    details: "XOR gate directly mirrors the mathematical multiplication sign rule: same signs -> 0, different signs -> 1."
  },
  {
    id: "ext_42",
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
لتطبيق الـ Dynamic Polymorphism وقت التشغيل، يُنشئ المترجم جدول دوال وهمية (vtable)، ويضع داخل كل كائن مؤشراً خفياً (vptr) يؤشر إلى جدول الدوال المناسب، مما يزيد حجم الكائن بمقدار 8 بايت في معمارية 64-bit.`,
    details: "Classes with virtual functions contain an implicit vptr pointing to the class's vtable."
  },
  {
    id: "ext_43",
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
    explanation: `الخيار (b) هو الصحيح: ترتيب غير محدد تحدده البيئة (Unspecified)، ولكن بدون تداخل!
معيار C++ لا يحدد ما إذا كان المترجم سيبدأ بـ a() أو b() أو c()، ولكنه يضمن في C++17 أن كل دالة تنتهي بالكامل قبل بدء التالية (Indeterminately sequenced). لذلك الاعتماد على ترتيب تقييم الوسائط يُعتبر فخاً برمجياً خطيراً.`,
    details: "Function arguments have unspecified evaluation order; code depending on a specific argument evaluation order is non-portable."
  },
  {
    id: "ext_44",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Hamming Weight Bitwise Mask Formula",
    text: "What does the parallel bitwise algorithm: x = (x & 0x55555555) + ((x >> 1) & 0x55555555) achieve in its first step?",
    textAr: "ماذا تفعل الخطوة الأولى من خوارزمية الأقنعة الثنائية المتوازية (0x55555555)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Sums the number of 1-bits in adjacent pairs of bits." },
      { id: "b", text: "b) Reverses the byte order." },
      { id: "c", text: "c) Tests if the number is divisible by 5." },
      { id: "d", text: "d) Clears all odd bits." }
    ],
    correctAnswer: "a",
    source: "Hamming Weight / Popcount Divide & Conquer",
    explanation: `الخيار (a) هو الصحيح: جمع عدد الآحاد في كل زوج بتات متجاور في نفس الوقت!
القناع 0x55555555 هو ثنائياً: 010101010101...
تقوم الخوارزمية بجمع كل خانتين متجاورتين بالتوازي (Divide & Conquer) لحساب الـ Popcount في زمن O(log bits) بدلاً من فحص كل خانة على حدة.`,
    details: "First step of parallel popcount: adds bit counts of 2-bit fields simultaneously using 0101... masks."
  },
  {
    id: "ext_45",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Instruction Throughput vs Latency Tradeoff",
    text: "In a 5-stage CPU pipeline running at 2 GHz, what is the ideal instruction execution throughput once the pipeline is full?",
    textAr: "في معالج ذي خط أنابيب مكون من 5 مراحل بتردد 2 GHz، ما هو معدل إنجاز التعليمات المثالي (Throughput) عندما يمتلئ خط الأنابيب؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 1 instruction every 5 clock cycles" },
      { id: "b", text: "b) 1 instruction every 1 clock cycle (CPI = 1)" },
      { id: "c", text: "c) 5 instructions every 1 clock cycle" },
      { id: "d", text: "d) 2.5 instructions per cycle" }
    ],
    correctAnswer: "b",
    source: "Computer Architecture Pipeline Throughput Fundamentals",
    explanation: `الخيار (b) هو الصحيح: تعليمة واحدة في كل دورة ساعة واحدة (CPI = 1)!
المفهوم المعماري:
رغم أن التعليمة الواحدة تستغرق 5 دورات ساعة كاملة لتنتهي (Latency = 5 cycles)، إلا أنه بسبب تداخل المراحل (Pipelining)، تخرج تعليمة مكتملة في كل دورة ساعة جديدة بمجرد امتلاء الخط، مما يجعل الإنتاجية تعليمة/دورة.`,
    details: "Pipelining maximizes throughput to 1 instruction per cycle (ideal CPI = 1) while individual latency remains 5 cycles."
  },
  {
    id: "ext_46",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Two's Complement Signed Magnitude Comparison Trap",
    text: "Which number representation allows comparing two signed numbers directly using identical hardware logic as unsigned magnitude comparisons?",
    textAr: "أي نظام تمثيل يسمح بمقارنة الأرقام السالبة والموجبة بنفس عتاد مقارنة الأرقام الموجبة المباشر؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Biased (Excess-K / Offset Binary) Representation" },
      { id: "b", text: "b) Sign-Magnitude" },
      { id: "c", text: "c) One's Complement" },
      { id: "d", text: "d) Two's Complement" }
    ],
    correctAnswer: "a",
    source: "Biased Exponent Architecture (IEEE-754)",
    explanation: `الخيار (a) هو الصحيح: نظام الانحياز (Biased / Offset Binary)!
السر الهندسي:
لهذا السبب بالذات يستخدم معيار IEEE-754 نظام الأس المنحاز (Biased Exponent = E + 127)!
في هذا النظام، أصغر رقم سالب يتحول إلى 00000000، وأكبر رقم موجب يتحول إلى 11111111، مما يتيح للمعالج مقارنة الأرقام العشرية بسرعة هائلة باستخدام مقارن أعداد موجبة عادي (Unsigned Comparator) دون أي فحص إشارة!`,
    details: "Biased notation shifts all numbers into non-negative range, allowing direct unsigned magnitude comparison hardware."
  },
  {
    id: "ext_47",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "LIFO Destruction Order in Multiple Variables",
    text: "Given: class Test { ... }; In: { Test t1; Test t2; Test t3; } in what exact order are destructors called?",
    textAr: "في كتلة برمجية: { Test t1; Test t2; Test t3; }، ما هو الترتيب الصارم لاستدعاء دوال الهدم (Destructors) عند الخروج؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) t1 then t2 then t3" },
      { id: "b", text: "b) t3 then t2 then t1 (Strict LIFO order)" },
      { id: "c", text: "c) Random / Compiler-dependent" },
      { id: "d", text: "d) All destructors execute in parallel" }
    ],
    correctAnswer: "b",
    source: "C++ RAII & Automatic Object Lifetime",
    explanation: `الخيار (b) هو الصحيح: t3 ثم t2 ثم t1 (ترتيب عكسي صارم LIFO)!
قاعدة معيار C++:
الكائنات ذات التخزين التلقائي تُبنى بالترتيب من الأعلى للأسفل (t1, t2, t3).
وعند مغادرة النطاق، تُهدم دائماً بالترتيب العكسي التام (t3 أولاً، ثم t2، ثم t1)، لضمان أن الكائنات المبنية أخيراً والتي قد تعتمد على كائنات سابقة تُهدم قبل تدمير ما تعتمد عليه.`,
    details: "Automatic objects are destroyed in strict reverse order of construction (LIFO / Stack discipline)."
  },
  {
    id: "ext_48",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Branchless Sign Function sgn(x)",
    text: "What does the expression: (x > 0) - (x < 0) compute for any integer x?",
    textAr: "ماذا تحسب المعادلة الرياضية العبقرية: (x > 0) - (x < 0) لأي رقم صحيح x؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) sgn(x): returns +1 if positive, -1 if negative, 0 if zero." },
      { id: "b", text: "b) Always returns 0." },
      { id: "c", text: "c) Returns x squared." },
      { id: "d", text: "d) Returns 1 for all non-zero numbers." }
    ],
    correctAnswer: "a",
    source: "Signum Function Branchless Implementation",
    explanation: `الخيار (a) هو الصحيح: دالة إشارة الرقم sgn(x)!
التجربة:
- لو x = 5 (موجب): (1) - (0) = +1.
- لو x = -9 (سالب): (0) - (1) = -1.
- لو x = 0: (0) - (0) = 0.
وهذه هي أسرع طريقة قياسية لحساب إشارة أي رقم في سطر واحد بدون أي تفرع شرطي.`,
    details: "(x > 0) - (x < 0) evaluates to +1, -1, or 0 with optimal branchless instruction generation."
  },
  {
    id: "ext_49",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "Cache Coherence Invalidation Unit",
    text: "What is the smallest unit of data transfer and invalidation between CPU L1/L2 caches and memory?",
    textAr: "ما هي أصغر وحدة لنقل البيانات وتماسك الكاش بين أنوية المعالج وذواكر L1/L2 والـ RAM؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 1 Byte" },
      { id: "b", text: "b) 1 Word (4 or 8 Bytes)" },
      { id: "c", text: "c) 1 Cache Line (typically 64 Bytes)" },
      { id: "d", text: "d) 1 Page (4096 Bytes)" }
    ],
    correctAnswer: "c",
    source: "Cache Coherency Hardware Specifications",
    explanation: `الخيار (c) هو الصحيح: سطر الكاش (Cache Line - عادة 64 بايت)!
المعالج لا يقرأ أو يكتب أو يبطل البيانات في الكاش بايت ببايت، بل يقرأ ويبطل سطر كاش كامل بحجم 64 بايت دائماً دفعة واحدة، وهو ما يفسر كل ظواهر الـ Spatial Locality والـ False Sharing.`,
    details: "The atomic granularity of cache transfer and coherency invalidation is the cache line (64 bytes)."
  },
  {
    id: "ext_50",
    category: "extreme",
    categoryName: "أسئلة الدمار (Extreme) 💀🔥",
    title: "The Ultimate Two's Complement Bit Reversal Property",
    text: "What is the result of the hardware operation: (~x + 1) == -x for all signed integers in two's complement?",
    textAr: "في جميع الحواسب التي تستخدم المكمل الثنائي، ما هي القيمة المنطقية للتعبير: (~x + 1) == -x؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Always true for all representable values, defining the mathematical identity of Two's Complement." },
      { id: "b", text: "b) False for x = 0." },
      { id: "c", text: "c) False for positive numbers." },
      { id: "d", text: "d) True only in 64-bit." }
    ],
    correctAnswer: "a",
    source: "Fundamental Two's Complement Algebraic Identity",
    explanation: `الخيار (a) هو الصحيح: صحيح دائماً 100% ويُمثل الهوية الجبرية الأساسية لنظام المكمل الثنائي!
المعادلة (~x + 1) تعني رياضياً: قلب جميع البتات ثم إضافة 1.
وهذه العملية تطابق هندسياً وجبرياً ضرب الرقم في -1 في جميع أجهزة الحواسب الحديثة، وهي الحقيقة التي بُني عليها كل علم المعالجات الرقمية في القرن الحادي والعشرين!`,
    details: "(~x + 1) is the universal mathematical definition of negation in two's complement arithmetic."
  }
];

// Automatically register into questionsData if loaded
if (typeof questionsData !== 'undefined') {
  // Replace or add extreme questions
  const nonExtreme = questionsData.filter(q => q.category !== 'extreme');
  questionsData.length = 0;
  questionsData.push(...nonExtreme, ...extremeQuestionsData);
}
