import React from 'react'
import {AiFillInstagram, AiFillGithub, AiFillLinkedin} from "react-icons/ai"
import {BsFillPersonFill} from "react-icons/bs"

const Footer = () => {
  return (
    <div className=' flex justify-between bg-[#EB5E28] text-[#FFFCF2] p-3 bottom-0'>
      <span>Created by @Htet Shein Lin</span>
      <div className='flex text-2xl'>
        <a href="https://www.instagram.com/aye_ly_hok_tr_bl/" target="_blank"><AiFillInstagram className='mr-2'/></a>
        <a href="https://github.com/Htetsheinlin" target="_blank"><AiFillGithub className='mr-2'/></a>
        <a href="https://www.linkedin.com/in/htet-shein-l-a43295101/" target="_blank"><AiFillLinkedin className='mr-2'/></a>
        <a href="https://personal-portforlio-d3rvcvmqy-htetsheinlin.vercel.app/" target="_blank"><BsFillPersonFill className='mr-2'/></a>
      </div>
    </div>
  )
}

export default Footer
