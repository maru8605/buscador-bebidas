import CategoriasProvider from './context/CategoriasContext'
import RecipesProvider from './context/RecipesContext'
import Header from "./components/Header";
import Form from "./components/Form";
import ListRecipes from './components/ListRecipes';
import ModalProvider from './context/ModalContext'

function App() {


  return (
    <CategoriasProvider>
      <RecipesProvider>
        <ModalProvider>
          <Header/>

          <div className='container mt-5'>
            <div className='row'>
              <Form/>
            </div>
              <ListRecipes/>
          </div>
        </ModalProvider>
      </RecipesProvider>
    </CategoriasProvider>
  );
}

export default App;
