import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useGetProducts from '../Hooks/useGetProducts';
import Sharee from './Sharee';

const Sharees = () => {
    const { products } = useGetProducts();
    const sharee = [];
    products.forEach(
        product => {
            if (product.category === "Sharee") {
                sharee.push(product);
            }
        }
    )
    return (
        <div className="my-5">
            <h1 className="py-5 text-primary">Sharee Collection</h1>
            <Container>
                <Row>

                    {
                        sharee.map(product => <Sharee
                            key={product.id}
                            pro={product}
                        ></Sharee>

                        )
                    }

                </Row>
            </Container>

        </div>
    );
};

export default Sharees;