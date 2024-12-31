import { createContext , useState , useContext, Children } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
    const [captain , setcaptain] = useState(null);
    const [isloading , setisloading] = useState(false);
    const [error , seterror] = useState(null);

    const updateCaptain = (captainData) => {
        setcaptain(captainData);
    };

    const value = {
        captain,
        setcaptain,
        isloading,
        setisloading,
        error,
        seterror,
        updateCaptain
    };
    
    return (
        <CaptainDataContext.Provider value={value}>
            {children}
        </CaptainDataContext.Provider>
    )
}

export default CaptainContext