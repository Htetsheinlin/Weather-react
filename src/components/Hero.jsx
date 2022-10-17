import React from 'react'

const Hero = ({address}) => {
  return (
    <div className='flex justify-center bg-[#252422] font-bold text-2xl text-[#FFFCF2] p-7 px-12 shadow-lg font-Oswald'>
      {address}
    </div>
  )
}

export default Hero
