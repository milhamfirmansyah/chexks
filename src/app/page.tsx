import './styles/navbar.css';
import './styles/hero.css';
import './styles/about.css';
import './styles/workflow.css';
import './styles/feature.css';
import './styles/footer.css';
import './styles/company.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Workflow from './components/Workflow';
import Feature from './components/Feature';
import Company from './components/Company';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Workflow />
      <Feature />
      <Company />
      <Footer />
    </div>
  );
}
