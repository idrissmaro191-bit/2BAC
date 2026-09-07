"use client";
import { useEffect, useState } from "react";

export default function SplashScreen() {
  const [visible, setVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const alreadySeen = sessionStorage.getItem("splashSeen");
    if (alreadySeen) {
      setVisible(false);
      return;
    }

    setVisible(true);
    const generatedStars = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 2.5,
    }));
    setStars(generatedStars);

    const fadeTimer = setTimeout(() => setFadeOut(true), 2600);
    const removeTimer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("splashSeen", "true");
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`splash ${fadeOut ? "splash-fade-out" : ""}`}>
      {stars.map((star) => (
        <span
          key={star.id}
          className="splash-star"
          style={{
            top: `${star.top}%`,
            left: `${star.left}%`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
      <div className="splash-content">
        <h1 className="splash-title">2BAC</h1>
        <div className="splash-line"></div>
        <p className="splash-tagline">ملخصاتك نحو النجاح</p>
      </div>
    </div>
  );
}