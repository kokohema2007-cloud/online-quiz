// =========================================================================
// 🧠 AI TUTOR & DIAGNOSTIC REPORT ENGINE
// محرك تشخيص الأداء ونقاط الضعف بالذكاء الاصطناعي واقتراح شروحات يوتيوب
// مخصص 100% لمنهج السلايدز وورقة الامتحان (الحاسب ومقدمة C++)
// =========================================================================

const AI_TUTOR_TOPICS = {
  twos_complement: {
    id: "twos_complement",
    name: "المكمل الثنائي وحسابات الأعداد السالبة والفيض (2's Complement & Overflow)",
    nameEn: "Two's Complement, Signed Arithmetic & Overflow",
    icon: "🔢",
    description: "تمثيل الأعداد السالبة، المكمل الأحادي، المكمل الثنائي، عمليات الطرح الثنائي، وقواعد كشف الفيض الحسابي (Overflow).",
    youtube: [
      {
        title: "شرح المكمل الأحادي والثنائي وطرح الأعداد السالبة بالتفصيل",
        channel: "د. عادل نسيم (Dr. Adel Nasim)",
        query: "عادل نسيم المكمل الثنائي 2s complement subtraction",
        url: "https://www.youtube.com/results?search_query=عادل+نسيم+المكمل+الثنائي+2s+complement"
      },
      {
        title: "التمثيل الثنائي للأعداد السالبة واكتشاف الـ Overflow",
        channel: "د. محمد الدسوقي (Dr. Mohamed El Desouki)",
        query: "محمد الدسوقي المكمل الثنائي overflow",
        url: "https://www.youtube.com/results?search_query=محمد+الدسوقي+المكمل+الثنائي+overflow"
      },
      {
        title: "2's Complement Arithmetic & Overflow Detection",
        channel: "Neso Academy",
        query: "Neso Academy 2s complement overflow",
        url: "https://www.youtube.com/results?search_query=Neso+Academy+2s+complement+overflow"
      }
    ],
    aiSummary: `
🧠 **شرح معلم الذكاء الاصطناعي لمفهوم المكمل الثنائي (Two's Complement):**
- **الفكرة ببساطة:** في عالم الحاسوب، لا توجد إشارة ناقص (-) مادية في الـ Transistors؛ كل شيء عبارة عن 0 و 1.
- **كيف نوجد المكمل الثنائي؟**
  1. نكتب الرقم الموجب في عدد البتات المطلوب (مثلاً 8 بت).
  2. نوجد **المكمل الأحادي (1's complement)** بقلب كل 0 إلى 1 وكل 1 إلى 0.
  3. نضيف **1** إلى الناتج لنحصل على **المكمل الثنائي (2's complement)**.
- **قاعدة الطرح الذهبية:** $A - B = A + (-B)$ بنظام المكمل الثنائي. إذا ظهر بت حمل تاسع (Carry Out) عند الجمع في 8 بت، **يتم إهماله تماماً**!
- **كيف يكتشف المعالج الـ Overflow؟**
  - إذا جمعت عددين موجبين والناتج طلع سالب (بت الإشارة 1) ❌ -> حدث Overflow!
  - إذا جمعت عددين سالبين والناتج طلع موجب (بت الإشارة 0) ❌ -> حدث Overflow!
  - جمع موجب مع سالب **مستحيل** يحدث فيه Overflow.
    `,
    quickChallenge: {
      question: "ما هو تمثيل الرقم السالب -5 في نظام المكمل الثنائي المكون من 4 بت؟",
      options: ["1011", "1101", "0101", "1010"],
      correct: "1011",
      explanation: "+5 = 0101. نقلب البتات -> 1010. نضيف 1 -> 1011."
    }
  },

  number_systems: {
    id: "number_systems",
    name: "أنظمة العد والتحويلات وطريقة Double Dabble",
    nameEn: "Number Systems & Double Dabble Conversions",
    icon: "🧮",
    description: "التحويل بين الأنظمة العشري والثنائي والثماني والست عشري، مع تحويل الكسور باستخدام طريقة Double Dabble.",
    youtube: [
      {
        title: "أنظمة العد والتحويلات بين Decimal, Binary, Octal, Hex",
        channel: "د. عادل نسيم (Dr. Adel Nasim)",
        query: "عادل نسيم أنظمة العد والتحويلات",
        url: "https://www.youtube.com/results?search_query=عادل+نسيم+أنظمة+العد+والتحويلات"
      },
      {
        title: "طريقة Double Dabble لتحويل الأعداد الصحيحة والكسور",
        channel: "د. محمد الدسوقي (Dr. Mohamed El Desouki)",
        query: "محمد الدسوقي Double Dabble تحويل الثنائي",
        url: "https://www.youtube.com/results?search_query=محمد+الدسوقي+Double+Dabble+تحويل"
      },
      {
        title: "Number System Conversions & Binary Fractions",
        channel: "Neso Academy",
        query: "Neso Academy fractional binary conversion",
        url: "https://www.youtube.com/results?search_query=Neso+Academy+fractional+binary+conversion"
      }
    ],
    aiSummary: `
🧠 **شرح معلم الذكاء الاصطناعي لطريقة Double Dabble والتحويلات:**
- **الجزء الصحيح (القسمة على 2):**
  - نقسم على 2 ونأخذ الباقي (0 أو 1).
  - نستمر حتى يصبح الناتج 0.
  - **سر الامتحان:** نقرأ البواقي من **الأسفل للأعلى** (من اليمين لليسار في الترتيب الثنائي).
- **الجزء الكسري (الضرب في 2):**
  - نضرب الكسر في 2، نأخذ الرقم الصحيح الناتج (0 أو 1)، ونكمل بالكسر المتبقي فقط.
  - **سر الامتحان:** نقرأ الأرقام من **الأعلى للأسفل** ونضعها بعد الفاصلة مباشرة (.xxx).
- **التحويل السريع للثماني والست عشري:**
  - ثماني (Octal): جمع البتات ثلاثيات ($2^3 = 8$).
  - ست عشري (Hex): جمع البتات رباعيات ($2^4 = 16$). لا تنسَ: $A=10, B=11, C=12, D=13, E=14, F=15$.
    `,
    quickChallenge: {
      question: "ما هو ناتج ضرب الكسر العشري 0.75 في 2 في أول خطوة من Double Dabble؟",
      options: ["1.5 (الجزء الصحيح 1 والمتبقي 0.5)", "0.75", "1.0", "1.25"],
      correct: "1.5 (الجزء الصحيح 1 والمتبقي 0.5)",
      explanation: "0.75 * 2 = 1.50 -> نأخذ 1 كأول خانة بعد الفاصلة، ونكمل ضرب 0.5 * 2 = 1.0 (الخانة الثانية 1)."
    }
  },

  cpp_operators_arithmetic: {
    id: "cpp_operators_arithmetic",
    name: "العمليات الحسابية وأسبقية المعاملات واقتطاع الكسور (9/5) و ++x",
    nameEn: "C++ Arithmetic, Operator Precedence & Increment/Decrement",
    icon: "⚡",
    description: "قسمة الأعداد الصحيحة، أسبقية المعاملات، الزيادة القبلية والبعدية (++x مقابل x++)، ومعامل باقي القسمة (%).",
    youtube: [
      {
        title: "معاملات الزيادة والنقصان Prefix vs Postfix بالتفصيل",
        channel: "د. عادل نسيم (Dr. Adel Nasim)",
        query: "عادل نسيم ++x x++ C++",
        url: "https://www.youtube.com/results?search_query=عادل+نسيم+prefix+postfix+C%2B%2B"
      },
      {
        title: "العمليات الحسابية وأسبقية المعاملات واقتطاع الكسور",
        channel: "Elzero Web School",
        query: "Elzero Web School C++ Operators",
        url: "https://www.youtube.com/results?search_query=Elzero+Web+School+C%2B%2B+Operators"
      },
      {
        title: "Operator Precedence & Associativity in C++",
        channel: "Neso Academy",
        query: "Neso Academy operator precedence C++",
        url: "https://www.youtube.com/results?search_query=Neso+Academy+operator+precedence+C%2B%2B"
      }
    ],
    aiSummary: `
🧠 **شرح معلم الذكاء الاصطناعي لفخاخ C++ الحسابية الأكثر خطورة في الامتحانات:**
1. **فخ القسمة الصحيحة (Integer Division):**
   - عندما تقسم 'int / int' في C++، يتم **إلغاء وحذف أي كسر تماماً** (Truncation)!
   - لذلك: '9 / 5' تساوي **1 فقط** وليس 1.8!
   - معادلة الفهرنهايت: 'F = C * (9 / 5) + 32;' ستضرب دائماً في 1 وتُعطي خطأ!
   - **الحل:** كتابة '9.0 / 5.0' أو '1.8'.
2. **فخ الزيادة القبلية والبعدية (++x مقابل x++):**
   - في جملة: 'r = x + y++;' (حيث x=3 و y=6):
     - المعامل بعدي 'y++': نأخذ قيمة 'y' الحالية أولاً (6) ونجمعها: '3 + 6 = 9'.
     - تُخزن 9 في 'r'.
     - وفور الانتهاء من السطر تزداد 'y' لتصبح 7!
     - الناتج المطبوع: 'x=3, y=7, r=9'.
3. **معامل باقي القسمة (%):**
   - يعمل **فقط** مع الأعداد الصحيحة. استخدامه مع float أو double يسبب خطأ تصريف فوراً.
    `,
    quickChallenge: {
      question: "ما هي قيمة المتغير double result = 5 / 2; في C++؟",
      options: ["2.0", "2.5", "2", "Compile Error"],
      correct: "2.0",
      explanation: "5 و 2 كلاهما int، ناتج قسمتهما هو 2 (عدد صحيح). عند إسناده لـ double يتحول إلى 2.0 وليس 2.5!"
    }
  },

  control_flow_logic: {
    id: "control_flow_logic",
    name: "جمل التحكم والشروط والـ switch وقصر الدائرة (Short-Circuit)",
    nameEn: "Control Flow, switch-case, Loops & Logical Operators",
    icon: "🔀",
    description: "جمل if-else، الـ switch statement وحالات الـ fall-through، الحلقات التكرارية، وخاصية قصر الدائرة المنطقية.",
    youtube: [
      {
        title: "جملة switch وحالات الـ Fall-Through والتحويل من if",
        channel: "د. محمد الدسوقي (Dr. Mohamed El Desouki)",
        query: "محمد الدسوقي switch case C++",
        url: "https://www.youtube.com/results?search_query=محمد+الدسوقي+switch+case+C%2B%2B"
      },
      {
        title: "الشروط والروابط المنطقية وقصر الدائرة Short-Circuit",
        channel: "Elzero Web School",
        query: "Elzero C++ if conditions logical operators",
        url: "https://www.youtube.com/results?search_query=Elzero+C%2B%2B+if+conditions+logical+operators"
      },
      {
        title: "حلقة do-while وضمان تنفيذها لمرة واحدة على الأقل",
        channel: "د. عادل نسيم (Dr. Adel Nasim)",
        query: "عادل نسيم do while C++",
        url: "https://www.youtube.com/results?search_query=عادل+نسيم+do+while+C%2B%2B"
      }
    ],
    aiSummary: `
🧠 **شرح معلم الذكاء الاصطناعي لجمل التحكم والتكرار:**
1. **خاصية قصر الدائرة (Short-Circuit Evaluation):**
   - في 'A && B': إذا كان 'A' كاذباً (false)، فإن المعالج **لا ينظر إطلاقاً لـ B**! لو كانت هناك زيادة '++y' في B فلن تحدث!
   - في 'A || B': إذا كان 'A' صحيحاً (true)، فإن المعالج يتوقف فوراً ولا ينفذ 'B'!
2. **أسرار جملة الـ switch (سلايد 10):**
   - إذا نسيت 'break'، يحدث **Fall-Through** وتستمر الأسطر في التنفيذ للحالات التالية حتى تجد break!
   - الشرط في switch يجب أن يكون **عدداً صحيحاً أو حرفاً** ('int' أو 'char'). يمنع منعاً باتاً استخدام 'float' أو 'double'!
3. **فخ الفاصلة المنقوطة العارضة:**
   - كتابة 'if (x > 5);' تنهي جملة الشرط بسطر فارغ، وتجعل الكود التالي ينفذ دائماً!
   - كذلك 'for (int i=0; i<5; i++);' تدور 5 مرات في الهواء ثم ينفذ الكود التالي مرة واحدة فقط!
    `,
    quickChallenge: {
      question: "ماذا يحدث عند تنفيذ: int a=0, b=10; if (a != 0 && ++b > 10); ما قيمة b بعد هذا السطر؟",
      options: ["10 (لم تتغير بسبب قصر الدائرة)", "11", "0", "خطأ تصريف"],
      correct: "10 (لم تتغير بسبب قصر الدائرة)",
      explanation: "a != 0 تعطي false، فالمعالج يطبق قصر الدائرة ويتجاهل الطرف الأيمن بالكامل، فلا تزداد b وتظل 10!"
    }
  },

  cpp_syntax_errors: {
    id: "cpp_syntax_errors",
    name: "قواعد لغة C++ وتصحيح الأخطاء النحوية والكلمات المحجوزة",
    nameEn: "C++ Syntax Rules, Error Correction & Keywords",
    icon: "💻",
    description: "الأخطاء النحوية الأكثر تكراراً في الامتحانات: cout << مقابل >>، الكلمات المحجوزة، وتضمين المكتبات.",
    youtube: [
      {
        title: "المتغيرات وقواعد التسمية والكلمات المحجوزة في C++",
        channel: "Elzero Web School",
        query: "Elzero C++ variables naming rules keywords",
        url: "https://www.youtube.com/results?search_query=Elzero+C%2B%2B+variables+naming+rules"
      },
      {
        title: "أنواع الأخطاء البرمجية: Syntax vs Logic vs Runtime",
        channel: "د. محمد الدسوقي (Dr. Mohamed El Desouki)",
        query: "محمد الدسوقي انواع الاخطاء البرمجية C++",
        url: "https://www.youtube.com/results?search_query=محمد+الدسوقي+انواع+الاخطاء+البرمجية+C%2B%2B"
      },
      {
        title: "جمل الإدخال والإخراج cin و cout ومكتبة iostream",
        channel: "د. عادل نسيم (Dr. Adel Nasim)",
        query: "عادل نسيم cin cout iostream C++",
        url: "https://www.youtube.com/results?search_query=عادل+نسيم+cin+cout+iostream+C%2B%2B"
      }
    ],
    aiSummary: `
🧠 **شرح معلم الذكاء الاصطناعي لأخطاء ورقة الامتحان وسلايد 9:**
1. **جملة الطباعة: 'cout >> count >> '/n'' (ورقة الامتحان س4-a):**
   - خطأ 1: مع 'cout' نستخدم معامل الإخراج والإدراج '<<' (وليس '>>').
   - خطأ 2: علامة السطر الجديد هي شرطة مائلة عكسية '\\n' (وليس شرطة مائلة عادية '/n').
   - خطأ 3: يجب إنهاء السطر بفاصلة منقوطة ';'.
   - **الصحيح:** 'cout << count << '\\n';' أو 'cout << count << endl;'.
2. **الكلمات المحجوزة: 'int double = 44;' (ورقة الامتحان س4-b):**
   - كلمة 'double' نوع بياني محجوز للغة ولا يجوز إطلاقاً استخدامه كاسم متغير!
   - **الصحيح:** 'int num = 44;' أو 'double d = 44;'.
3. **أخطاء سلايد 9 (الآلة الحاسبة):**
   - '#include <iostrem>' -> الصحيح '<iostream>'.
   - 'Using namespace std;' -> C++ لغة حساسة لحالة الأحرف، الصحيح 'using' بحرف صغير.
    `,
    quickChallenge: {
      question: "أي من المتغيرات التالية يعتبر غير قانوني ويسبب خطأ تصريف (Syntax Error) في C++؟",
      options: ["int 2total = 10;", "int _total = 10;", "int total2 = 10;", "int Total = 10;"],
      correct: "int 2total = 10;",
      explanation: "قواعد لغة C++ تمنع بدء اسم المتغير برقم (يجب أن يبدأ بحرف أو بشرطة سفلية _)."
    }
  },

  computer_architecture: {
    id: "computer_architecture",
    name: "معمارية الحاسوب ووحدات المعالج ونواقل النظام والذاكرة",
    nameEn: "Computer Architecture, System Buses & Memory Hierarchy",
    icon: "🖥️",
    description: "عناصر نظام الحاسوب، وحدات المعالج (ALU, CU, Registers)، نواقل النظام (Buses)، وهرم سرعة الذاكرة.",
    youtube: [
      {
        title: "مكونات المعالج ALU, CU, Registers ونواقل النظام",
        channel: "د. محمد الدسوقي (Dr. Mohamed El Desouki)",
        query: "محمد الدسوقي مكونات المعالج CPU buses",
        url: "https://www.youtube.com/results?search_query=محمد+الدسوقي+مكونات+المعالج+CPU+buses"
      },
      {
        title: "هرم الذاكرة والفرق بين RAM و ROM و Cache Memory",
        channel: "د. عادل نسيم (Dr. Adel Nasim)",
        query: "عادل نسيم RAM ROM Cache memory hierarchy",
        url: "https://www.youtube.com/results?search_query=عادل+نسيم+RAM+ROM+Cache+memory"
      },
      {
        title: "CrashCourse Computer Science: CPU & System Buses",
        channel: "CrashCourse",
        query: "CrashCourse Computer Science CPU system buses",
        url: "https://www.youtube.com/results?search_query=CrashCourse+Computer+Science+CPU+system+buses"
      }
    ],
    aiSummary: `
🧠 **شرح معلم الذكاء الاصطناعي لمعمارية الحاسوب وأسئلة الامتحان النظرية:**
1. **نواقل النظام الثلاثة (سلايد 7 وورقة الامتحان س1):**
   - **ناقل التحكم (Control Bus):** مخصص لنقل إشارات التحكم والتوقيت والتنسيق (مثل إشارات Read/Write).
   - **ناقل البيانات (Data Bus):** ثنائي الاتجاه (Bidirectional) لنقل البيانات الفعلية بين المعالج والذاكرة.
   - **ناقل العناوين (Address Bus):** أحادي الاتجاه (Unidirectional) يحدد عنوان موقع الذاكرة المطلوب.
2. **وحدات الـ CPU الثلاث:**
   - **ALU:** وحدة الحساب والمنطق، مسؤولة عن العمليات الحسابية (+, -, *, /) والمقارنات المنطقية.
   - **CU:** وحدة التحكم، تدير تدفق التعليمات وتفك شفرتها.
   - **Registers:** سجلات فائقة السرعة داخل المعالج للاحتفاظ بالقيم الحالية.
3. **هرم سرعة الذاكرة (سلايد 5):**
   - السجلات (Registers) -> الكاش (Cache Memory) -> الذاكرة الأساسية (RAM) -> القرص الصلب (Hard Disk).
   - ذاكرة RAM متطايرة (Volatile) تفقد محتواها عند انقطاع الكهرباء، بينما القرص الصلب و ROM غير متطايرة.
    `,
    quickChallenge: {
      question: "أي من مكونات الذاكرة التالية هو الأسرع في زمن الوصول للقراءة والكتابة؟",
      options: ["Cache Memory", "Primary Memory (RAM)", "Secondary Memory (Hard Disk)", "Virtual Memory"],
      correct: "Cache Memory",
      explanation: "سلايد 5 ينص على أن ذاكرة الكاش (Cache memory) هي الأسرع على الإطلاق مقارنة بـ RAM والقرص الصلب."
    }
  },

  algorithms_flowcharts: {
    id: "algorithms_flowcharts",
    name: "الخوارزميات وخرائط التدفق وتتبع الدورات والكود الزائف",
    nameEn: "Algorithms, Flowcharts, Pseudocode & Loop Logic",
    icon: "📐",
    description: "الأشكال الهندسية القياسية، خصائص الخوارزميات، خريطة تدفق مجموع المربعات من 1 إلى 50، ومسائل التحويل.",
    youtube: [
      {
        title: "رسم خرائط التدفق Flowcharts من الصفر للمبتدئين",
        channel: "د. محمد الدسوقي (Dr. Mohamed El Desouki)",
        query: "محمد الدسوقي خرائط التدفق للمبتدئين flowcharts",
        url: "https://www.youtube.com/results?search_query=محمد+الدسوقي+خرائط+التدفق+للمبتدئين"
      },
      {
        title: "حل مسائل خرائط التدفق وحساب المجاميع والمربعات",
        channel: "د. عادل نسيم (Dr. Adel Nasim)",
        query: "عادل نسيم خرائط التدفق loop sum",
        url: "https://www.youtube.com/results?search_query=عادل+نسيم+خرائط+التدفق+loop+sum"
      },
      {
        title: "Flowchart Standard Symbols & Tracing",
        channel: "Gate Smashers",
        query: "Gate Smashers flowchart symbols algorithms",
        url: "https://www.youtube.com/results?search_query=Gate+Smashers+flowchart+symbols+algorithms"
      }
    ],
    aiSummary: `
🧠 **شرح معلم الذكاء الاصطناعي لخرائط التدفق وخوارزميات الامتحان:**
1. **الأشكال الهندسية القياسية ووظائفها:**
   - **الشكل البيضاوي (Oval):** البداية والنهاية (Start / Stop).
   - **المستطيل (Rectangle):** العمليات الحسابية والمعالجة (Process مثل 'sum = sum + i*i').
   - **متوازي الأضلاع (Parallelogram):** الإدخال والإخراج (Input / Output مثل 'Print sum').
   - **المعين (Diamond):** اتخاذ القرار والشرط (Decision مثل 'i <= 50 ?').
2. **خريطة تدفق مجموع المربعات من 1 إلى 50 (ورقة الامتحان س3):**
   - نهيئ المتغيرات: 'sum = 0, i = 1'.
   - الشرط: 'i <= 50'.
   - طالما الشرط نعم (Yes): نحسب 'sum = sum + (i * i)' ونزيد العداد 'i = i + 1'.
   - عند الوصول إلى 'i = 51'، يفشل الشرط (No)، فنخرج ونطبع 'sum'، ثم Stop.
    `,
    quickChallenge: {
      question: "في خريطة التدفق، ما هو الشكل الهندسي المستخدم لإجراء المقارنات واتخاذ القرار (Decision)؟",
      options: ["المعين (Diamond)", "المستطيل (Rectangle)", "متوازي الأضلاع (Parallelogram)", "الشكل البيضاوي (Oval)"],
      correct: "المعين (Diamond)",
      explanation: "المعين (Diamond) هو الرمز القياسي المخصص لفحص الشروط وتفرع القرارات (Yes / No)."
    }
  }
};

