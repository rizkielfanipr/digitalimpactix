import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PaketKami from './components/PaketKami';
import Template from './components/Template';
import Faq from './components/Faq';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/Floating';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <PaketKami />
      <Template />
      <Faq />
      <Contact />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
