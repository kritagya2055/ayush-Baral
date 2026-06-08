import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "You're Confirmed — Kritagya Bhandari",
  description: "Your strategy call is confirmed.",
};

export default function ThankYouPage() {
  return (
    <>
      <ScrollReveal />
      <Nav />
      <main
        className="px-6 py-24"
        style={{ backgroundColor: "#0A0A0A", minHeight: "100vh" }}
      >
        <div className="max-w-[800px] mx-auto text-center flex flex-col items-center gap-6">
          <p className="section-label fade-up">You&apos;re Confirmed</p>
          <h1 className="section-h1 fade-up" data-delay="80">
            Your Call Is Confirmed
          </h1>
          <p
            className="text-text-muted fade-up max-w-[600px]"
            data-delay="160"
            style={{ fontSize: "1.15rem", lineHeight: 1.6 }}
          >
            Check your email for the details. While you wait, watch this short
            message from me.
          </p>

          {/* VIDEO EMBED
              ---------------------------------------------------------------
              PASTE YOUR VIDEO EMBED INSIDE THE DIV BELOW.
              Do NOT modify video embed functionality.
              Example: <iframe src="https://www.youtube.com/embed/XYZ" ... />
              --------------------------------------------------------------- */}
          <div
            className="w-full mt-8 fade-up overflow-hidden"
            data-delay="220"
            style={{
              maxWidth: "700px",
              border: "1px solid #222222",
              borderRadius: "12px",
              aspectRatio: "16 / 9",
              backgroundColor: "#111111",
            }}
          >
            {/* === PASTE VIDEO EMBED IFRAME HERE === */}
            <div
              className="w-full h-full flex items-center justify-center text-text-muted text-center px-6"
            >
              <span>
                Video embed placeholder — paste your iframe in{" "}
                <code>app/thank-you/page.jsx</code>.
              </span>
            </div>
            {/* === END VIDEO EMBED === */}
          </div>

          <p
            className="text-text-muted fade-up"
            data-delay="280"
            style={{ fontSize: "14px", marginTop: "1.5rem" }}
          >
            See you on the call.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
