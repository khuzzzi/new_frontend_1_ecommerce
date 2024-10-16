import React from 'react';
import { IoSendOutline } from "react-icons/io5";
// import qrcode from "./public/images/1024px-QR_Code_Example.svg.png"
import badge from "../public/download__1_-removebg-preview.png"
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-screen bg-black h-auto mt-[20%] flex flex-wrap justify-evenly p-8 min-h-[50vh] max-sm:mt-[30%]">
      {/* Container 1 */}
      <div className="container1 w-full sm:w-[45%] lg:w-[20%] flex flex-col p-4 gap-4 text-white font-poppins h-auto sm:h-[20vh] flex-grow-[2]">
        <h2 className="font-poppins font-medium text-xl">Exclusive</h2>
        <p className="font-light">Subscribe</p>
        <p className="font-light">Get 10% off your first order</p>
        <div className="flex gap-2 items-center">
          <input
            type="text"
            className="w-full h-[6vh] p-3 bg-black border border-gray-300 outline-none"
            placeholder="Enter your email"
          />
          <IoSendOutline className="text-white bg-black w-6 h-6 cursor-pointer" />
        </div>
      </div>

      {/* Container 2 */}
      <div className="container2 w-full sm:w-[45%] lg:w-[20%] flex flex-col p-4 gap-4 text-white font-poppins h-auto sm:h-[20vh]">
        <h2 className="font-poppins font-medium text-xl">Support</h2>
        <p className="font-light">111 Bijoy Sarani, Dhaka DH 1515, Bangladesh</p>
        <p className="font-light">exclusive@gmail.com</p>
        <p className="font-light">+9212-34567-89</p>
      </div>

      {/* Container 3 */}
      <div className="container3 w-full sm:w-[45%] lg:w-[20%] flex flex-col p-4 gap-4 text-white font-poppins h-auto sm:h-[20vh]">
        <h2 className="font-poppins font-medium text-xl">Account</h2>
        <p className="font-light">My Account</p>
        <p className="font-light">Login/Register</p>
        <p className="font-light">Wishlist</p>
        <p className="font-light">Shop</p>
      </div>

      {/* Container 4 */}
      <div className="container4 w-full sm:w-[45%] lg:w-[20%] flex flex-col p-4 gap-4 text-white font-poppins h-auto sm:h-[20vh]">
        <h2 className="font-poppins font-medium text-xl">Quick Links</h2>
        <p className="font-light">Privacy Policy</p>
        <p className="font-light">Terms Of Use</p>
        <p className="font-light">FAQ</p>
        <p className="font-light">Contact</p>
      </div>

      {/* Container 5 */}
      <div className="container5 w-full sm:w-[45%] lg:w-[20%] flex flex-col p-4 gap-4 text-white font-poppins h-auto sm:h-[20vh]">
        <h2 className="font-poppins font-medium text-xl">Download App</h2>
        <span className='text-gray-400 text-sm font-extralight' >Save $3 with App New User Only</span>
        
        <div className='flex items-center gap-3 min-w-[10vw]'>
        <div className="left">
          {/* <img src={qrcode} alt="" className='w-[6vw] z-10 bg-white' /> */}
        </div>
        <div className="right flex flex-col">
          <img src={badge} alt="" className='w-[7vw] bg-white'/>
        </div>
        </div>

        <div className='flex items-center gap-8 text-white'>
        <FaFacebookF cn/>
        <FaTwitter />

        <FaInstagram />
        <FaLinkedinIn />

        </div>
      </div>
    </div>
  );
};

export default Footer;
