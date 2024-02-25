import React, { useState } from 'react';

function Requisitos() {
  const [carrerasVisible, setCarrerasVisible] = useState(false);
  const [perfilVisible, setPerfilVisible] = useState(false);

  const toggleCarreras = () => {
    setCarrerasVisible(!carrerasVisible);
  };

  const togglePerfil = () => {
    setPerfilVisible(!perfilVisible);
  };

  return (
    <section id='requisitos'>
      <h1 className='text-5xl font-bold text-center text-[#048ABF] p-3'>Requisitos:</h1>
      <div className='flex items-center justify-center p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-3/4'>
          <div>
            <div className='border rounded-xl bg-gradient-to-r from-red-800 to-red-500 p-4 m-2' onMouseEnter={toggleCarreras} onMouseLeave={toggleCarreras}>
            <h2 className="text-2xl font-bold text-white">Carreras Afines</h2>
              <div className="relative w-full h-48 overflow-hidden">
                <img className="object-cover w-full h-full" src="/src/img/requisitos_img1.jpg" alt="Carreras Afines" />
              </div>
              {carrerasVisible && (
                <ul className='text-gray-200 p-4 list-disc break-all'>
                  <li>Lic. en innovación y transformación digital.</li>
                  <li>Ing. en Software y Negocios digitales.</li>
                  <li>Ingenierías Industrial, Informática, en Sistemas,<br /> y de Negocios.</li>
                  <li>Diseño estratégico.</li>
                  <li>Comunicación y Estrategia Digital.</li>
                  <li>Administración de Empresas y mercadeo.</li>
                  <li>Ciencia de datos (programadores).</li>
                  <li>Diseñadores UI/UX.</li>
                </ul>
              )}
            </div>
          </div>
          <div>
            <div className='border rounded-xl bg-gradient-to-r from-red-800 to-red-500 p-4 m-2' onMouseEnter={togglePerfil} onMouseLeave={togglePerfil}>
            <h2 className="text-2xl font-bold text-white">Perfil Requerido</h2>
              <div className="relative w-full h-48 overflow-hidden">
                <img className="object-cover w-full h-full" src="/src/img/requisitos_img2.jpg" alt="Perfil de Estudiantes" />
              </div>
              {perfilVisible && (
                <ul className='text-gray-200 p-4 list-disc break-all'>
                  <li>Equipos de 2 a 5 personas conformados por startups en <br />etapa temprana.</li>
                  <li>Edades entre 18 y 29 años, estudiantes en formación, <br /> egresados o recién graduados.</li>
                  <li>Habilidades y destrezas en el diseño de Mockup, creación de prototipos.</li>
                  <li>Destreza en programación conocimiento uno o varios <br /> lenguajes: Android: kotlin, iOS: swift, Middleware: java,<br /> Backend (core del banco): RPG.</li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Requisitos;
