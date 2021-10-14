import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import { Col, Form, Row } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useAuth from '../Hooks/useAuth';
import HomePage from '../HomePage/HomePage';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth } from '@firebase/auth';
import initializeFireBaseApp from '../Firebase/firebase.initilize';


initializeFireBaseApp();
const SignUp = () => {
    const { user, setUser, googleSignIn, LogOut } = useAuth();
    const [createNewUser, setCreateNewUser] = useState({})
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [city, setCity] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')


    const location = useLocation()
    const history = useHistory();
    const redirect_uri = location.state?.from || "/home";
    const auth = getAuth();
    // google sign in 
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                setUser(user);
                history.push(redirect_uri)
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            });
    }

    // sign up  or registration or create user

    const handleEmail = e => {
        setEmail(e.target.value)

    }
    const handleAddress = e => {
        setAddress(e.target.value)
    }
    const handleCity = e => {
        setCity(e.target.value)
    }
    const handlePassword = e => {
        const regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if (regularExpression.test(e.target.value)) {
            setPassword(e.target.value)
            setError("Good Password!")
        } else {
            setError("Please give a strong password")
        }
    }
    const handleSubmit = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then(newUser => {
                const user = newUser.user;
                setCreateNewUser(user);
                history.push(redirect_uri)
            })
            .catch((error) => {
                const errorMessage = error.message;
                if (errorMessage === 'Firebase: Error (auth/email-already-in-use).') {
                    console.log('Email already used!')
                }

            });
    }






    return (
        <div className="my-5 d-flex justify-content-center">
            <div className="py-5 w-25 ">
                <Form onSubmit={handleSubmit}>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                required
                                type="email"
                                placeholder="Enter email"
                                onBlur={handleEmail}
                            />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                required
                                type="password"
                                placeholder="Password"
                                onBlur={handlePassword}
                            />
                            <br />
                            <Form.Label className="text-danger">{error}</Form.Label>
                            <br />
                        </Form.Group>

                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Address</Form.Label>
                        <Form.Control

                            placeholder="1234 Main St"
                            onBlur={handleAddress}
                        />
                    </Form.Group>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                onBlur={handleCity}
                            />
                        </Form.Group>
                    </Row>


                    <Button
                        variant="primary"
                        className=" btn btn-primary"
                        type="submit"
                    >
                        Sign Up
                    </Button>
                </Form>
                <div>
                    <small>Already have an Account?</small>
                    <Link to="/login"> Log in</Link>
                    <br />
                    or
                </div>
                <div>
                    <p>Sign up with Google :</p>
                    <div>
                        <Button onClick={handleGoogleSignIn} variant="primary" className="btn btn-primary" size="lg">
                            Google
                        </Button>

                    </div>
                </div>

            </div>

            <div>

            </div>

        </div >
    );
};

export default SignUp;