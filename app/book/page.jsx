import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Book Your Strategy Call — Kritagya Bhandari",
  description: "Pick a time for your free 1-hour strategy call.",
};

export default function BookPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main
        className="px-6 py-24"
        style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}
      >
        <div className="max-w-[900px] mx-auto text-center flex flex-col items-center gap-6">
          <p className="section-label fade-up">Step 2 of 2</p>
          <h1 className="section-h1 fade-up" data-delay="80">
            One Step Away From Your Free Strategy Call
          </h1>
          <p
            className="text-text-muted fade-up max-w-[600px]"
            data-delay="160"
            style={{ fontSize: "1.15rem", lineHeight: 1.6 }}
          >
            Pick a time that works for you. The call is 100% free.
          </p>
          <p
            className="text-accent fade-up"
            data-delay="200"
            style={{ fontSize: "14px" }}
          >
            Only 5 spots available — book before they fill up.
          </p>

          {/* CALENDLY EMBED
              ---------------------------------------------------------------
              PASTE YOUR CALENDLY INLINE EMBED CODE INSIDE THE DIV BELOW.
              Do NOT modify Calendly functionality.
              In Calendly: Settings → Event Type → Confirmation Page →
              Redirect to external site → set to https://YOUR_DOMAIN/thank-you
              --------------------------------------------------------------- */}
          <div
            className="w-full mt-10 fade-up overflow-hidden"
            data-delay="260"
            style={{
              minHeight: "700px",
              border: "1px solid #222222",
              borderRadius: "12px",
              backgroundColor: "#0A0A0A",
            }}
          >
            {/* === PASTE CALENDLY INLINE EMBED HERE === */}
            <div
              className="w-full h-full flex items-center justify-center text-text-muted text-center px-6"
              style={{ minHeight: "700px" }}
            >
              <span>
                Calendly embed placeholder — paste your inline embed snippet
                inside the container in <code>app/book/page.jsx</code>.
              </span>
            </div>
            {/* === END CALENDLY EMBED === */}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
