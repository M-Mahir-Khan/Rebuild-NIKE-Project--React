import { Routes, Route } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Home from "./pages/home";
import Cloths from "./pages/cloths";
import About from './pages/about';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cloths" element={<Cloths />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}


export default App;