// Function to classify any question into one of the 7 syllabus topics
function classifyQuestionTopic(q) {
  const text = (q.title + " " + q.text + " " + q.id + " " + (q.source || "")).toLowerCase();

  if (q.category === "flowcharts" || text.includes("flowchart") || text.includes("pseudocode") || text.includes("algorithm")) {
    return "algorithms_flowcharts";
  }
  if (text.includes("two's complement") || text.includes("2's complement") || text.includes("1's complement") || text.includes("signed magnitude") || text.includes("overflow") || text.includes("negative value")) {
    return "twos_complement";
  }
  if (q.category === "numbers" || text.includes("double dabble") || text.includes("binary") || text.includes("hexadecimal") || text.includes("octal") || text.includes("decimal number") || text.includes("fraction")) {
    return "number_systems";
  }
  if (text.includes("bus") || text.includes("cpu") || text.includes("alu") || text.includes("ram") || text.includes("cache") || text.includes("memory") || text.includes("system software") || text.includes("compiler") || text.includes("hardware")) {
    return "computer_architecture";
  }
  if (q.category === "errors" || text.includes("reserved") || text.includes("syntax error") || text.includes("cout >>") || text.includes("cin <<") || text.includes("identifier") || text.includes("variable name")) {
    return "cpp_syntax_errors";
  }
  if (text.includes("switch") || text.includes("if") || text.includes("else") || text.includes("loop") || text.includes("while") || text.includes("for") || text.includes("semicolon")) {
    return "control_flow_logic";
  }
  return "cpp_operators_arithmetic";
}

