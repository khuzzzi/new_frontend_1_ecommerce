import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
// import controller from "./public/images/download__2_-removebg-preview.png";
import { RiStarSLine } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { TbTruckDelivery } from "react-icons/tb";
import { FaRecycle } from "react-icons/fa";
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useFetchClickedProduct from "../hooks/useFetchClickedProduct";
import { setCheckoutProduct } from '../redux/checkoutProductSlice';
import { VscHeartFilled } from "react-icons/vsc";
import { setAddToCartProduct } from '../redux/addToCartSlice';
import axios from 'axios';

const ProductDetails = () => {
    const params = useParams();
    const productId = params.id;
    const { loading, error } = useFetchClickedProduct(productId);
    const [clicked, setClicked] = useState(false);
    const [wishlistAdded, setWishListAdded] = useState(false);
    
    const navigate = useNavigate();
    const { clickedProduct } = useSelector((state) => state.clickedProducts);
    const dispatch = useDispatch();

    const handleBuyNow = async (productId) => {
        try {
            const response = await axios.get(`https://ecommerce-platform-backend-ogt2oko7q-khuzzzis-projects.vercel.app/api/v1/productacts/checkout/${productId}`);
            if (!response) {
                console.log("Error occurred on the backend");
            } else {
                dispatch(setCheckoutProduct(response.data.checkoutedProduct));
                navigate("/checkout");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleWishlist = async (color) => {
        const url = `https://ecommerce-platform-backend-ogt2oko7q-khuzzzis-projects.vercel.app/api/v1/productacts/${color === "red" ? "removeFromWishlist" : "addToWishlist"}/${productId}`;
        setWishListAdded(color !== "red");
        try {
            await axios.post(url, {}, { withCredentials: true });
        } catch (error) {
            console.log(error);
        }
    };

    const handleAddToCart = () => {
        dispatch(setAddToCartProduct(clickedProduct));
        navigate("/cart");
    };

    if (loading) return <p>Loading product details...</p>; // Show loading message
    if (error) return <p>Error loading product details: {error.message}</p>; // Show error message

    return (
        <>
            <Header />
            <div className="w-screen h-screen flex flex-col items-center font-poppins">
                <div className="w-[80%] h-10 mt-[3%]">
                    <p className='text-[#a9a9a9]'>Account / Gaming / <span className='text-black font-medium'>{clickedProduct.productName}</span></p>
                </div>

                <div className="w-[80%] h-[70%] mt-[4%] flex gap-3 ">
                    <div className="left h-full w-[15%] flex flex-col gap-3 p-2">
                        <div className="pics max-w-full h-[22%] bg-[#F5F5F5] flex items-center justify-center">
                            <img src={clickedProduct.productImages[0]} alt="" className='p-8' />
                        </div>
                        {/* Additional images can go here */}
                    </div>

                    <div className="middle max-w-[60%] h-full bg-[#F5F5F5] p-2 flex items-center justify-center">
                        <img src={clickedProduct.productImages[0]} alt="" className='w-[70%]' />
                    </div>

                    <div className="right w-[35%] h-full">
                        {/* Product Details */}
                        <div className="top flex flex-col gap-3 p-2 w-full">
                            <h1 className='text-xl font-semibold w-full'>{clickedProduct.productName}</h1>
                            <div className="flex gap-2 items-center cursor-pointer">
                                {[...Array(5)].map((_, index) => (
                                    <RiStarSLine key={index} className='text-[#8f8e8e] text-xl' />
                                ))}
                                <span className='font-poppins font-medium text-[#a1a0a0]'>(150 Reviews)</span>
                            </div>
                            <h1 className='text-black text-2xl font-semibold'>${clickedProduct.price}</h1>
                            <p className='text-2xl font-extralight'>{clickedProduct.description}</p>
                            <hr className='w-full border-[0.5] border-[#232323] mt-[3%]' />
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col gap-5 p-2 ">
                            <div className="flex gap-4 items-center">
                                <h1 className='text-xl'>Colours:</h1>
                                <input type="radio" className='w-4 h-4' />
                                <input type="radio" className='w-4 h-4' />
                            </div>
                            <div className="flex gap-4 items-center">
                                <h1 className='text-xl'>Size:</h1>
                                <div className="flex w-[80%] justify-evenly">
                                    {/* Size buttons here */}
                                    <button className='w-9 h-8 bg-[#c7c3c3] text-white rounded-md'>XS</button>
                                    <button className='w-9 h-8 bg-[#c7c3c3] text-white rounded-md'>XS</button>
                                    <button className='w-9 h-8 bg-[#c7c3c3] text-white rounded-md'>XS</button>
                                    <button className='w-9 h-8 bg-[#c7c3c3] text-white rounded-md'>XS</button>
                                    <button className='w-9 h-8 bg-[#c7c3c3] text-white rounded-md'>XS</button>
                                    {/* Add more size buttons */}
                                </div>
                            </div>

                            <div className="flex gap-2 w-full items-center justify-center text-white">
                                <input type="number" className='w-[50%] bg-[#DD4444] h-10 p-3 text-white' defaultValue={1} />
                                <button className='w-[40%] bg-[#DD4444] h-10 rounded-sm' onClick={() => handleBuyNow(productId)}>Buy Now</button>
                                <div className="flex items-center justify-center w-[10%] h-10 border border-black rounded-md">
                                    {wishlistAdded ? (
                                        <VscHeartFilled className='text-red-600 text-2xl cursor-pointer' onClick={() => handleWishlist("red")} />
                                    ) : (
                                        <CiHeart className='text-black text-2xl cursor-pointer' onClick={() => handleWishlist("white")} />
                                    )}
                                </div>
                            </div>

                            <button className='w-[40%] bg-[black] hover:bg-[#282727] transition-all h-10 rounded-sm text-white' onClick={handleAddToCart}>Add To Cart</button>

                            {/* Delivery Information */}
                            <div className="w-full h-[15vh] border border-black flex gap-3 items-center">
                                <div className="left p-2">
                                    <TbTruckDelivery className='text-5xl' />
                                </div>
                                <div className="right flex flex-col gap-2">
                                    <p className='font-medium'>Free Delivery</p>
                                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, itaque!</p>
                                </div>
                            </div>
                            <div className="w-full h-[15vh] border border-black flex gap-3 items-center">
                                <div className="left p-2">
                                    <FaRecycle className='text-5xl ml-2' />
                                </div>
                                <div className="right flex flex-col gap-2">
                                    <p className='font-medium'>Return Delivery</p>
                                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, itaque!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default ProductDetails;
