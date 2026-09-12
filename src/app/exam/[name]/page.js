"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const examData = {
  "اللغة العربية": [
    { type: "subsection", title: "الإمتحانات الوطنية للغة العربية مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2023 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2022 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2021 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2020 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2019 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2018 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2017 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2016 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2015 مسلك الآداب" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2014 مسلك الآداب" },

    { type: "subsection", title: "الإمتحانات الوطنية للغة العربية مسلك علوم الإنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2023 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2022 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2021 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2020 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2019 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2018 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2017 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2016 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2015 مسلك علوم إنسانية" },
    { type: "lesson", title: "الامتحان الوطني في اللغة العربية 2014 مسلك علوم إنسانية" },
  ],
};

export default function ExamPage() {
  const params = useParams();
  const subjectName = decodeURIComponent(params.name);
  const items = examData[subjectName] || [];

  return (
    <div className="subject-page">
      <div className="subject-page-header">
        <Link href="/" className="back-button">← رجوع للرئيسية</Link>
      </div>
      <h1 className="subject-page-title">الامتحانات الوطنية - {subjectName}</h1>
      <div className="lessons-list">
        {items.length > 0 ? (
          items.map((item, index) =>
            item.type === "section" ? (
                <div key={index} className="section-divider" style={{ animationDelay: `${index * 0.08}s` }}>
                  {item.title}
                </div>
              ) : item.type === "subsection" ? (
                <div key={index} className="subsection-divider" style={{ animationDelay: `${index * 0.08}s` }}>
                  {item.title}
                </div>
              ) : (
                <div key={index} className="lesson-item" style={{ animationDelay: `${index * 0.08}s` }}>
                  {item.title}
                </div>
              )
          )
        ) : (
          <p style={{ textAlign: "center" }}>لا توجد امتحانات مضافة بعد لهذه المادة.</p>
        )}
      </div>
    </div>
  );
}