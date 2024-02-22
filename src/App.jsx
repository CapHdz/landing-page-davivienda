import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar-landing-page";
import 'tailwindcss/tailwind.css';

import BotonInscripcion from "./components/BotonInscripcion"
import Descripcion from "./components/Descripcion"
import Requisitos from "./components/Requisitos"


function App() {
  return (
    <>
      <Navbar />
      <Title />
      <Descripcion/>
      <Requisitos/>
      <BotonInscripcion/>
      <Footer />
    </>
  );
};

export default App;
