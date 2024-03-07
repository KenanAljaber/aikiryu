import { useEffect } from "react";

function useClickOutside(ref, onOutsideClicked, exceptions=[]) {

    useEffect(() => {


        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target) && !checkExceptions(event)) {
                onOutsideClicked();
            }
        }
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        }

    }, [ref,onOutsideClicked]);

    const checkExceptions = (event) => {
        if(exceptions.length===0) {
            return false;
        }
        const exceptionsRefCurrent = exceptions.filter(e => {
            return e.current!=null;
        });
        if (exceptionsRefCurrent.length>0) {
            for (let i = 0; i < exceptionsRefCurrent.length; i++) {
                if (exceptionsRefCurrent[i].current.contains(event.target)) {
                    return true;
                }
            }
            return false;
        }
    }

}



export default useClickOutside;