import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setClickedProduct } from '../redux/clickedProductSlice';

const useFetchClickedProduct = (productId) => {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchOnlyClickedProduct = async () => {
            setLoading(true); // Start loading
            try {
                const response = await axios.get(`http://localhost:3000/api/v1/productacts/details/${productId}`);
                dispatch(setClickedProduct(response.data.productDetails));
            } catch (error) {
                setError(error);
                console.log(error);
            } finally {
                setLoading(false); // End loading
            }
        };

        fetchOnlyClickedProduct();
    }, [productId, dispatch]);

    return { loading, error };
};

export default useFetchClickedProduct;
