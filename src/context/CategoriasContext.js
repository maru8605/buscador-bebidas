import {createContext, useState, useEffect} from 'react'; 
import axios from 'axios'
// Creo el context
export const CategoriasContext = createContext(); 
// Creo el provider 
const CategoriasProvider = (props) => {
    // state del context
    const [categories, saveCategories] = useState([])
    // llamado a la Api
    useEffect(() => {
        
        const getCategories = async() => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const respuesta = await axios.get(url)
            saveCategories(respuesta.data.drinks)
        }
        getCategories();
    }, [])

    return(
      <CategoriasContext.Provider
        value={{
            categories
        }}
      >
          {props.children}
      </CategoriasContext.Provider>

    )
}

export default CategoriasProvider; 