import React from 'react'

const Form = () => {
    return (
        <form className='col-12'>
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
                    />
                </div>
                <div className='col-md-4'>
                    <select
                     className='form-control '
                     name='categoria'
                     >
                        <option value=''>-- Selecciona Categoría -- </option>
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
