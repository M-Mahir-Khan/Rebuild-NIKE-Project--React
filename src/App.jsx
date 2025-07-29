
import './assets/style.css';
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import TopShoes from "./components/TopShoes"
import CounterSection from './components/CounterSection';
import ProductSection from './components/ProductSection';
import NewArticles from './components/NewArticles';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopShoes />
      <CounterSection />
      <ProductSection />
      <NewArticles />
    </>
  );
}


export default App;
