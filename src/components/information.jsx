import React from 'react'

const information = () => {
  return (
    <>
    <div className='flex justify-center bg-[#252422] text-[#FFFCF2]  text-3xl font-bold pt-6'>About</div>
    <div className='flex justify-center bg-[#252422] text-[#FFFCF2] px-12 py-6'>
        This weather page is a page displaying current weather condition happening at your current position.
    </div>
    <div className='flex justify-center bg-[#252422] text-[#FFFCF2]  text-2xl font-bold pt-6'>Created using</div>
    <div className='lg:flex lg:justify-center bg-[#252422] text-[#FFFCF2] px-12 py-6'>
        This weather page is created using <a href="https://open-meteo.com/en"
                                                    className="text-[#EB5E28] hover:underline"
    > Open Meteo weather API</a>. More features are to be added later.
    </div>
    </>
  )
}

export default information