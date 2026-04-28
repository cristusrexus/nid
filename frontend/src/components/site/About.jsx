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
            O trupă <em className="italic">mare</em>, un{" "}
            <span className="text-[hsl(var(--accent))]">demisol</span> mic.
          </h2>
        </div>

        <div className="col-span-12 md:col-span-8 md:pl-8 md:border-l border-[hsl(215_50%_16%/0.2)] space-y-6">
          <p
            className="text-lg md:text-xl leading-relaxed text-[hsl(215_30%_25%)]"
            data-testid="about-paragraph-1"
          >
            <span className="font-display text-3xl mr-2 float-left leading-none mt-1">N</span>
            ote În Demisol s-a născut în 2024 din dorința simplă de a face muzică
            împreună. Suntem 36 de oameni — colegi, prieteni, vecini de corzi —
            care ne adunăm acolo unde acustica e cea mai sinceră: în demisol.
          </p>
          <p
            className="text-base md:text-lg leading-relaxed text-[hsl(215_30%_28%)]"
            data-testid="about-paragraph-2"
          >
            Cântăm preponderent piese folk — melodii care spun povești, refrene
            care se țin minte, chitare care respiră — dar lăsăm loc și
            tendințelor noastre rock. Pentru că uneori, o baladă cere un riff
            sincer.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)] mt-10">
            {[
              { k: "36", v: "Membri activi" },
              { k: "2024", v: "Anul înființării" },
              { k: "FOLK", v: "Stil principal" },
              { k: "ROCK", v: "Tendință" },
              { k: "DEMISOL", v: "Sala noastră" },
              { k: "RO", v: "Repertoriu" },
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
