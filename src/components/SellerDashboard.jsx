import React, { useState } from 'react';
import Header from "./Header";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import axios from 'axios';
import useFetchSellerProductsOnly from '../hooks/useFetchSellerProductsOnly';
import { useSelector } from 'react-redux';
import Item from './Item';

const SellerDashboard = () => {
  const { loading, error } = useFetchSellerProductsOnly(); // Get loading and error states
  const [openDialog, setOpenDialog] = useState(false);
  const [input, setInput] = useState({
    productName: "",
    description: "",
    brand: "",
    category: "",
    price: "",
  });
  const [files, setFiles] = useState(null);

  const handleOnChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFiles(e.target.files);
  };

  const handleAddingProducts = async () => {
    const formData = new FormData();

    formData.append("productName", input.productName);
    formData.append("description", input.description);
    formData.append("brand", input.brand);
    formData.append("category", input.category);
    formData.append("price", input.price);

    if (files) {
      for (let i = 0; i < files.length; i++) {
        formData.append("productImages", files[i]);
      }
    }

    try {
      const response = await axios.post("http://localhost:3000/api/v1/seller/addingProducts", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        withCredentials: true
      });

      
      setInput({
        productName: "",
        description: "",
        brand: "",
        category: "",
        price: "",
      });
      setFiles(null);
      setOpenDialog(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const { otherProductDetails } = useSelector((state) => state.sellerDashboard);
  const items = otherProductDetails.productDetails;

  return (
    <>
      <Header />
      <div className='flex flex-col w-full h-full'>
        <div className='p-4'>
          <AlertDialog open={openDialog} onOpenChange={setOpenDialog}>
            <AlertDialogTrigger className='bg-[#DB4444] h-[10vh] w-[20%] lg:h-[8vh] text-[8vw] lg:text-base font-poppins text-white hover:bg-[#ac3030] transition-all'>
              Open
            </AlertDialogTrigger>

            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle className="font-poppins">Start Selling, And Make $$$</AlertDialogTitle>
                <AlertDialogDescription>
                  <div className='w-full h-[80%] flex flex-col gap-4'>
                    <div className='flex flex-col gap-1'>
                      <label className='font-poppins text-lg'>Product Name</label>
                      <input
                        type="text"
                        name="productName"
                        value={input.productName}
                        className='border-2 border-black p-2 font-poppins text-black rounded-xl'
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className='font-poppins text-lg'>Description</label>
                      <textarea
                        name="description"
                        value={input.description}
                        className='border-2 border-black p-2 font-poppins text-black rounded-xl'
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className='font-poppins text-lg'>Brand</label>
                      <input
                        type="text"
                        name="brand"
                        value={input.brand}
                        className='border-2 border-black p-2 font-poppins text-black rounded-xl'
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className='font-poppins text-lg'>Category</label>
                      <input
                        type="text"
                        name="category"
                        value={input.category}
                        className='border-2 border-black p-2 font-poppins text-black rounded-xl'
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className='font-poppins text-lg'>Price</label>
                      <input
                        type="number"
                        name="price"
                        value={input.price}
                        className='border-2 border-black p-2 font-poppins text-black rounded-xl'
                        onChange={handleOnChange}
                      />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <label className='font-poppins text-lg'>Add Product Image/Images</label>
                      <input type="file" multiple onChange={handleFileChange} />
                    </div>
                  </div>
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel onClick={() => setOpenDialog(false)}>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={handleAddingProducts}>Add Product</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>

        {/* Loading and Error Handling */}
        {loading && <p>Loading products...</p>}
        {error && <p>Error loading products: {error.message}</p>}

        <div className="flex w-full flex-wrap max-sm:flex-col max-sm:w-full justify-center gap-4 p-4">
          {!loading && items.map((item) => (
            <div className="w-full ml-2 flex gap-2 flex-wrap" key={item.id}>
              <Item 
                itemname={item.productName} 
                itemprice={item.price} 
                itempicsrc={item.productImages}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SellerDashboard;
