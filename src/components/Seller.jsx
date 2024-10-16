import React from 'react';
import HeaderText from './HeaderText';
import Header from './Header';
import mobileWithCart from "../public/mobile-with-filters.jpg";
import { FcGoogle } from "react-icons/fc";
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';

const Seller = () => {
  const navigate = useNavigate()
  return (
    <>
      <Header />
      <div className="signuppage flex flex-col lg:flex-row justify-center items-center gap-4 w-screen flex-wrap p-4 lg:p-0">
        {/* Left Container */}
        <div className="left hidden lg:block w-full lg:w-[40%] flex justify-center">
          <img src={mobileWithCart} alt="Mobile with cart" className="w-full h-auto mt-[4%] max-w-full" />
        </div>

        {/* Right Container */}
        <div className="right flex flex-col w-full lg:w-[50%] h-auto sm:h-[70vh]  justify-center items-start gap-3 p-6 lg:p-8 rounded-md ">
          <h1 className='font-roboto text-[6vw] lg:text-[3vw] text-left w-full text-black sm:text-3xl'>Create Your Seller Account</h1>
          <p className='font-poppins text-3xl lg:text-sm text-left w-full text-black sm:text-3xl'>Enter your details below</p>
          
          <div className="form flex flex-col gap-4 w-full lg:w-[80%]">
            <input 
              type="text" 
              className='border-b-2 border-gray-200 outline-none h-[8vh] lg:h-[6vh] p-4 font-poppins text-[4vw] lg:text-base' 
              placeholder='Name' 
            />
            <input 
              type="text" 
              className='border-b-2 border-gray-200 outline-none h-[8vh] lg:h-[6vh] p-4 font-poppins text-[4vw] lg:text-base' 
              placeholder='Email or Phone Number' 
            />
            <input 
              type="text" 
              className='border-b-2 border-gray-200 outline-none h-[8vh] lg:h-[6vh] p-4 font-poppins text-[4vw] lg:text-base' 
              placeholder='Password' 
            />
            
            <div className="buttons flex flex-col gap-2 w-full lg:w-[58%] mt-[2vh]">
              <button className='bg-[#DB4444] h-[10vh] lg:h-[8vh] text-[4vw] lg:text-base font-poppins text-white hover:bg-[#ac3030] transition-all'>
                Create Account
              </button>
              <button className='bg-transparent border-gray-400 border-2 h-[10vh] lg:h-[8vh] flex items-center justify-center gap-4 text-[4vw] lg:text-base font-poppins'>
                <FcGoogle className='text-[6vw] lg:text-2xl'/>
                Sign Up With Google
              </button>
            </div>
            <p>Have a seller account? <Link to="/sellerlogin"><span className='text-blue-600 cursor-pointer' >Login</span></Link></p>
          </div>
        </div>
      </div>

      {/* Footer */}

      <div className=''>
      <Footer />
      </div>
    </>
  );
}

export default Seller;
