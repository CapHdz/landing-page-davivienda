import React from 'react'

export default function Requisitos() {
  
  return (
    <section id='requisitos'>
      <h1 className='text-5xl font-bold text-center text-[#048ABF] p-3'>Requisitos:</h1>
      <div className='flex items-center justify-center p-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 w-3/4'>
          <div>
          <div className='border rounded-xl bg-gradient-to-r from-red-800 to-red-500 p-4 m-2'> 
            <h1 className='text-2xl font-bold text-white '>Carreras Afines</h1>
            <details>
              <summary className='text-gray-200'>Ver más:</summary>
                <div className=' text-gray-200 p-4'>
                <ul className='list-disc break-all'>
                  <li>Lic. en innovación y transformación digital.</li>
                  <li>Ing. en Software y Negocios digitales.</li>
                  <li>Ingenierías Industrial, Informática, en Sistemas,<br /> y de Negocios.</li>
                  <li>Diseño estratégico.</li>
                  <li>Comunicación y Estrategia Digital.</li>
                  <li>Administración de Empresas y mercadeo.</li>
                  <li>Ciencia de datos (programadores).</li>
                  <li>Diseñadores UI/UX.</li>
                </ul>
                </div>
            </details>
          </div>
          </div>
          <div>
          <div className='border rounded-xl bg-gradient-to-r from-red-800 to-red-500 p-4 m-2'> 
            <h1 className='text-2xl font-bold text-white '>Perfil de estudiantes</h1>
            <details>
              <summary className='text-gray-200'>Ver más:</summary>
                <div className=' text-gray-200 p-4'>
                  <ul className='list-disc break-all'>
                    <li>Equipos de 2 a 5 personas conformados por startups en <br />etapa temprana.</li>
                    <li>Edades entre 18 y 29 años, estudiantes en formación, <br /> egresados o recién graduados.</li>
                    <li>Habilidades y destrezas en el diseño de Mockup, creación de prototipos.</li>
                    <li>Destreza en programación conocimiento uno o varios <br /> lenguajes: Android: kotlin, iOS: swift, Middleware: java,<br /> Backend (core del banco): RPG.</li>
                  </ul>
                </div>
            </details>
          </div>
          </div>
        </div>
      </div>
    </section>
  )
}
