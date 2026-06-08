"use client";

export default function ScrollToFormButton({ children, microText }) {
  const handleClick = () => {
    const el = document.getElementById("lead-form");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      const firstField = el.querySelector("input");
      if (firstField) {
        setTimeout(() => firstField.focus({ preventScroll: true }), 700);
      }
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button type="button" onClick={handleClick} className="cta-button">
        {children}
      </button>
      {microText ? (
        <p className="text-[12px] text-text-muted">{microText}</p>
      ) : null}
    </div>
  );
}
