
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../assets/firebase.config";



export const AuthContext = createContext(null)

const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {


    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);

    }

    const googlelogin = () => {
        return signInWithPopup(auth, provider)
    }



    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }


    // useEffect(() => {
    //     const unsubscribe = onAuthStateChanged(auth, currentUser => {
    //         setUser(currentUser);
    //         console.log('current user', currentUser);
    //         if (currentUser) {
    //             // get token and store client
    //             const userInfo = { email: currentUser.email };
    //             axiosPublic.post('/jwt', userInfo)
    //                 .then(res => {
    //                     if (res.data.token) {
    //                         localStorage.setItem('access-token', res.data.token);
    //                         setLoading(true);
    //                     }
    //                 })
    //         }
    //         else {
    //             // TODO: remove token (if token stored in the client side: Local storage, caching, in memory)
    //             // Remove token if user is logged out
    //             localStorage.removeItem('access-token');
    //             setLoading(false);
    //         }

    //     });
    //     return () => {
    //         return unsubscribe();
    //     }
    // }, [axiosPublic])



    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        updateUserProfile,
        googlelogin
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;