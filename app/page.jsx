import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import ScrollToFormButton from "@/components/ScrollToFormButton";
import LeadCaptureForm from "@/components/LeadCaptureForm";

const TRUSTED_BY = [
  "Ayush Baral",
  "Arun Ramtel",
  "Prabhakar Kafle",
  "Chetan Pun",
];

const STEPS = [
  {
    num: "01",
    title: "Audit Your Marketing",
    body: "We do a deep dive into your current marketing, identify what's broken, and find the biggest growth opportunities hiding in plain sight.",
  },
  {
    num: "02",
    title: "Build Your Strategy",
    body: "We build a clear, custom marketing strategy tailored to your business goals — no templates, no generic advice, just a real plan built for you.",
  },
  {
    num: "03",
    title: "Execute and Grow",
    body: "You walk away with an actionable roadmap. We guide you through execution so you can start generating leads and growing your business immediately.",
  },
];

export default function HomePage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main>
        {/* SECTION 1 — HERO */}
        <section
          className="noise-overlay min-h-screen flex items-center justify-center px-6 py-24"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="hero-stagger max-w-[960px] w-full flex flex-col items-center text-center gap-6">
            <span
              className="inline-block rounded-full px-4 py-1.5 text-[13px]"
              style={{ border: "1px solid #A8D8F0", color: "#A8D8F0" }}
            >
              Free 1-Hour Strategy Call
            </span>

            <h1 className="section-h1 max-w-[900px]">
              Grow Your Business With High-Converting Marketing Systems
            </h1>

            <p
              className="max-w-[600px] text-text-muted"
              style={{ fontSize: "1.25rem", lineHeight: 1.55 }}
            >
              I help businesses generate leads, build authority, and scale
              online.
            </p>

            <span
              className="pulse-border inline-block rounded-full px-4 py-1.5 text-[13px]"
              style={{
                backgroundColor: "#111111",
                border: "1px solid #222222",
                color: "#A8D8F0",
              }}
            >
              Only 5 Spots Available This Month
            </span>

            <div className="mt-2">
              <ScrollToFormButton microText="5 spots remaining — once they're gone, they're gone">
                Reserve My Strategy Call
              </ScrollToFormButton>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SOCIAL PROOF */}
        <section
          className="px-8 py-12"
          style={{
            backgroundColor: "#111111",
            borderTop: "1px solid #222222",
            borderBottom: "1px solid #222222",
          }}
        >
          <div className="max-w-[1100px] mx-auto fade-up">
            <p className="section-label muted text-center mb-6">Trusted By</p>
            <div className="hidden md:flex items-center justify-center">
              {TRUSTED_BY.map((name, idx) => (
                <div key={name} className="flex items-center">
                  <span className="px-6 text-text-muted hover:text-white transition-colors duration-200 cursor-default text-[1rem]">
                    {name}
                  </span>
                  {idx < TRUSTED_BY.length - 1 ? (
                    <span
                      className="h-5"
                      style={{ borderLeft: "1px solid #222222" }}
                    />
                  ) : null}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-y-4 md:hidden text-center">
              {TRUSTED_BY.map((name) => (
                <span
                  key={name}
                  className="text-text-muted hover:text-white transition-colors duration-200 text-[1rem]"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 3 — ABOUT */}
        <section
          className="px-8 py-32"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="max-w-[800px] mx-auto text-center">
            <p className="section-label mb-4 fade-up">Who I Am</p>
            <h2 className="section-h2 mb-8 fade-up" data-delay="100">
              Your Growth Partner in Digital Marketing
            </h2>
            <p
              className="text-text-muted fade-up"
              data-delay="200"
              style={{ fontSize: "1.1rem", lineHeight: 1.8 }}
            >
              I&apos;m Kritagya Bhandari, a digital marketing expert based in
              Nepal. I help business owners, startups, and personal brands
              build marketing systems that generate real leads and sustainable
              online growth.
            </p>
          </div>
        </section>

        {/* SECTION 4 — HOW IT WORKS */}
        <section
          className="px-8 py-32"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="max-w-[1100px] mx-auto">
            <div className="text-center mb-16">
              <p className="section-label mb-4 fade-up">The Process</p>
              <h2 className="section-h2 fade-up" data-delay="100">
                Three Steps to Real Growth
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STEPS.map((step, idx) => (
                <div
                  key={step.num}
                  className="step-card fade-up"
                  data-delay={`${idx * 100}`}
                >
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-2 select-none pointer-events-none"
                    style={{
                      fontSize: "4rem",
                      fontWeight: 700,
                      color: "#1A1A1A",
                      lineHeight: 1,
                    }}
                  >
                    {step.num}
                  </span>
                  <h3
                    className="text-white font-semibold relative"
                    style={{ fontSize: "1.2rem", marginBottom: "0.75rem" }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-text-muted relative"
                    style={{ fontSize: "0.95rem", lineHeight: 1.7 }}
                  >
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 5 — LEAD CAPTURE FORM */}
        {/* REPLACE THIS FORM WITH FLODESK EMBED LATER */}
        <section
          id="lead-form"
          className="px-8 py-32"
          style={{
            backgroundColor: "#111111",
            borderTop: "1px solid #222222",
          }}
        >
          <div className="max-w-[600px] mx-auto text-center flex flex-col items-center gap-4">
            <p className="section-label fade-up">Get Started</p>
            <h2 className="section-h2 fade-up" data-delay="100">
              Claim Your Free Strategy Call
            </h2>
            <p
              className="text-text-muted fade-up"
              data-delay="160"
              style={{ fontSize: "1.05rem", lineHeight: 1.65 }}
            >
              Enter your details below and we will get you booked in.
            </p>
            <p
              className="text-accent fade-up"
              data-delay="220"
              style={{ fontSize: "14px" }}
            >
              Only 5 spots available this month.
            </p>
            <div className="w-full fade-up" data-delay="260">
              <LeadCaptureForm />
            </div>
          </div>
        </section>

        {/* SECTION 6 — FINAL CTA */}
        <section
          className="px-8 py-32 text-center"
          style={{ backgroundColor: "#0A0A0A" }}
        >
          <div className="max-w-[800px] mx-auto flex flex-col items-center gap-6">
            <h2 className="section-h2 fade-up">
              Ready to Grow Your Business?
            </h2>
            <p
              className="text-text-muted fade-up max-w-[600px]"
              data-delay="100"
              style={{ fontSize: "1.1rem", lineHeight: 1.7 }}
            >
              Book your free 1-hour strategy call today. No pitch. No fluff.
              Just a real plan.
            </p>
            <p
              className="text-accent fade-up"
              data-delay="150"
              style={{ fontSize: "14px" }}
            >
              Only 5 spots available this month. Spots are filling fast.
            </p>
            <div className="mt-2 fade-up" data-delay="200">
              <ScrollToFormButton microText="No commitment. No cost. Just results.">
                Reserve My Strategy Call
              </ScrollToFormButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
