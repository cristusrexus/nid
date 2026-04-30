import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const GUITAR_IMG =
  "https://images.pexels.com/photos/10587476/pexels-photo-10587476.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";

const initialContact = { name: "", phone: "", subject: "", message: "" };
const initialLessons = {
  full_name: "",
  phone: "",
  experience: "incepator",
  message: "",
};

export default function ContactSection() {
  const [contact, setContact] = useState(initialContact);
  const [lessons, setLessons] = useState(initialLessons);
  const [contactLoading, setContactLoading] = useState(false);
  const [lessonsLoading, setLessonsLoading] = useState(false);

  const submitContact = async (e) => {
    e.preventDefault();
    setContactLoading(true);
    try {
      await axios.post(`${API}/contact`, contact);
      toast.success("Mesaj trimis!", {
        description: "Îți răspundem în cel mai scurt timp.",
      });
      setContact(initialContact);
    } catch (err) {
      toast.error("Eroare la trimitere", {
        description: err?.response?.data?.detail || "Verifică datele și încearcă din nou.",
      });
    } finally {
      setContactLoading(false);
    }
  };

  const submitLessons = async (e) => {
    e.preventDefault();
    setLessonsLoading(true);
    try {
      await axios.post(`${API}/lessons/signup`, lessons);
      toast.success("Înscriere trimisă!", {
        description: "Te contactăm pentru programarea primei lecții.",
      });
      setLessons(initialLessons);
    } catch (err) {
      toast.error("Eroare la înscriere", {
        description: err?.response?.data?.detail || "Verifică datele și încearcă din nou.",
      });
    } finally {
      setLessonsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="border-t border-[hsl(215_50%_16%/0.2)]"
      data-testid="contact-section"
    >
      <div className="container-x py-20 md:py-28">
        <div className="overline mb-5">
          <span className="stamp-tag">Hai să vorbim</span>
        </div>
        <h2
          className="font-display text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight max-w-3xl mb-16"
          data-testid="contact-title"
        >
          Scrie-ne sau{" "}
          <span className="text-[hsl(var(--accent))]">prinde o chitară</span> alături de noi.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[hsl(215_50%_16%/0.18)] border border-[hsl(215_50%_16%/0.18)]">
          {/* General Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="bg-background p-8 md:p-12"
            data-testid="contact-form-wrap"
          >
            <div className="flex items-center gap-3 mb-2">
              <div className="w-8 h-px bg-[hsl(var(--accent))]" />
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
                Contact general
              </span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl mb-8">
              Trimite-ne un mesaj
            </h3>

            <form onSubmit={submitContact} className="space-y-6" data-testid="contact-form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  required
                  placeholder="Nume complet"
                  value={contact.name}
                  onChange={(e) => setContact({ ...contact, name: e.target.value })}
                  className="editorial-input"
                  data-testid="contact-name-input"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefon"
                  value={contact.phone}
                  onChange={(e) => setContact({ ...contact, phone: e.target.value })}
                  className="editorial-input"
                  data-testid="contact-phone-input"
                />
              </div>
              <input
                type="text"
                required
                placeholder="Subiect"
                value={contact.subject}
                onChange={(e) => setContact({ ...contact, subject: e.target.value })}
                className="editorial-input"
                data-testid="contact-subject-input"
              />
              <textarea
                required
                rows={4}
                placeholder="Mesajul tău..."
                value={contact.message}
                onChange={(e) => setContact({ ...contact, message: e.target.value })}
                className="editorial-input resize-none"
                data-testid="contact-message-input"
              />
              <button
                type="submit"
                disabled={contactLoading}
                className="btn-primary disabled:opacity-60 disabled:cursor-not-allowed"
                data-testid="contact-submit-button"
              >
                {contactLoading ? "Se trimite..." : "Trimite mesajul"}
                <Send size={14} className="ml-3" />
              </button>
            </form>

            <div className="mt-12 pt-8 border-t border-[hsl(215_50%_16%/0.18)] grid grid-cols-1 sm:grid-cols-3 gap-6 text-sm">
              <div className="flex items-start gap-3" data-testid="contact-info-email">
                <Mail size={16} className="mt-1 text-[hsl(var(--accent))]" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(215_30%_35%)]">Email</div>
                  <a href="mailto:alex@noteindemisol.ro" className="hover:text-[hsl(var(--accent))] transition-colors break-all">
                    alex@noteindemisol.ro
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3" data-testid="contact-info-phone">
                <Phone size={16} className="mt-1 text-[hsl(var(--accent))]" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(215_30%_35%)]">Telefon</div>
                  <a href="tel:+40757779762" className="hover:text-[hsl(var(--accent))] transition-colors">
                    0757 779 762
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3" data-testid="contact-info-location">
                <MapPin size={16} className="mt-1 text-[hsl(var(--accent))]" />
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-[hsl(215_30%_35%)]">Locație</div>
                  <div>Beclean, Bistrița-Năsăud</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lessons Signup */}
          <motion.div
            id="lectii"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-[hsl(var(--primary))] text-[hsl(var(--primary-foreground))] p-0 relative overflow-hidden"
            data-testid="lessons-form-wrap"
          >
            <div className="absolute inset-0 opacity-25 mix-blend-luminosity">
              <img
                src={GUITAR_IMG}
                alt=""
                className="w-full h-full object-cover"
                aria-hidden
              />
            </div>
            <div className="relative p-8 md:p-12">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-px bg-[hsl(var(--accent))]" />
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-[hsl(var(--accent))]">
                  Lecții de chitară
                </span>
              </div>
              <h3 className="font-display text-3xl md:text-4xl mb-3">
                Înscrie-te la lecții
              </h3>
              <p className="text-sm md:text-base text-[hsl(44_28%_85%)] max-w-md mb-8">
                Începători sau avansați. Lasă-ne numele și telefonul tău și te
                contactăm pentru o programare.
              </p>

              <form onSubmit={submitLessons} className="space-y-6" data-testid="lessons-form">
                <input
                  type="text"
                  required
                  placeholder="Nume complet"
                  value={lessons.full_name}
                  onChange={(e) => setLessons({ ...lessons, full_name: e.target.value })}
                  className="editorial-input !text-[hsl(var(--primary-foreground))] !border-[hsl(44_28%_85%/0.4)] placeholder:!text-[hsl(44_28%_85%/0.6)] focus:!border-[hsl(var(--accent))]"
                  data-testid="lessons-fullname-input"
                />
                <input
                  type="tel"
                  required
                  placeholder="Telefon"
                  value={lessons.phone}
                  onChange={(e) => setLessons({ ...lessons, phone: e.target.value })}
                  className="editorial-input !text-[hsl(var(--primary-foreground))] !border-[hsl(44_28%_85%/0.4)] placeholder:!text-[hsl(44_28%_85%/0.6)] focus:!border-[hsl(var(--accent))]"
                  data-testid="lessons-phone-input"
                />
                <div>
                  <label className="text-[10px] uppercase tracking-[0.25em] font-semibold text-[hsl(44_28%_85%)] block mb-3">
                    Nivel
                  </label>
                  <div className="grid grid-cols-3 gap-3" data-testid="lessons-experience-group">
                    {[
                      { v: "incepator", l: "Începător" },
                      { v: "mediu", l: "Mediu" },
                      { v: "avansat", l: "Avansat" },
                    ].map((opt) => (
                      <button
                        type="button"
                        key={opt.v}
                        onClick={() => setLessons({ ...lessons, experience: opt.v })}
                        data-testid={`lessons-experience-${opt.v}`}
                        className={`px-4 py-3 text-xs uppercase tracking-[0.18em] font-semibold border transition-all ${
                          lessons.experience === opt.v
                            ? "bg-[hsl(var(--accent))] border-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))]"
                            : "bg-transparent border-[hsl(44_28%_85%/0.4)] text-[hsl(44_28%_85%)] hover:border-[hsl(var(--accent))]"
                        }`}
                      >
                        {opt.l}
                      </button>
                    ))}
                  </div>
                </div>
                <textarea
                  rows={3}
                  placeholder="Spune-ne ce vrei să înveți (opțional)"
                  value={lessons.message}
                  onChange={(e) => setLessons({ ...lessons, message: e.target.value })}
                  className="editorial-input resize-none !text-[hsl(var(--primary-foreground))] !border-[hsl(44_28%_85%/0.4)] placeholder:!text-[hsl(44_28%_85%/0.6)] focus:!border-[hsl(var(--accent))]"
                  data-testid="lessons-message-input"
                />
                <button
                  type="submit"
                  disabled={lessonsLoading}
                  className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] transition-all duration-300 bg-[hsl(var(--accent))] text-[hsl(var(--accent-foreground))] border border-[hsl(var(--accent))] hover:bg-[hsl(var(--primary-foreground))] hover:text-[hsl(var(--primary))] disabled:opacity-60 disabled:cursor-not-allowed"
                  data-testid="lessons-submit-button"
                >
                  {lessonsLoading ? "Se trimite..." : "Vreau să mă înscriu"}
                  <Send size={14} className="ml-3" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
