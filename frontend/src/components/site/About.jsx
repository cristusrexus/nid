import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
};

export default function About() {
  return (
    <section
      id="despre"
      className="container-x py-20 md:py-28"
      data-testid="about-section"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className="grid grid-cols-12 gap-8 lg:gap-12"
      >
        <div className="col-span-12 md:col-span-4">
          <div className="overline mb-6">
            <span className="stamp-tag">Cine suntem</span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight"
            data-testid="about-title"
          >
            O trupă din <span className="text-[hsl(var(--accent))]">Beclean</span>, în <em className="italic">demisol</em>.
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l border-[hsl(215_50%_16%/0.2)] space-y-6">
          <p
            className="text-lg md:text-xl leading-relaxed text-[hsl(215_30%_25%)]"
            data-testid="about-paragraph-1"
          >
            <span className="font-display text-3xl mr-2 float-left leading-none mt-1">N</span>
            ote În Demisol a început în 2024, în Beclean. Suntem peste 70 de
            membri, între care elevi, profesori și mai multe grupe de chitară pe
            care le coordonăm.
          </p>

          <div className="mt-10 border border-[hsl(215_50%_16%/0.18)] overflow-hidden" data-testid="about-group-photo">
            <img
              src="https://customer-assets.emergentagent.com/job_note-landing/artifacts/galt9biz_Screenshot%202026-04-28%20231458.png"
              alt="Note În Demisol pe scenă la 790 de ani de la prima atestare a Beclanului"
              className="w-full aspect-[16/10] object-cover"
            />
            <div className="px-5 py-3 border-t border-[hsl(215_50%_16%/0.18)] flex items-center justify-between text-[10px] uppercase tracking-[0.25em] font-semibold bg-[hsl(var(--secondary))]">
              <span>Zilele Becleanului · pe scenă</span>
              <span className="text-[hsl(var(--accent))]">27 septembrie 2025</span>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)] mt-10">
            {[
              { k: "70+", v: "Membri activi" },
              { k: "2024", v: "Anul înființării" },
              { k: "FOLK", v: "Stil principal" },
              { k: "ROCK", v: "Tendință" },
              { k: "BECLEAN", v: "Orașul nostru" },
              { k: "BN", v: "Bistrița-Năsăud" },
            ].map((s) => (
              <div
                key={s.k}
                className="bg-background p-5 md:p-6"
                data-testid={`about-stat-${s.k.toLowerCase()}`}
              >
                <div className="font-display text-2xl md:text-3xl">{s.k}</div>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-[hsl(215_30%_35%)] mt-1">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
