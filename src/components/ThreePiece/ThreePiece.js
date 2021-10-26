import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../Panjabi/Panjabi.css';

const ThreePiece = (props) => {
    const { img, price, id } = props.pro;
   
    return (
        <Col sm={12} md={4} lg={3} className="my-3" >


            <div className="panjabi-card">
                <Card>
                    <Card.Img variant="top" src={img} className="panjabi-img" />
                    <Card.Body>
                        <div className="details">
                            <Link to={`/threePieces/${id}`}>
                            <button className="btn btn-secondary">QUICK VIEW</button>
                            </Link>
                        </div>
                    </Card.Body>
                    <Card.Title>Price : {price} Tk. </Card.Title>
                </Card>
            </div>
        </Col>
    );
};

export default ThreePiece;