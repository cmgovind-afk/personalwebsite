import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import ImpactBar from "@/components/ImpactBar";
import Skills from "@/components/Skills";
import Timeline from "@/components/Timeline";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <ProjectGrid />
        <ImpactBar />
        <Skills />
        <Timeline />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
