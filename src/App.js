
import './App.css';
import NavigationBar from './components/NavigationBar';
import TestimonialsSection from './components/TestimonialsSection';
import Footer from './components/Footer';
import AboutSection from './components/Aboutsection';
import HeroSection from './components/HeroSection';
import HighlightsSection from './components/HighlightsSection';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <HeroSection />
      <HighlightsSection />
      <TestimonialsSection />
      <AboutSection />
      <Footer />
    </div>
  );
}

export default App;
