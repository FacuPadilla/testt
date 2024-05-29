import React from 'react'
import { IoIosCheckmarkCircle } from "react-icons/io";
import { PiNumberCircleThreeFill, PiNumberCircleFour } from "react-icons/pi";

const Header = () => {
  return (
    <div>
        {/* LOGOS */}
        <div className='flex h-18 lg:h-24 lg:justify-center lg:items-center lg:px-20   px-4'>
            <div className='w-[50%]'>
                <img src="clarifion.png" alt="" width={120} height={120} className='lg:w-[200px]'/>
            </div>
            <div className='flex justify-end items-center lg:gap-10 gap-4 w-[50%] '>
                <img src="secure.png" alt="" width={50} className='h-14 lg:w-[100px] lg:h-20'/>
                <img src="norton.png" alt="" width={50} className='h-10 lg:w-[100px] lg:h-26'/>
            </div>
        </div>
        {/*  title*/}
        <div className='text-center mt-6'>
            <h1 className='lg:text-5xl text-4xl'>Wait ! Your Order In Progress.</h1>
            <h3 className='mt-4 text-gray-500 lg:text-2xl text-xl'>Lorem Ipsum, Dolor Sit Amet Consectetur Adipisicing </h3>
        </div>

        {/* Steps */}
        <div className='mt-10' >
            <ul className='flex text-center items-center lg:px-20  px-2 gap-1'>
                <li className='flex flex-col w-[25%] items-center lg:flex-row  lg:justify-center lg:gap-3'>
                <IoIosCheckmarkCircle className='text-2xl lg:text-5xl text-[#85bf55] '/>
                   <p className='text-sm lg:text-xl'><span className='hidden lg:inline'>Step 1 : </span>Cart Review</p> 
                </li>
                <li className='flex flex-col items-center w-[25%] lg:flex-row lg:justify-center lg:gap-3'>
                <IoIosCheckmarkCircle className='text-2xl lg:text-5xl text-[#85bf55]'/>
                   <p className='text-sm lg:text-xl'><span className='hidden lg:inline'>Step 2 : </span>Checkout</p>
                </li>
                <li className='flex flex-col items-center w-[25%] lg:flex-row lg:justify-center lg:gap-3'>
                <PiNumberCircleThreeFill className='text-2xl lg:text-5xl text-blue-600'/>
                   <p className='font-bold text-sm lg:text-xl'><span className='hidden lg:inline'>Step 3 : </span>Special Offer</p>
                </li>
                <li className='flex flex-col items-center w-[25%] lg:flex-row lg:justify-center lg:gap-3'>
                <PiNumberCircleFour className='text-2xl lg:text-5xl  text-blue-600'/>
                  <p className='text-sm lg:text-xl'><span className='hidden lg:inline'>Step 4 : </span>Confirmation </p> 
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Header