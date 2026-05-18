import { motion } from "framer-motion";

const members = [
  { id: 1, name: "Alex Czirai", role: "Coordonator" },
  { id: 2, name: "Agi", role: "Chitară" },
  { id: 3, name: "Amelia Pop", role: "Chitară & Voce" },
  { id: 4, name: "Anamaria Prodan", role: "Chitară" },
  { id: 5, name: "Andrei Cristian Mihai", role: "Chitară & Voce" },
  { id: 6, name: "Ariana Prodan", role: "Voce" },
  { id: 7, name: "Bianca Mureșan", role: "Chitară" },
  { id: 8, name: "Cristina", role: "Chitară & Voce" },
  { id: 9, name: "Cristina Pleșcan", role: "Voce" },
  { id: 10, name: "Cucura Denisa Ștefania", role: "Chitară & Voce" },
  { id: 11, name: "Daria Rus", role: "Chitară & Voce" },
  { id: 12, name: "Eduard Feher", role: "Chitară" },
  { id: 13, name: "Florean Iulia", role: "Chitară" },
  { id: 14, name: "Gaby Ilosvai", role: "Chitară & Cajon" },
  { id: 15, name: "Lucaciu Andreea", role: "Chitară" },
  { id: 16, name: "Mărcuș Robert", role: "Chitară" },
  { id: 17, name: "Maria Bărburaș", role: "Voce" },
  { id: 18, name: "Markus", role: "Chitară & Cajon" },
  { id: 19, name: "Maya Pop", role: "Chitară" },
  { id: 20, name: "Maya Prodan", role: "Chitară & Voce" },
  { id: 21, name: "Milan Szekely", role: "Chitară" },
  { id: 22, name: "Miriam", role: "Chitară & Voce" },
  { id: 23, name: "Nicola Papiu", role: "Chitară" },
  { id: 24, name: "Nicoleta", role: "Voce" },
  { id: 25, name: "Orban Daniela Maria", role: "Voce" },
  { id: 26, name: "Patricia", role: "Voce" },
  { id: 27, name: "Raul Kabai", role: "Chitară" },
  { id: 28, name: "Roxana", role: "Voce" },
  { id: 29, name: "Sara Mateiu", role: "Voce" },
  { id: 30, name: "Sonia", role: "Voce" },
  { id: 31, name: "Ștefania Szasz", role: "Chitară & Voce" },
  { id: 32, name: "Tudor Tihulcă", role: "Chitară & Voce" },
];

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
              className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-3xl"
              data-testid="members-title"
            >
              Și... cine face parte din <em className="italic">această trupă</em>?
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
              className="bg-background p-5 md:p-6 flex flex-col gap-1 hover:bg-[hsl(var(--secondary))] transition-colors"
              data-testid={`member-card-${m.id}`}
            >
              <div className="flex items-baseline gap-2">
                <span className="font-display text-sm text-[hsl(var(--accent))] tabular-nums">
                  {String(m.id).padStart(2, "0")}
                </span>
                <span className="font-display text-base md:text-lg leading-tight">
                  {m.name}
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-[0.2em] text-[hsl(215_30%_40%)] pl-6">
                {m.role}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
