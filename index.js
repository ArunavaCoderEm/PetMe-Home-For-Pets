import React, { useContext, useEffect, useState } from "react";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth () {
    return useContext(AuthContext);
}

export function AuthProvider({children}) {
    const [currentuser,setcurrentuser] = useState(null);
    const [userlog, setuserlog] = useState(false);
    const [loading, setloading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,initializeUser);
        return unsubscribe;
    },[])

    async function initializeUser (user) {
        if(user){
            setcurrentuser({...user});
            setuserlog(true);
        }
        else {
            setcurrentuser(null);
            setuserlog(false);
        }
        setloading(false);
    }
    const value = {
        currentuser,
        userlog,
        loading
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}