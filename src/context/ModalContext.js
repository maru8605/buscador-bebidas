import { createContext, useState, useEffect } from "react";
import axios from 'axios'

export const ModalContext = createContext();

const ModalProvider = (props) => {
    
    const [idrecipe, saveIdRecipe] = useState(null)
    const [ recipe, saveRecipe] = useState({})

    useEffect(() => {
        
        const getRecipe = async () => {
           
            if(!idrecipe) return;

            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idrecipe}`;

            const resultado = await axios.get(url);

           saveRecipe(resultado.data.drinks[0]);
        }
        getRecipe()
    }, [idrecipe])

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