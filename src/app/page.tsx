import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ProjectGrid from "@/components/ProjectGrid";
import ImpactBar from "@/components/ImpactBar";
import Articles from "@/components/Articles";
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
        <Articles />
        <Skills />
        <Timeline />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
