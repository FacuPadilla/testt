import React from 'react'
import { IoLockClosedOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className='lg:flex lg:justify-between lg:px-20 text-white text-center w-full h-24 bg-slate-800 mt-10 text-sm'>
        <div className='flex text-center h-[50%] lg:h-full lg:gap-2 lg:items-center'>
            <p className='w-[40%] pr-2 flex items-center justify-center border-r-[1px] h-[50%] lg:h-[20%] mt-6'>Copyright (C) 2023</p>
            <p className='w-[60%] flex items-center justify-center h-[50%] lg:h-[20%] mt-6'>clarifionsupport@clarifion.com</p> 
        </div>
        <div className='h-[50%] gap-2 flex items-center justify-center lg:h-full'>
            <IoLockClosedOutline className='lg:mt-6'/>
            <p className='lg:mt-6'>Secure 256-Bit SSL Encryption</p>
        </div>
    </div>
  )
}

export default Footer