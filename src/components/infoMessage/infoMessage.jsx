import { useState } from "react";

function InfoMessage() {

    const [toast, setToast] = useState({ show: false, message: '' });

    const showToast = (message, infoType) => {
        const theme = getTheme(infoType);
        if(theme==null) return;
        setToast({ show: true, message: message, bgColor: theme.bgColor || 'black', fontColor: theme.fontColor || 'white' });
        setTimeout(() => {
            setToast({ show: false, message: '', bgColor: theme.bgColor || 'black', fontColor: theme.fontColor || 'white' });
        }, 3000);
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
        <>
            {toast?.show && <div className="error" style={{ backgroundColor: toast?.bgColor }}>
                <p>{toast.message}</p>
            </div>}
        </>
    );
}

export default InfoMessage;


export const InfoType = {
    SUCCESS: "success",
    ERROR: "error",
    WARNING: "warning",

}