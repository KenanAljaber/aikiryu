import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react"

// authProvider
const AuthContext=createContext();
const AuthProvider=({children})=>{
    const initialState = localStorage.getItem("loggedIn") === "true";

    const[isAuthenticated,setAuthenticated]=useState(initialState);

    const logout=()=>{
        console.log("logout");
        setAuthenticated(false);
        localStorage.setItem("loggedIn","false");
    }

    const login =()=>{
        console.log("login");
        setAuthenticated(true);
        localStorage.setItem("loggedIn","true");
    }

    return (
        <AuthContext.Provider value={{isAuthenticated,login,logout}}>
            {children}
        </AuthContext.Provider>
    );


}

const useAuth =()=> useContext(AuthContext);

export {AuthProvider,useAuth};
// useAuth