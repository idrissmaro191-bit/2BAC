"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const lessonsData = {
  "اللغة الإنجليزية": [
    { type: "section", title: "Unit 1 (Youth: Potential and Challenges)" },
    { type: "lesson", title: "Vocabulary 1" },
    { type: "lesson", title: "Functions 1 : Expressing opinions, agreeing and disagreeing" },
    { type: "lesson", title: "Grammar 1 : Gerund or infinitive" },
    { type: "lesson", title: "Comprehension 1 : A football legend" },
    { type: "lesson", title: "Writing 1 : Describing a person" },
    { type: "lesson", title: "Language Quiz 1" },

    { type: "section", title: "Unit 2 (Humour)" },
    { type: "lesson", title: "Vocabulary 2" },
    { type: "lesson", title: "Functions 2 : Expressing lack of understanding and asking for clarification" },
    { type: "lesson", title: "Grammar 2 : Modals" },
    { type: "lesson", title: "Comprehension 2 : A talented humorist" },
    { type: "lesson", title: "Writing 2 : A funny story" },
    { type: "lesson", title: "Language Quiz 2" },

    { type: "section", title: "Unit 3 (Education)" },
    { type: "lesson", title: "Vocabulary 3" },
    { type: "lesson", title: "Functions 3 : Expressing purpose" },
    { type: "lesson", title: "Grammar 3 : Past Perfect" },
    { type: "lesson", title: "Comprehension 3 : A new beginning" },
    { type: "lesson", title: "Writing 3 : Report" },
    { type: "lesson", title: "Language Quiz 3" },

    { type: "section", title: "Unit 4 (Sustainable developement)" },
    { type: "lesson", title: "Vocabulary 4" },
    { type: "lesson", title: "Functions 4 : Expressing cause and effect" },
    { type: "lesson", title: "Grammar 4 : Future simple/perfect" },
    { type: "lesson", title: "Comprehension 4 : Civil society in Morocco" },
    { type: "lesson", title: "Writing 4 : A formal letter" },
    { type: "lesson", title: "Language Quiz 4" },

    { type: "section", title: "Unit 5 (Woman and Power)" },
    { type: "lesson", title: "Vocabulary 5" },
    { type: "lesson", title: "Functions 5 : Expressing addition and concession" },
    { type: "lesson", title: "Grammar 5 : Passive voice" },
    { type: "lesson", title: "Comprehension 5 : The woman behind Harry Potter" },
    { type: "lesson", title: "Writing 5 : A book / film review" },
    { type: "lesson", title: "Language Quiz 5" },

    { type: "section", title: "Unit 6 (Culture)" },
    { type: "lesson", title: "Vocabulary 6" },
    { type: "lesson", title: "Functions 6 : Defining, apologizing and complaining" },
    { type: "lesson", title: "Grammar 6 : Phrasal verbs" },
    { type: "lesson", title: "Comprehension 6 : A mixed marriage" },
    { type: "lesson", title: "Writing 6 : An informal letter" },
    { type: "lesson", title: "Language Quiz 6" },

    { type: "section", title: "Unit 7 (Citizenship)" },
    { type: "lesson", title: "Vocabulary 7" },
    { type: "lesson", title: "Functions 7 : Asking for advice, giving advice" },
    { type: "lesson", title: "Grammar 7 : Reported speech" },
    { type: "lesson", title: "Comprehension 7 : Active citizenship" },
    { type: "lesson", title: "Writing 7 : Causes, effects and solutions" },
    { type: "lesson", title: "Language Quiz 7" },

    { type: "section", title: "Unit 8 (International Organizations)" },
    { type: "lesson", title: "Vocabulary 8" },
    { type: "lesson", title: "Functions 8 : Responding to good news / bad news" },
    { type: "lesson", title: "Grammar 8 : Prefixes and suffixes" },
    { type: "lesson", title: "Comprehension 8 : A boy and UNICEF" },
    { type: "lesson", title: "Writing 8 : A formal email" },
    { type: "lesson", title: "Language Quiz 8" },

    { type: "section", title: "Unit 9 (Science and Technology)" },
    { type: "lesson", title: "Vocabulary 9" },
    { type: "lesson", title: "Functions 9 : Expressing certainty / uncertainty" },
    { type: "lesson", title: "Grammar 9 : Conditional and wish" },
    { type: "lesson", title: "Comprehension 9 : The mobile phone" },
    { type: "lesson", title: "Writing 9 : Advantages and disadvantages" },
    { type: "lesson", title: "Language Quiz 9" },

    { type: "section", title: "Unit 10 (Brain Drain)" },
    { type: "lesson", title: "Vocabulary 10" },
    { type: "lesson", title: "Functions 10 : Expressing Regret" },
    { type: "lesson", title: "Grammar 10 : Relative Pronouns" },
    { type: "lesson", title: "Comprehension 10 : Africa immigration" },
    { type: "lesson", title: "Writing 10 : Argumentative essay (For or against)" },
    { type: "lesson", title: "Language Quiz 10" },
  ],
  "التاريخ والجغرافيا": [
    { type: "section", title: "التاريخ : الدورة الأولى" },
    { type: "lesson", title: "العالم غداة الحرب العالمية الأولى" },
    { type: "lesson", title: "الثورة الروسية وأزمات الديمقراطيات الليبرالية" },
    { type: "lesson", title: "أزمة العالم الرأسمالي الكبرى لسنة 1929م" },
    { type: "lesson", title: "الحرب العالمية الثانية 1939 - 1945م" },
    { type: "lesson", title: "ملف: مساهمة المغاربة في الحرب العالمية الثانية" },
    { type: "lesson", title: "المغرب تحت نظام الحماية" },
    { type: "lesson", title: "المغرب: الاستغلال الاستعماري في عهد الحماية" },
    { type: "lesson", title: "سقوط الإمبراطورية العثمانية وتوغل الاستعمار بالمشرق العربي" },
    { type: "lesson", title: "القضية الفلسطينية: جذور القضية وأشكال التمركز الصهيوني" },
    { type: "lesson", title: "ملف: الوضع الدولي لمدينة طنجة في عهد الحماية" },

    { type: "section", title: "التاريخ : الدورة الثانية" },
    { type: "lesson", title: "نظام القطبية الثنائية والحرب الباردة" },
    { type: "lesson", title: "تصفية الاستعمار وبروز العالم الثالث" },
    { type: "lesson", title: "النظام العالمي الجديد والقطبية الواحدة" },
    { type: "lesson", title: "ملف: الثورة العلمية والتكنولوجية" },
    { type: "lesson", title: "المغرب: الكفاح من أجل الاستقلال واستكمال الوحدة الترابية" },
    { type: "lesson", title: "الحركات الاستقلالية بالجزائر وتونس وليبيا" },
    { type: "lesson", title: "الحركات الاستقلالية بالمشرق العربي" },
    { type: "lesson", title: "القضية الفلسطينية والصراع العربي الإسرائيلي" },

    { type: "section", title: "الجغرافية : الدورة الأولى" },
    { type: "lesson", title: "العولمة (المفهوم، الآليات والفاعلون)" },
    { type: "lesson", title: "تنظيم المجال العالمي في إطار العولمة" },
    { type: "lesson", title: "تفاوت النمو بين الشمال والجنوب (المجال المتوسطي نموذجاً)" },
    { type: "lesson", title: "المجال العالمي والتحديات الكبرى (التحدي السكاني والتحدي البيئي)" },
    { type: "lesson", title: "ملف: العولمة والهوية الثقافية" },
    { type: "lesson", title: "الاتحاد الأوربي (نحو اندماج شامل)" },
    { type: "lesson", title: "مجموعة أمريكا الشمالية (التبادل الحر والاندماج الجهوي)" },
    { type: "lesson", title: "دول جنوب شرق آسيا (قطب اقتصادي في تطور متصاعد)" },
    { type: "lesson", title: "ملف: المنظمة العالمية للتجارة" },

    { type: "section", title: "الجغرافية : الدورة الثانية" },
    { type: "lesson", title: "الولايات المتحدة الأمريكية (قوة اقتصادية عظمى)" },
    { type: "lesson", title: "فرنسا (قوة فلاحية وصناعية كبرى في الاتحاد الأوروبي)" },
    { type: "lesson", title: "اليابان (قوة تجارية كبرى)" },
    { type: "lesson", title: "ملف: دور التأهيل البشري في القوة الاقتصادية" },
    { type: "lesson", title: "الصين (قوة اقتصادية صاعدة)" },
    { type: "lesson", title: "البرازيل (نمو اقتصادي واستمرار التفاوتات في التنمية البشرية)" },
    { type: "lesson", title: "كوريا الجنوبية (نموذج لبلد حديث النمو الاقتصادي)" },
    { type: "lesson", title: "الهند (أوجه متعددة للتنمية)" },
  ],
  "الفلسفة": [
    { type: "section", title: "مجزوءة الوضع البشري" },
    { type: "subsection", title: "محور الشخص" },
    { type: "lesson", title: "مفهوم الشخص (المحور الأول: الشخص والهوية)" },
    { type: "lesson", title: "مفهوم الشخص (المحور الثاني: الشخص بوصفه قيمة)" },
    { type: "lesson", title: "مفهوم الشخص (المحور الثالث: الشخص بين الضرورة والحرية)" },
    { type: "subsection", title: "محور الغير" },
    { type: "lesson", title: "مفهوم الغير (المحور الأول: وجود الغير)" },
    { type: "lesson", title: "مفهوم الغير (المحور الثاني: معرفة الغير)" },
    { type: "lesson", title: "مفهوم الغير (المحور الثالث: العلاقة مع الغير)" },
    { type: "subsection", title: "محور التاريخ" },
    { type: "lesson", title: "مفهوم التاريخ (المحور الأول: المعرفة التاريخية)" },
    { type: "lesson", title: "مفهوم التاريخ (المحور الثاني: التاريخ وفكرة التقدم)" },
    { type: "lesson", title: "مفهوم التاريخ (المحور الثالث: دور الإنسان في التاريخ)" },

    { type: "section", title: "مجزوءة المعرفة" },
    { type: "subsection", title: "محور النظرية والتجربة" },
    { type: "lesson", title: "مفهوم النظرية والتجربة (المحور الأول: التجربة والتجريب)" },
    { type: "lesson", title: "مفهوم النظرية والتجربة (المحور الثاني: العقلانية العلمية أو النظرية)" },
    { type: "lesson", title: "مفهوم النظرية والتجربة (المحور الثالث: معايير علمية النظريات العلمية)" },
    { type: "subsection", title: "محور المسألة العلمية في العلوم الإنسانية" },
    { type: "lesson", title: "مفهوم المسألة العلمية في العلوم الإنسانية (المحور الأول: موضعة العلوم الإنسانية)" },
    { type: "lesson", title: "مفهوم المسألة العلمية في العلوم الإنسانية (المحور الثاني: التفسير والفهم في العلوم الإنسانية)" },
    { type: "lesson", title: "مفهوم المسألة العلمية في العلوم الإنسانية (المحور الثالث: نموذجية العلوم التجريبية)" },
    { type: "lesson", title: "مفهوم المسألة العلمية في العلوم الإنسانية (المحور الرابع: نموذج السوسيولوجيا)" },
    { type: "subsection", title: "محور الحقيقة" },
    { type: "lesson", title: "مفهوم الحقيقة (المحور الأول: الرأي والحقيقة)" },
    { type: "lesson", title: "مفهوم الحقيقة (المحور الثاني: معايير الحقيقة)" },
    { type: "lesson", title: "مفهوم الحقيقة (المحور الثالث: الحقيقة بوصفها قيمة)" },

    { type: "section", title: "مجزوءة السياسة" },
    { type: "subsection", title: "محور الدولة" },
    { type: "lesson", title: "مفهوم الدولة (المحور الأول: مشروعية الدولة وغاياتها)" },
    { type: "lesson", title: "مفهوم الدولة (المحور الثاني: طبيعة السلطة السياسية)" },
    { type: "lesson", title: "مفهوم الدولة (المحور الثالث: الدولة بين الحق والعنف)" },
    { type: "subsection", title: "محور العنف" },
    { type: "lesson", title: "مفهوم العنف (المحور الأول: أشكال العنف)" },
    { type: "lesson", title: "مفهوم العنف (المحور الثاني: العنف في التاريخ)" },
    { type: "lesson", title: "مفهوم العنف (المحور الثالث: العنف والمشروعية)" },
    { type: "subsection", title: "محور الحق والعدالة" },
    { type: "lesson", title: "مفهوم الحق والعدالة (المحور الأول: الحق بين الطبيعي والوضعي)" },
    { type: "lesson", title: "مفهوم الحق والعدالة (المحور الثاني: العدالة كأساس للحق)" },
    { type: "lesson", title: "مفهوم الحق والعدالة (المحور الثالث: العدالة بين المساواة والإنصاف)" },

    { type: "section", title: "مجزوءة الأخلاق" },
    { type: "subsection", title: "محور الواجب" },
    { type: "lesson", title: "مفهوم الواجب (المحور الأول: الواجب والإكراه)" },
    { type: "lesson", title: "مفهوم الواجب (المحور الثاني: الوعي الأخلاقي)" },
    { type: "lesson", title: "مفهوم الواجب (المحور الثالث: الواجب والمجتمع)" },
    { type: "subsection", title: "محور السعادة" },
    { type: "lesson", title: "مفهوم السعادة (المحور الأول: تمثلات السعادة)" },
    { type: "lesson", title: "مفهوم السعادة (المحور الثاني: السعي وراء السعادة)" },
    { type: "lesson", title: "مفهوم السعادة (المحور الثالث: السعادة والواجب)" },
    { type: "subsection", title: "محور الحرية" },
    { type: "lesson", title: "مفهوم الحرية (المحور الأول: الحرية والحتمية)" },
    { type: "lesson", title: "مفهوم الحرية (المحور الثاني: الحرية والإرادة)" },
    { type: "lesson", title: "مفهوم الحرية (المحور الثالث: الحرية والقانون)" },
  ],
  "التربية الإسلامية": [
    { type: "section", title: "مدخل التزكية (القرآن الكريم)" },
    { type: "lesson", title: "سورة يس: الجزء الأول (من الآية 1 إلى الآية 11)" },
    { type: "lesson", title: "سورة يس: الجزء الثاني (من الآية 12 إلى الآية 28)" },
    { type: "lesson", title: "سورة يس: الجزء الثالث (من الآية 29 إلى الآية 43)" },
    { type: "lesson", title: "سورة يس: الجزء الرابع (من الآية 44 إلى الآية 53)" },
    { type: "lesson", title: "سورة يس: الجزء الخامس (من الآية 54 إلى الآية 67)" },
    { type: "lesson", title: "سورة يس: الجزء السادس (من الآية 68 إلى الآية 82)" },

    { type: "section", title: "مدخل التزكية (العقيدة)" },
    { type: "lesson", title: "التوحيد والحرية" },
    { type: "lesson", title: "الإلحاد بين الوهم والحقيقة" },
    { type: "lesson", title: "النظر والتفكر سبيل العلم والإيمان" },
    { type: "lesson", title: "القرآن الكريم منهج حياة" },

    { type: "section", title: "مدخل الاقتداء" },
    { type: "lesson", title: "إكمال الدين ووفاة الرسول صلى الله عليه وسلم" },
    { type: "lesson", title: "الرسول صلى الله عليه وسلم نموذج الكمال البشري" },
    { type: "lesson", title: "نماذج للتأسي: علي كرم الله وجهه وزينة القوة والعلم" },
    { type: "lesson", title: "واجبنا نحو الرسول صلى الله عليه وسلم" },

    { type: "section", title: "مدخل الاستجابة" },
    { type: "lesson", title: "الخصائص العامة للشريعة الإسلامية" },
    { type: "lesson", title: "مقاصد الشريعة الإسلامية" },
    { type: "lesson", title: "ضوابط فهم النص الشرعي (القرآن والسنة)" },
    { type: "lesson", title: "الاجتهاد والتجديد" },

    { type: "section", title: "مدخل القسط" },
    { type: "lesson", title: "حق الله: الاعتزاز بالإسلام" },
    { type: "lesson", title: "حق النفس: التوسط والاعتدال" },
    { type: "lesson", title: "حق الغير: خطبة الوداع وحقوق الإنسان" },
    { type: "lesson", title: "حق البيئة: إن الله جميل يحب الجمال" },

    { type: "section", title: "مدخل الحكمة" },
    { type: "lesson", title: "التصور الإسلامي للحرية" },
    { type: "lesson", title: "الإسلام وبناء الحضارة الإنسانية" },
    { type: "lesson", title: "الرحمة والرفق" },
    { type: "lesson", title: "صفات عباد الرحمان" },
  ],
  "اللغة العربية": [
    { type: "section", title: "المجزوءة الأولى : الشعر العربي الحديث (إحياء النموذج وسؤال الذات)" },
    { type: "lesson", title: "إحياء النموذج - نص نظري : انبعاث الشعر العربي (محمد الكتاني)" },
    { type: "lesson", title: "إحياء النموذج - نموذج شعري : لي في من مضى مثل (محمود سامي البارودي)" },
    { type: "lesson", title: "سؤال الذات - نص نظري : الشعر الرومانسي (عبد المحسن طه بدر)" },
    { type: "lesson", title: "سؤال الذات - نموذج شعري : إلى دودة (ميخائيل نعيمة)" },
    { type: "lesson", title: "الدرس اللغوي : التكرار" },
    { type: "lesson", title: "الدرس اللغوي : التوازي" },
    { type: "lesson", title: "الدرس اللغوي : الصورة الشعرية (مكوناتها ووظائفها)" },
    { type: "lesson", title: "درس التعبير والإنشاء : مهارة كتابة إنشاء أدبي حول نص شعري" },

    { type: "section", title: "المجزوءة الثانية : الشعر العربي الحديث (تكسير البنية وتجديد الرؤيا)" },
    { type: "lesson", title: "تكسير البنية - نص نظري : قضايا الإطار الموسيقي الجديد للقصيدة (عز الدين إسماعيل)" },
    { type: "lesson", title: "تكسير البنية - نموذج شعري : لنكن أصدقاء (نازك الملائكة)" },
    { type: "lesson", title: "تجديد الرؤيا - نص نظري : قصيدة الرؤيا (أحمد علي سعيد أدونيس)" },
    { type: "lesson", title: "تجديد الرؤيا - نموذج شعري : سربروس في بابل (بدر شاكر السياب)" },
    { type: "lesson", title: "الدرس اللغوي : السطر الشعري" },
    { type: "lesson", title: "الدرس اللغوي : المقطع الشعري" },
    { type: "lesson", title: "الدرس اللغوي : الرمز" },
    { type: "lesson", title: "الدرس اللغوي : الأسطورة" },
    { type: "lesson", title: "درس التعبير والإنشاء : مهارة كتابة إنشاء أدبي حول قضية أدبية" },

    { type: "section", title: "المجزوءة الثالثة : أشكال نثرية حديثة (القصة والمسرحية)" },
    { type: "lesson", title: "القصة - نص نظري : مميزات القصة القصيرة واتجاهاتها (محمد عزام)" },
    { type: "lesson", title: "القصة - نص قصصي : دم ودخان (مبارك ربيع)" },
    { type: "lesson", title: "المسرحية - نص نظري : سمات النص المسرحي (فرحان بلبل)" },
    { type: "lesson", title: "المسرحية - نص مسرحي : امرؤ القيس في باريس (عبد الكريم برشيد)" },
    { type: "lesson", title: "الدرس اللغوي : الخطاطة السردية" },
    { type: "lesson", title: "الدرس اللغوي : النموذج العاملي" },
    { type: "lesson", title: "درس التعبير والإنشاء : مهارة كتابة إنشاء أدبي حول نص نثري إبداعي" },

    { type: "section", title: "المجزوءة الرابعة : مناهج نقدية حديثة (المنهج الاجتماعي والمنهج البنيوي)" },
    { type: "lesson", title: "المنهج الاجتماعي - نص نظري : المنهج الاجتماعي (نبيل راغب)" },
    { type: "lesson", title: "المنهج الاجتماعي - نص تطبيقي : سوسيولوجية القصيدة العربية (نجيب العوفي)" },
    { type: "lesson", title: "المنهج البنيوي - نص نظري : المنهج البنيوي (صلاح فضل)" },
    { type: "lesson", title: "المنهج البنيوي - نص تطبيقي : من البنية إلى الدلالة (حسين الواد)" },
    { type: "lesson", title: "الدرس اللغوي : الاتساق" },
    { type: "lesson", title: "الدرس اللغوي : الانسجام" },
    { type: "lesson", title: "الدرس اللغوي : أساليب الحجاج" },
    { type: "lesson", title: "درس التعبير والإنشاء : مهارة كتابة إنشاء أدبي حول قضية نقدية" },
    { type: "lesson", title: "درس التعبير والإنشاء : مهارة كتابة إنشاء أدبي حول قولة نقدية" },

    { type: "section", title: "دروس المؤلفات" },
    { type: "lesson", title: "المؤلفات : ظاهرة الشعر الحديث لأحمد المعداوي المجاطي (قراءة توجيهية)" },
    { type: "lesson", title: "المؤلفات : ظاهرة الشعر الحديث لأحمد المعداوي المجاطي (الفصل الأول - التطور التدريجي في الشعر الحديث)" },
    { type: "lesson", title: "المؤلفات : ظاهرة الشعر الحديث لأحمد المعداوي المجاطي (الفصل الثاني - تجربة الغربة والضياع)" },
    { type: "lesson", title: "المؤلفات : ظاهرة الشعر الحديث لأحمد المعداوي المجاطي (الفصل الثالث - تجربة الموت والحياة)" },
    { type: "lesson", title: "المؤلفات : ظاهرة الشعر الحديث لأحمد المعداوي المجاطي (الفصل الرابع - الشكل الجديد)" },
    { type: "lesson", title: "المؤلفات : اللص والكلاب لنجيب محفوظ (قراءة توجيهية)" },
    { type: "lesson", title: "المؤلفات : اللص والكلاب لنجيب محفوظ (المنظور الأول - تتبع الحدث)" },
    { type: "lesson", title: "المؤلفات : اللص والكلاب لنجيب محفوظ (المنظور الثاني - تقويم القوى الفاعلة)" },
    { type: "lesson", title: "المؤلفات : اللص والكلاب لنجيب محفوظ (المنظور الثالث - الكشف عن البعد النفسي)" },
    { type: "lesson", title: "المؤلفات : اللص والكلاب لنجيب محفوظ (المنظور الرابع - المنظور الاجتماعي)" },
    { type: "lesson", title: "المؤلفات : اللص والكلاب لنجيب محفوظ (المنظور الخامس - منظور الأسلوب)" },
    { type: "lesson", title: "المؤلفات : اللص والكلاب لنجيب محفوظ (القراءة التركيبية)" },
  ],
};

export default function SubjectPage() {
  const params = useParams();
  const subjectName = decodeURIComponent(params.name);
  const items = lessonsData[subjectName] || [];

  return (
    <div className="subject-page">
      <div className="subject-page-header">
        <Link href="/" className="back-button">← رجوع للرئيسية</Link>
      </div>
      <h1 className="subject-page-title">{subjectName}</h1>
      <div className="lessons-list">
        {items.length > 0 ? (
          items.map((item, index) =>
            item.type === "section" ? (
              <div
                key={index}
                className="section-divider"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.title}
              </div>
            ) : item.type === "subsection" ? (
              <div
                key={index}
                className="subsection-divider"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.title}
              </div>
            ) : (
              <div
                key={index}
                className="lesson-item"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.title}
              </div>
            )
          )
        ) : (
          <p>لا توجد دروس مضافة بعد لهذه المادة.</p>
        )}
      </div>
    </div>
  );
}