// Generate full performance diagnostic report based on user answers
function generatePerformanceDiagnosis() {
  const topicStats = {};

  // Initialize stats for each topic
  Object.keys(AI_TUTOR_TOPICS).forEach(topicId => {
    topicStats[topicId] = {
      topic: AI_TUTOR_TOPICS[topicId],
      total: 0,
      answered: 0,
      correct: 0,
      wrong: 0,
      wrongQuestions: []
    };
  });

  // Aggregate questions
  questionsData.forEach(q => {
    const topicId = classifyQuestionTopic(q);
    if (!topicStats[topicId]) return;

    topicStats[topicId].total++;
    const ans = state.answers[q.id];
    if (ans) {
      topicStats[topicId].answered++;
      if (ans.isCorrect) {
        topicStats[topicId].correct++;
      } else {
        topicStats[topicId].wrong++;
        topicStats[topicId].wrongQuestions.push(q);
      }
    }
  });

  // Calculate percentages and status
  const analyzedTopics = Object.values(topicStats).map(stat => {
    const accuracy = stat.answered > 0 ? Math.round((stat.correct / stat.answered) * 100) : 0;
    let status = "unattempted"; // unattempted, critical, practice, mastered

    if (stat.answered > 0) {
      if (accuracy < 50) status = "critical";
      else if (accuracy < 75) status = "practice";
      else status = "mastered";
    }

    return {
      ...stat,
      accuracy,
      status
    };
  });

  // Sort: critical first, then practice, then mastered, then unattempted
  const statusWeight = { critical: 1, practice: 2, mastered: 3, unattempted: 4 };
  analyzedTopics.sort((a, b) => statusWeight[a.status] - statusWeight[b.status]);

  const criticalCount = analyzedTopics.filter(t => t.status === "critical").length;
  const practiceCount = analyzedTopics.filter(t => t.status === "practice").length;
  const masteredCount = analyzedTopics.filter(t => t.status === "mastered").length;

  return {
    topics: analyzedTopics,
    criticalCount,
    practiceCount,
    masteredCount,
    totalAnswered: Object.keys(state.answers).length,
    totalQuestions: questionsData.length
  };
}

