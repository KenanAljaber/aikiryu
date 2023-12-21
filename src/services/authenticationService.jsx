import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react"
import { CONSTANTS } from "../utils/constants";

// authProvider
const AuthContext=createContext();
const AuthProvider=({children})=>{
    const initialState = localStorage.getItem(CONSTANTS.IS_LOGGED_IN) === CONSTANTS.LOGGED_IN_VALUE;

    const[isAuthenticated,setAuthenticated]=useState(initialState);

    const logout=()=>{
        console.log("logout");
        setAuthenticated(false);
        localStorage.clear();
    }
 
    const login =()=>{
        console.log("login");
        setAuthenticated(true);
        localStorage.setItem(CONSTANTS.IS_LOGGED_IN,CONSTANTS.LOGGED_IN_VALUE);
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