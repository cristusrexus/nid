import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube, ArrowUpRight } from "lucide-react";

const TikTokIcon = (props) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.31a8.16 8.16 0 0 0 4.77 1.52V6.4a4.85 4.85 0 0 1-1.84-.07Z" />
  </svg>
);

const socials = [
  {
    id: "instagram",
    name: "Instagram",
    handle: "@note_in_demisol",
    href: "https://www.instagram.com/note_in_demisol/",
    Icon: Instagram,
  },
  {
    id: "tiktok",
    name: "TikTok",
    handle: "@note_in_demisol26",
    href: "https://www.tiktok.com/@note_in_demisol26",
    Icon: TikTokIcon,
  },
  {
    id: "facebook",
    name: "Facebook",
    handle: "Note În Demisol",
    href: "https://www.facebook.com/profile.php?id=61556936127185",
    Icon: Facebook,
  },
  {
    id: "youtube",
    name: "YouTube",
    handle: "@Atelierdechitara",
    href: "https://www.youtube.com/@Atelierdechitara",
    Icon: Youtube,
  },
];

export default function Socials() {
  return (
    <section
      id="social"
      className="border-t border-[hsl(215_50%_16%/0.2)] bg-[hsl(var(--secondary))]"
      data-testid="socials-section"
    >
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="overline mb-5">
              <span className="stamp-tag">Rețele de socializare</span>
            </div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-2xl"
              data-testid="socials-title"
            >
              Urmărește-ne <em className="italic">peste tot</em>.
            </h2>
          </div>
          <p className="text-base md:text-lg max-w-md text-[hsl(215_30%_30%)]">
            Cele mai noi clipuri, repetiții și concerte. Fii primul care le vede.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)]">
          {socials.map((s, i) => {
            const { Icon } = s;
            return (
              <motion.a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group bg-background p-8 md:p-10 flex flex-col gap-6 hover:bg-[hsl(var(--primary))] hover:text-[hsl(var(--primary-foreground))] transition-colors duration-500 relative"
                data-testid={`social-card-${s.id}`}
              >
                <div className="flex items-start justify-between">
                  <Icon className="w-8 h-8 transition-transform duration-500 group-hover:scale-110 group-hover:text-[hsl(var(--accent))]" />
                  <ArrowUpRight
                    size={20}
                    className="opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </div>
                <div className="mt-auto">
                  <div className="font-display text-2xl md:text-3xl leading-tight">
                    {s.name}
                  </div>
                  <div className="text-xs md:text-sm uppercase tracking-[0.18em] mt-2 opacity-70 break-all">
                    {s.handle}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