// Pre-defined Custom AI Tutor knowledge base answers for common questions
const AI_PRESET_ANSWERS = {
  "overflow": `
### 🤖 شرح معلم الذكاء الاصطناعي: كيف تكتشف الـ Overflow في الامتحانات؟
الـ **Signed Overflow** هو فيض يحدث عندما يكون ناتج جمع عددين أكبر من قدرة البتات المخصصة:
1. **القاعدة الذهبية:**
   - جمع موجب + موجب = سالب ❌ -> **حدث Overflow**
   - جمع سالب + سالب = موجب ❌ -> **حدث Overflow**
   - جمع موجب + سالب = **مستحيل يحدث Overflow** دائماً!
2. **مثال سلايد 2 س10 المشهور:**
   جمع $0101$ (+5) مع $0011$ (+3) في 4 بت:
   الناتج الثنائي هو $1000$ (البت الأيسر 1، أي أنه سالب -8).
   جمعنا موجبين فأعطى سالباً، لأن الحد الأقصى لنظام 4 بت هو +7 فقط!
  `,
  "postfix": `
### 🤖 شرح معلم الذكاء الاصطناعي: ما الفرق الدقيق بين ++x و x++؟
- **المعامل البعدي (Postfix x++):**
  - "استخدم القيمة القديمة الآن في المعادلة، وبعد الانتهاء من السطر زد x بواحد!"
  - مثال سلايد 7: \'r = x + y++;\' (حيث x=3 و y=6):
    - يتم حساب \'r = 3 + 6 = 9\'.
    - ثم تصبح \'y = 7\'.
- **المعامل القبلي (Prefix ++x):**
  - "زد x بواحد فوراً، ثم استخدم القيمة الجديدة في المعادلة!"
  - لو كان السطر \'r = x + ++y;\' لكانت y أصبحت 7 أولاً و r أصبحت 10!
  `,
  "doubledabble": `
### 🤖 شرح معلم الذكاء الاصطناعي: خطوات طريقة Double Dabble في الامتحان
طريقة Double Dabble تستخدم لتحويل الأرقام العشرية الكسرية:
1. **للجزء الصحيح:**
   - اقسم على 2 وسجل الباقي (0 أو 1).
   - اقرأ البواقي من **الأسفل للأعلى** (من اليمين لليسار ثنائياً).
2. **للجزء الكسري:**
   - اضرب الكسر في 2.
   - خذ الرقم الصحيح الناتج (0 أو 1) واكتبه بالترتيب من **الأعلى للأسفل**.
   - خذ الكسر المتبقي واضربه مجدداً في 2 حتى يصبح صفراً أو يتكرر.
- مثال: 0.75 * 2 = 1.5 (نأخذ 1)، 0.5 * 2 = 1.0 (نأخذ 1) -> الكسر ثنائياً هو \'.11\'.
  `,
  "switch": `
### 🤖 شرح معلم الذكاء الاصطناعي: تحويل if-else إلى switch-case بدون أخطاء
من سلايد 10 في المنهج:
1. **الشرط في switch:** يجب أن يكون من نوع صحيح (\'int\' أو \'char\'). لا تستخدم \'float\' أبداً!
2. **الحالات المشتركة:** إذا كان الشرط \'else if (x==3 || x==5)\'، نكتب في الـ switch:
   \'\'\'cpp
   case 3:
   case 5:
       // الكود المشترك
       break;
   \'\'\'
3. **لا تنسَ كلمة \'break;\':** نسيان break يؤدي إلى سيلان التنفيذ (Fall-Through) وتنفيذ الحالات التالية خطأ!
  `
};

