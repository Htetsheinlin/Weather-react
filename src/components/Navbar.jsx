import React from 'react'
import {BsFillCloudHailFill} from "react-icons/bs"

const Navbar = () => {
  return (
    <a href='#' target="_blank">
    <div className=' flex justify-start text-2xl font-bold text-[#FFFCF2] bg-[#EB5E28] shadow-2xl p-6 px-12'>
      <BsFillCloudHailFill className='mt-1 mr-3'/>
      Weather
      
      
    </div></a>
  )
}

export default Navbar