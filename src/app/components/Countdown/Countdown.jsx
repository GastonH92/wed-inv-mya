
"use client";

import { useEffect, useState } from "react";

const weddingDate = new Date("2026-11-27T00:00:00");

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = weddingDate.getTime() - new Date().getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      });
    };

    calculateTimeLeft();

    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown" aria-label="Cuenta regresiva para la boda">
      {Object.entries(timeLeft).map(([label, value]) => (
        <div className="countdown-item" key={label}>
          <span>{String(value).padStart(2, "0")}</span>

          <small>
            {label === "days"
              ? "días"
              : label === "hours"
              ? "horas"
              : label === "minutes"
              ? "minutos"
              : "segundos"}
          </small>
        </div>
      ))}
    </div>
  );
}
