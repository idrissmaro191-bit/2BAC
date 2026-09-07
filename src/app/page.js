"use client";
import { useState, useEffect } from "react";
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
  const [showButtons, setShowButtons] = useState(true);
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, progress: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > 150) {
        setShowButtons(false);
      } else {
        setShowButtons(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const examDate = new Date("2027-06-01T08:00:00").getTime();
    const startDate = new Date("2026-09-01T00:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = examDate - now;

      const totalDuration = examDate - startDate;
      const elapsed = now - startDate;
      const progressPercent = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds, progress: progressPercent });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`home-page ${darkMode ? "dark-mode" : ""}`}>
      <SplashScreen />

      <button className={`menu-toggle ${!showButtons ? "hide-btn" : ""}`} onClick={() => setMenuOpen(true)}>☰</button>
      <button className={`theme-toggle ${!showButtons ? "hide-btn" : ""}`} onClick={() => setDarkMode(!darkMode)}>
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
            href={`/methodology/${encodeURIComponent(subject.name)}`}
            className="subject-card"
            style={{
              animationDelay: `${3 + (subjects.length + index) * 0.15}s`,
            }}
          >
            {subject.name}
          </Link>
        ))}
      </main>

      <div className="countdown-wrapper">
        <div
          className="countdown-circle"
          style={{
            background: `conic-gradient(#1d4ed8 ${countdown.progress * 3.6}deg, #e5e7eb 0deg)`,
          }}
        >
          <div className="countdown-inner">
            <span className="countdown-label">الامتحان الوطني 2027</span>
            <span className="countdown-numbers">
              {countdown.days} يوم
            </span>
          </div>
        </div>
      </div>

      <div className="section-banner exam-banner">الامتحانات الوطنية للباكالوريا</div>

      <main className="subjects-grid">
        {nationalExamSubjects.map((subject, index) => (
          <Link
            key={subject.name}
            href={`/exam/${encodeURIComponent(subject.name)}`}
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