import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import useGetProducts from '../Hooks/useGetProducts';
import NewCollectionProduct from './NewCollectionProduct';

const NewCollections = () => {
    const { products } = useGetProducts();
    const newCollections = products.slice(0,4)
    return (
        <div>
            <h2 className="my-5 text-primary">Our New Special Collections</h2>
            <Container>
                <Row>
                    {
                        newCollections.map(product => <NewCollectionProduct
                            key={product.id}
                            product={product}></NewCollectionProduct>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default NewCollections;