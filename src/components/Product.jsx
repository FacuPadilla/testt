import React from 'react'
import { IoMdStar } from "react-icons/io";
import { TbPointFilled } from "react-icons/tb";
import { RiDiscountPercentFill } from "react-icons/ri";
import { FaCheck } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { IoLockClosedOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";

const Product = () => {
  return (
    <div className='mt-6 lg:px-20'>

        <div className='lg:grid lg:grid-cols-2 lg:bg-[#fafafa] pt-8'>
            
        <div className='lg:col-span-1 lg:block hidden'>
            <div className='w-full h-full flex flex-col justify-center '>
            <img src="proud.png" alt="" className=' w-[90%] h-[82%] lg:block hidden pb-10 pl-10'/>
            <div className='px-10'>
                <div className='bg-[#ffffff]'>
                <div className='flex gap-4 pl-10 py-3 '>
                    <div className=''>
                        <img src="perfil.png" alt="" width={65} height={65} className='' />
                    </div>

                    <div className=''>
                        <div className='flex h-[50%] items-center'>
                        <IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/>
                        </div>
                        <div className='flex gap-3 h-[50%]  justify-center items-center '>
                            <p className='font-bold'>Ken T.</p>
                            <MdVerified className='text-[#72bfa8]' />
                            <p className='text-[#72bfa8]'>Verified Customer</p>

                        </div>
                       
                        
                    </div>
                    </div>
                    
                        <div className='pl-10'>
                            "As soon as the Clarifions arrived I put one in my bedroom. This was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful"
                        </div>
                </div>
            </div>
             
            </div>        
        </div>
        

        <div>
            {/* title */}
        <h1 className='text-[28px] lg:text-[40px] px-4 text-center'>
        <span className='text-blue-400'>ONE TIME ONLY</span> Special Price For 6 Extra
         Clarifion For Only <span className='text-blue-400'>$14 Each</span> ($84.00 Total!)
        </h1>
        {/* Product info */}
        <div className='mt-6 px-4'>
        <div className='grid grid-cols-6 gap-1 h-32'>
            <div className='bg-blue-500 rounded-lg col-span-2 items-center justify-center flex h-24 w-24 lg:h-32 lg:w-28'>
                <img src="product.png" alt="" className='h-20 w-16 lg:h-28 lg:w-20' />
            </div>
            
            <div className=' col-span-3 relative lg:right-10'>
                <p className='text-lg'>Clarifion Air Lonizer</p>
                <div className='flex gap-1'>
                <IoMdStar className='text-yellow-500' /><IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/><IoMdStar className='text-yellow-500'/>
                </div>
                <div className='flex mt-4 items-center'>
                    <TbPointFilled className='text-blue-500'/>
                    <p className='text-gray-500'>12 left in stock</p>
                </div>
                <div className='absolute lg:w-[350px] lg:block hidden text-sm my-2'>
                <p >Symply plug a Clarifon into any standard outlet and replace bulky
                , expensive air purifiers with a simple
                </p>
                </div>
                
                
            </div>
            <div className='text-center flex gap-1'>
                <p className='text-sm text-decoration: line-through text-gray-500'>$180</p>
                <p className='text-lg text-blue-500 font-bold lg:text-2xl'>$84</p>

            </div>

        </div>

        <div className='text-center text-sm text-gray-600 lg:hidden'>
            <p>Symply plug a Clarifon into any standard outlet and replace bulky
                , expensive air purifiers with a simple
            </p>
        </div>
        <div className='my-6'>
            <div className='flex items-center gap-2 lg:my-2'>
                <FaCheck className='text-blue-500'/> <p> Negative Ion Technology may <span className='font-bold'>help with allergens</span></p>
            </div>
           <div  className='flex items-center gap-2 lg:my-2'>
           <FaCheck className='text-blue-500'/><p>Designed for <span className='font-bold'>air rejuvenation</span></p>
           </div>
            <div  className='flex items-center gap-2 lg:my-2'>
            <FaCheck className='text-blue-500'/><p><span className='font-bold'>Perfect for every room</span>in all types of places</p>
            </div>
            
        </div>
        <div className='bg-[#edf3fd]  rounded-lg flex items-center justify-center gap-2 py-4 px-6'>
        <RiDiscountPercentFill className='text-blue-500 text-5xl'/>
            <p className='text-md'>Save <span className='text-blue-500'>53%</span> and get <span className='text-blue-500'>6 extra Clarifision</span> for only <span className='text-blue-500'>$14 Each</span></p>
        </div>

        <div className='text-white flex items-center justify-center mt-6'>
            <button className='bg-[#59ae43] rounded-full h-16 py-4 px-6 w-full font-medium flex items-center justify-center gap-1'>YES-CLAIM MY DISCOUNT<FaArrowRight/></button>
            
        </div>

            <div className=' rounded-xl my-4 border border-gray-300 h-24 text-sm '>
                <div className='  grid grid-cols-3 h-[50%] justify-center items-center text-center border-b-[1px] border-gray-300 '>
                    <div className='col-span-1' >
                        <p>Free Shipping</p>
                    </div>

                    <div className=' col-span-2 border-l-[1px] border-gray-300 flex gap-1 items-center justify-center'>
                    <IoLockClosedOutline />
                        <p>Secure 256-Bit SSL Encryption</p>
                    </div>

                </div>

                <div className='h-[50%] text-center flex items-center justify-center'>
                    <div className='flex gap-1'>
                        <div className=' border-[1px] w-9  rounded-md'>
                            <img src="visa.png" alt="" />
                        </div>
                        <div className=' border-[1px] w-9 rounded-md flex items-center justify-center'>
                            <img src="paypal.png" alt="" className='h-[60%]'/>
                        </div>
                        <div className=' border-[1px] w-9 rounded-md'>
                            <img src="master.png" alt="" />
                        </div>
                        <div className=' border-[1px] w-9 rounded-md'>
                            <img src="google.png" alt="" />
                        </div>
                        <div className=' border-[1px] w-9 rounded-md'>
                            <img src="apple.png" alt="" className='w-full h-[90%]' />
                        </div>
                        <div className=' border-[1px] w-9 rounded-md'>
                            <img src="amex.png" alt="" className='h-[90%]'/>
                        </div>
                    </div>

                </div>

            </div>

            <div className='text-center'>
                <h1 className='lg:text-2xl text-red-500 underline'>NO THANKS, I DON'T WANT THIS.</h1>
            </div>

            <div className='flex justify-center  mt-10'>
                <div className='h-full w-full lg:w-[50%]'>
                    <img src="satis.png" alt="" className='lg:w-40'  />
                </div>

                <div className=''>
                    <p className='text-sm lg:h-full lg:w-full lg:text-lg lg:py-4 '>If you are not completely thrilled with your Clarifion - We
                        have a <span className='font-bold'>30 day satisfaction guarantee. </span>Please refer to our
                        return policy at the bottom of the page for more details.
                        Happy Shopping!
                    </p>
                </div>


            </div>


        </div>
        </div>
        </div>


        
        
        

    </div>
  )
}

export default Product