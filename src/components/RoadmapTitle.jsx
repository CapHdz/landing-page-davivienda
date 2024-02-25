import React from 'react';

export default function RoadmapTitle() {
  return (
    <div className="bg-cover flex flex-col items-center justify-center md:items-start md:justify-end rounded-[1rem] m-4 shadow-2xl md:h-[500px]" style={{ backgroundImage: `url(src/img/uni.jpeg)` }}>
      <div className='p-[3rem]'>
        <h1 className='text-4xl md:text-5xl font-bold text-yellow-600 text-center md:text-left'>Hackathon DAVIVIENDA</h1>
        <h3 className='text-2xl md:text-3xl font-bold text-red-500 text-center md:text-left'>Timeline</h3>
      </div>
    </div>
  )
}
