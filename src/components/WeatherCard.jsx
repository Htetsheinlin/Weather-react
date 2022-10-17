import React from 'react'
import {CiTempHigh} from "react-icons/ci"
import {BiWater} from "react-icons/bi"
import {AiOutlineCloud} from "react-icons/ai"

const WeatherCard = ({temp, humi, cloudcover, apparentTemp}) => {
  
  const average = array => array.reduce((a, b) => a + b) / array.length;
  
  const averageTemp = Math.round(average(temp)*100)/100;
  const averageHumi = Math.round(average(humi)*100)/100;
  const averageCloud = Math.round(average(cloudcover)*100)/100;
  const feelsLikeTemp = Math.round(average(apparentTemp)*100)/100;

  const minTemp = Math.min(...temp);
  const minHumi = Math.min(...humi);
  const maxTemp = Math.max(...temp);
  const maxHumi = Math.max(...humi);

  return (
    <div className='flex flex-col justify-center items-center lg:flex-row lg:items-stretch bg-[#252422]'>
        <div className='block p-6 max-w-sm text-[#FFFCF2] bg-white rounded-xl shadow-md dark:bg-[#403D39] m-5 w-80'>
            <div className='bg-[#EB5E28] p-5 rounded-xl text-2xl font-bold flex justify-between w-80 shadow-lg mb-5'>Temperatures
            <CiTempHigh className='text-3xl'/></div>
            <div className='bg-[#252422] p-5 rounded-xl text-[#EB5E28] shadow-xl'>
            Average <span className='text-2xl font-bold text-[#FFFCF2]'>{averageTemp}'C</span><br/>
            Lowest <span className='text-2xl font-bold text-[#FFFCF2]'>{minTemp}'C</span><br/>
            Highest <span className='text-2xl font-bold text-[#FFFCF2]'>{maxTemp}'C</span><br/>
            Feels Like <span className='text-2xl font-bold text-[#FFFCF2]'>{feelsLikeTemp}'C</span><br/>
            </div>
            
        </div>
        
        <div className='block p-6 max-w-sm text-[#FFFCF2] rounded-xl dark:bg-[#403D39] m-3 w-80'>
        <div className='bg-[#EB5E28] p-5 rounded-xl w-80 text-2xl flex justify-between font-bold shadow-lg mb-5'>Humidity
            <BiWater className='text-3xl' /></div>
            <div className='bg-[#252422] p-5 rounded-xl text-[#EB5E28] shadow-xl'>
            Average  <span className='text-2xl font-bold text-[#FFFCF2]'>{averageHumi}%</span><br/>
            Lowest  <span className='text-2xl font-bold text-[#FFFCF2]'>{minHumi}%</span><br/>
            Highest  <span className='text-2xl font-bold text-[#FFFCF2]'>{maxHumi}%</span><br/>
            </div>
            
        </div>
        <div className='block p-6 max-w-sm text-[#FFFCF2] rounded-xl shadow-md dark:bg-[#403D39] m-5 w-80'>
        <div className='bg-[#EB5E28] p-5 rounded-xl text-2xl flex justify-between font-bold w-80 shadow-lg mb-5'>Other
        <AiOutlineCloud className='text-3xl'/></div>
        <div className='bg-[#252422] p-5 rounded-xl text-[#EB5E28] shadow-xl'>
            <span className='text-2xl text-[#FFFCF2] font-bold'>{averageCloud}%</span> possibility of cloudcover in this area
            </div>
        </div>
        
    </div>
  )
}

export default WeatherCard