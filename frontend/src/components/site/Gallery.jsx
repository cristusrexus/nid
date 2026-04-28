import { motion } from "framer-motion";

const GUITARS_AUTUMN =
  "https://customer-assets.emergentagent.com/job_note-landing/artifacts/wbbah0hj_Screenshot%202026-04-28%20231616.png";

const CONCERT_OUTDOOR =
  "https://customer-assets.emergentagent.com/job_note-landing/artifacts/4x9ew07y_WhatsApp%20Image%202026-04-28%20at%2023.05.44%20%281%29.jpeg";

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="border-t border-[hsl(215_50%_16%/0.2)]"
      data-testid="gallery-section"
    >
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="overline mb-5">
              <span className="stamp-tag">Galerie</span>
            </div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-2xl"
              data-testid="gallery-title"
            >
              Momente din <em className="italic">demisol</em> și de pe scenă.
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)]">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="md:col-span-2 bg-background overflow-hidden relative aspect-[16/10]"
            data-testid="gallery-image-guitars"
          >
            <img
              src={GUITARS_AUTUMN}
              alt="Chitări acustice așezate printre frunze de toamnă"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-background border border-[hsl(215_50%_16%/0.25)] px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] font-bold">
              Sesiune foto · toamnă
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="bg-background overflow-hidden relative aspect-[16/10] md:aspect-auto"
            data-testid="gallery-image-band"
          >
            <img
              src={CONCERT_OUTDOOR}
              alt="Concert outdoor cu membrii trupei"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-background border border-[hsl(215_50%_16%/0.25)] px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] font-bold">
              Concert outdoor
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
