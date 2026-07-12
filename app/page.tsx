import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Stats from '@/components/Stats';
import Projects from '@/components/Projects';
import Services from '@/components/Services';
import Achievements from '@/components/Achievements';
import LearningTimeline from '@/components/LearningTimeline';
import Experience from '@/components/Experience';
import Certifications from '@/components/Certifications';
import Blog from '@/components/Blog';
import HackerTerminal from '@/components/HackerTerminal';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import PageTransition from '@/components/PageTransition';


export default function Home() {
  return (
    <PageTransition>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Stats />
        <Projects />
        <Services />
        <Achievements />
        <LearningTimeline />
        <Experience />
        <Certifications />
        <Blog />
        <HackerTerminal />
        <Contact />
      </main>
      <Footer />
    </PageTransition>
  );
}
