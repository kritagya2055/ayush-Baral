import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata = {
  title: "Thank You — Kritagya Bhandari",
  description: "Thank you for subscribing.",
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
          <p className="section-label fade-up">You&apos;re In</p>
          <h1 className="section-h1 fade-up" data-delay="80">
            Thank You for Subscribing!
          </h1>
          <p
            className="text-text-muted fade-up max-w-[600px]"
            data-delay="160"
            style={{ fontSize: "1.15rem", lineHeight: 1.6 }}
          >
            You&apos;re on the list. Watch this short message from me while you wait.
          </p>

          <div
            className="w-full mt-8 fade-up"
            data-delay="220"
            style={{
              maxWidth: "700px",
              border: "1px solid #222222",
              borderRadius: "12px",
              overflow: "hidden",
              aspectRatio: "16 / 9",
              backgroundColor: "#111111",
            }}
          >
            {/* Vimeo embed — do not modify */}
            <iframe
              src="https://player.vimeo.com/video/1198966045"
              width="700"
              height="394"
              frameBorder="0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ width: "100%", height: "100%", display: "block" }}
              title="A message from Kritagya"
            />
          </div>

          <p
            className="text-text-muted fade-up"
            data-delay="280"
            style={{ fontSize: "14px", marginTop: "1.5rem" }}
          >
            Talk soon.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
