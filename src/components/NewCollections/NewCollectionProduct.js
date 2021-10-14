import React from 'react';
import { Card, Col } from 'react-bootstrap';

const NewCollectionProduct = ({ product }) => {
    return (

        <Col xs={12} md={6} lg={3}>

            <Card>
                <Card.Img variant="top" src={product.img} />
                <Card.Body>
                    <Card.Title>{product.category}</Card.Title>
                </Card.Body>
            </Card>

        </Col>


    );
};

export default NewCollectionProduct;