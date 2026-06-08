"use client";

import Script from "next/script";

// Calendly inline widget — do not modify
export default function CalendlyEmbed() {
  return (
    <>
      <div
        className="calendly-inline-widget"
        data-url="https://calendly.com/bhandarikritagya2055/free-1-1-consultation"
        style={{ minWidth: "320px", height: "700px", width: "100%" }}
      />
      <Script
        src="https://assets.calendly.com/assets/external/widget.js"
        strategy="afterInteractive"
      />
    </>
  );
}
