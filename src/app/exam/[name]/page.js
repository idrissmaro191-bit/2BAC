"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const examData = {
  "اللغة العربية": [
    { type: "section", title: "الامتحانات الوطنية - اللغة العربية" },
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