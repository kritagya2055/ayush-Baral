import Link from "next/link";
import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./SocialIcons";

export default function Nav() {
  return (
    <nav
      className="sticky top-0 z-[100] w-full"
      style={{
        backgroundColor: "rgba(10, 10, 10, 0.55)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderBottom: "1px solid #222222",
      }}
    >
      <div className="flex items-center justify-between px-8 py-4 max-w-[1280px] mx-auto">
        <div className="flex items-center gap-5">
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-accent transition-colors duration-200"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-accent transition-colors duration-200"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://wa.me/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white hover:text-accent transition-colors duration-200"
          >
            <WhatsAppIcon />
          </a>
        </div>
        <Link
          href="/"
          className="text-white font-medium tracking-tight text-[15px] hover:text-accent transition-colors duration-200"
        >
          Kritagya Bhandari
        </Link>
      </div>
    </nav>
  );
}
