import React from 'react'

export default function Descripcion() {
  return (
    <>
    <section id='descripcion' className='p-4 h-[100vh]'>
      <h1 className='text-5xl font-bold text-center text-red-700 pb-3'>¡Prepárate para ser un ganador!</h1>
      <h2 className='text-2xl text-center '>Llegó la Hackathon con la que ganarás hasta $3.000</h2>
      <br />
      <h4 className='text-5xl font-bold text-center text-[#048ABF] p-3'>Premios:</h4>
      <div className='grid grid-cols-1 md:grid-cols-5'>
        <div></div>
        <div className='flex items-center justify-center'>
          <div className='transition 
            duration-300 
            ease-in-out 
            transform 
            hover:scale-110
            hover:shadow-2xl bg-gradient-to-r from-[#f7e99b] via-[#f7e25ab6] to-[#ffdf12] border rounded-tl-[4rem] rounded-br-[4rem] m-5 p-5 text-center'>
            <img className='w-[200px]' src="src/img/logos/oro.png" alt="" />
            <h3 className='font-bold text-2xl '>Primer Lugar</h3>
            <p className='text-3xl font-bold text-[#048ABF]'>$3.000</p>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='transition 
            duration-300 
            ease-in-out 
            transform 
            hover:scale-110 
            hover:shadow-2xl bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 border rounded-tl-[4rem] rounded-br-[4rem] m-5 p-5 text-center'>
            <img className='w-[200px]' src="src/img/logos/plata.png" alt="" />
            <h3 className='font-bold text-2xl'>Segundo Lugar</h3>
            <p className='text-3xl font-bold text-[#048ABF]'>$2.000</p>
          </div>
        </div>
        <div className='flex items-center justify-center'>
          <div className='transition 
            duration-300 
            ease-in-out 
            transform 
            hover:scale-110
            hover:shadow-2xl bg-gradient-to-r from-[#f7aa63] via-[#f7a457] to-[#B87333] border rounded-tl-[4rem] rounded-br-[4rem] m-5 p-5 text-center'>
            <img className='w-[200px]' src="src/img/logos/bronce.png" alt="" />
            <h3 className='font-bold text-2xl'>Tercer Lugar</h3>
            <p className='text-3xl font-bold text-[#048ABF]'>$1.000</p>
          </div>
        </div>
        <div></div>
      </div>
    </section>
    </>
  )
}
