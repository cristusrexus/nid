import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Ribbon from "../components/site/Ribbon";
import About from "../components/site/About";
import Merch from "../components/site/Merch";
import ContactSection from "../components/site/ContactSection";
import Footer from "../components/site/Footer";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background text-foreground" data-testid="landing-page">
      <Navbar />
      <main>
        <Hero />
        <Ribbon />
        <About />
        <Merch />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
