import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [idrecipe, saveIdRecipe] = useState(null)

    return(
        <ModalContext.Provider
            value={{
                saveIdRecipe
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}
export default ModalProvider