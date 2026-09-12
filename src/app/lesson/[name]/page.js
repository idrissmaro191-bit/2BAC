"use client";
import { useParams } from "next/navigation";
import Link from "next/link";

export default function LessonPage() {
  const params = useParams();
  const lessonName = decodeURIComponent(params.name);

  const pdfUrl = "#";

  return (
    <div className="lesson-page">
      <div className="subject-page-header">
        <Link href="/" className="back-button">← رجوع للرئيسية</Link>
      </div>
      <h1 className="lesson-page-title">{lessonName}</h1>

      <a
        href={pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pdf-button"
      >
        📄 PDF
      </a>
    </div>
  );
}