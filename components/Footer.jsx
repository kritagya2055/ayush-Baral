import { InstagramIcon, FacebookIcon, WhatsAppIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer
      className="bg-bg"
      style={{ borderTop: "1px solid #222222" }}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
        <div className="text-white font-medium">Kritagya Bhandari</div>
        <div className="flex justify-center gap-5">
          <a
            href="https://www.instagram.com/bhandari_kritagya?igsh=MTV3OHBicG5kOXBjbQ=="
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-accent transition-colors duration-200"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.facebook.com/share/1GWgnrDbLs/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="text-white hover:text-accent transition-colors duration-200"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://wa.me/9779704593561"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white hover:text-accent transition-colors duration-200"
          >
            <WhatsAppIcon />
          </a>
        </div>
        <div className="text-text-muted text-[13px] md:text-right">
          © 2025 Kritagya Bhandari. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
