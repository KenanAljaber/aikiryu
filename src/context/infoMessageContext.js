import { createContext, useContext, useState } from "react";
import { InfoType } from "../components/infoMessage/infoMessage";


const InfoMessageContext = createContext();


export const InfoMessageProvider = ({ children }) => {
    const [toast, setToast] = useState({ show: false, message: '' });
    const showToast = (message, infoType) => {
        // console.log(`called`);
        if(toast.show) return;
        const theme = getTheme(infoType);
        if (theme == null) return;
        // console.log(theme);
        setToast({ show: true, message: message, bgColor: theme.bgColor || 'black', fontColor: theme.fontColor || 'white' });
        setTimeout(() => {
            setToast({ show: false, message: '', bgColor: theme.bgColor || 'black', fontColor: theme.fontColor || 'white' });
        }, 3500);
    };

    const getTheme = (infoType) => {
        switch (infoType) {
            case InfoType.SUCCESS:
                return {
                    bgColor: "green",
                    fontColor: "white",
                }
            case InfoType.ERROR:
                return {
                    bgColor: "red",
                    fontColor: "white",
                }
            case InfoType.WARNING:
                return {
                    bgColor: "yellow",
                    fontColor: "black",
                }
            default:
                return null;
        }
    }

    return (
        <InfoMessageContext.Provider value={{ showToast }}>
            {children}
            {toast?.show && <div className="toast-app" style={{ backgroundColor: toast?.bgColor, color: toast?.fontColor }}>
                <p>{toast.message}</p>
            </div>}
        </InfoMessageContext.Provider>
    )
}
export const useInfoMessage = () => useContext(InfoMessageContext);
