import { createContext, useState , useEffect} from "react";
import axios from 'axios'
// context
export const RecipesContext = createContext(); 
// Provider
const RecipesProvider = ( props) => {

    const [recipes, saveRecipes] = useState([]);
    const [search, searchRecipes] = useState({
        nombre: '',
        categoria: ''
    })
    const {nombre, categoria} = search;

    const [consult, saveConsult] = useState(false)

    useEffect(() => {
        if(consult){
            const getRecipes = async() =>{
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`
                const respuesta = await axios.get(url)
                // console.log(respuesta.data.drinks)
                saveRecipes(respuesta.data.drinks)
            }
            getRecipes()
        }
    }, [search])

    return(
        <RecipesContext.Provider
            value={{
                 recipes,
                searchRecipes,
                saveConsult
               
            }}
        >
            {props.children}
        </RecipesContext.Provider>
    )
}
export default RecipesProvider; 