import { motion } from "framer-motion";

const members = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  name: "John Doe",
}));

export default function Members() {
  return (
    <section
      id="membri"
      className="border-t border-[hsl(215_50%_16%/0.2)]"
      data-testid="members-section"
    >
      <div className="container-x py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="overline mb-5">
              <span className="stamp-tag">Membrii trupei</span>
            </div>
            <h2
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-2xl"
              data-testid="members-title"
            >
              Oamenii din <em className="italic">demisol</em>.
            </h2>
          </div>
          <div className="text-sm uppercase tracking-[0.22em] font-semibold text-[hsl(215_30%_30%)]">
            {String(members.length).padStart(2, "0")} membri
          </div>
        </div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)]"
          data-testid="members-grid"
        >
          {members.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, delay: (i % 10) * 0.03 }}
              className="bg-background p-5 md:p-6 flex items-baseline gap-3 hover:bg-[hsl(var(--secondary))] transition-colors"
              data-testid={`member-card-${m.id}`}
            >
              <span className="font-display text-sm text-[hsl(var(--accent))] tabular-nums">
                {String(m.id).padStart(2, "0")}
              </span>
              <span className="font-display text-base md:text-lg leading-tight">
                {m.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
