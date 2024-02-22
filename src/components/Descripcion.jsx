import React from 'react'

export default function Descripcion() {
  return (
    <section className='flex-3 w-1/8 p-9 items-center grid grid-cols-2 gap-9'>
        <div>
            <h2 className='text-center font-extrabold text-4xl text-red-600 leading-relaxed'>¡Prepárese! Muy pronto visitaremos las universidades con la Hackathon en la que junto a su grupo podrán ganar hasta $3000</h2><br/>
        </div>
        <div className='text-center text-xl font-semibold gap-8 justify-center rounded-lg p-6 shadow-2xl shadow-gray-400 text-white bg-gradient-to-r from-red-500 to-red-800'>
            <p>Durante el desarrollo de la Hackathon los equipos deben conceptualizar, prototipar a nivel de mockups y desarrollar la nueva 
            funcionalidad y su código fuente.</p><br/>
            <p>Diseñar la Oferta de valor y experiencia para los jóvenes universitarios que fortalezca el ecosistema digital de pagos en las 
            universidades.</p><br/>
        </div>
    </section>
  )
}
