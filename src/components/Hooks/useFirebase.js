import React, { useEffect, useState } from 'react';
import { GoogleAuthProvider, onAuthStateChanged, signOut, getAuth, signInWithPopup } from "firebase/auth";
import initializeFireBaseApp from '../Firebase/firebase.initilize';

initializeFireBaseApp();
const googleProvider = new GoogleAuthProvider();
const auth = getAuth();

const useFirebase = () => {
    const [user, setUser] = useState([])
    const [error, setError] = useState([])

    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
        });
    }, [])


   

    return {
        user, googleSignIn, setError, setUser, logOut
    }
};

export default useFirebase;