import { createContext, useContext, useState } from "react";
import loadingIcon from "../assets/icons/loading.gif";

const IsLoadingContext= createContext();


export const IsLoadingProvider= ({children})=>{
    const [showed,setShowed]=useState(false);

    const showLoading=()=>{
        setShowed(true);
    }
    const hideLoading=()=>{
        setShowed(false);
    }

    return (
        <IsLoadingContext.Provider value={{showLoading,hideLoading}}>
            {children}
            {showed && 
                <div className="block-ui">
                    <img className="loadingIcon" src={loadingIcon} alt="loading"/>
                </div>
            }

        </IsLoadingContext.Provider>
    );
}

export const useBlockUi=()=>useContext(IsLoadingContext);