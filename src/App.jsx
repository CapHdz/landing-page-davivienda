import Title from "./components/Title";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar-landing-page";
import Timeline from "./components/Timeline";
import Descripcion from "./components/Descripcion";
import Requisitos from "./components/Requisitos";
import BotonInscripcion from "./components/BotonInscripcion";
import 'tailwindcss/tailwind.css';

function App() {
  return (
    <>
      <Navbar />
      <Title />
      <Timeline />
      <Descripcion/>
      <Requisitos/>
      <BotonInscripcion/>
      <Footer />
    </>
  );
};

export default App;
