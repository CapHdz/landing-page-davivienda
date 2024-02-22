import React from 'react'

export default function Requisitos() {
  return (
    <section className='flex-3 w-1/8 p-9 items-center grid grid-cols-3 gap-9'>
        <div className='text-left rounded-lg p-9 shadow-2xl shadow-gray-400 text-white bg-gradient-to-r from-red-500 to-red-800'>
            <span className='font-semibold text-xl'>Alcance:</span><br/><br/>
            <ul className='list-disc break-all'>
                <li>Prototipo funcional de la nueva oferta de valor dentro de Daviplata.</li>
                <li>Código y mockups de la propuesta.</li>
            </ul><br/>
            <span className='font-semibold text-xl'>Premios:</span><br/><br/>
            <ul className='list-disc break-all'>
              <li>Primer lugar: $3000.00</li>
              <li>Segundo lugar: $2000.00</li>
              <li>Tercer lugar: $1000.00</li>
            </ul>
        </div>
      <div className='text-left gap-8 justify-center rounded-lg p-9 shadow-2xl shadow-gray-400 text-white bg-gradient-to-r from-red-500 to-red-800'>
      <span className='text-center text-xl font-semibold'>Carreras afines a:</span><br/><br/>
        <ul className='list-disc break-all'>
          <li>Lic. en innovación y transformación digital.</li>
          <li>Ing. en Software y Negocios digitales.</li>
          <li>Ingenierías Industrial, Informática, en Sistemas, y de Negocios.</li>
          <li>Diseño estratégico.</li>
          <li>Comunicación y Estrategia Digital.</li>
          <li>Administración de Empresas y mercadeo.</li>
          <li>Ciencia de datos (programadores).</li>
          <li>Diseñadores UI/UX.</li>
        </ul>
      </div>
      <div className='text-left gap-8 justify-center rounded-lg p-9 shadow-2xl shadow-gray-400 text-white bg-gradient-to-r from-red-500 to-red-800'>
        <span className='text-center text-xl font-semibold break-all'>Perfil de estudiantes:</span><br/><br/>
          <ul className='list-disc break-all'>
            <li>Equipos de 2 a 5 personas conformados por startups en etapa temprana.</li>
            <li>Edades entre 18 y 29 años, estudiantes en formación, egresados o recién graduados.</li>
            <li>Habilidades y destrezas en el diseño de Mockup, creación de prototipos.</li>
            <li>Destreza en programación conocimiento uno o varios lenguajes: Android:
                kotlin, iOS: swift, Middleware: java, Backend (core del banco): RPG.</li>
            </ul>
      </div>
    </section>
  )
}