// Helper to ask AI tutor anything
function askAITutorEngine(questionText) {
  const q = questionText.toLowerCase().trim();

  if (q.includes("overflow") || q.includes("فيض") || q.includes("طرح") || q.includes("مكمل")) {
    return AI_PRESET_ANSWERS["overflow"];
  }
  if (q.includes("++") || q.includes("postfix") || q.includes("prefix") || q.includes("زيادة")) {
    return AI_PRESET_ANSWERS["postfix"];
  }
  if (q.includes("double dabble") || q.includes("تحويل") || q.includes("كسر") || q.includes("بواقي")) {
    return AI_PRESET_ANSWERS["doubledabble"];
  }
  if (q.includes("switch") || q.includes("case") || q.includes("تحويل if")) {
    return AI_PRESET_ANSWERS["switch"];
  }

  // General Synthesis Response
  return `
### 🤖 إجابة المعلم الذكي بالذكاء الاصطناعي:
أهلاً بك! بخصوص استفسارك عن: **"${escapeHTML(questionText)}"**

📚 **الخلاصة المنهجية المباشرة:**
- في منهج مقدمة الحاسب و C++، تركز أسئلة الامتحانات على الدقة في تتبع الأكواد، حسابات المكمل الثنائي (Two's Complement)، وطريقة Double Dabble.
- راجع دائماً القواعد الثابتة:
  1. قسمة '9 / 5' في C++ تعطي '1' وليس '1.8' إلا إذا كتبت '9.0 / 5.0'.
  2. في المكمل الثنائي، يُمثل السالب بأخذ المكمل الأحادي (قلب البتات) ثم إضافة 1.
  3. ناقل التحكم (Control Bus) هو المسؤول عن نقل إشارات التوقيت والتحكم.
  4. المترجم يكتشف الأخطاء النحوية Syntax فقط ولا يستطيع تصحيحها تلقائياً.

💡 *نصيحة إضافية:* يمكنك النقر على بطاقات الموضوعات أعلاه لمشاهدة فيديو الشرح المقترح على يوتيوب بالدقائق، أو تجربة التحدي السريع لاختبار فهمك فورياً!
  `;
}

