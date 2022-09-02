import './App.scss';
import NavBar from './components/NavBar';
import ItemListContainer from './containers/ItemListContainer';

function App() {

const categories=["Anteojos Recetados", "Anteojos de Sol", "Audífonos", "Fotografía"]

  return (
    <>
      <NavBar
        categories={categories}
      />
      <ItemListContainer/>
      <div className="App">
      </div>
    </>
  );
}

export default App;
