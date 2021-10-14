import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, FormControl, InputGroup, Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="my-5">
            <Container>
                <Row gap={1}>
                    <Col lg={6}>
                        <div className="text-left my-5">
                            <small>INFORMATION</small>
                            <br />
                            <p>ABOUT US</p>
                            <p>MEASUREMENT CHART</p>
                            <p>STORE LOCATOR</p>
                            <p>TERMS AND CONDITIONS</p>
                            <p>PRIVACY POLICY</p>
                            <p>RETURN AND REFUND POLICY</p>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="my-5">
                            <small >NEWSLETTER</small>
                            <br />
                            <div className="my-5">
                                <p className="my-5">Subscribe to get special offers,free giveaways,and once-in-a-lifetime deals.</p>
                                <InputGroup className="mb-3">
                                    <FormControl
                                        placeholder="Your email.."
                                        aria-label="Recipient's username"
                                        aria-describedby="basic-addon2"
                                    />
                                    <Button className="btn btn-secondary" variant="outline-secondary" id="button-addon2">
                                        Search
                                    </Button>
                                </InputGroup>
                            </div>
                        </div>

                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;