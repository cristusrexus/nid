import Navbar from "../components/site/Navbar";
import Hero from "../components/site/Hero";
import Ribbon from "../components/site/Ribbon";
import About from "../components/site/About";
import Gallery from "../components/site/Gallery";
import Socials from "../components/site/Socials";
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
        <Gallery />
        <Socials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
