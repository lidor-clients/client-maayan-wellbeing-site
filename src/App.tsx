import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Workshop from './components/Workshop';
import LeadMagnets from './components/LeadMagnets';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Workshop />
        <LeadMagnets />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
