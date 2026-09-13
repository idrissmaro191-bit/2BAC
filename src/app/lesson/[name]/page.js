"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function LessonPage() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    if (saved === "true") setDarkMode(true);
  }, []);
  const params = useParams();
  const lessonName = decodeURIComponent(params.name);

  const pdfUrl = "#";

  
    <div className={`lesson-page ${darkMode ? "dark-mode" : ""}`}>
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