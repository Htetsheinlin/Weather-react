import React from 'react'
import {FaSpinner} from "react-icons/fa"

const Loading = () => {
  return (
    
    <div className='bg-[#252422] h-90 text-[#FFFCF2] text-4xl flex justify-center item-center p-12'>
      <br/>
      Loading........
      If this is taking too long, check your location permission and enable it or reload the page.
    </div>
  )
}

export default Loading
