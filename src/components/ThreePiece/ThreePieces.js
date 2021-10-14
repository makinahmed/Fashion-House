import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useGetProducts from '../Hooks/useGetProducts';
import ThreePiece from './ThreePiece';
 
const ThreePieces = () => {
    const { products } = useGetProducts();
    const sharee = [];
    products.forEach(
        product => {
            if (product.category === "3 Pieces") {
                sharee.push(product);
            }
        }
    )
    return (
        <div id="threePieces" className="mt-5 py-5">
            <h1  className="text-primary my-5">Three Pieces Collection</h1>
            <Container>
                <Row>

                    {
                        sharee.map(product => <ThreePiece
                            key={product.id}
                            pro={product}
                        ></ThreePiece>

                        )
                    }

                </Row>
            </Container>

        </div>
    );
};

export default ThreePieces;