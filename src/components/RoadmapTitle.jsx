import React from 'react'

export default function RoadmapTitle() {
  return (
    <div
      className="bg-cover flex flex-col items-start justify-end rounded-[1rem] m-4 shadow-2xl h-[500px]"
      style={{ backgroundImage: `url(src/img/uni.jpeg)` }}
    >
      <div className='p-[3rem]'>
      <h1 className='text-5xl  font-bold text-yellow-600 '>Hackathon DAVIVIENDA</h1>
      <h3 className='text-3xl font-bold text-red-500 '>Timeline</h3>
      </div>
    </div>
  )
}
