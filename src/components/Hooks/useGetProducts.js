import { useState, useEffect } from 'react';

const useGetProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("https://secure-crag-91780.herokuapp.com/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return {
        products
    }
};

export default useGetProducts;