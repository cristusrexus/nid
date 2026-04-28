import { motion } from "framer-motion";
import { ArrowDownRight } from "lucide-react";

const HERO_IMAGE =
  "https://customer-assets.emergentagent.com/job_006e9fe6-7cc9-4d12-be84-af7ad4c21208/artifacts/4ta4xjyk_Screenshot%202026-04-28%20224222.png";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function Hero() {
  return (
    <section
      className="container-x pt-12 md:pt-20 pb-16 md:pb-24"
      data-testid="hero-section"
    >
      <div className="grid grid-cols-12 gap-6 lg:gap-10 items-center">
        {/* Left: text */}
        <div className="col-span-12 lg:col-span-7">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
            className="overline mb-8"
            data-testid="hero-overline"
          >
            <span className="stamp-tag">Trupă folk · est. 2024</span>
          </motion.div>

          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={1}
            className="font-display text-5xl md:text-7xl lg:text-[7.5rem] leading-[0.9] tracking-tighter text-balance"
            data-testid="hero-title"
          >
            Bun venit la{" "}
            <span className="italic">Note</span>
            <span className="text-[hsl(var(--accent))]"> În </span>
            <span className="italic">Demisol</span>
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={2}
            className="mt-8 max-w-xl text-lg md:text-xl text-[hsl(215_30%_28%)] leading-relaxed"
            data-testid="hero-description"
          >
            Suntem peste 70 de oameni din Beclean care cântă împreună la chitară.
            Coboară cu noi în demisol.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={3}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <a
              href="#lectii"
              className="btn-primary"
              data-testid="hero-lessons-cta"
            >
              Înscriere Lecții
            </a>
            <a
              href="#despre"
              className="btn-outline"
              data-testid="hero-about-cta"
            >
              Cine Suntem <ArrowDownRight size={16} className="ml-2" />
            </a>
          </motion.div>
        </div>

        {/* Right: image card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="col-span-12 lg:col-span-5"
          data-testid="hero-image-wrap"
        >
          <div className="relative border border-[hsl(215_50%_16%/0.25)] bg-[hsl(var(--secondary))]">
            <div className="absolute -top-3 left-6 bg-background px-3 py-1 text-[10px] uppercase tracking-[0.3em] font-bold text-[hsl(var(--accent))]">
              Note În Demisol
            </div>
            <img
              src={HERO_IMAGE}
              alt="Logo Note În Demisol"
              className="w-full aspect-square object-contain p-8 md:p-12 bg-[hsl(var(--secondary))]"
            />
            <div className="grid grid-cols-3 border-t border-[hsl(215_50%_16%/0.25)] text-xs">
              <div className="p-4 border-r border-[hsl(215_50%_16%/0.25)]">
                <div className="font-display text-2xl">70+</div>
                <div className="uppercase tracking-[0.18em] text-[10px] mt-1 text-[hsl(215_30%_35%)]">
                  Membri
                </div>
              </div>
              <div className="p-4 border-r border-[hsl(215_50%_16%/0.25)]">
                <div className="font-display text-2xl">2024</div>
                <div className="uppercase tracking-[0.18em] text-[10px] mt-1 text-[hsl(215_30%_35%)]">
                  Înființată
                </div>
              </div>
              <div className="p-4">
                <div className="font-display text-2xl">BN</div>
                <div className="uppercase tracking-[0.18em] text-[10px] mt-1 text-[hsl(215_30%_35%)]">
                  Bistrița-Năsăud
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
