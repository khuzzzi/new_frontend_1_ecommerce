import React, { useState } from 'react';
import HeaderText from './HeaderText';
import Header from './Header';
import mobileWithCart from "../public/mobile-with-filters.jpg";
import { FcGoogle } from "react-icons/fc";
import Footer from './Footer';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const SellerLogin = () => {
  const navigate = useNavigate()
  const [errorMessage, setErrorMessage] = useState("");

  const [input,setInput] = useState({
    email : "",
    password : ""
  })
  const handleOnChange = (e)=>{
    setInput({...input,[e.target.name] : e.target.value})
  }
  const handleLoginSubmission = async (e) => {
    e.preventDefault(); // Prevent default form submission
    setErrorMessage(""); // Reset error message before login attempt

    try {
      
      
      const response = await axios.post("http://localhost:3000/api/v1/seller/loginSellerAccount", input,{
        headers : {
          'Content-Type' : 'application/json'
        },
        withCredentials : true
      });
      if(response.data.success){
        navigate("/dashboard")
      }
      
    } catch (error) {
      setErrorMessage("Login failed. Please check your credentials."); // Set error message
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <div className="signuppage flex flex-col lg:flex-row justify-center items-center gap-4 w-screen flex-wrap p-4 lg:p-0">
        {/* Left Container */}
        <div className="left hidden lg:block w-full lg:w-[40%] flex justify-center">
          <img src={mobileWithCart} alt="Mobile with cart" className="w-full h-auto mt-[4%] max-w-full" />
        </div>

        {/* Right Container */}
        <div className="right flex flex-col gap-6 w-full lg:w-[50%] h-auto sm:h-[70vh] justify-center items-start p-6 lg:p-8 rounded-md">
          <h1 className='font-roboto text-[6vw] lg:text-[3vw] text-left w-full text-black sm:text-3xl'>Log in to Seller Account</h1>
          <p className='font-poppins text-3xl lg:text-sm text-left w-full text-black sm:text-3xl'>Enter your details below</p>
          
          <form className="form flex flex-col gap-4 w-full lg:w-[80%]" onSubmit={handleLoginSubmission}>
            <input 
              type="email" 
              className='border-b-2 border-gray-200 outline-none h-[8vh] lg:h-[6vh] p-4 font-poppins text-[4vw] lg:text-base' 
              placeholder='Email or Phone Number'
              name='email'
              value={input.email} 
              onChange={handleOnChange}
              required // Optional: ensures the field is not empty
            />
            <input 
              type="password" // Change to password type
              className='border-b-2 border-gray-200 outline-none h-[8vh] lg:h-[6vh] p-4 font-poppins text-[4vw] lg:text-base' 
              placeholder='Password'
              name='password' 
              value={input.password}
              onChange={handleOnChange}
              required // Optional: ensures the field is not empty
            />
            
            {errorMessage && <span className='text-red-600'>{errorMessage}</span>} {/* Error message display */}

            <div className="buttons flex gap-4 lg:w-[58%] mt-[2vh] items-end sm:flex-col md:flex-col">
              <button type="submit" className='bg-[#DB4444] h-[10vh] w-full lg:h-[8vh] text-[4vw] lg:text-base font-poppins text-white hover:bg-[#ac3030] transition-all'>
                Log in
              </button>
            </div>
            <span className='font-poppins text-red-600 w-full'>Forgot Password?</span>
            <p>Don't have an account <Link to="/sellersignup"><span className='text-blue-600 cursor-pointer'>Signup</span></Link></p>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div>
        <Footer />
      </div>
    </>
  );
};

export default SellerLogin;
