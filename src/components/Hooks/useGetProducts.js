import { useState, useEffect } from 'react';

const useGetProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch("/fakeData.json")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    return {
        products
    }
};

export default useGetProducts;