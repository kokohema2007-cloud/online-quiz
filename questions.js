// Question Bank containing all questions from slides and exam paper + supplementary practice questions
const questionsData = [
  // ==========================================
  // SECTION 1: TRUE / FALSE (صح أو خطأ)
  // ==========================================
  {
    id: "tf_1",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Algorithm Definition",
    text: "An algorithm is a step-by-step procedure to solve a problem.",
    textAr: "الخوارزمية هي إجراء خطوة بخطوة لحل مشكلة ما.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 2 - Question 1",
    explanation: "صحيح (True). الخوارزمية (Algorithm) هي بالفعل تسلسل منطقي محدد ومكتوب خطوة بخطوة للوصول إلى حل مشكلة معينة أو إتمام مهمة حسابية.",
    details: "Algorithm properties: Finite (منتهية), Definite (واضحة ودقيقة), Effective (قابلة للتنفيذ)."
  },
  {
    id: "tf_2",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Two's Complement Representation",
    text: "Two's complement is commonly used to represent negative binary numbers.",
    textAr: "المكمل الثنائي (Two's complement) يُستخدم بشكل شائع لتمثيل الأرقام الثنائية السالبة.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 2 - Question 2",
    explanation: "صحيح (True). نظام المكمل الثنائي (Two's Complement) هو النظام القياسي المعتمد في معظم معالجات الحواسيب لتمثيل الأعداد الصحيحة السالبة لأنه يسهل عمليات الجمع والطرح ويلغي مشكلة وجود صفرين (+0 و -0).",
    details: "Rule: To get 2's complement, invert all bits (1's complement) then add 1 to the LSB."
  },
  {
    id: "tf_3",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Hexadecimal Letter A Value",
    text: "In hexadecimal, the letter 'A' represents the decimal value 12.",
    textAr: "في النظام الست عشري (Hexadecimal)، يمثل الحرف 'A' القيمة العشرية 12.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 3",
    explanation: "خطأ (False). الحرف 'A' في النظام الست عشري يمثل القيمة 10، بينما 12 يمثلها الحرف 'C'.",
    details: "Hex values: A=10, B=11, C=12, D=13, E=14, F=15."
  },
  {
    id: "tf_4",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "1's Complement Inversion",
    text: "1's complement of a binary number is obtained by flipping all bits.",
    textAr: "يتم الحصول على المكمل الأحادي (1's complement) لرقم ثنائي عن طريق قلب جميع الخانات (البتات).",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 2 - Question 4",
    explanation: "صحيح (True). للحصول على المكمل الأحادي (1's complement)، نقلب كل 0 إلى 1، وكل 1 إلى 0.",
    details: "Example: 1's complement of 101100 is 010011."
  },
  {
    id: "tf_5",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "RAM Volatility",
    text: "RAM is non-volatile memory.",
    textAr: "ذاكرة الوصول العشوائي (RAM) هي ذاكرة غير متطايرة (Non-volatile).",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 5",
    explanation: "خطأ (False). الـ RAM هي ذاكرة متطايرة (Volatile Memory) تفقد جميع محتوياتها بمجرد انقطاع التيار الكهربائي. بينما الذاكرة غير المتطايرة (Non-volatile) هي مثل ROM أو القرص الصلب (Hard Disk).",
    details: "Volatile = loses data when power is turned off (e.g., RAM, Cache). Non-volatile = retains data (e.g., ROM, SSD, HDD)."
  },
  {
    id: "tf_6",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Bus System Function",
    text: "The bus system is used for data transfer between components.",
    textAr: "نظام النواقل (Bus system) يُستخدم لنقل البيانات بين مكونات الحاسب.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 2 - Question 6",
    explanation: "صحيح (True). نظام النواقل (Bus) هو مسار اتصال مشترك ينقل البيانات والإشارات بين وحدة المعالجة المركزية، الذاكرة، وباقي المكونات.",
    details: "Types of buses: Data bus (نقل البيانات), Address bus (نقل العناوين), Control bus (نقل إشارات التحكم)."
  },
  {
    id: "tf_7",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Logic Errors Detection",
    text: "Logic errors are detected at compile time.",
    textAr: "يتم اكتشاف الأخطاء المنطقية (Logic errors) أثناء وقت الترجمة (Compile time).",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 7",
    explanation: "خطأ (False). الأخطاء النحوية (Syntax errors) هي التي يتم اكتشافها وقت الترجمة (Compile time). أما الأخطاء المنطقية (Logic errors) فالبرنامج يترجم ويعمل ولكن يعطي ناتجاً غير صحيح (Incorrect output) ولا يكتشفها المترجم.",
    details: "Compile-time errors = Syntax & Semantics. Runtime errors = Division by zero, crash. Logic errors = Program runs fine but logic/math formula is wrong."
  },
  {
    id: "tf_8",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Problem-Solving Steps",
    text: "Problem-solving in programming involves understanding the problem, designing a solution, and implementing it.",
    textAr: "حل المشكلات في البرمجة يتضمن فهم المشكلة، تصميم الحل، ثم تنفيذه.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 2 - Question 8",
    explanation: "صحيح (True). المراحل الأساسية لحل المشكلات البرمجية هي: 1) فهم وتحليل المشكلة، 2) تصميم الحل (كتابة Algorithm / Flowchart)، 3) التنفيذ بكتابة الكود البرمجي واختباره.",
    details: "Phases: Problem Definition -> Algorithm Design -> Coding -> Testing/Debugging -> Maintenance."
  },
  {
    id: "tf_9",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Compiler Error Correction",
    text: "A compiler can correct syntax errors automatically.",
    textAr: "يمكن للمترجم (Compiler) تصحيح الأخطاء النحوية تلقائياً.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 9",
    explanation: "خطأ (False). المترجم يكتشف الأخطاء النحوية (Syntax Errors) ويصدر رسائل تحذير أو خطأ توضح مكان الخطأ، ولكنه لا يقوم بتصحيحها تلقائياً؛ المبرمج هو المسؤول عن تصحيح الكود.",
    details: "Compilers diagnose and report errors; they do not edit or auto-fix your source code."
  },
  {
    id: "tf_10",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "4-bit 2's Complement Overflow",
    text: "Adding 0101 (5) and 0011 (3) in 4-bit two’s complement causes overflow.",
    textAr: "جمع 0101 (الرقم 5) و 0011 (الرقم 3) بنظام المكمل الثنائي المكون من 4 بت يُحدث فيضاً (Overflow).",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 2 - Question 10",
    explanation: "صحيح (True). في نظام 4-bit Two's complement، المدى المسموح به للأرقام هو من -8 إلى +7. ناتج 5 + 3 = 8، وهو خارج المدى المسموح (+7). عند الجمع: 0101 + 0011 = 1000، الخانة اليسرى (Sign bit) أصبحت 1 (سالب) مما يعني تحول ناتج جمع عددين موجبين إلى عدد سالب (-8)، وهذا هو تعريف الـ Overflow.",
    details: "Rule for Overflow: Adding two positive numbers yields a negative result, OR adding two negative numbers yields a positive result. Range for n bits = [-2^(n-1), 2^(n-1)-1]. For 4 bits: [-8 to +7]."
  },
  {
    id: "tf_11",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "int Data Type",
    text: "The int data type is used to store decimal numbers in most programming languages.",
    textAr: "النوع int يُستخدم لتخزين الأرقام العشرية (الكسرية) في معظم لغات البرمجة.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 11",
    explanation: "خطأ (False). النوع int مخصص لتخزين الأعداد الصحيحة فقط (Integers بدون كسور). بينما تُخزن الأرقام العشرية/الكسرية باستخدام float أو double.",
    details: "int = whole numbers (-5, 0, 42). float/double = fractional numbers (3.14, -0.75)."
  },
  {
    id: "tf_12",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "bool Variable Values",
    text: "You can store a string value in a bool variable.",
    textAr: "يمكنك تخزين قيمة نصية (string) داخل متغير من النوع bool.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 12",
    explanation: "خطأ (False). المتغير المنطقي bool يقبل قيمتين فقط: true (أو 1) و false (أو 0)، ولا يمكن تخزين نصوص بداخله.",
    details: "bool b = true; // Valid. bool b = \"Hello\"; // Compile error."
  },
  {
    id: "tf_13",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Byte Size in Bits",
    text: "1 byte is equal to 4 bits.",
    textAr: "البايت الواحد (1 byte) يساوي 4 بت (bits).",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 2 - Question 13",
    explanation: "خطأ (False). البايت الواحد (1 Byte) يساوي 8 بت (8 bits). أما الـ 4 بت فتسمى Nibble (نصف بايت).",
    details: "1 Byte = 8 bits. 1 Nibble = 4 bits. 1 Kilobyte (KB) = 1024 Bytes."
  },
  {
    id: "tf_14",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Syntax Error Impact",
    text: "A syntax error will prevent the program from compiling or running.",
    textAr: "الخطأ النحوي (Syntax error) يمنع البرنامج من الترجمة أو التشغيل.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 2 - Question 14",
    explanation: "صحيح (True). الأخطاء النحوية تخرق قواعد لغة البرمجة (مثل نسيان الفاصلة المنقوطة أو كتابة كلمة محجوزة بشكل خاطئ)، وبسببها يرفض المترجم توليد كود الآلة ويتوقف البرنامج تماماً قبل البدء.",
    details: "Syntax error = compile fails, no executable is produced."
  },
  {
    id: "tf_15",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Flowchart Definition",
    text: "A flowchart is a graphical representation of an algorithm.",
    textAr: "مخطط الانسياب (Flowchart) هو تمثيل رسومي للخوارزمية.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 1",
    explanation: "صحيح (True). مخطط الانسياب (Flowchart) يعبر عن خطوات الخوارزمية باستخدام أشكال هندسية قياسية مثل المستطيل للعمليات، والمتوازي للإدخال/الإخراج، والمعين لاتخاذ القرار.",
    details: "Oval = Start/End, Parallelogram = Input/Output, Rectangle = Process, Diamond = Decision."
  },
  {
    id: "tf_16",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "RAM vs Hard Disk Speed and Size",
    text: "Primary memory like RAM is faster but smaller than secondary memory like Hard disk.",
    textAr: "الذاكرة الرئيسية مثل RAM أسرع ولكنها أصغر حجماً من الذاكرة الثانوية مثل القرص الصلب (Hard disk).",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 2",
    explanation: "صحيح (True). الـ RAM تقدم سرعة وصول عالية جداً للـ CPU ولكن سعتها عادة ما تكون بالجيجابايت (مثلاً 8GB أو 16GB)، بينما القرص الصلب أبطأ بكثير ولكن سعته بالتيرا بايت (مثلاً 1TB أو 2TB).",
    details: "Hierarchy: Registers > Cache > RAM > SSD / HDD (Speed decreases, Capacity increases, Cost decreases)."
  },
  {
    id: "tf_17",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Binary 1010 Decimal Value",
    text: "In binary, the value 1010 represents 12 in decimal.",
    textAr: "في النظام الثنائي، القيمة 1010 تمثل الرقم 12 في النظام العشري.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 5 - Question 3",
    explanation: "خطأ (False). القيمة الثنائية 1010 تمثل الرقم 10 في النظام العشري: (1×8 + 0×4 + 1×2 + 0×1 = 10). أما الرقم 12 فيُكتب ثنائياً بالشكل 1100.",
    details: "Binary weights: 8 4 2 1. For 1010 -> 8 + 2 = 10."
  },
  {
    id: "tf_18",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Cache Memory Speed",
    text: "Cache memory is slower than hard disk memory.",
    textAr: "ذاكرة التخزين المؤقت (Cache memory) أبطأ من ذاكرة القرص الصلب (Hard disk).",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 5 - Question 4",
    explanation: "خطأ (False). الـ Cache memory هي واحدة من أسرع أنواع الذواكر وتقع داخل وحدة المعالجة المركزية (CPU) أو قريبة جداً منها، وهي أسرع بملايين المرات من القرص الصلب وأسرع من الـ RAM.",
    details: "Speed Order: CPU Registers > Cache (L1, L2, L3) > RAM > Secondary Storage (HDD/SSD)."
  },
  {
    id: "tf_19",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Operating System Classification",
    text: "The operating system is considered system software.",
    textAr: "يُعتبر نظام التشغيل (Operating System) من برمجيات النظام (System software).",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 5",
    explanation: "صحيح (True). نظام التشغيل (مثل Windows, Linux) يقع تحت تصنيف برمجيات النظام (System Software) المسؤولة عن إدارة العتاد والموارد وتقديم منصة للبرامج التطبيقية (Application Software).",
    details: "Software types: System Software (OS, Device Drivers, Utilities) vs Application Software (Word, Browsers, Games)."
  },
  {
    id: "tf_20",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Assembly Language Mnemonics",
    text: "Assembly language uses letters instead of binary codes.",
    textAr: "لغة التجميع (Assembly language) تستخدم حروفا وكلمات رمزية بدلاً من الشفرات الثنائية.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 6",
    explanation: "صحيح (True). لغة التجميع تستخدم رموزاً نصية تسمى Mnemonics (مثل ADD, SUB, MOV, JMP) بدلاً من كتابة الأصفار والآحاد الثنائية في لغة الآلة (Machine Language).",
    details: "Assembly is a low-level language translated into machine code by an Assembler."
  },
  {
    id: "tf_21",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Variable Naming Rules",
    text: "A variable name in most programming languages can start with a number.",
    textAr: "اسم المتغير في معظم لغات البرمجة يمكن أن يبدأ برقم.",
    type: "boolean",
    correctAnswer: false,
    source: "Slide 5 - Question 7",
    explanation: "خطأ (False). لا يمكن لاسم المتغير أن يبدأ برقم في C++ ومعظم اللغات؛ يجب أن يبدأ بحرف (a-z, A-Z) أو بشرطة سفلية (_). الأرقام مسموحة فقط بعد الحرف الأول.",
    details: "Invalid: 1stNumber, 3count. Valid: number1, count_3, _value."
  },
  {
    id: "tf_22",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "C++ double Type",
    text: "In C++, double can store fractional values.",
    textAr: "في لغة C++، يمكن للنوع double تخزين قيم كسرية/عشرية.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 8",
    explanation: "صحيح (True). النوع double يُستخدم لتمثيل الأرقام العشرية ذات الدقة المضاعفة (Double-precision floating point) مثل 3.14159.",
    details: "float has 32 bits (approx 7 digits precision), double has 64 bits (approx 15-17 digits precision)."
  },
  {
    id: "tf_23",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "CPU Components",
    text: "The CPU consists of ALU, CU, and registers.",
    textAr: "تتكون وحدة المعالجة المركزية (CPU) من وحدة الحساب والمنطق (ALU)، وحدة التحكم (CU)، والسجلات (Registers).",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 9",
    explanation: "صحيح (True). المكونات الثلاثة الرئيسية للمعالج هي: ALU (Arithmetic & Logic Unit), CU (Control Unit), و Registers (سجلات التخزين فائقة السرعة).",
    details: "ALU performs math and logic; CU coordinates CPU operations; Registers hold immediate data and instructions."
  },
  {
    id: "tf_24",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Binary Digits",
    text: "Binary numbers use only the digits 0 and 1.",
    textAr: "الأرقام في النظام الثنائي تستخدم الرقمين 0 و 1 فقط.",
    type: "boolean",
    correctAnswer: true,
    source: "Slide 5 - Question 10",
    explanation: "صحيح (True). النظام الثنائي (Binary System) أساسه 2، ولذلك يحتوي على رمزين فقط هما 0 و 1.",
    details: "Base 2 uses {0, 1}. Base 8 uses {0-7}. Base 10 uses {0-9}. Base 16 uses {0-9, A-F}."
  },

  // ==========================================
  // SECTION 2: MULTIPLE CHOICE (اختر الإجابة)
  // ==========================================
  {
    id: "mcq_1",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Syntax Error Definition",
    text: "Which of the following best describes a syntax error?",
    textAr: "أي مما يلي يصف الخطأ النحوي (Syntax error) بأفضل شكل؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Error that occurs when the program is executed." },
      { id: "b", text: "b) Error caused by violating grammar rules of the programming language." },
      { id: "c", text: "c) Error that produces incorrect output but no error message." },
      { id: "d", text: "d) Error that causes infinite looping." }
    ],
    correctAnswer: "b",
    source: "Slide 7 - Question 1",
    explanation: "الخيار (b) هو الصحيح: الخطأ النحوي (Syntax Error) ينتج عن مخالفة القواعد النحوية واللغوية للغة البرمجة (مثل نسيان الفاصلة المنقوطة أو تهجئة الكلمات المحجوزة خطأ).",
    details: "Option (a) describes Runtime Error, Option (c) describes Logic Error, Option (d) describes an Infinite Loop (Logic/Runtime bug)."
  },
  {
    id: "mcq_2",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Smallest Memory Unit",
    text: "The smallest unit of memory is called a:",
    textAr: "أصغر وحدة لقياس الذاكرة تُسمى:",
    type: "mcq",
    options: [
      { id: "a", text: "a) Bit." },
      { id: "b", text: "b) Byte." },
      { id: "c", text: "c) Mega Byte." },
      { id: "d", text: "d) Kilo Byte." }
    ],
    correctAnswer: "a",
    source: "Slide 7 - Question 2",
    explanation: "الخيار (a) هو الصحيح: أصغر وحدة لتخزين البيانات في الحاسوب هي البت (Bit)، والتي تأخذ إما القيمة 0 أو القيمة 1.",
    details: "1 Byte = 8 bits. 1 KB = 1024 Bytes. 1 MB = 1024 KB. Thus, Bit is the absolute atomic unit."
  },
  {
    id: "mcq_3",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Input vs Output Devices",
    text: "Which of the following is NOT an output device?",
    textAr: "أي مما يلي ليس جهاز إخراج (NOT an output device)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Keyboard." },
      { id: "b", text: "b) Printer." },
      { id: "c", text: "c) Speaker." },
      { id: "d", text: "d) Plotter." }
    ],
    correctAnswer: "a",
    source: "Slide 7 - Question 3",
    explanation: "الخيار (a) هو الصحيح: لوحة المفاتيح (Keyboard) هي وحدة إدخال (Input device). بينما الطابعة (Printer)، السماعات (Speaker)، والراسمة (Plotter) كلها وحدات إخراج (Output devices).",
    details: "Input devices: Keyboard, Mouse, Scanner, Microphone. Output devices: Monitor, Printer, Speaker, Plotter."
  },
  {
    id: "mcq_4",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Bus for Control Signals",
    text: "Which of the following is used to transmit control signals in a computer?",
    textAr: "أي مما يلي يُستخدم لنقل إشارات التحكم في الحاسوب؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Address bus." },
      { id: "b", text: "b) Data bus." },
      { id: "c", text: "c) Control bus." },
      { id: "d", text: "d) None of previous." }
    ],
    correctAnswer: "c",
    source: "Slide 7 - Question 4",
    explanation: "الخيار (c) هو الصحيح: ناقل التحكم (Control bus) هو المخصص لنقل إشارات التوقيت والتحكم والتنسيق بين وحدة المعالجة وباقي المكونات (مثل أوامر القراءة والكتابة Read/Write).",
    details: "Data bus: Carries actual data. Address bus: Carries memory addresses. Control bus: Carries synchronization/control commands."
  },
  {
    id: "mcq_5",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Variable Identifier Legality",
    text: "Which of the following is an INVALID variable name in C++?",
    textAr: "أي من الأسماء التالية يُعتبر اسم متغير غير صحيح (Invalid) في C++؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) total_sum" },
      { id: "b", text: "b) _count" },
      { id: "c", text: "c) 2ndValue" },
      { id: "d", text: "d) student1" }
    ],
    correctAnswer: "c",
    source: "Course Syllabus / Naming Rules",
    explanation: "الخيار (c) غير صحيح برمجياً لأن اسم المتغير يبدأ برقم '2ndValue'. قواعد C++ تشترط أن يبدأ الاسم بحرف أو بشرطة سفلية _ فقط.",
    details: "Rules: 1) Letters, digits, and underscores only. 2) Must NOT begin with a digit. 3) Cannot use C++ reserved keywords."
  },
  {
    id: "mcq_6",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Hexadecimal Equivalent of Binary 1101",
    text: "What is the Hexadecimal representation of binary 1101?",
    textAr: "ما هو المكافئ الست عشري (Hexadecimal) للرقم الثنائي 1101؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) B" },
      { id: "b", text: "b) C" },
      { id: "c", text: "c) D" },
      { id: "d", text: "d) E" }
    ],
    correctAnswer: "c",
    source: "Number Systems Conversion",
    explanation: "الخيار (c) هو الصحيح: 1101 ثنائياً = 8 + 4 + 0 + 1 = 13 عشرياً. في النظام الست عشري: A=10, B=11, C=12, D=13. إذن القيمة هي D.",
    details: "8*1 + 4*1 + 2*0 + 1*1 = 13 (Decimal) = D (Hexadecimal)."
  },
  {
    id: "mcq_7",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "8-bit Signed Two's Complement Range",
    text: "What is the valid decimal range representable in 8-bit signed two's complement?",
    textAr: "ما هو المدى العشري المسموح بتمثيله في نظام المكمل الثنائي المكون من 8 بت (8-bit Two's Complement)؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) 0 to 255" },
      { id: "b", text: "b) -127 to +127" },
      { id: "c", text: "c) -128 to +127" },
      { id: "d", text: "d) -256 to +255" }
    ],
    correctAnswer: "c",
    source: "Supplementary Practice (Exam Review)",
    explanation: "الخيار (c) هو الصحيح: المدى للأعداد بإشارة في نظام المكمل الثنائي (Two's complement) لعدد n بت هو من -2^(n-1) إلى +(2^(n-1) - 1). بالنسبة لـ 8 بت: من -2^7 = -128 إلى +(2^7 - 1) = +127.",
    details: "Range formula: [-2^(n-1), +(2^(n-1) - 1)]. For 8-bit: [-128 to +127]. Notice -128 has no positive counterpart (+128 is out of range)."
  },
  {
    id: "mcq_8",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Fractional Conversion Method",
    text: "To convert the fractional part of a decimal number (e.g., 0.75) to binary, which operation is repeatedly performed?",
    textAr: "لتحويل الجزء الكسري من الرقم العشري (مثل 0.75) إلى النظام الثنائي، ما هي العملية المكررة المستخدمة؟",
    type: "mcq",
    options: [
      { id: "a", text: "a) Repeated division by 2" },
      { id: "b", text: "b) Repeated multiplication by 2" },
      { id: "c", text: "c) Repeated addition of 2" },
      { id: "d", text: "d) Raising to power of 2" }
    ],
    correctAnswer: "b",
    source: "Exam Paper - Double Dabble Method",
    explanation: "الخيار (b) هو الصحيح: لتحويل الجزء الصحيح نقوم بالقسمة المتكررة على 2 (Repeated division by 2)، بينما لتحويل الجزء الكسري نقوم بالضرب المتكرر في 2 (Repeated multiplication by 2) وأخذ الجزء الصحيح في كل خطوة.",
    details: "Example: 0.75 * 2 = 1.50 (take 1) -> 0.50 * 2 = 1.00 (take 1) -> result is .11."
  },
  {
    id: "mcq_9",
    category: "mcq",
    categoryName: "اختر الإجابة الصحيحة (MCQ)",
    title: "Calculator Division by Zero Handling",
    text: "In the calculator program from Slide 9, what happens if the user enters: 10 0 / ?",
    textAr: "في برنامج الآلة الحاسبة الموضح في السلايد 9، ماذا يحدث إذا أدخل المستخدم المدخلات التالية: 10 0 / ؟",
    codeSnippet: `else if (oper == '/') {
    if (y == 0) {
        cout << "error";
    } else {
        result = x / y;
        cout << "the result =" << result;
    }
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) The program crashes with Runtime Error" },
      { id: "b", text: "b) It prints: error" },
      { id: "c", text: "c) It prints: the result = 0" },
      { id: "d", text: "d) It causes an infinite loop" }
    ],
    correctAnswer: "b",
    source: "Slide 9 - Calculator Code Analysis",
    explanation: "الخيار (b) هو الصحيح: بفضل جملة الشرط `if (y == 0)` يتم فحص المقام مسبقاً وتجنب خطأ القسمة على صفر، وطباعة رسالة 'error' للمستخدم.",
    details: "Defensive programming avoids Divide-by-Zero runtime crashes."
  },

  // ==========================================
  // SECTION 3: C++ CODE TRACING & OUTPUT
  // ==========================================
  {
    id: "code_1",
    category: "code_trace",
    categoryName: "تتبع الكود والناتج (Code Tracing)",
    title: "Post-Increment Operator Tracing",
    text: "Choose the correct output of the main function:",
    textAr: "اختر الناتج الصحيح لتنفيذ الدالة main التالية:",
    codeSnippet: `int main() {
    int x, y, r;
    x = 3;
    y = 6;
    r = x + y++;
    cout << x << "\\t" << y << "\\t" << r;
    return 0;
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 3 \\t 9 \\t 7" },
      { id: "b", text: "b) 3 \\t 7 \\t 9" },
      { id: "c", text: "c) Won't run" },
      { id: "d", text: "d) 7 \\t 9 \\t 3" }
    ],
    correctAnswer: "b",
    source: "Slide 7 - Question 5",
    explanation: `الخيار (b) هو الصحيح: 3 \\t 7 \\t 9.
خطوات التتبع (Trace Steps):
1) x = 3, y = 6
2) في السطر r = x + y++; المعامل هو Post-increment (بعدي):
   - يتم استخدام قيمة y الحالية (6) أولاً في حساب المعادلة: r = 3 + 6 = 9.
   - بعد انتهاء السطر، تزداد قيمة y بمقدار 1 لتصبح 7.
3) قيمة x لم تتغير وتبقى 3.
4) عند الطباعة:
   - x تُطبع 3
   - y تُطبع 7
   - r تُطبع 9
الناتج النهائي: 3 \\t 7 \\t 9`,
    details: "Note: y++ (post-increment) uses the value first then increments. ++y (pre-increment) increments first then uses the value."
  },
  {
    id: "code_2",
    category: "code_trace",
    categoryName: "تتبع الكود والناتج (Code Tracing)",
    title: "Pre vs Post Increment Trace",
    text: "What will be printed by the following code snippet?",
    textAr: "ما هو الناتج المطبوع من مقطع الكود التالي؟",
    codeSnippet: `int a = 4, b = 2;
int c = ++a * b--;
cout << a << " " << b << " " << c;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 5 1 10" },
      { id: "b", text: "b) 5 2 10" },
      { id: "c", text: "c) 4 1 8" },
      { id: "d", text: "d) 5 1 8" }
    ],
    correctAnswer: "a",
    source: "Supplementary Practice (Operators)",
    explanation: `الخيار (a) هو الصحيح: 5 1 10.
التتبع:
1) ++a (Pre-increment): تصبح قيمة a = 5 قبل الضرب.
2) b-- (Post-decrement): تُستخدم قيمة b الحالية (2) في عملية الضرب، فتكون c = 5 * 2 = 10.
3) بعد انتهاء السطر، تنقص قيمة b لتصبح 1.
4) إذن a = 5, b = 1, c = 10.`,
    details: "Trace table: a: 4->5; b: 2->1; c: 5*2=10."
  },
  {
    id: "code_3",
    category: "code_trace",
    categoryName: "تتبع الكود والناتج (Code Tracing)",
    title: "Switch Statement Conversion Trace",
    text: "Given x = 3, what will the switch statement print?",
    textAr: "بافتراض أن المستخدم أدخل x = 3، ماذا سيطبع برنامج الـ switch التالي؟",
    codeSnippet: `switch (x) {
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
}`,
    type: "mcq",
    options: [
      { id: "a", text: "a) x=3 or 5" },
      { id: "b", text: "b) x=2" },
      { id: "c", text: "c) x=4" },
      { id: "d", text: "d) Else." }
    ],
    correctAnswer: "a",
    source: "Slide 10 - Question & Answer",
    explanation: "الخيار (a) هو الصحيح: عند x = 3، يدخل البرنامج إلى case 3، ونظراً لعدم وجود break بين case 3 و case 5، يحدث fall-through إلى الكود المشترك فيطبع 'x=3 or 5' ثم يزداد x وينفذ break للخروج من الـ switch.",
    details: "This simulates `if (x == 3 || x == 5)` in switch statements."
  },

  // ==========================================
  // SECTION 4: IDENTIFY & CORRECT ERRORS
  // ==========================================
  {
    id: "err_1",
    category: "errors",
    categoryName: "اكتشف الأخطاء وصححها (Identify & Fix Errors)",
    title: "C++ cout Stream and Escape Character",
    text: "Identify and correct the error in: cout >> count >> '/n'",
    textAr: "اكتب الكود المصحح لجملة C++ التالية: cout >> count >> '/n'",
    codeSnippet: `cout >> count >> '/n'`,
    type: "interactive_fix",
    source: "Exam Paper - Question 4(a)",
    hint: "تأكد من اتجاه معامل الإخراج، رمز السطر الجديد، والفاصلة المنقوطة.",
    identifiedErrors: [
      "1) استخدام معامل الاستخراج '>>' مع cout بدلاً من معامل الإدراج '<<'.",
      "2) كتابة الرمز السلاش المائل للأمام '/n' بدلاً من السلاش المائل للخلف '\\n' المخصص لسطر جديد.",
      "3) نسيان الفاصلة المنقوطة (;) في نهاية الجملة."
    ],
    correctCode: `cout << count << '\\n'; // أو cout << count << endl;`,
    explanation: `الأخطاء الموجودة في السطر:
1. مع كائن الإخراج cout يجب استخدام عامل الإدراج << (Insertion operator) وليس >> (الذي يُستخدم مع cin).
2. محرف الانتقال لسطر جديد هو الباك سلاش '\\n' وليس الفورورد سلاش '/n'.
3. كل جملة C++ يجب أن تنتهي بفاصلة منقوطة (;).`
  },
  {
    id: "err_2",
    category: "errors",
    categoryName: "اكتشف الأخطاء وصححها (Identify & Fix Errors)",
    title: "Variable Identifier Reserved Keyword",
    text: "Identify and correct the error in: int double = 44;",
    textAr: "اكتب الكود المصحح لجملة C++ التالية: int double = 44;",
    codeSnippet: `int double = 44;`,
    type: "interactive_fix",
    source: "Exam Paper - Question 4(b)",
    hint: "تذكر قواعد تسمية المتغيرات والكلمات المحجوزة في C++.",
    identifiedErrors: [
      "استخدام الكلمة المحجوزة 'double' كاسم متغير، وهذا ممنوع في C++ لأن double هو نوع بيانات مدمج (Reserved Keyword)."
    ],
    correctCode: `int myNumber = 44; // أو int num = 44; أو double d = 44;`,
    explanation: `الخطأ:
كلمة 'double' هي كلمة محجوزة في لغة C++ (Reserved Keyword) مخصصة للإعلان عن الأرقام الكسرية، وقواعد اللغة تمنع استخدام أي كلمة محجوزة كاسم لمتغير.
التصحيح:
تغيير اسم المتغير إلى أي اسم مسموح به مثل num أو value.`
  },
  {
    id: "err_3",
    category: "errors",
    categoryName: "اكتشف الأخطاء وصححها (Identify & Fix Errors)",
    title: "Header Typo & Case-Sensitivity",
    text: "Identify errors and write correct code for: #include <iostrem> and Using namespace std;",
    textAr: "اكتب الكود المصحح للسطرين التاليين (تصحيح الترويسة ومجال الأسماء):",
    codeSnippet: `#include <iostrem>
Using namespace std;`,
    type: "interactive_fix",
    source: "Slide 9 - Code Observation",
    hint: "انتبه لتهجئة المكتبة وحالة الأحرف (Capital/Small) في C++.",
    identifiedErrors: [
      "1) خطأ إملائي في اسم المكتبة: <iostrem> بدلاً من <iostream> (حرف a ناقص).",
      "2) لغة C++ حساسة لحالة الأحرف (Case-sensitive)، لذلك كلمة 'Using' بحرف كبير U خطأ ويجب أن تكون بحرف صغير 'using'."
    ],
    correctCode: `#include <iostream>
using namespace std;`,
    explanation: `1. اسم مكتبة الدخل والخرج القياسية هو iostream (Input/Output Stream).
2. لغة C++ حساسة لحالة الأحرف تماماً، فكلمات اللغة المحجوزة مثل using و int و return تكتب كلها بحروف صغيرة (Lowercase).`
  },
  {
    id: "err_4",
    category: "errors",
    categoryName: "اكتشف الأخطاء وصححها (Identify & Fix Errors)",
    title: "cin Stream Extraction Operator",
    text: "Identify and correct the error in: cin << number",
    textAr: "اكتب الكود المصحح لجملة الإدخال التالية: cin << number",
    codeSnippet: `cin << number`,
    type: "interactive_fix",
    source: "C++ I/O Operations Practice",
    hint: "ما هو المعامل الصحيح المستخدم مع cin؟ وماذا ينقص نهاية الجملة؟",
    identifiedErrors: [
      "1) استخدام معامل الإدراج '<<' مع cin بدلاً من معامل الاستخراج '>>'.",
      "2) نسيان الفاصلة المنقوطة (;) في نهاية الجملة."
    ],
    correctCode: `cin >> number;`,
    explanation: `مع كائن الإدخال cin يجب استخدام معامل الاستخراج >> (Extraction operator) وليس <<. كما يجب إنهاء الجملة بفاصلة منقوطة (;).`
  },
  {
    id: "err_5",
    category: "errors",
    categoryName: "اكتشف الأخطاء وصححها (Identify & Fix Errors)",
    title: "Equality Operator vs Assignment in Condition",
    text: "Identify and correct the logic/syntax error in: if (score = 100);",
    textAr: "اكتب الكود المصحح لجملة الشرط التالية (المقصود فحص المساواة وبدء كتلة الشرط): if (score = 100);",
    codeSnippet: `if (score = 100);`,
    type: "interactive_fix",
    source: "C++ Conditional Statements Common Pitfalls",
    hint: "الفرق بين معامل التعيين ومعامل المقارنة، وتأثير الفاصلة المنقوطة بعد قوس الشرط.",
    identifiedErrors: [
      "1) استخدام معامل التعيين '=' بدلاً من معامل المقارنة للمساواة '=='.",
      "2) وضع فاصلة منقوطة (;) بعد قوس جملة if مباشرة، مما ينهي جملة الشرط ويجعل كتلة الكود التالية تنفذ دائماً بشكل غير مقصود."
    ],
    correctCode: `if (score == 100) // بدون فاصلة منقوطة`,
    explanation: `1. في C++، المعامل '==' يُستخدم لاختبار المساواة (Equality Comparison)، بينما '=' يُستخدم لتعيين وتغيير القيمة (Assignment).
2. وضع فاصلة منقوطة بعد 'if (...);' يُعتبر خطأ منطقياً شائعاً لأنه ينهي الشرط فوراً ولا يربطه بما بعده.`
  },

  // ==========================================
  // SECTION 5: NUMBER SYSTEMS & 2'S COMPLEMENT
  // ==========================================
  {
    id: "num_1",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "Double Dabble Conversion: 143.75 Decimal to Binary",
    text: "Convert decimal 143.75 to its equivalent Binary, Octal, and Hexadecimal representations.",
    textAr: "حوّل الرقم العشري 143.75 إلى الأنظمة: الثنائي (Binary)، الثماني (Octal)، والست عشري (Hexadecimal).",
    source: "Exam Paper - Table Row 1",
    inputs: [
      { label: "Binary (الثنائي)", expected: "10001111.11", hint: "اكتب الجزء الصحيح مفصولاً بنقطة عن الكسر" },
      { label: "Octal (الثماني)", expected: "217.6", hint: "تجميع ثلاثيات" },
      { label: "Hexadecimal (الست عشري)", expected: "8F.C", hint: "تجميع رباعيات" }
    ],
    stepByStep: `خطوات الحل المفصلة (Double Dabble & Grouping):
1) تحويل الجزء الصحيح (143):
   143 / 2 = 71 والباقي 1
   71  / 2 = 35 والباقي 1
   35  / 2 = 17 والباقي 1
   17  / 2 = 8  والباقي 1
   8   / 2 = 4  والباقي 0
   4   / 2 = 2  والباقي 0
   2   / 2 = 1  والباقي 0
   1   / 2 = 0  والباقي 1
   قراءة البواقي من الأسفل للأعلى (من اليمين لليسار): (10001111)_2

2) تحويل الجزء الكسري (0.75) بالضرب المتكرر في 2:
   0.75 × 2 = 1.50 -> الجزء الصحيح 1
   0.50 × 2 = 1.00 -> الجزء الصحيح 1 (توقف)
   الكسر ثنائياً = (0.11)_2

3) الرقم الثنائي الإجمالي: 10001111.11

4) التحويل إلى ثماني (Octal) بتجميع 3 بت:
   - الجزء الصحيح (من اليمين): 010 001 111 = 2 1 7 -> 217
   - الجزء الكسري (من اليسار): 110 = 6 -> .6
   - الناتج الثماني = 217.6

5) التحويل إلى ست عشري (Hex) بتجميع 4 بت:
   - الجزء الصحيح: 1000 1111 = 8 F -> 8F
   - الجزء الكسري: 1100 = C (12) -> .C
   - الناتج الست عشري = 8F.C`
  },
  {
    id: "num_2",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "Binary Conversion: 11011.101 to Decimal, Octal, Hex",
    text: "Convert binary 11011.101 to Decimal, Octal, and Hexadecimal.",
    textAr: "حوّل الرقم الثنائي 11011.101 إلى الأنظمة: العشري (Decimal)، الثماني (Octal)، والست عشري (Hexadecimal).",
    source: "Exam Paper - Table Row 2",
    inputs: [
      { label: "Decimal (العشري)", expected: "27.625", hint: "مجموع أوزان قوى 2" },
      { label: "Octal (الثماني)", expected: "33.5", hint: "تجميع 3 بت" },
      { label: "Hexadecimal (الست عشري)", expected: "1B.A", hint: "تجميع 4 بت" }
    ],
    stepByStep: `خطوات الحل:
1) التحويل إلى عشري (Decimal):
   - الجزء الصحيح (11011): (1×16) + (1×8) + (0×4) + (1×2) + (1×1) = 16 + 8 + 0 + 2 + 1 = 27
   - الجزء الكسري (0.101): (1 × 2^-1) + (0 × 2^-2) + (1 × 2^-3) = 0.5 + 0 + 0.125 = 0.625
   - الإجمالي العشري = 27.625

2) التحويل إلى ثماني (Octal):
   - الصحيح: 011 011 = 3 3
   - الكسر: 101 = 5
   - الناتج = 33.5

3) التحويل إلى ست عشري (Hexadecimal):
   - الصحيح: 0001 1011 = 1 B (حيث 11 = B)
   - الكسر: 1010 = A (حيث 10 = A)
   - الناتج = 1B.A`
  },
  {
    id: "num_3",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "Octal 453 to Decimal, Binary, Hex",
    text: "Convert Octal 453 to Decimal, Binary, and Hexadecimal.",
    textAr: "حوّل الرقم الثماني 453 إلى الأنظمة: العشري، الثنائي، والست عشري.",
    source: "Exam Paper - Table Row 3",
    inputs: [
      { label: "Decimal (العشري)", expected: "299", hint: "4*64 + 5*8 + 3" },
      { label: "Binary (الثنائي)", expected: "100101011", hint: "كل خانة ثمانية تفك إلى 3 بت" },
      { label: "Hexadecimal (الست عشري)", expected: "12B", hint: "تجميع 4 بت من الثنائي" }
    ],
    stepByStep: `خطوات الحل:
1) التحويل إلى ثنائي (Binary) باستبدال كل رقم ثماني بـ 3 بت:
   4 = 100
   5 = 101
   3 = 011
   الناتج الثنائي = 100101011

2) التحويل إلى عشري (Decimal):
   (4 × 8^2) + (5 × 8^1) + (3 × 8^0) = (4 × 64) + (5 × 8) + 3 = 256 + 40 + 3 = 299

3) التحويل إلى ست عشري (Hexadecimal):
   نقوم بتجميع البتات الثنائية في مجموعات من 4 من اليمين:
   0001 0010 1011
   0001 = 1
   0010 = 2
   1011 = 11 = B
   الناتج الست عشري = 12B`
  },
  {
    id: "num_4",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "Hexadecimal 1F.C to Decimal, Binary, Octal",
    text: "Convert Hexadecimal 1F.C to Decimal, Binary, and Octal.",
    textAr: "حوّل الرقم الست عشري 1F.C إلى الأنظمة: العشري، الثنائي، والثماني.",
    source: "Exam Paper - Table Row 4",
    inputs: [
      { label: "Decimal (العشري)", expected: "31.75", hint: "1*16 + 15 + 12/16" },
      { label: "Binary (الثنائي)", expected: "11111.11", hint: "كل خانة تفك إلى 4 بت" },
      { label: "Octal (الثماني)", expected: "37.6", hint: "تجميع 3 بت" }
    ],
    stepByStep: `خطوات الحل:
1) التحويل إلى ثنائي (Binary):
   1 = 0001
   F = 1111
   .C = .1100
   الرقم الثنائي الكامل: 00011111.1100 = 11111.11

2) التحويل إلى عشري (Decimal):
   (1 × 16^1) + (15 × 16^0) + (12 × 16^-1) = 16 + 15 + (12/16 = 0.75) = 31.75

3) التحويل إلى ثماني (Octal) بتجميع 3 بت:
   - الجزء الصحيح: 011 111 = 3 7
   - الجزء الكسري: 110 = 6
   - الناتج = 37.6`
  },
  {
    id: "num_5",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "Signed Representations for -22 and -123 (8-bit)",
    text: "Calculate the negative values of 22 and 123 using Signed Magnitude, 1's Complement, and 2's Complement in 8-bit.",
    textAr: "احسب القيمة السالبة للرقمين 22 و 123 باستخدام: إشارة ومقدار (Signed magnitude)، مكمل أحادي (1's complement)، ومكمل ثنائي (2's complement) في 8-bit.",
    source: "Slide 3 - Table",
    inputs: [
      { label: "-22 Signed Magnitude", expected: "10010110", hint: "خانة الإشارة 1 وباقي البتات للمقدار" },
      { label: "-22 One's Complement", expected: "11101001", hint: "قلب جميع بتات +22" },
      { label: "-22 Two's Complement", expected: "11101010", hint: "المكمل الأحادي + 1" },
      { label: "-123 Signed Magnitude", expected: "11111011", hint: "خانة الإشارة 1 وباقي البتات 123" },
      { label: "-123 One's Complement", expected: "10000100", hint: "قلب جميع بتات +123" },
      { label: "-123 Two's Complement", expected: "10000101", hint: "المكمل الأحادي + 1" }
    ],
    stepByStep: `خطوات الحل المفصلة (تمثيل 8-bit):
أولاً: الرقم 22:
- تمثيل +22 في 8-bit هو: 00010110 (16 + 4 + 2 = 22)
1) Signed Magnitude (sm) لـ (-22):
   نجعل بت الإشارة الأيسر 1: 10010110
2) One's Complement (c1) لـ (-22):
   نقلب كل البتات: 11101001
3) Two's Complement (c2) لـ (-22):
   نضيف 1 للمكمل الأحادي: 11101001 + 1 = 11101010

ثانياً: الرقم 123:
- تمثيل +123 في 8-bit هو: 01111011 (64 + 32 + 16 + 8 + 2 + 1 = 123)
1) Signed Magnitude (sm) لـ (-123):
   نجعل بت الإشارة الأيسر 1: 11111011
2) One's Complement (c1) لـ (-123):
   نقلب كل البتات: 10000100
3) Two's Complement (c2) لـ (-123):
   نضيف 1 للمكمل الأحادي: 10000100 + 1 = 10000101`
  },
  {
    id: "num_6",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "2's Complement Subtraction: (-13)_10 - (6)_10",
    text: "Calculate (-13)_10 - (6)_10 using 8-bit 2's Complement arithmetic.",
    textAr: "احسب العملية التالية موضحاً الخطوات بالتفصيل: (-13)₁₀ - (6)₁₀ = (؟)₁₀ باستخدام المكمل الثنائي (2's complement).",
    source: "Exam Paper - Question 2(b)",
    inputs: [
      { label: "الناتج العشري النهائي", expected: "-19", hint: "-13 - 6" },
      { label: "الناتج الثنائي (8-bit)", expected: "11101101", hint: "ناتج جمع مكملي -13 و -6" }
    ],
    stepByStep: `خطوات الحل بالتفصيل:
المعادلة: (-13) - (+6) = (-13) + (-6)

1) تمثيل (+13) في 8 بت:
   +13 = 00001101
   المكمل الأحادي (1's comp) = 11110010
   المكمل الثنائي لـ (-13) (2's comp) = 11110010 + 1 = 11110011

2) تمثيل (+6) في 8 بت:
   +6 = 00000110
   المكمل الأحادي (1's comp) = 11111001
   المكمل الثنائي لـ (-6) (2's comp) = 11111001 + 1 = 11111010

3) عملية الجمع الثنائي:
     11110011  (-13)
   + 11111010  (-6)
   -----------
   1 11101101

4) التعامل مع الحمل (Carry bit):
   في نظام 8-bit، يتم تجاهل البت التاسع الزائد (Discard the end carry bit 1).
   يتبقى لدينا: 11101101

5) التحقق من الإجابة:
   الخانة اليسرى (Sign bit) هي 1 (عدد سالب).
   لمعرفة قيمته المطلقة:
   - نقلب البتات: 00010010
   - نضيف 1: 00010010 + 1 = 00010011 (وهو الرقم 19 عشرياً)
   إذن الناتج النهائي هو: -19 عشرياً.`
  },
  {
    id: "num_7",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "Decimal 43 to Binary",
    text: "Convert the decimal number 43 to its equivalent binary number.",
    textAr: "حوّل الرقم العشري 43 إلى مكافئه في النظام الثنائي.",
    source: "Slide 4 - Question",
    inputs: [
      { label: "Binary Equivalent", expected: "101011", hint: "32 + 8 + 2 + 1" }
    ],
    stepByStep: `خطوات التحويل بالقسمة المتكررة على 2:
43 ÷ 2 = 21 والباقي 1 (LSB)
21 ÷ 2 = 10 والباقي 1
10 ÷ 2 = 5  والباقي 0
5  ÷ 2 = 2  والباقي 1
2  ÷ 2 = 1  والباقي 0
1  ÷ 2 = 0  والباقي 1 (MSB)

قراءة البواقي من الأسفل للأعلى: 101011
التحقق: 32 + 8 + 2 + 1 = 43.`
  },

  // ==========================================
  // SECTION 6: ALGORITHMS & FLOWCHARTS
  // ==========================================
  {
    id: "flow_1",
    category: "flowcharts",
    categoryName: "الخوارزميات وخرائط التدفق (Flowcharts)",
    title: "Celsius to Fahrenheit Converter",
    text: "Write a pseudocode and understand the flowchart that converts temperature from Celsius to Fahrenheit: F = (C * (9/5)) + 32.",
    textAr: "كود زائف (Pseudocode) وخريطة تدفق لتحويل درجة الحرارة من مئوية إلى فهرنهايت: F = (C × (9/5)) + 32.",
    source: "Slide 6 - Question",
    type: "conceptual_flow",
    pseudocode: `Algorithm:
1. Start
2. Read Celsius temperature (C)
3. Calculate Fahrenheit: F = (C * 9.0 / 5.0) + 32
4. Display / Print Fahrenheit (F)
5. End`,
    flowchartSteps: [
      { shape: "Oval", text: "Start" },
      { shape: "Parallelogram", text: "Input C" },
      { shape: "Rectangle", text: "F = (C * 9/5) + 32" },
      { shape: "Parallelogram", text: "Print F" },
      { shape: "Oval", text: "End" }
    ],
    explanation: "المعادلة الرياضية واضحة ومباشرة وتعتمد على تسلسل خطي بسيط (Sequential structure) بدون شروط أو تكرار."
  },
  {
    id: "flow_2",
    category: "flowcharts",
    categoryName: "الخوارزميات وخرائط التدفق (Flowcharts)",
    title: "Check Positive or Negative Number",
    text: "Write an algorithm, pseudocode, and flowchart that prints if a number entered by a user is negative or positive.",
    textAr: "اكتب خوارزمية وكود زائف وخريطة تدفق لطباعة ما إذا كان الرقم المدخل موجباً أو سالباً.",
    source: "Slide 8 - Question",
    type: "conceptual_flow",
    pseudocode: `Algorithm:
1. Start
2. Input number (N)
3. If N >= 0:
      Print "Positive"
   Else:
      Print "Negative"
4. End`,
    flowchartSteps: [
      { shape: "Oval", text: "Start" },
      { shape: "Parallelogram", text: "Input N" },
      { shape: "Diamond", text: "Is N >= 0 ?" },
      { shape: "Parallelogram (Branch True)", text: "Print 'Positive'" },
      { shape: "Parallelogram (Branch False)", text: "Print 'Negative'" },
      { shape: "Oval", text: "End" }
    ],
    explanation: "تعتمد هذه المسألة على هيكل اتخاذ القرار (Decision structure) باستخدام شكل المعين (Diamond) للمقارنة `N >= 0` وتوجيه المسار وفقاً للشرط."
  },
  {
    id: "flow_3",
    category: "flowcharts",
    categoryName: "الخوارزميات وخرائط التدفق (Flowcharts)",
    title: "Sum of Squares from 1 to 50",
    text: "Draw a flowchart to find the sum of squares of integers from 1 to 50.",
    textAr: "ارسم خريطة تدفق لحساب مجموع مربعات الأعداد الصحيحة من 1 إلى 50 (Sum of squares: 1² + 2² + ... + 50²).",
    source: "Exam Paper - Question 3",
    type: "conceptual_flow",
    pseudocode: `Algorithm:
1. Start
2. Initialize sum = 0, i = 1
3. While i <= 50:
      sum = sum + (i * i)
      i = i + 1
4. Print sum
5. End`,
    flowchartSteps: [
      { shape: "Oval", text: "Start" },
      { shape: "Rectangle", text: "sum = 0, i = 1" },
      { shape: "Diamond", text: "Is i <= 50 ?" },
      { shape: "Rectangle (Loop Body)", text: "sum = sum + (i * i) \\n i = i + 1" },
      { shape: "Parallelogram", text: "Print sum" },
      { shape: "Oval", text: "End" }
    ],
    explanation: "تعتمد على هيكل التكرار (Looping structure). تبدأ العداد i بـ 1 وتراكم مربع i في المتغير sum، وتكرر حتى يصل العداد إلى 50 ثم تخرج وتطبع الناتج النهائي."
  },

  // ==========================================
  // SECTION 7: THEORY & SYSTEM CONCEPTS
  // ==========================================
  {
    id: "theory_1",
    category: "theory",
    categoryName: "المفاهيم النظرية (Theory & Concepts)",
    title: "What is a Compiler?",
    text: "What is a Compiler and what is its primary function?",
    textAr: "ما هو المترجم (Compiler) وما هي وظيفته الأساسية؟",
    source: "Slide 4 - Question & Answer",
    type: "theory_reveal",
    modelAnswer: "Compiler translates preprocessed source code into an object code that contains machine-readable instructions.",
    modelAnswerAr: "المترجم (Compiler) هو برنامج يقوم بترجمة الكود المصدري (Source code) بعد المعالجة الأولية إلى كود هدفي (Object code) يحتوي على تعليمات قابلة للقراءة والتنفيذ بواسطة الآلة (Machine-readable instructions).",
    keyPoints: [
      "Translates high-level language code to machine/object code.",
      "Checks for syntax and semantic errors.",
      "Translates the whole program at once before execution."
    ]
  },
  {
    id: "theory_2",
    category: "theory",
    categoryName: "المفاهيم النظرية (Theory & Concepts)",
    title: "Computer System Elements",
    text: "Describe briefly the computer system elements.",
    textAr: "اشرح باختصار العناصر المكونة لنظام الحاسوب (Computer system elements).",
    source: "Exam Paper - Question 1",
    type: "theory_reveal",
    modelAnswer: "A computer system consists of five primary elements: Hardware, Software, Peopleware (Users), Data, and Procedures.",
    modelAnswerAr: `يتكون نظام الحاسوب من خمسة عناصر رئيسية:
1. العتاد (Hardware): المكونات المادية الملموسة (وحدة المعالجة CPU، الذاكرة RAM، وحدات الإدخال والإخراج).
2. البرمجيات (Software): البرامج والتعليمات التي توجه العتاد، وتنقسم إلى برمجيات نظام (System Software كالـ OS) وبرمجيات تطبيقية (Application Software).
3. المستخدمون (Peopleware / Users): العنصر البشري الذي يشغل النظام ويطوره (مبرمجون، محللو نظم، مستخدمون).
4. البيانات والمعلومات (Data / Information): الحقائق الخام المدخلة (Data) والنتائج المعالجة المفيدة المستخرجة (Information).
5. الإجراءات والقواعد (Procedures): التعليمات والسياسات التي تحكم كيفية استخدام وتشغيل النظام وأمن البيانات.`,
    keyPoints: [
      "Hardware: Physical parts (CPU, RAM, HDD, I/O)",
      "Software: Instructions & OS / Apps",
      "Peopleware: Developers and End Users",
      "Data: Raw input facts and output info",
      "Procedures: Guidelines and operational rules"
    ]
  },

  // ==========================================
  // SECTION 8: ESSAY & DETAILED CONCEPTUAL QUESTIONS
  // أسئلة مقالية معمقة عن أنظمة العد وخرائط التدفق
  // ==========================================
  {
    id: "essay_num_1",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Why Two's Complement is Preferred in Modern Computers",
    text: "Explain why modern digital computers use Two's Complement representation for negative numbers instead of Signed Magnitude or One's Complement.",
    textAr: "سؤال مقالي: علل، لماذا تستخدم الحواسيب الحديثة نظام المكمل الثنائي (Two's Complement) لتمثيل الأعداد السالبة بدلاً من نظام الإشارة والمقدار (Signed Magnitude) أو المكمل الأحادي (One's Complement)؟",
    type: "essay",
    source: "Number Systems Theory (Exam Focus)",
    questionDetails: "اذكر على الأقل سببين رئيسيين يتعلقان بالصفر وتصميم دوائر الجمع والطرح بالعتاد.",
    modelAnswerAr: `الأسباب الرئيسية لاعتماد نظام المكمل الثنائي (Two's Complement) في المعالجات:
1. التخلص من مشكلة الصفر المزدوج (Unique Zero):
   - في نظام Signed Magnitude و 1's Complement، يوجد تمثيلان للرقم صفر: (+0) و (-0)، مما يسبب هدراً في مدى الأرقام وتعقيداً برمجياً ومنطقياً في مقارنات الصفر.
   - في نظام Two's Complement، يوجد صفر واحد فقط (00000000)، مما يتيح تمثيل رقم سالب إضافي (مثلاً من -128 إلى +127 في 8-bit).

2. تبسيط دوائر العتاد الصلب (Hardware Simplicity for Addition & Subtraction):
   - تُمكّن دائرة الجمع الرقمية (Binary Adder) نفسها من تنفيذ عمليات الجمع والطرح معاً دون الحاجة لدائرة طرح منفصلة.
   - لحساب A - B، يحسب المعالج ببساطة: A + (2's comp of B).
   - يتم إهمال خانة الحمل المنتهية (End-around carry) تلقائياً، بعكس المكمل الأحادي الذي يتطلب دائرة لإعادة إضافة الحمل (End-around carry addition).`,
    modelAnswer: `1. Single representation for zero (no +0 and -0 ambiguity, unlike Signed Magnitude and 1's Complement).
2. Hardware simplicity: Subtraction is performed directly using addition logic (A - B = A + (-B)).
3. No end-around carry correction needed like in 1's complement.
4. Extends the negative dynamic range by one additional value (e.g., -128 in 8 bits).`,
    rubricChecklist: [
      "ذكر مشكلة وجود صفرين (+0 و -0) في الأنظمة الأخرى مقابل صفر واحد فقط في المكمل الثنائي.",
      "توضيح إمكانية تنفيذ الطرح باستخدام دوائر الجمع فقط (Hardware Adder) دون الحاجة لعتاد طرح منفصل.",
      "الإشارة إلى عدم الحاجة لإعادة إضافة خانة الحمل (End-around carry) كما في المكمل الأحادي.",
      "ذكر المدى الإضافي للأعداد السالبة (من -128 إلى +127)."
    ]
  },
  {
    id: "essay_num_2",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Understanding Binary Arithmetic Overflow",
    text: "Explain the concept of Overflow in signed binary arithmetic. How does it happen, and how do CPU flags detect it?",
    textAr: "سؤال مقالي: اشرح بالتفصيل مفهوم الفيض الحسابي (Overflow) في الأعداد الثنائية ذات الإشارة. كيف يحدث؟ وما هي القاعدة الرياضية التي تعتمد عليها المعالجات لكشفه؟",
    type: "essay",
    source: "Slide 2 (Q10) & Advanced Number Representation",
    questionDetails: "استعن بمثال جمع رقمين موجبين ينتج عنهما رقم سالب كما في السلايد (0101 + 0011).",
    modelAnswerAr: `مفهوم الفيض الحسابي (Arithmetic Overflow):
1. التعريف:
   يحدث الفيض (Overflow) عندما تتجاوز النتيجة الحسابية المدى الأقصى المسموح به لعدد الخانات المخصصة (Number of bits) في السجل أو نوع البيانات.

2. متى يحدث؟ (شروط الحدوث في Two's Complement):
   - يحدث حصراً عند جمع عددين لهما نفس الإشارة:
     أ) جمع عدد موجب + عدد موجب -> والناتج يظهر كعدد سالب (خانة الإشارة MSB تصبح 1).
     ب) جمع عدد سالب + عدد سالب -> والناتج يظهر كعدد موجب (خانة الإشارة MSB تصبح 0).
   - ملحوظة: لا يمكن أن يحدث Overflow عند جمع عدد موجب مع عدد سالب أبداً.

3. مثال تطبيقي من السلايد (4-bit):
   المدى المسموح لـ 4 بت هو من -8 إلى +7.
   جمع: 5 + 3 = 8
   ثنائياً: 0101 (موجب 5) + 0011 (موجب 3) = 1000.
   الخانة اليسرى أصبحت 1، مما يعني أن المعالج يقرأها كـ (-8) بدلاً من (+8)، وهذا خطأ فيض حسابي واضح (Overflow).

4. طريقة كشف المعالج له (Hardware Detection):
   المعالج يكشف الـ Overflow بعملية XOR بين الحمل الداخل لخانة الإشارة (Carry-in to MSB) والحمل الخارج منها (Carry-out from MSB). فإذا اختلفا (Carry-in != Carry-out)، يُرفع علم الفيض (Overflow Flag - OF = 1).`,
    modelAnswer: `Overflow occurs when the result of a signed arithmetic operation falls outside the representable range [-2^(n-1), 2^(n-1)-1].
Conditions:
- Adding two positive numbers yields a negative result.
- Adding two negative numbers yields a positive result.
Hardware detection: Carry-in to MSB is different from Carry-out from MSB (CarryIn XOR CarryOut = 1).`,
    rubricChecklist: [
      "تعريف الـ Overflow بأنه تجاوز النتيجة للمدى المسموح به لعدد البتات المتاحة.",
      "ذكر القاعدة: جمع موجبين يعطي سالباً، أو جمع سالبين يعطي موجباً.",
      "تأكيد استحالة حدوث Overflow عند جمع عدد موجب مع عدد سالب.",
      "ذكر مثال عددي (مثل 5 + 3 = 8 خارج مدى 4-bit).",
      "الإشارة لـ علم الفيض (Overflow Flag - OF) أو مقارنة Carry-in مع Carry-out."
    ]
  },
  {
    id: "essay_num_3",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Double Dabble Method for Decimal to Binary Conversion",
    text: "Explain in detail the Double Dabble method used to convert both the integer and fractional parts of a decimal number into binary.",
    textAr: "سؤال مقالي: اشرح بالتفصيل طريقة (Double Dabble) المستخدمة لتحويل كل من الجزء الصحيح والجزء الكسري لعدد عشري إلى مكافئه الثنائي.",
    type: "essay",
    source: "Exam Paper - Question 2(a)",
    questionDetails: "وضح الفارق بين التعامل مع الجزء الصحيح (قسمة على 2) والكسر (ضرب في 2) وترتيب كتابة البتات.",
    modelAnswerAr: `طريقة Double Dabble لتحويل الأعداد العشرية إلى ثنائية:
تنقسم الطريقة إلى مرحلتين أساسيتين:

المرحلة الأولى: تحويل الجزء الصحيح (Integer Part):
1. نقوم بالقسمة المتكررة للعدد على 2 (Repeated Division by 2).
2. في كل خطوة، نسجل خارج القسمة الصحيح وباقي القسمة (Remainder) الذي يكون دائماً إما 0 أو 1.
3. نستمر في القسمة حتى يصبح خارج القسمة 0.
4. ترتيب قراءة البواقي:
   - أول باقي ينتج هو الخانة الأقل أهمية (LSB - Least Significant Bit) جهة اليمين.
   - آخر باقي ينتج هو الخانة الأكثر أهمية (MSB - Most Significant Bit) جهة اليسار.
   (أي تُقرأ البواقي من الأسفل للأعلى أو من اليمين لليسار).

المرحلة الثانية: تحويل الجزء الكسري (Fractional Part):
1. نقوم بالضرب المتكرر في 2 (Repeated Multiplication by 2).
2. في كل خطوة، نأخذ الجزء الصحيح الناتج (0 أو 1) ونضعه كخانة ثنائية بعد الفاصلة.
3. نأخذ الجزء الكسري المتبقي ونكرر ضربه في 2.
4. نتوقف عند وصول الكسر إلى 0.00 تماماً، أو عند الوصول لعدد الدقة المطلوب.
5. ترتيب قراءة الخانات:
   - الخانة الناتجة من أول عملية ضرب هي الأولى بعد الفاصلة مباشرة، وتُقرأ النتائج من الأعلى للأسفل.

مثال: 143.75 -> الجزء الصحيح 143 بالقسمة يعطي 10001111، والكسر 0.75 بالضرب: (0.75×2 = 1.5 -> 1)، ثم (0.5×2 = 1.0 -> 1)، فيكون الكسر 0.11، والناتج النهائي 10001111.11.`,
    modelAnswer: `Integer part: Successive division by 2, recording remainders (0 or 1). Read remainders from bottom to top (LSB to MSB).
Fractional part: Successive multiplication by 2, recording integer part (0 or 1). Read generated bits from top to bottom until fractional part reaches 0 or required precision.`,
    rubricChecklist: [
      "شرح القسمة المتكررة على 2 للجزء الصحيح وتسجيل البواقي.",
      "توضيح اتجاه قراءة البواقي (من الأسفل للأعلى / من LSB إلى MSB).",
      "شرح الضرب المتكرر في 2 للجزء الكسري وتسجيل الجزء الصحيح في كل خطوة.",
      "توضيح شرط توقف ضرب الكسر (عند الصفر أو الدقة المطلوبة) واتجاه قراءته من الأعلى للأسفل."
    ]
  },
  {
    id: "essay_num_4",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Why Hexadecimal System is Used in Computing",
    text: "Why is the Hexadecimal numeral system so widely used in computer science and programming instead of writing binary or decimal numbers?",
    textAr: "سؤال مقالي: علل، لماذا ينتشر استخدام النظام الست عشري (Hexadecimal) بكثرة في مجالات علوم الحاسوب وتطوير البرمجيات بدلاً من كتابة الأرقام الثنائية الطويلة أو العشرية؟",
    type: "essay",
    source: "Slide 2 & Computer Architecture Basics",
    questionDetails: "ركز على العلاقة بين قوى الرقم 2، تمثيل البايت، وعناوين الذاكرة وشفرات الألوان.",
    modelAnswerAr: `أسباب الانتشار الواسع للنظام الست عشري (Hexadecimal) في الحواسيب:
1. التوافق التام مع البنية الثنائية (قوى الرقم 2):
   - أساس النظام الست عشري هو 16، و 16 = 2^4.
   - هذا يعني أن كل خانة ست عشرية واحدة (Hex digit) تقابل وتستبدل بالضبط 4 بت ثنائية (Nibble).

2. اختصار قراءة وكتابة البيانات الثنائية الضخمة (Human Readability & Compactness):
   - كتابة الأرقام الثنائية الطويلة (مثل 11111111) معرضة جداً للأخطاء وصعبة القراءة على المبرمجين.
   - النظام الست عشري يختصر كل بايت (8 بت) في رقمين فقط (مثلاً FF)، مما يجعل السلاسل أقصر بنسبة 75%.

3. عناوين الذاكرة (Memory Addressing):
   - في أنظمة التشغيل ومعالجات 32-bit و 64-bit، تُعرض عناوين الذاكرة (RAM Pointers) بالست عشري (مثل 0x7FFF5FBFF804) لتسهيل تصحيح الأخطاء (Debugging) وقراءة الـ Dumps.

4. الاستخدامات القياسية الشائعة:
   - تمثيل الألوان على الويب في CSS (Hex Color Codes مثل #FFFFFF أو #10B981).
   - عناوين بطاقات الشبكة الفيزيائية (MAC Addresses مثل 00:1A:2B:3C:4D:5E).
   - شفرات الأوبكود (Opcode) في لغة التجميع ولغة الآلة.`,
    modelAnswer: `1. Exact power of 2: 16 = 2^4, meaning exactly 1 hex digit represents 4 binary bits (one nibble).
2. Compactness and human readability: 1 byte (8 bits) is cleanly represented by 2 hex digits (e.g., 11111111 -> FF).
3. Ideal for memory addresses (e.g., 0x7FFF...), debugging dumps, MAC addresses, and RGB web colors.`,
    rubricChecklist: [
      "ذكر العلاقة الرياضية 16 = 2^4 (كل خانة hex تقابل 4 بت).",
      "الإشارة لاختصار كل بايت (8 بت) في خانتين ست عشريتين فقط.",
      "سهولة القراءة وتقليل أخطاء المبرمجين مقارنة بسلاسل الأصفار والآحاد الثنائية الطويلة.",
      "ذكر أمثلة تطبيقية (عناوين الذاكرة Memory Addresses، شفرات الألوان Hex Colors، أو عناوين MAC)."
    ]
  },
  {
    id: "essay_flow_1",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Algorithm Characteristics and Properties",
    text: "Define an Algorithm and explain the five essential characteristics that every valid algorithm must possess.",
    textAr: "سؤال مقالي: عرّف الخوارزمية (Algorithm)، واشرح الخصائص الخمس الأساسية التي يجب أن تتوفر في أي خوارزمية صحيحة طبقاً لمعايير علوم الحاسوب.",
    type: "essay",
    source: "Slide 2 (Q1, Q8) & Intro to Programming",
    questionDetails: "الخصائص الخمس: Finiteness, Definiteness, Input, Output, Effectiveness.",
    modelAnswerAr: `تعريف الخوارزمية (Algorithm):
هي مجموعة مرتبة من الخطوات المنطقية المحددة بدقة، خطوة بخطوة (Step-by-step procedure)، والمصممة لإنجاز مهمة معينة أو حل مشكلة حسابية محددة.

الخصائص الخمس الأساسية للخوارزمية الصحيحة:
1. النهاية (Finiteness):
   يجب أن تنتهي الخوارزمية حتماً بعد عدد محدد ومنتهٍ من الخطوات، ولا يجوز أن تستمر في تكرار لا نهائي (Infinite loop).

2. الوضوح والدقة (Definiteness / Unambiguity):
   يجب أن تكون كل خطوة واضحة تماماً، غير مبهمة، ولا تحتمل أكثر من تفسير واحد.

3. المدخلات (Input):
   قد تستقبل الخوارزمية صفراً أو أكثر من المدخلات المحددة بدقة من الخارج قبل بدئها.

4. المخرجات (Output):
   يجب أن تنتج الخوارزمية مخرجاً واحداً على الأقل، وهو الحل المطلوب للمشكلة.

5. الفعالية والقابلية للتنفيذ (Effectiveness):
   يجب أن تكون كل خطوة بسيطة بما يكفي بحيث يمكن تنفيذها يدوياً بالقلم والورقة في فترة زمنية منتهية.`,
    modelAnswer: `Definition: A finite, step-by-step logical sequence of unambiguous instructions to solve a problem.
5 Essential Characteristics:
1. Finiteness: Must terminate after a finite number of steps.
2. Definiteness: Each step must be clearly defined and unambiguous.
3. Input: Zero or more well-defined inputs.
4. Output: At least one well-defined output/result.
5. Effectiveness: Operations must be basic and feasible within finite time.`,
    rubricChecklist: [
      "تعريف دقيق للخوارزمية كإجراء محدد خطوة بخطوة لحل مشكلة.",
      "خاصية النهاية (Finiteness): انتهاء الخوارزمية بعد خطوات محددة.",
      "خاصية الوضوح (Definiteness): وضوح كل خطوة وعدم قابليتها للبس.",
      "خاصية المدخلات والمخرجات (Input & Output): استقبال مدخلات وإنتاج مخرج واحد على الأقل.",
      "خاصية الفعالية (Effectiveness): إمكانية تنفيذ التعليمات في زمن محدد."
    ]
  },
  {
    id: "essay_flow_2",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Flowchart Standard Symbols and Their Functions",
    text: "Enumerate the primary standard ANSI geometric symbols used in flowcharts and describe the specific function of each symbol.",
    textAr: "سؤال مقالي: اذكر الأشكال الهندسية القياسية المستخدمة في رسم خرائط التدفق (Flowcharts)، مع شرح الوظيفة المحددة لكل شكل وقواعد استخدامه.",
    type: "essay",
    source: "Slide 5 (Q1), Slide 6, Slide 8 & Exam Flowcharts",
    questionDetails: "اذكر: الشكل البيضاوي، المستطيل، متوازي الأضلاع، المعين، الأسهم، والدائرة الصغيرة.",
    modelAnswerAr: `الأشكال القياسية لخرائط التدفق ووظائفها:
1. الشكل البيضاوي (Oval / Terminator):
   - الوظيفة: يمثل بداية الخريطة (Start) ونهايتها (End/Stop).
   - القاعدة: يخرج منه سهم واحد فقط في البداية، ويدخل إليه سهم واحد في النهاية.

2. متوازي الأضلاع (Parallelogram / Input & Output):
   - الوظيفة: يُستخدم لعمليات الإدخال من المستخدم (مثل: Read X, Input C, Cin) وعمليات الإخراج والطباعة (مثل: Print sum, Display F, Cout).

3. المستطيل (Rectangle / Process):
   - الوظيفة: يُستخدم للعمليات الحسابية والمعالجة وتعيين قيم المتغيرات (مثل: F = (C * 9/5) + 32 أو Sum = 0 أو i = i + 1).

4. المعين (Diamond / Decision):
   - الوظيفة: يُستخدم لاتخاذ القرارات والشروط المنطقية (مثل: Is N >= 0 ? أو Is i <= 50 ?).
   - القاعدة: يدخل إليه مسار تدفق واحد، ويخرج منه مساران على الأقل (Yes / No أو True / False).

5. خطوط التدفق والأسهم (Flowlines / Arrows):
   - الوظيفة: توضح اتجاه سير تنفيذ خطوات البرنامج من خطوة لأخرى.

6. الدائرة الصغيرة (Connector):
   - الوظيفة: ربط أجزاء الخريطة المختلفة بدون تقاطع الخطوط، خاصة عند الانتقال لصفحة أخرى أو تجميع مسارات متعددة.`,
    modelAnswer: `1. Oval (Terminator): Start and End points of the program.
2. Parallelogram: Input operations (Read/Cin) and Output operations (Print/Cout).
3. Rectangle (Process): Arithmetic calculations, variable assignments, and general data manipulation.
4. Diamond (Decision): Conditional branching (If/Else, Loops), exits with 2 branches (True/False).
5. Arrows (Flowlines): Indicate directional sequence of execution.
6. Small Circle (Connector): Connects intersecting flowlines or multi-page charts.`,
    rubricChecklist: [
      "الشكل البيضاوي (Oval): للبداية والنهاية (Terminator).",
      "متوازي الأضلاع (Parallelogram): للإدخال والإخراج (Input / Output).",
      "المستطيل (Rectangle): للعمليات الحسابية والمعالجة (Process).",
      "المعين (Diamond): لاتخاذ القرارات والتفرع الشرطي (Decision مع تفريعين True/False).",
      "الأسهم (Flowlines): لتحديد اتجاه التنفيذ."
    ]
  },
  {
    id: "essay_flow_3",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "The Three Fundamental Control Structures",
    text: "Explain the three fundamental control structures used to construct any algorithm or flowchart: Sequence, Selection, and Repetition.",
    textAr: "سؤال مقالي: اشرح الهياكل التحكمية الثلاثة الأساسية (Fundamental Control Structures) التي يُبنى عليها أي برنامج أو خوارزمية: التسلسل، الاختيار، والتكرار.",
    type: "essay",
    source: "Programming Principles (Course Foundation)",
    questionDetails: "اذكر اسم كل هيكل ووظيفته وكيف يُمثل في لغة C++ ومخططات الانسياب.",
    modelAnswerAr: `الهياكل التحكمية الثلاثة الأساسية في البرمجة:
وفقاً لنظرية التصميم الهيكلي، يمكن كتابة أي برنامج باستخدام ثلاثة تراكيب أساسية:

1. هيكل التسلسل المنطقي (Sequence Structure):
   - الوظيفة: تنفيذ التعليمات خطوة تلو الأخرى بالترتيب المتتالي من الأعلى للأسفل دون أي قفز أو تخطي.
   - مثال: خريطة تحويل الحرارة في السلايد 6 (إدخال C -> حساب F -> طباعة F).
   - في C++: الجمل المتتالية المفصولة بفواصل منقوطة (;).

2. هيكل الاختيار والشرط (Selection / Decision Structure):
   - الوظيفة: اختبار شرط منطقي معين، وتنفيذ مسار برمجي إذا كان الشرط صحيحاً (True)، ومسار آخر مختلف إذا كان خاطئاً (False).
   - مثال: خريطة فحص الرقم موجب أو سالب في السلايد 8 (if (N >= 0)).
   - في C++: جمل if و if-else و switch.
   - في الـ Flowchart: يُمثل بشكل المعين (Diamond).

3. هيكل التكرار والدوران (Repetition / Iteration / Looping Structure):
   - الوظيفة: تكرار تنفيذ كتلة برمجية معينة عدة مرات طالما أن هناك شرطاً محدداً لا يزال محققاً.
   - مثال: خريطة جمع مربعات الأعداد من 1 إلى 50 في ورقة الامتحان (while (i <= 50)).
   - في C++: حلقات for و while و do-while.
   - في الـ Flowchart: سهم يرتد إلى نقطة سابقة قبل المعين لتكرار العملية.`,
    modelAnswer: `1. Sequence: Sequential execution of statements one after another without branching.
2. Selection (Branching): Choosing between alternative paths based on a condition (If, If-Else, Switch).
3. Repetition (Iteration/Loop): Repeating a block of statements while a condition remains true (While, For, Do-While).`,
    rubricChecklist: [
      "شرح هيكل التسلسل (Sequence): تنفيذ التعليمات تلو الأخرى بالترتيب.",
      "شرح هيكل الاختيار (Selection/Decision): التفرع بناءً على فحص شرط منطقي (if-else).",
      "شرح هيكل التكرار (Repetition/Loop): إعادة تنفيذ كود طالما الشرط متحقق (while/for).",
      "ربط كل هيكل بأمثلة من المنهج أو بأوامر لغة C++."
    ]
  },
  {
    id: "essay_flow_4",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Algorithm and Flowchart Logic: Maximum of Three Numbers",
    text: "Write the algorithm and describe the flowchart decision logic to determine the largest number among three distinct numbers A, B, and C.",
    textAr: "سؤال مقالي وحل مسألة: اكتب الخوارزمية (Algorithm) واشرح منطق خريطة التدفق لإيجاد وطباعة أكبر رقم بين ثلاثة أرقام مختلفة A و B و C.",
    type: "essay",
    source: "Problem Solving Standard Exam Problems",
    questionDetails: "اكتب الخطوات المرتبة ووضح المقارنات الشرطية المتداخلة.",
    modelAnswerAr: `خوارزمية ومنطق إيجاد أكبر رقم بين ثلاثة أرقام (A, B, C):

1. الخوارزمية (Algorithm):
   الخطوة 1: ابدأ (Start).
   الخطوة 2: اقرأ قيم الأرقام الثلاثة A, B, C.
   الخطوة 3: إذا كان A > B:
             - إذا كان A > C:
                 اطبع: "A is the largest"
             - وإلا:
                 اطبع: "C is the largest"
   الخطوة 4: وإلا (أي أن B >= A):
             - إذا كان B > C:
                 اطبع: "B is the largest"
             - وإلا:
                 اطبع: "C is the largest"
   الخطوة 5: توقف (End).

2. طريقة أخرى مختصرة باستخدام متغير max:
   - اجعل max = A
   - إذا كان B > max: اجعل max = B
   - إذا كان C > max: اجعل max = C
   - اطبع قيمة max.

3. في خريطة التدفق (Flowchart Logic):
   - شكل بيضاوي: Start
   - متوازي أضلاع: Input A, B, C
   - معين أول: Is A > B ?
     - مسار Yes: معين ثانٍ Is A > C ? -> إذا Yes يطبع A، إذا No يطبع C.
     - مسار No: معين ثالث Is B > C ? -> إذا Yes يطبع B، إذا No يطبع C.
   - شكل بيضاوي: End.`,
    modelAnswer: `Algorithm:
1. Start
2. Input A, B, C
3. If A > B:
      If A > C then Print A
      Else Print C
   Else:
      If B > C then Print B
      Else Print C
4. Stop`,
    rubricChecklist: [
      "خطوة البداية وقراءة المتغيرات الثلاثة A, B, C.",
      "مقارنة A مع B أولاً.",
      "مقارنة الطرف الفائز مع C لتحديد الأكبر نهائياً.",
      "طباعة الناتج الصحيح وإنهاء الخوارزمية."
    ]
  },
  {
    id: "essay_flow_5",
    category: "essay",
    categoryName: "أسئلة مقالية (Essay & Concepts)",
    title: "Algorithm and Flowchart Logic: Factorial of N (N!)",
    text: "Write an algorithm and describe the flowchart to compute the factorial of a positive integer N (N! = 1 * 2 * ... * N).",
    textAr: "سؤال مقالي وحل مسألة: اكتب خوارزمية واشرح خريطة التدفق لحساب مضروب عدد صحيح موجب N (Factorial: N! = 1 × 2 × ... × N).",
    type: "essay",
    source: "Algorithms & Loops Standard Questions",
    questionDetails: "وضح قيمة البداية لمتغير المضروب Fact والعداد i والشرط.",
    modelAnswerAr: `خوارزمية حساب مضروب العدد N (Factorial):

1. الخوارزمية خطوة بخطوة:
   الخطوة 1: ابدأ (Start).
   الخطوة 2: اقرأ الرقم N من المستخدم.
   الخطوة 3: تهيئة المتغيرات الأولية:
             - اجعل fact = 1 (المحايد الضربي).
             - اجعل العداد i = 1.
   الخطوة 4: كرر ما دام i <= N:
             - fact = fact * i
             - i = i + 1
   الخطوة 5: اطبع الناتج النهائي fact.
   الخطوة 6: توقف (End).

2. عناصر خريطة التدفق (Flowchart):
   - شكل بيضاوي (Oval): Start
   - متوازي أضلاع (Parallelogram): Input N
   - مستطيل (Rectangle): fact = 1, i = 1
   - معين قرار (Diamond): Is i <= N ?
     - مسار Yes:
       * مستطيل عملية: fact = fact * i
       * مستطيل عملية: i = i + 1
       * سهم يرتد لأعلى قبل المعين (Loop back).
     - مسار No:
       * متوازي أضلاع: Print fact
       * شكل بيضاوي: End.`,
    modelAnswer: `1. Start
2. Input N
3. Initialize fact = 1, i = 1
4. While i <= N:
      fact = fact * i
      i = i + 1
5. Print fact
6. End`,
    rubricChecklist: [
      "تهيئة متغير الناتج fact بـ 1 (وليس 0 لأن 0 سيلغي الضرب).",
      "استخدام عداد i يبدأ من 1 أو 2.",
      "شرط استمرار الحلقة i <= N وتحديث fact = fact * i.",
      "زيادة العداد i = i + 1 وطباعة الناتج عند انتهاء الحلقة."
    ]
  },

  // ==========================================
  // SECTION 9: ADDITIONAL PRACTICE (T/F & CALC)
  // أسئلة إضافية هامة لتقوية المهارات
  // ==========================================
  {
    id: "tf_25",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Modulo Operator with Floats",
    text: "In C++, the modulo operator (%) can be used with floating-point numbers (float or double).",
    textAr: "في لغة C++، يمكن استخدام معامل باقي القسمة (%) مع الأرقام العشرية والكسرية (float أو double).",
    type: "boolean",
    correctAnswer: false,
    source: "C++ Operators Standards",
    explanation: "خطأ (False). معامل باقي القسمة (%) في لغة C++ مخصص للأعداد الصحيحة فقط (Integers). استخدامه مع float أو double يسبب خطأ ترجمة (Compile Error). لحساب باقي قسمة أرقام كسرية تُستخدم الدالة fmod() من مكتبة <cmath>.",
    details: "7 % 2 is valid (gives 1). 7.5 % 2 is a syntax error."
  },
  {
    id: "tf_26",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Do-While Loop Execution Guarantee",
    text: "A do-while loop always executes its loop body at least once, even if the condition is false initially.",
    textAr: "حلقة do-while تنفذ جسم التكرار مرة واحدة على الأقل دائماً، حتى وإن كان الشرط خاطئاً من البداية.",
    type: "boolean",
    correctAnswer: true,
    source: "Control Structures in C++",
    explanation: "صحيح (True). حلقة do-while هي Post-test loop، حيث يتم تنفيذ جمل التكرار أولاً ثم يتم فحص الشرط في النهاية، بعكس while العادية التي تفحص الشرط قبل الدخول.",
    details: "do { ... } while (condition); guarantees minimum 1 iteration."
  },
  {
    id: "tf_27",
    category: "true_false",
    categoryName: "صح أو خطأ (True / False)",
    title: "Octal System Base and Digits",
    text: "The Octal number system has a base of 8 and can use digits from 0 to 8.",
    textAr: "النظام الثماني (Octal) أساسه 8 ويمكن أن يحتوي على أرقام من 0 إلى 8.",
    type: "boolean",
    correctAnswer: false,
    source: "Number Systems Foundation",
    explanation: "خطأ (False). النظام الثماني يحتوي على 8 رموز فقط هي من 0 إلى 7. الرقم 8 غير موجود على الإطلاق في النظام الثماني، وأي رقم يحتوي على 8 يُعتبر رقماً غير صحيح (Invalid Octal).",
    details: "Base N uses digits 0 to N-1. Octal uses {0, 1, 2, 3, 4, 5, 6, 7}."
  },
  {
    id: "num_8",
    category: "numbers",
    categoryName: "أنظمة العد والمكملات (Number Systems)",
    title: "Binary Fraction Conversion: 101.011 to Decimal",
    text: "Convert the binary fractional number (101.011)_2 to its decimal equivalent.",
    textAr: "احسب المكافئ العشري للرقم الثنائي الكسري التالي: (101.011)₂",
    source: "Binary Fractional Arithmetic Practice",
    inputs: [
      { label: "المكافئ العشري (Decimal)", expected: "5.375", hint: "الجزء الصحيح + مجموع قوى 2 السالبة" }
    ],
    stepByStep: `خطوات الحل:
1) الجزء الصحيح (101):
   (1 × 2^2) + (0 × 2^1) + (1 × 2^0) = 4 + 0 + 1 = 5

2) الجزء الكسري (0.011):
   (0 × 2^-1) + (1 × 2^-2) + (1 × 2^-3)
   = 0 + (1 / 4) + (1 / 8)
   = 0 + 0.25 + 0.125
   = 0.375

3) القيمة الإجمالية: 5 + 0.375 = 5.375 عشرياً.`
  },
  {
    id: "code_4",
    category: "code_trace",
    categoryName: "تتبع الكود والناتج (Code Tracing)",
    title: "Integer Division vs Modulo Tracing",
    text: "What will be printed by the following C++ code?",
    textAr: "ما هو الناتج المطبوع من تنفيذ كود C++ التالي؟",
    codeSnippet: `int a = 17 % 5;
int b = 17 / 5;
cout << a << " " << b;`,
    type: "mcq",
    options: [
      { id: "a", text: "a) 2 3" },
      { id: "b", text: "b) 3.4 2" },
      { id: "c", text: "c) 3 2" },
      { id: "d", text: "d) 2 3.4" }
    ],
    correctAnswer: "a",
    source: "C++ Arithmetic Operators Trace",
    explanation: `الخيار (a) هو الصحيح: 2 3.
التتبع:
1) a = 17 % 5: باقي قسمة 17 على 5 هو 2 (لأن 5 × 3 = 15، ويتبقى 2).
2) b = 17 / 5: كلاهما أعداد صحيحة (Integer Division)، فيتم اقتطاع الكسر ويكون الناتج هو العدد الصحيح 3.
3) إذن الطباعة تكون: 2 3.`,
    details: "Integer division truncates decimals towards zero: 17 / 5 = 3 (not 3.4)."
  }
];

