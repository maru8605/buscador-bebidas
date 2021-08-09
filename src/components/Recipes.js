import React, {useContext, useState} from 'react'
import { ModalContext } from '../context/ModalContext'

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';


function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
}));

const Recipes = ({recipe}) => {

    // configuracion Modal
    const [styleModal] = useState(getModalStyle)
    const [open, setOpen] = useState(false)

    const classes = useStyles()

    const handleOpen = () => {
        setOpen(true)
    }
    const handleClose = () =>{
        setOpen(false)
    }
    
    const {saveIdRecipe} = useContext(ModalContext)

    return (
        <div className='col-md-4 mb-3'>
            <div className='card'>
                <h2 className='card-header'>{recipe.strDrink}</h2>

                <img className='card-img-top ' src={recipe.strDrinkThumb} alt={`Imagen de ${recipe.strDrink}`}/>
                <div className='card-body'>
                    <button
                        type='button'

                        className='btn btn-block button'
                        onClick={ () =>{
                            saveIdRecipe(recipe.idDrink)
                            handleOpen()
                        }}
                        
                    >Ver receta</button>

                    <Modal
                     open={open}
                     onClose={ () =>{
                         handleClose()
                         saveIdRecipe(null)
                     }}>
                        <div style={styleModal} className={classes.paper}>
                            <h1>desde modal</h1>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default Recipes
