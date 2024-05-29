import { Autoplay, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/controller';
import { TbRosetteDiscountCheck, TbTruckDelivery, TbHeart } from "react-icons/tb";
import { RiRefund2Line } from "react-icons/ri";

const Slider = () => {
    return (
        <section className='text-center font-light text-sm'>
            <div className="hidden lg:block"> 
            <div className='flex justify-between text-white bg-slate-800 py-2 px-36 h-12 items-center'>
                <div className='flex gap-2'>
                <TbRosetteDiscountCheck className='text-xl '/>
                    <p>30-DAY SATISFACTION GUARANTEE</p>
                </div>
                <div className='flex gap-2'>
                <TbTruckDelivery className='text-xl '/>
                    <p>FREE DELIVERY ON ORDERS OVER $40</p>
                </div>
                <div className='flex gap-2'>
                <TbHeart className='text-xl '/>
                    <p>50.000+ HAPPY CUSTOMERS</p>
                </div>
                <div className='flex gap-2'>
                <RiRefund2Line className='text-xl '/>
                    <p>%100 MONEY BACK GUARANTEE</p>
                </div>
                
                
                
                
            </div>
                
            </div>
            <div className="lg:hidden"> 
                <Swiper
                    modules={[Autoplay, A11y]}
                    spaceBetween={30} // Ajusta el espacio según sea necesario
                    slidesPerView={1} // Muestra solo un slide por defecto
                    autoplay
                    className='bg-gray-800 text-white p-2'
                >
                    <SwiperSlide>
                        <div className='flex justify-center gap-4'>
                            <TbRosetteDiscountCheck className='text-2xl '/>
                            <p>30-DAY SATISFACTION GUARANTEE</p>
                            
                        </div>                     
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center gap-4'>
                            <TbTruckDelivery className='text-2xl '/>
                            <p>FREE DELIVERY ON ORDERS OVER $40</p>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center gap-4'>
                            <TbHeart className='text-2xl '/>
                            <p>50.000+ HAPPY CUSTOMERS</p>
                        </div>
                        
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='flex justify-center gap-4'>
                             <RiRefund2Line className='text-2xl '/>
                            <p>%100 MONEY BACK GUARANTEE</p>
                        </div>
                        
                    </SwiperSlide>
                </Swiper>
            </div>
        </section>
    );
};

export default Slider;
