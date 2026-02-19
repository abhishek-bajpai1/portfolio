import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TechExpertise from './components/TechExpertise';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import WhoIHelp from './components/WhoIHelp';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <TechExpertise />
        <CaseStudies />
        <Process />
        <WhoIHelp />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
