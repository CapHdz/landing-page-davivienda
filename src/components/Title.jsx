import React from 'react';
import { motion } from 'framer-motion';
import { RiCheckboxBlankCircleFill } from "react-icons/ri";

const Title = () => {
  return (
    <div>
      {/* Primera sección */}
      <section id="title" className="grid grid-cols-1 md:grid-cols-2 justify-center items-center">
        <div className="flex flex-col items-center justify-center p-4 xl:p-16">
          <h1 className="text-5xl font-bold leading-[5rem] mb-8 text-center md:text-left">
            Llega la Primer{" "}
            <span className="text-6xl text-red-500 py-2 px-4 border-8 border-red-500 relative inline-block">
              Hackathon
              <RiCheckboxBlankCircleFill className="text-black text-base absolute -left-5 -top-5 p-2 bg-red-500 rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-black text-base absolute -right-5 -top-5 p-2 bg-red-500 rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-black text-base absolute -right-5 -bottom-5 p-2 bg-red-500 rounded-full box-content" />
              <RiCheckboxBlankCircleFill className="text-black text-base absolute -left-5 -bottom-5 p-2 bg-red-500 rounded-full box-content" />
            </span>
          </h1>
          <h1 className="text-xl xl:text-3xl font-bold mb-8 text-red-700">
            Abierta con jóvenes universitarios en El Salvador
          </h1>
          <div className="text-center xl:text-left xl:col-span-4 flex flex-col justify-center">
            <p className='text-blue-800 italic text-3xl mb-4'>¡Innova y gana hasta $3,000 en efectivo!</p>
            <button className="w-full xl:w-auto bg-yellow-500 text-black py-2 px-8 rounded-xl text-xl font-bold">
              ¡Inscríbete Aquí!
            </button>
          </div>
          <div className="xl:col-span-2 flex flex-wrap p-4">
          <div className="mb-4 mx-3">
            <p className="text-gray-800 font-semibold text-2xl">Fecha:</p>
            <p>19 de marzo</p>
          </div>
          <div className="mb-4 mx-3">
            <p className="text-gray-800 font-semibold text-2xl">Hora:</p>
            <p>3:00 pm</p>
          </div>
          <div className="mb-4 mx-3">
            <p className="text-gray-800 font-semibold text-2xl">Lugar:</p>
            <p>Universidad XXXXXXXXXXXXXX</p>
          </div>
        </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mt-8 md:mt-0 bg-black bg-opacity-30 w-full h-full flex justify-center items-center"
        >
          <motion.img
            src="src/img/img1.jpg"
            alt="Descripción de la imagen"
            className="w-full max-w-lg mx-0"
            style={{ opacity: 0 }} // Configuración inicial de opacidad de la imagen
            animate={{ opacity: 1 }} // Animar la opacidad de la imagen
            transition={{ duration: 0.5 }} // Duración de la animación
          />
        </motion.div>
      </section>

    </div>
  );
}

export default Title;