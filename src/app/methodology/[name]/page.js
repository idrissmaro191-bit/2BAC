"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

const methodologyData = {
  "الفلسفة": [
    { type: "subsection", title: "منهجيات الفلسفة" },
    { type: "lesson", title: "منهجية النص" },
    { type: "lesson", title: "منهجية السؤال" },
    { type: "lesson", title: "منهجية القولة" },
  ],
  "اللغة العربية": [
    { type: "subsection", title: "منهجيات العربية" },
    { type: "lesson", title: "منهجية النص النظري" },
    { type: "lesson", title: "منهجية النص التطبيقي" },
    { type: "lesson", title: "منهجية ظاهرة الشعر العربي الحديث" },
    { type: "lesson", title: "منهجية اللص والكلاب" },
  ],
};

export default function MethodologyPage() {
  const params = useParams();
  const subjectName = decodeURIComponent(params.name);
  const items = methodologyData[subjectName] || [];

  return (
    <div className="subject-page">
      <div className="subject-page-header">
        <Link href="/" className="back-button">← رجوع للرئيسية</Link>
      </div>
      <h1 className="subject-page-title">منهجيات الباكالوريا - {subjectName}</h1>
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
                <Link
                key={index}
                href={`/lesson/${encodeURIComponent(item.title)}`}
                className="lesson-item"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                {item.title}
              </Link>
              )
          )
        ) : (
          <p style={{ textAlign: "center" }}>لا توجد منهجيات مضافة بعد لهذه المادة.</p>
        )}
      </div>
    </div>
  );
}