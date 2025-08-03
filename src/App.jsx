
import './assets/style.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import TopShoes from "./components/TopShoes"
import CounterSection from './components/CounterSection';
import ProductSection from './components/ProductSection';
import NewArticles from './components/NewArticles';
import Testimonial from './components/Testimonial';
import FaqSection from './components/FaqSection';
import CtaSection from './components/CtaSection';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import '@fortawesome/fontawesome-free/css/all.min.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopShoes />
      <CounterSection />
      <ProductSection />
      <NewArticles />
      <Testimonial />
      <FaqSection />
      <CtaSection />
      <NewsletterSection />
      <Footer/>
    </>
  );
}


export default App;
