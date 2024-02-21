// Navbar.js
import React from "react";

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#f21d2f] p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-white font-bold text-lg"
          onClick={() => scrollToSection("top")}
        >
          HACKATHON
        </div>
        <div className="space-x-4">
          <button
            className="text-white hover:text-[#f2ce1b] cursor-pointer"
            onClick={() => scrollToSection("acerca")}
          >
            Acerca del evento
          </button>
          <button
            className="text-white hover:text-[#f2ce1b] cursor-pointer"
            onClick={() => scrollToSection("roadmap")}
          >
            RoadMap
          </button>
          <button
            className="text-white hover:text-[#f2ce1b] cursor-pointer"
            onClick={() => scrollToSection("fechas")}
          >
            Fechas importantes
          </button>
          <button
            className="text-white hover:text-[#f2ce1b] cursor-pointer"
            onClick={() => scrollToSection("aliados")}
          >
            Aliados
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
