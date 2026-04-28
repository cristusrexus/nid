import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_006e9fe6-7cc9-4d12-be84-af7ad4c21208/artifacts/4ta4xjyk_Screenshot%202026-04-28%20224222.png";

const links = [
  { href: "#despre", label: "Despre noi", testid: "nav-about-link" },
  { href: "#merch", label: "Merch", testid: "nav-merch-link" },
  { href: "#contact", label: "Contact", testid: "nav-contact-link" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      data-testid="site-header"
      className={`sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b transition-all ${
        scrolled ? "border-[hsl(215_50%_16%/0.2)]" : "border-transparent"
      }`}
    >
      <nav
        className="container-x flex items-center justify-between h-20"
        aria-label="Navigare principală"
      >
        <a
          href="#"
          className="flex items-center gap-3"
          data-testid="nav-logo-link"
          aria-label="Note În Demisol"
        >
          <img
            src={LOGO_URL}
            alt="Note În Demisol Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-display text-xl tracking-tight hidden sm:block">
            Note În Demisol
          </span>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.testid}
              className="text-sm uppercase tracking-[0.2em] font-medium text-foreground hover:text-[hsl(var(--accent))] transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#lectii"
            data-testid="nav-cta-button"
            className="btn-primary !py-2.5 !px-5 !text-xs"
          >
            Înscriere Lecții
          </a>
        </div>

        <button
          className="md:hidden p-2 -mr-2"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
          aria-label="Deschide meniul"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div
          className="md:hidden border-t border-[hsl(215_50%_16%/0.15)] bg-background"
          data-testid="nav-mobile-menu"
        >
          <div className="container-x py-6 flex flex-col gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                data-testid={`${l.testid}-mobile`}
                onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium hover:text-[hsl(var(--accent))]"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#lectii"
              onClick={() => setOpen(false)}
              data-testid="nav-cta-button-mobile"
              className="btn-primary self-start"
            >
              Înscriere Lecții
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
