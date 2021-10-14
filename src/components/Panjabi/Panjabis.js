import React from 'react';
import {Container,Row } from 'react-bootstrap';
import useGetProducts from '../Hooks/useGetProducts';
import Panjabi from '../Panjabi/Panjabi';

const Panjabis = () => {
    const { products } = useGetProducts();
    const panjabi = [];
    products.forEach(
        product => {
            if (product.category === "Panjabi") {
                panjabi.push(product);
            }
        }
    )
    return (
        <div className="my-5">
            <h1 className="text-primary py-5">Panjabi Collections</h1>
            <Container>
                <Row>
                 
                        {
                            panjabi.map(product => <Panjabi
                                key={product.id}
                                pro={product}
                            >
                            </Panjabi>

                            )
                        }
                 
                </Row>
            </Container>

        </div>
    );
};

export default Panjabis;