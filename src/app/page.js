"use client";
import { useState } from "react";
import Link from "next/link";
import SplashScreen from "./SplashScreen";

const subjects = [
  { name: "اللغة العربية" },
  { name: "التربية الإسلامية" },
  { name: "التاريخ والجغرافيا" },
  { name: "الفلسفة" },
  { name: "اللغة الفرنسية" },
  { name: "اللغة الإنجليزية" },
];

const methodologySubjects = [
  { name: "اللغة العربية" },
  { name: "الفلسفة" },
];

const nationalExamSubjects = [
  { name: "اللغة العربية" },
  { name: "التاريخ والجغرافيا" },
  { name: "الفلسفة" },
  { name: "اللغة الإنجليزية" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLetter, setShowLetter] = useState(true);

  return (
    <div className={`home-page ${darkMode ? "dark-mode" : ""}`}>
      <SplashScreen />

      <button className="menu-toggle" onClick={() => setMenuOpen(true)}>☰</button>
      <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️" : "🌙"}
      </button>

      {showLetter && (
        <div className="letter-overlay">
          <div className="letter-card">
            <button className="letter-close" onClick={() => setShowLetter(false)}>✕</button>
            <div className="letter-emoji-row">🌸 💌 🌷</div>
            <h2 className="letter-title">رسالة لكل تلميذ وتلميذة</h2>
            <p className="letter-body">
              النجاح لا يأتي بالصدفة، بل يُبنى بالإصرار والمثابرة.
              كل صفحة تقرؤونها، وكل درس تراجعونه، خطوة تقرّبكم
              من حلمكم المنشود. آمنوا بأنفسكم، وواصلوا الطريق
              بثقة وعزيمة، فالنجاح حليف الصابرين. 🌟
            </p>
            <p className="letter-signature">مرحبا بكم 🌹</p>
          </div>
        </div>
      )}

      {menuOpen && (
        <div className="sidebar-overlay" onClick={() => setMenuOpen(false)}>
          <div className="sidebar" onClick={(e) => e.stopPropagation()}>
            <button className="sidebar-close" onClick={() => setMenuOpen(false)}>✕</button>
            <h2 className="sidebar-title">تواصل معنا</h2>
            <div className="contact-item"><span>📧</span><span>idrissmarzoug170@gmail.com</span></div>
            <div className="contact-item"><span>📞</span><span>0602034179</span></div>
            <div className="contact-item"><span>📷</span><span>idriiss_mrg</span></div>
          </div>
        </div>
      )}

      <div className="search-bar">
        <span className="search-logo">2BAC</span>
        <div className="search-box">
          <input type="text" placeholder="ابحث عن درس..." />
          <span>🔍</span>
        </div>
      </div>

      <header className="home-header">
        <div className="header-row">
          <h1 className="home-logo">2BAC</h1>
        </div>
        <p className="home-subtitle">اختر المادة اللي بغيتي تراجع</p>
      </header>

      <main className="subjects-grid">
        {subjects.map((subject, index) => (
          <Link
            key={subject.name}
            href={`/subject/${encodeURIComponent(subject.name)}`}
            className="subject-card"
            style={{ animationDelay: `${3 + index * 0.15}s` }}
          >
            {subject.name}
          </Link>
        ))}
      </main>

      <div className="section-banner">منهجيات الباكالوريا</div>

      <main className="subjects-grid methodology-grid">
        {methodologySubjects.map((subject, index) => (
          <Link
            key={subject.name}
            href={`/subject/${encodeURIComponent(subject.name)}`}
            className="subject-card"
            style={{
              animationDelay: `${3 + (subjects.length + index) * 0.15}s`,
            }}
          >
            {subject.name}
          </Link>
        ))}
      </main>

      <div className="section-banner exam-banner">الامتحانات الوطنية للباكالوريا</div>

      <main className="subjects-grid">
        {nationalExamSubjects.map((subject, index) => (
          <Link
            key={subject.name}
            href={`/subject/${encodeURIComponent(subject.name)}`}
            className="subject-card"
            style={{
              animationDelay: `${
                3 + (subjects.length + methodologySubjects.length + index) * 0.15
              }s`,
            }}
          >
            {subject.name}
          </Link>
        ))}
      </main>
    </div>
  );
}