// =========================================================================
// UI CONTROLLER & MODAL RENDERING
// =========================================================================

function openDiagnosisModal() {
  const modal = document.getElementById("diagnosisModal");
  const box = document.getElementById("diagnosisBox");
  if (!modal || !box) return;

  const diagnosis = generatePerformanceDiagnosis();
  box.innerHTML = renderDiagnosisModalHTML(diagnosis);
  modal.style.display = "flex";
  document.body.style.overflow = "hidden"; // prevent background scroll

  attachDiagnosisEventListeners(diagnosis);
}

function closeDiagnosisModal() {
  const modal = document.getElementById("diagnosisModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }
}

function renderDiagnosisModalHTML(data) {
  const scorePct = data.totalAnswered > 0 
    ? Math.round((data.topics.reduce((acc, t) => acc + t.correct, 0) / data.totalAnswered) * 100) 
    : 0;

  let overallBadgeClass = "badge-good";
  let overallBadgeText = "🌟 أداء ممتاز ومبهر!";
  let overallAdvice = "مستواك رائع في معظم مهارات المنهج. راجع التحديات السريعة لتثبيت المعلومات 100%.";

  if (scorePct < 50) {
    overallBadgeClass = "badge-critical";
    overallBadgeText = "⚠️ يحتاج تركيز ومراجعة مكثفة";
    overallAdvice = "تم رصد فجوات في بعض المفاهيم الحسابية والبرمجية. ننصحك بمشاهدة فيديوهات يوتيوب المقترحة أدناه ثم إعادة حل الأسئلة.";
  } else if (scorePct < 75) {
    overallBadgeClass = "badge-practice";
    overallBadgeText = "🟡 جيد - يحتاج تدريب على التريكات";
    overallAdvice = "أنت على الطريق الصحيح! معظم إجاباتك صحيحة، ولكن بعض الفخاخ الدقيقة ما زالت توقعك. راجع شروحات الذكاء الاصطناعي لتفاديها.";
  }

  // Collect all mistakes
  const allMistakes = [];
  data.topics.forEach(t => {
    t.wrongQuestions.forEach(q => {
      allMistakes.push({ question: q, topicName: t.topic.name });
    });
  });

  return `
    <div class="diag-header">
      <div class="diag-header-info">
        <div class="diag-title-row">
          <span class="diag-icon">📊</span>
          <div>
            <h2>تقرير تشخيص الأداء ونقاط الضعف بالذكاء الاصطناعي</h2>
            <p>تحليل ذكي شامل لـ 7 مهارات أساسية مأخوذة 100% من السلايدز وورقة الامتحان</p>
          </div>
        </div>
      </div>
      <button class="diag-close-btn" id="diagCloseBtn" title="إغلاق التقرير">✕</button>
    </div>

    <div class="diag-body">
      <!-- 1. Hero Score Banner -->
      <div class="diag-score-banner">
        <div class="diag-score-circle">
          <div class="diag-score-num">${scorePct}%</div>
          <div class="diag-score-sub">${data.totalAnswered} / ${data.totalQuestions} مجاب</div>
        </div>
        <div class="diag-score-meta">
          <span class="diag-badge ${overallBadgeClass}">${overallBadgeText}</span>
          <p class="diag-advice-text">${overallAdvice}</p>
          <div class="diag-summary-tags">
            <span class="diag-tag critical">🔴 ${data.criticalCount} نقاط ضعف حرجة</span>
            <span class="diag-tag practice">🟡 ${data.practiceCount} تحتاج تدريب</span>
            <span class="diag-tag mastered">🟢 ${data.masteredCount} مهارات متقنة</span>
          </div>
        </div>
      </div>

      <!-- 2. Interactive 7 Syllabus Topics Grid -->
      <div class="diag-section">
        <div class="diag-section-header">
          <h3>📌 تشخيص المهارات والمفاهيم الـ 7 التفصيلية</h3>
          <span style="font-size: 0.85rem; color: var(--text-muted);">انقر على أي مهارة لعرض شرح الـ AI أو فيديوهات يوتيوب المقترحة</span>
        </div>

        <div class="diag-topics-grid">
          ${data.topics.map(t => {
            let statusBadge = '<span class="status-pill gray">⚪ لم يُحل بعد</span>';
            let statusClass = "unattempted";

            if (t.status === "critical") {
              statusBadge = '<span class="status-pill red">🔴 نقطة ضعف حرجة</span>';
              statusClass = "critical";
            } else if (t.status === "practice") {
              statusBadge = '<span class="status-pill yellow">🟡 تحتاج تدريب</span>';
              statusClass = "practice";
            } else if (t.status === "mastered") {
              statusBadge = '<span class="status-pill green">🟢 متقن وممتاز</span>';
              statusClass = "mastered";
            }

            return `
              <div class="diag-topic-card ${statusClass}" id="topic-card-${t.topic.id}">
                <div class="topic-card-top">
                  <div class="topic-card-title">
                    <span class="topic-icon">${t.topic.icon}</span>
                    <div>
                      <h4>${t.topic.name}</h4>
                      <div class="topic-subtitle">${t.topic.nameEn}</div>
                    </div>
                  </div>
                  ${statusBadge}
                </div>

                <p class="topic-desc">${t.topic.description}</p>

                <!-- Accuracy Progress -->
                <div class="topic-progress-row">
                  <span>الدقة: <strong>${t.accuracy}%</strong> (${t.correct} من ${t.answered} صح)</span>
                  <div class="topic-progress-bar">
                    <div class="topic-progress-fill ${statusClass}" style="width: ${t.accuracy}%;"></div>
                  </div>
                </div>

                <!-- Topic Action Buttons -->
                <div class="topic-actions">
                  <button class="topic-btn ai-btn" data-action="toggle-ai-summary" data-topic="${t.topic.id}">
                    <span>🤖 شرح المعلم الذكي (AI)</span>
                  </button>
                  <button class="topic-btn yt-btn" data-action="toggle-yt-videos" data-topic="${t.topic.id}">
                    <span>📺 فيديوهات يوتيوب (${t.topic.youtube.length})</span>
                  </button>
                  <button class="topic-btn challenge-btn" data-action="toggle-challenge" data-topic="${t.topic.id}">
                    <span>🎯 تحدي تدريبي سريع</span>
                  </button>
                </div>

                <!-- Hidden Collapsible: AI Explanation Box -->
                <div class="topic-collapsible ai-box" id="ai-box-${t.topic.id}" style="display: none;">
                  <div class="ai-box-header">
                    <span>🤖 شرح المعلم الذكي المخصص لهذا المفهوم:</span>
                  </div>
                  <div class="ai-box-content">${t.topic.aiSummary.replace(/\n/g, '<br>')}</div>
                </div>

                <!-- Hidden Collapsible: Curated YouTube Videos -->
                <div class="topic-collapsible yt-box" id="yt-box-${t.topic.id}" style="display: none;">
                  <div class="yt-box-header">
                    <span>📺 أفضل شروحات يوتيوب المقترحة من أساتذة المادة:</span>
                  </div>
                  <div class="yt-video-list">
                    ${t.topic.youtube.map(v => `
                      <a href="${v.url}" target="_blank" rel="noopener noreferrer" class="yt-video-card">
                        <div class="yt-play-icon">▶</div>
                        <div class="yt-video-meta">
                          <div class="yt-video-title">${escapeHTML(v.title)}</div>
                          <div class="yt-channel-name">👨‍🏫 ${escapeHTML(v.channel)}</div>
                        </div>
                        <span class="yt-open-pill">مشاهدة على YouTube ↗</span>
                      </a>
                    `).join('')}
                  </div>
                </div>

                <!-- Hidden Collapsible: Quick Interactive Challenge -->
                <div class="topic-collapsible challenge-box" id="challenge-box-${t.topic.id}" style="display: none;">
                  <div class="challenge-header">
                    <span>🎯 اختبر استيعابك لهذا المفهوم بسؤال فوري:</span>
                  </div>
                  <div class="challenge-question">
                    ${escapeHTML(t.topic.quickChallenge.question)}
                  </div>
                  <div class="challenge-options">
                    ${t.topic.quickChallenge.options.map(opt => `
                      <button class="challenge-opt-btn" 
                              data-topic="${t.topic.id}" 
                              data-selected="${escapeHTML(opt)}"
                              data-correct="${escapeHTML(t.topic.quickChallenge.correct)}">
                        ${escapeHTML(opt)}
                      </button>
                    `).join('')}
                  </div>
                  <div class="challenge-feedback" id="challenge-feedback-${t.topic.id}" style="display: none;"></div>
                </div>
              </div>
            `;
          }).join('')}
        </div>
      </div>

      <!-- 3. Pinpoint Mistakes Section -->
      ${allMistakes.length > 0 ? `
        <div class="diag-section">
          <div class="diag-section-header">
            <h3>⚠️ قائمة الأسئلة والمصائد التي أخطأت فيها بالتحديد (${allMistakes.length})</h3>
            <span style="font-size: 0.85rem; color: var(--text-muted);">راجع الخطأ والسبب النموذجي لتفادي تكراره</span>
          </div>

          <div class="diag-mistakes-list">
            ${allMistakes.map(m => `
              <div class="diag-mistake-card">
                <div class="mistake-card-top">
                  <span class="mistake-badge">❌ خطأ في: ${escapeHTML(m.question.title)}</span>
                  <span class="mistake-topic-tag">${escapeHTML(m.topicName)}</span>
                </div>
                <div class="mistake-question-text">${escapeHTML(m.question.textAr || m.question.text)}</div>
                
                ${m.question.explanation ? `
                  <div class="mistake-explanation">
                    💡 <strong>التوضيح النموذجي:</strong> ${escapeHTML(m.question.explanation)}
                  </div>
                ` : ''}

                <div class="mistake-actions">
                  <button class="btn-secondary" style="font-size: 0.8rem; padding: 0.35rem 0.8rem;" data-action="ask-ai-mistake" data-title="${escapeHTML(m.question.title)}">
                    <span>🤖 اطلب نصيحة الذكاء الاصطناعي لهذا السؤال</span>
                  </button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      ` : ''}

      <!-- 4. Interactive Ask AI Console -->
      <div class="diag-section">
        <div class="diag-section-header">
          <h3>🤖 اسأل معلم الذكاء الاصطناعي (AI Interactive Tutor)</h3>
          <span style="font-size: 0.85rem; color: var(--text-muted);">اسأل عن أي نقطة غير مفهومة في المنهج وتلقَّ شرحاً فورياً مبسطاً</span>
        </div>

        <div class="diag-ai-console">
          <!-- Quick Prompts Pills -->
          <div class="ai-prompts-row">
            <span style="font-size: 0.85rem; color: var(--text-muted); align-self: center;">أسئلة شائعة:</span>
            <button class="ai-prompt-pill" data-prompt="كيف أكتشف الـ Overflow في المكمل الثنائي بسهولة؟">
              🔢 كشف الـ Overflow
            </button>
            <button class="ai-prompt-pill" data-prompt="ما الفرق الدقيق بين y++ و ++y في C++؟">
              ⚡ الفرق بين y++ و ++y
            </button>
            <button class="ai-prompt-pill" data-prompt="اشرح لي خطوات طريقة Double Dabble بالأمثلة">
              🧮 خطوات Double Dabble
            </button>
            <button class="ai-prompt-pill" data-prompt="كيف أحول if-else إلى switch-case بدون أخطاء؟">
              🔀 تحويل if إلى switch
            </button>
          </div>

          <!-- Chat Input -->
          <div class="ai-input-row">
            <input type="text" id="aiCustomInput" placeholder="اكتب سؤالك هنا (مثلاً: ليه 9/5 بتطلع 1؟ أو اشرح لي نواقل النظام)...">
            <button id="aiAskBtn" class="btn-primary">
              <span>🚀 اسأل الذكاء الاصطناعي</span>
            </button>
          </div>

          <!-- Live AI Output Box -->
          <div class="ai-response-box" id="aiResponseBox" style="display: none;">
            <div class="ai-response-header">
              <span class="ai-avatar">🤖</span>
              <strong>إجابة معلم الذكاء الاصطناعي:</strong>
            </div>
            <div class="ai-response-body" id="aiResponseBody"></div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function attachDiagnosisEventListeners(diagnosisData) {
  const modal = document.getElementById("diagnosisModal");
  const closeBtn = document.getElementById("diagCloseBtn");
  const backdrop = document.getElementById("diagnosisBackdrop");

  if (closeBtn) closeBtn.onclick = closeDiagnosisModal;
  if (backdrop) backdrop.onclick = closeDiagnosisModal;

  // Collapsible Toggles
  document.querySelectorAll("[data-action='toggle-ai-summary']").forEach(btn => {
    btn.onclick = () => {
      const topicId = btn.getAttribute("data-topic");
      const box = document.getElementById(`ai-box-${topicId}`);
      if (box) {
        box.style.display = box.style.display === "none" ? "block" : "none";
      }
    };
  });

  document.querySelectorAll("[data-action='toggle-yt-videos']").forEach(btn => {
    btn.onclick = () => {
      const topicId = btn.getAttribute("data-topic");
      const box = document.getElementById(`yt-box-${topicId}`);
      if (box) {
        box.style.display = box.style.display === "none" ? "block" : "none";
      }
    };
  });

  document.querySelectorAll("[data-action='toggle-challenge']").forEach(btn => {
    btn.onclick = () => {
      const topicId = btn.getAttribute("data-topic");
      const box = document.getElementById(`challenge-box-${topicId}`);
      if (box) {
        box.style.display = box.style.display === "none" ? "block" : "none";
      }
    };
  });

  // Challenge Option Buttons
  document.querySelectorAll(".challenge-opt-btn").forEach(btn => {
    btn.onclick = () => {
      const topicId = btn.getAttribute("data-topic");
      const selected = btn.getAttribute("data-selected");
      const correct = btn.getAttribute("data-correct");
      const feedbackEl = document.getElementById(`challenge-feedback-${topicId}`);
      if (!feedbackEl) return;

      const isCorrect = selected === correct;
      const topicDef = AI_TUTOR_TOPICS[topicId];

      if (isCorrect) {
        feedbackEl.className = "challenge-feedback success";
        feedbackEl.innerHTML = `✅ <strong>إجابة ممتازة وصحيحة!</strong> ${escapeHTML(topicDef.quickChallenge.explanation)}`;
      } else {
        feedbackEl.className = "challenge-feedback error";
        feedbackEl.innerHTML = `❌ <strong>إجابة غير صحيحة.</strong> الصحيح هو: <strong>${escapeHTML(correct)}</strong>.<br>${escapeHTML(topicDef.quickChallenge.explanation)}`;
      }
      feedbackEl.style.display = "block";
    };
  });

  // Ask AI for specific mistake
  document.querySelectorAll("[data-action='ask-ai-mistake']").forEach(btn => {
    btn.onclick = () => {
      const title = btn.getAttribute("data-title");
      const input = document.getElementById("aiCustomInput");
      if (input) {
        input.value = `اشرح لي بالتفصيل فكرة السؤال: "${title}" وكيف أتفادى الخطأ فيه؟`;
        submitAITutorQuestion();
        // Scroll to AI console
        input.scrollIntoView({ behavior: "smooth" });
      }
    };
  });

  // AI Prompt Pills
  document.querySelectorAll(".ai-prompt-pill").forEach(pill => {
    pill.onclick = () => {
      const prompt = pill.getAttribute("data-prompt");
      const input = document.getElementById("aiCustomInput");
      if (input) {
        input.value = prompt;
        submitAITutorQuestion();
      }
    };
  });

  // Custom AI input submit
  const aiAskBtn = document.getElementById("aiAskBtn");
  const aiInput = document.getElementById("aiCustomInput");
  if (aiAskBtn && aiInput) {
    aiAskBtn.onclick = submitAITutorQuestion;
    aiInput.onkeydown = (e) => {
      if (e.key === "Enter") submitAITutorQuestion();
    };
  }
}

function submitAITutorQuestion() {
  const input = document.getElementById("aiCustomInput");
  const responseBox = document.getElementById("aiResponseBox");
  const responseBody = document.getElementById("aiResponseBody");
  if (!input || !responseBox || !responseBody) return;

  const query = input.value.trim();
  if (!query) return;

  responseBox.style.display = "block";
  responseBody.innerHTML = '<div style="color: var(--text-muted); padding: 1rem 0;">⏳ جارٍ توليد الشرح بالذكاء الاصطناعي...</div>';

  setTimeout(() => {
    const rawAnswer = askAITutorEngine(query);
    // Simple markdown-to-HTML conversion
    let formatted = rawAnswer
      .replace(/^### (.*$)/gim, '<h4 style="color: var(--primary-light); margin: 0.5rem 0;">$1</h4>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`([^`]+)`/g, '<code style="background: rgba(255,255,255,0.1); padding: 0.1rem 0.4rem; border-radius: 4px; font-family: monospace;">$1</code>')
      .replace(/\n/g, '<br>');

    responseBody.innerHTML = formatted;
  }, 400);
}

// Global initialization function to hook into DOMContentLoaded
function initAITutorSystem() {
  const reportBtn = document.getElementById("examReportBtn");
  if (reportBtn) {
    reportBtn.onclick = openDiagnosisModal;
  }
}
