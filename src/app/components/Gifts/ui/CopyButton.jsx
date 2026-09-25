

"use client";

import { useEffect, useRef, useState } from "react";

export default function CopyButton({
  value,
  label = "Copiar",
  copiedLabel = "Copiado",
  ariaLabel = "Copiar",
}) {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);

      setCopied(true);

      clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.error("No se pudo copiar:", error);
    }
  };

  useEffect(() => {
    return () => {
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <button
      type="button"
      className={`copy-button ${copied ? "copied" : ""}`}
      onClick={handleCopy}
      aria-label={copied ? copiedLabel : ariaLabel}
    >
      {copied ? (
        <>
          <span aria-hidden="true">✓</span>
          {copiedLabel}
        </>
      ) : (
        <>
          <span aria-hidden="true">⧉</span>
          {label}
        </>
      )}
    </button>
  );
}

