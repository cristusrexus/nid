import { motion } from "framer-motion";

const images = [
  {
    id: "concert-outdoor",
    src: "https://customer-assets.emergentagent.com/job_note-landing/artifacts/1otg46bl_galerie1.png",
    caption: "Concert outdoor",
    span: "md:col-span-2 md:row-span-2",
    aspect: "aspect-[4/3]",
  },
  {
    id: "grup-deal",
    src: "https://customer-assets.emergentagent.com/job_note-landing/artifacts/v1qez67k_galerie2.png",
    caption: "Sesiune foto · pe deal",
    span: "md:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    id: "grup-padure",
    src: "https://customer-assets.emergentagent.com/job_note-landing/artifacts/mzsx7u0k_galerie3.png",
    caption: "Pădure · toamnă",
    span: "md:col-span-1",
    aspect: "aspect-square",
  },
  {
    id: "chitare-frunze",
    src: "https://customer-assets.emergentagent.com/job_note-landing/artifacts/2v5xt7n2_Screenshot%202026-04-28%20231616.png",
    caption: "Chitare în frunze",
    span: "md:col-span-1",
    aspect: "aspect-square",
  },
];

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="border-t border-[hsl(215_50%_16%/0.2)]"
      data-testid="gallery-section"
    >
      <div className="container-x py-20 md:py-28">
        <div className="mb-12">
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

        <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)]">
          {images.map((img, i) => (
            <motion.figure
              key={img.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className={`relative bg-background overflow-hidden ${img.span} ${img.aspect}`}
              data-testid={`gallery-image-${img.id}`}
            >
              <img
                src={img.src}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
