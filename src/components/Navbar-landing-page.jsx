import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faInfoCircle, faAward, faClock } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-red-700 to-red-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white font-bold text-lg cursor-pointer flex items-center"
          onClick={() => scrollToSection("top")}
        >
          <img className='h-12 mr-2' src="src/img/logos/descarga.png" alt="Logo" />
          <span>Hackathon Davivienda</span>
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-16 right-4 bg-gray-800 text-white p-4 rounded-md shadow-md md:hidden z-10">
          <button
            className="block text-white hover:text-yellow-400 mb-2"
            onClick={() => scrollToSection("title")}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Acerca del Evento
          </button>
          <button
            className="block text-white hover:text-yellow-400 mb-2"
            onClick={() => scrollToSection("timeline")}
          >
            <FontAwesomeIcon icon={faClock} className="mr-2" />
            Timeline
          </button>
          <button
            className="block text-white hover:text-yellow-400 mb-2"
            onClick={() => scrollToSection("descripcion")}
          >
            <FontAwesomeIcon icon={faAward} className="mr-2" />
            Premios
          </button>
          <button
            className="block text-white hover:text-yellow-400 mb-2"
            onClick={() => scrollToSection("Requisitos")}
          >
            <FontAwesomeIcon icon={faInfoCircle} className="mr-2" />
            Información
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

