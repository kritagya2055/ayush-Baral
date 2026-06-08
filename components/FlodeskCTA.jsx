"use client";

export default function FlodeskCTA({ children, microText }) {
  const openFlodesk = () => {
    // Flodesk popup integration — replace the line below with your actual
    // Flodesk popup trigger once the embed snippet is added to layout.jsx.
    // Example (after pasting Flodesk script):  window.fd("open", { formId: "XXXX" });
    if (typeof window !== "undefined" && typeof window.fd === "function") {
      // PASTE FLODESK FORM ID BELOW
      window.fd("open", { formId: "REPLACE_WITH_FLODESK_FORM_ID" });
    } else {
      // Fallback while Flodesk embed is not yet configured.
      window.location.href = "/book";
    }
  };

  return (
    <div className="flex flex-col items-center gap-3">
      <button type="button" onClick={openFlodesk} className="cta-button">
        {children}
      </button>
      {microText ? (
        <p className="text-[12px] text-text-muted">{microText}</p>
      ) : null}
    </div>
  );
}
