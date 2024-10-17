import React, { useState } from 'react';
import Header from "./Header";
import Footer from './Footer';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const { checkoutProduct } = useSelector((state) => state.checkoutProducts);

  const navigate = useNavigate()
  // Input state management
  
  const [formData, setFormData] = useState({
    firstname: '',
    companyname: '',
    shippingAddress: '',
    city: '',
    phonenumber: '',
    email: '',
  });

  // Check if checkoutProduct exists
  if (!checkoutProduct) {
    return <div>Loading...</div>;
  }

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/v1/productacts/gettingDataForCheckout', formData);
      if(response.data.success){
        navigate("/thanks")
        try {
          await axios.post(`http://localhost:3000/api/v1/productacts/sendingemail/${formData.email}`)
        } catch (error) {
          console.log(error)
        }
      }
      // Optionally handle success (e.g., show a message or redirect)
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <Header />

      <div className="checkoutarea w-screen h-screen font-poppins flex flex-col max-sm:overflow-x-hidden">
        <div className="top max-sm:flex max-sm:justify-center max-sm:text-4xl">
          <h1 className='text-3xl font-medium ml-[7%] mt-[4%] max-sm:ml-0'>Billing Details</h1>
        </div>
        
        <form className="bottom flex max-sm:flex-col justify-around">
          {/* Left side (Billing Details) */}
          <div className="left min-h-[80vh] w-[40%] ml-[7%] mt-[2%] flex flex-col text-[#838181] max-sm:w-full">
            {[
              { label: "First Name*", name: "firstname", placeholder: "" },
              { label: "Company Name", name: "companyname", placeholder: "" },
              { label: "Street Address*", name: "shippingAddress", placeholder: "" },
              { label: "Apartment, floor, etc (optional)", name: "apartment", placeholder: "" },
              { label: "Town/City*", name: "city", placeholder: "" },
              { label: "Phone Number*", name: "phonenumber", placeholder: "" },
              { label: "Email Address*", name: "email", placeholder: "" },
            ].map((input, index) => (
              <div className="inputpair mt-[4%] flex flex-col gap-2" key={index}>
                <label>{input.label}</label>
                <input 
                  type="text" 
                  name={input.name} 
                  value={formData[input.name]} 
                  onChange={handleChange}
                  className='w-[80%] h-[7vh] p-3 bg-[#F2F2F2]' 
                  placeholder={input.placeholder} 
                  required={input.label.includes('*')} 
                />
              </div>
            ))}
            <div className='flex gap-2 w-full mt-[4%] items-center max-sm:max-w-[80%] max-sm:gap-2 max-sm:mt-[5%]'>
              <input type="checkbox" />
              <span className='text-black font-light'>Save this information for faster checkout time</span>
            </div>
          </div>
          
          {/* Right side (Order Summary) */}
          <div className='min-w-[30%] min-h-[80vh] mt-[4%] flex flex-col p-10 mr-10 gap-10'>
            {/* Items area */}
            {[checkoutProduct].map((item, index) => (
              <div className="itemsarea flex justify-between items-center" key={index}>
                <div className='w-full flex items-center gap-5'>
                  <img src={item.productImages[0]} alt={item.productName} className='w-20' />
                  <span className='font-poppins text-sm font-medium'>{item.productName}</span>
                </div>
                <span className='font-medium'>${item.price}</span>
              </div>
            ))}

            {/* Cost calculation */}
            <div className="calculation w-full flex flex-col gap-3 mt-3">
              <div className='flex justify-between font-medium'>
                <p>Subtotal</p>
                <p>${checkoutProduct.price}</p>
              </div>
              <hr className='w-full' />
              <div className='flex justify-between font-medium'>
                <p>Shipping</p>
                <p>Free</p>
              </div>
              <hr className='w-full' />
              <div className='flex justify-between font-medium'>
                <p>Total</p>
                <p>${checkoutProduct.price}</p>
              </div>
            </div>

            {/* Payment Options */}
            <div className='flex flex-col w-full gap-4'>
              {[
                { label: "Bank" },
                { label: "Cash on delivery" },
              ].map((option, index) => (
                <div className='flex gap-4 items-center' key={index}>
                  <input type="radio" className='h-6 w-6' />
                  <span>{option.label}</span>
                </div>
              ))}

              {/* Coupon and Place Order */}
              <div className='flex flex-col gap-4 mt-[4%]'>
                <div className='flex gap-2 max-sm:justify-evenly'>
                  <input type="text" className='w-[60%] border border-black h-[7vh] p-4 text-black' placeholder='Coupon Code' />
                  <button className='min-w-[40%] bg-[#DD4444] h-[7vh] font-poppins text-white hover:bg-[#ed6767] hover:transition-all'>Apply Coupon</button>
                </div>
                <button type="submit" className='w-[40%] bg-[#DD4444] font-poppins text-white font-light h-[7vh] max-sm:w-full hover:bg-[#ed6767] hover:transition-all' onClick={handleSubmit}>Place Order</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Checkout;
