function Footer() {
  return (
    <>
    
<footer className="bg-gradient-to-r from-red-100 via-[#d8370f] to-red-700">
  <div className="max-w-screen-xl px-2 py-2 mx-auto sm:px-6 lg:px-8">
    <div className=" grid-cols-1 gap-8 lg:grid-cols-3 flex justify-start items-start">
      <div className="py-2">
      <img src="/src/img/logos/Davivienda_Logo.png" className="mr-5 h-6 sm:h-9" alt="logo_davivienda" />
        <p className="max-w-xs mt-4 text-xl text-gray-600 font-bold">
          Nuestro aliados:
        </p>
        <div className="flex mt-4 space-x-10 text-gray-600">
           <a className="hover:opacity-75" href ="#" target="_blank" rel="noreferrer">
            <span className="sr-only"> Dribbble </span>
            <img src="/src/img/logos/daviplata.png" className="h-12" aria-hidden="true" />
          </a>
          <a className="hover:opacity-75" href ="#" target="_blank" rel="noreferrer">
            <span className="sr-only"> Dribbble </span>
            <img src="/src/img/logos/ues-logo.png" className="h-12" aria-hidden="true" />
          </a>
          <a className="hover:opacity-75" href ="#" target="_blank" rel="noreferrer">
            <span className="sr-only"> Dribbble </span>
            <img src="/src/img/logos/utec-logo.png" className="h-12" aria-hidden="true" />
          </a>
          <a className="hover:opacity-75" href ="#" target="_blank" rel="noreferrer">
            <span className="sr-only"> Dribbble </span>
            <img src="/src/img/logos/kodigo-logo.png" className="h-10" aria-hidden="true" />
          </a>
        </div>
      </div>
    </div>
    <p className="mt-2 text-xs text-white text-right font-bold">
      © Kodigo Academia Creativa
    </p>
  </div>
</footer>
    </>
  )
}

export default Footer
