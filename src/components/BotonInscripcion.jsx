import React from 'react'

export default function BotonInscripcion() {
  return (
    <section className='flex-3 w-1/8 p-9 items-center grid grid-cols-1'>
        <div className='text-center text-black'>
            <p className='text-3xl font-bold'>¡No te pierdas esta gran oportunidad de innovar para tu ciudad!</p>
        </div><br/><br/>
        <div className='text-center'>
          <button className='rounded-full bg-gradient-to-r from-red-500 to-red-800 text-white font-extrabold text-2xl p-4'>Inscríbase y participe</button>
        </div>
    </section>
  )
}
