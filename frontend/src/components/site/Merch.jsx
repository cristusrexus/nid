import { motion } from "framer-motion";
import { toast } from "sonner";

const products = [
  {
    id: "tee-classic",
    name: "Tricou Note În Demisol",
    price: "120 LEI",
    tag: "Bumbac 100%",
    img: "https://images.pexels.com/photos/12025472/pexels-photo-12025472.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "hoodie-folk",
    name: "Hanorac „Folk Sessions”",
    price: "240 LEI",
    tag: "Ediție limitată",
    img: "https://images.pexels.com/photos/8217398/pexels-photo-8217398.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "tote-bag",
    name: "Sacoșă Pânză",
    price: "55 LEI",
    tag: "Print serigrafic",
    img: "https://images.pexels.com/photos/5868737/pexels-photo-5868737.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    id: "vinyl-001",
    name: "Vinil „Vol. 01”",
    price: "180 LEI",
    tag: "Pre-comandă",
    img: "https://images.pexels.com/photos/164879/pexels-photo-164879.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function Merch() {
  const handleInterest = (name) => {
    toast.success(`Mulțumim! Te contactăm pentru „${name}”.`, {
      description: "Scrie-ne pe formularul de contact pentru detalii.",
    });
  };

  return (
    <section
      id="merch"
      className="container-x py-20 md:py-28 border-t border-[hsl(215_50%_16%/0.2)]"
      data-testid="merch-section"
    >
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
        <div>
          <div className="overline mb-5">
            <span className="stamp-tag">Merchandise</span>
          </div>
          <h2
            className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-2xl"
            data-testid="merch-title"
          >
            Poartă <em className="italic">demisolul</em> cu tine.
          </h2>
        </div>
        <p className="text-base md:text-lg max-w-md text-[hsl(215_30%_30%)]">
          Mici obiecte tipărite cu drag în tiraj limitat. Pentru comenzi, scrie-ne
          pe formularul de contact.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)]">
        {products.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="bg-background group flex flex-col"
            data-testid={`merch-card-${p.id}`}
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-[hsl(var(--secondary))]">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale-[0.1]"
              />
              <div className="absolute top-3 left-3 bg-background border border-[hsl(215_50%_16%/0.25)] px-2.5 py-1 text-[10px] uppercase tracking-[0.2em] font-bold">
                {p.tag}
              </div>
            </div>
            <div className="p-5 flex flex-col gap-3 border-t border-[hsl(215_50%_16%/0.18)]">
              <h3 className="font-display text-2xl leading-tight">{p.name}</h3>
              <div className="flex items-center justify-between mt-auto pt-2">
                <span
                  className="text-sm uppercase tracking-[0.2em] font-semibold"
                  data-testid={`merch-price-${p.id}`}
                >
                  {p.price}
                </span>
                <button
                  type="button"
                  onClick={() => handleInterest(p.name)}
                  className="text-xs uppercase tracking-[0.22em] font-semibold border-b border-[hsl(var(--foreground))] hover:text-[hsl(var(--accent))] hover:border-[hsl(var(--accent))] transition-colors pb-0.5"
                  data-testid={`merch-cta-${p.id}`}
                >
                  Sunt interesat →
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
