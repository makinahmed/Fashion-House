import { getAuth, signInWithEmailAndPassword } from '@firebase/auth';
import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import initializeFireBaseApp from '../Firebase/firebase.initilize';

initializeFireBaseApp();
// log in old user or sign in with email and password
const Login = () => {
    const [loggedUser, setLoggedUser] = useState({})
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState("")

    const auth = getAuth();
    const location = useLocation()
    const history = useHistory();

    const redirect_uri = location.state?.from || "/home";
    const handleEmail = e => {
        setEmail(e.target.value)

    }
    const handlePassword = e => {
        setPassword(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                setLoggedUser(user);
                history.push(redirect_uri)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                if (errorCode === "auth/user-not-found") {
                    setError("Please Registration!")
                }
            });
    }

    return (
        <div className="my-5 d-flex justify-content-center">
            <div className="py-5 w-25 ">
                <Form
                    onSubmit={handleSubmit}
                >
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type="email"
                            placeholder="Enter email"
                            onBlur={handleEmail}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            type="password"
                            placeholder="Password"
                            onBlur={handlePassword}
                        />
                    </Form.Group>
                    <Form.Label className="text-danger">{error}</Form.Label>
                    <br />
                    <Button
                        variant="primary"
                        className=" btn btn-primary"
                        type="submit"

                    >
                        Login
                    </Button>
                </Form>

            </div>
        </div>
    );
};

export default Login;


