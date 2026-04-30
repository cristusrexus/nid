import Marquee from "react-fast-marquee";

const items = [
  "Note În Demisol",
  "Trupă Folk-Rock",
  "Beclean · Bistrița-Năsăud",
  "Înființată 2023",
  "Folk · Rock · Cover",
];

export default function Ribbon() {
  return (
    <section
      className="border-y border-[hsl(215_50%_16%/0.2)] bg-[hsl(var(--secondary))] py-4"
      data-testid="ribbon-section"
      aria-label="Tagline trupă"
    >
      <Marquee speed={40} gradient={false} pauseOnHover>
        {items.concat(items).map((it, idx) => (
          <span
            key={idx}
            className="mx-8 text-sm md:text-base uppercase tracking-[0.32em] font-semibold inline-flex items-center gap-8"
          >
            {it}
            <span className="text-[hsl(var(--accent))]">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
