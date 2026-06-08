"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

// REPLACE THIS FORM WITH FLODESK EMBED LATER
export default function LeadCaptureForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ name: false, email: false });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameEmpty = name.trim().length === 0;
    const emailEmpty = email.trim().length === 0;
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    const next = { name: nameEmpty, email: emailEmpty || !emailValid };
    setErrors(next);
    if (next.name || next.email) return;
    setSubmitting(true);
    router.push("/book");
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full flex flex-col gap-4 mt-2"
    >
      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="lead-name" className="sr-only">
          Full Name
        </label>
        <input
          id="lead-name"
          name="name"
          type="text"
          autoComplete="name"
          placeholder="Full Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (errors.name) setErrors((s) => ({ ...s, name: false }));
          }}
          className="lead-input"
          style={
            errors.name ? { borderColor: "#A8D8F0" } : undefined
          }
        />
      </div>

      <div className="flex flex-col gap-1.5 text-left">
        <label htmlFor="lead-email" className="sr-only">
          Email Address
        </label>
        <input
          id="lead-email"
          name="email"
          type="email"
          autoComplete="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((s) => ({ ...s, email: false }));
          }}
          className="lead-input"
          style={
            errors.email ? { borderColor: "#A8D8F0" } : undefined
          }
        />
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="cta-button w-full mt-2"
        style={{ width: "100%" }}
      >
        {submitting ? "Reserving..." : "Reserve My Strategy Call"}
      </button>

      <p className="text-[12px] text-text-muted text-center">
        No commitment. No cost. Just results.
      </p>
    </form>
  );
}
