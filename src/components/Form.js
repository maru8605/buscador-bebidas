import {useContext, useState} from 'react'
import {CategoriasContext} from '../context/CategoriasContext'
import {RecipesContext} from '../context/RecipesContext'
const Form = () => {

    const {categories} = useContext(CategoriasContext)
    const {searchRecipes, saveConsult} = useContext(RecipesContext)

    const [search, saveSearch] = useState({
        nombre: '',
        categoria: ''
    })

    const getRecipeData = e =>{
        saveSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form 
        onSubmit={ e => {
            e.preventDefault();
            searchRecipes(search)
            saveConsult(true)
        }}
        className='col-12'>
            <fieldset className='text-center'>
                <legend>Buscar bebidas por Categoría o Ingredientes</legend>
            </fieldset>

            <div className='row mt-4'>
                <div className='col-md-4'>
                    <input
                        name='nombre'
                        className='form-control'
                        type='text'
                        placeholder='Buscar por ingredientes'
                        onChange={getRecipeData}
                    />
                </div>
                <div className='col-md-4'>
                    <select
                     className='form-control '
                     name='categoria'
                     onChange={getRecipeData}
                     >
                        <option value=''>-- Selecciona Categoría -- </option>
                        {categories.map( category => (
                            <option
                                key={category.strCategory}
                                value={category.strCategory}
                            >{category.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className='col-md-4'>
                    <input
                        type='submit'
                        className='btn btn-block button'
                        value='Buscar Bebidas'
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
