import React from 'react';

export default function Descripcion() {
  return (
    <section id='descripcion' className='p-3 flex flex-col justify-center items-center'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center text-red-700 mb-4 animate-bounce'>¡Prepárate para ser un ganador!</h1>
      <h2 className='text-lg md:text-xl lg:text-2xl text-center mb-6'>Llegó la Hackathon con la que ganarás hasta $3.000</h2>
      <h4 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#048ABF] mb-6'>Premios:</h4>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full'>
        <Premio imagen='src/img/logos/oro.png' titulo='Primer Lugar' monto='$3.000' colores={['#f7e99b', '#f7e25ab6', '#ffdf12']} />
        <Premio imagen='src/img/logos/plata.png' titulo='Segundo Lugar' monto='$2.000' colores={['gray-200', 'gray-400', 'gray-500']} />
        <Premio imagen='src/img/logos/bronce.png' titulo='Tercer Lugar' monto='$1.000' colores={['#f7aa63', '#f7a457', '#B87333']} />
      </div>
    </section>
  );
}

function Premio({ imagen, titulo, monto, colores }) {
  return (
    <div className={`flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-110 hover:shadow-2xl bg-gradient-to-r from-${colores[0]} via-${colores[1]} to-${colores[2]} border rounded-[2rem] p-5 text-center`}>
      <img className='w-[200px] sm:w-[250px] lg:w-[300px] mb-4' src={imagen} alt={titulo} />
      <h3 className='text-lg md:text-xl lg:text-2xl font-bold mb-2'>{titulo}</h3>
      <p className='text-xl md:text-2xl lg:text-3xl font-bold text-[#048ABF]'>{monto}</p>
    </div>
  );
}
