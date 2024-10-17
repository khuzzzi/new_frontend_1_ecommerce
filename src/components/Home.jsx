import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import { FaAngleRight } from "react-icons/fa6";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"; // Make sure this path is correct according to your project structure
// import banner from "";
// import iphoneBanner from "./public/images/iconic_STORY_LEVEL_BANNER_1600x483.jpg";
import Item from "./Item";

import { TbTruckDelivery } from 'react-icons/tb';
import { useSelector } from 'react-redux';

const Home = () => {
  

    const {homeProducts} = useSelector((state)=>state.homeProducts)
    console.log(homeProducts)
    return (
        <>
            <Header />
            <div className="w-screen min-h-screen flex items-center ml-[3%] justify-center overflow-hidden">
                <div className="w-full h-full mt-[5%] font-poppins text-black ">

                    {/* Top section with sidebar and carousel */}
                    <div className="top w-full h-[50%] ml-[5%] flex gap-3">
                        <div className="left w-[20%] h-full flex flex-col gap-4 justify-evenly font-medium border-r border-gray-300 max-sm:hidden">

                            <div className='flex justify-between items-center'>
                                <p>Women's Fashion</p>
                                <FaAngleRight className='mr-[20%] text-sm' />
                            </div>

                            <div className='flex justify-between items-center'>
                                <p>Men's Fashion</p>
                                <FaAngleRight className='mr-[20%] text-sm' />
                            </div>

                            <p>Electronics</p>
                            <p>Home & Lifestyle</p>
                            <p>Medicine</p>
                            <p>Sports & Outdoor</p>
                            <p>Baby's & Toys</p>
                            <p>Groceries & Pets</p>
                            <p>Health & Beauty</p>
                        </div>
                        {/* left area for mobiles */}

                        {/* Carousel Items */}
                        

                    </div>

                    {/* Flash Sales section */}
                    <div className='w-[80%] ml-[5%] mt-10 h-10 flex gap-10 font-bold max-sm:flex-col'>
                        <h1 className='text-3xl'>Flash Sales</h1>
                        <h1 className='text-3xl'>03 Days - 23 Hours - 19 Minutes - 56 Seconds</h1>
                    </div>

                    {/* Product Items */}
                    <div className="w-[95%] mt-[3%] h-[30%] flex items-center justify-center gap-3 flex-wrap max-sm:mt-[25vh]  max-sm:w-full max-sm:flex-col">
                    {
                            homeProducts.map((item)=>{
                                return (

                                    <Item itemname={item.productName} itemprice={item.price} itempicsrc={item.productImages} itemId={item._id} className="max-sm:w-full"/>
                                )
                            })
                        }
                    </div>

                    {/* View All Products button */}
                    <div className="w-full flex items-center justify-center h-10 mt-[5%] max-sm:w-full">
                        <button className='w-[20%] h-12 bg-[#DD4444] text-white max-sm:w-[80%] hover:bg-[#a23030] transition-all'>
                            View All Products
                        </button>
                    </div>
                    {/* Flash sale section ends here */}
                    <hr className='w-full mt-[5%]' />

                    <div className='w-[80%] ml-[5%] mt-10 h-10 flex gap-10 font-bold max-sm:flex-col '>
                        <h1 className='text-3xl '>Explore Our Products</h1>
                    </div>

                    {/* Product Items */}
                    <div className="w-[95%] mt-[3%] h-[30%] flex items-center justify-center gap-3 flex-wrap max-sm:mt-[34%] cursor-pointer max-sm:flex-col max-sm:w-full">
                    {
                            homeProducts.map((item)=>{
                                return (

                                    <Item itemname={item.productName} itemprice={item.price} itempicsrc={item.productImages} itemId={item._id} className="max-sm:w-full"/>
                                )
                            })
                        }
                    {
                            homeProducts.map((item)=>{
                                return (

                                    <Item itemname={item.productName} itemprice={item.price} itempicsrc={item.productImages} itemId={item._id} className="max-sm:w-full"/>
                                )
                            })
                        }
                    {
                            homeProducts.map((item)=>{
                                return (

                                    <Item itemname={item.productName} itemprice={item.price} itempicsrc={item.productImages} itemId={item._id} className="max-sm:w-full"/>
                                )
                            })
                        }
                    </div>
                        
                    {/* View All Products button */}    
                    <div className="w-full flex items-center justify-center h-10 mt-[5%]">
                        <button className='w-[20%] h-12 bg-[#DD4444] text-white max-sm:w-[80%] hover:bg-[#a23030] transition-all'>
                            View All Products
                        </button>
                    </div>

                    <div className="sec3 flex gap-8 mt-[5%] w-screen items-center justify-center max-sm:flex-col max-sm:w-full">
                        <div className='flex flex-col gap-5 min-w-[23%] h-[35vh]  items-center justify-center'>
                            <div className='flex items-center justify-center bg-black h-[12vh] w-[8vw] rounded-full max-sm:min-w-[35vw]'>
                                <TbTruckDelivery className='text-white text-[3vw] max-sm:text-5xl' />
                            </div>
                            <p className='text-sm font-bold font-poppins'>FREE AND FAST DELIVERY</p>
                            <p className='font-poppins'>Free delivery for all orders above 150$</p>
                            <p></p>
                        </div>
                        <div className='flex flex-col gap-5 min-w-[23%] h-[35vh]  items-center justify-center'>
                            <div className='flex items-center justify-center bg-black h-[12vh] w-[8vw] rounded-full max-sm:min-w-[35vw]'>
                                <TbTruckDelivery className='text-white text-[3vw] max-sm:text-5xl' />
                            </div>
                            <p className='text-sm font-bold font-poppins'>FREE AND FAST DELIVERY</p>
                            <p className='font-poppins'>Free delivery for all orders above 150$</p>
                            <p></p>
                        </div>
                        <div className='flex flex-col gap-5 min-w-[23%] h-[35vh]  items-center justify-center'>
                            <div className='flex items-center justify-center bg-black h-[12vh] w-[8vw] rounded-full max-sm:min-w-[35vw]'>
                                <TbTruckDelivery className='text-white text-[3vw] max-sm:text-5xl' />
                            </div>
                            <p className='text-sm font-bold font-poppins'>FREE AND FAST DELIVERY</p>
                            <p className='font-poppins'>Free delivery for all orders above 150$</p>
                            <p></p>
                        </div>

                        

                    </div>


                </div>
            </div>
            <Footer />
        </>
    );
};

export default Home;
