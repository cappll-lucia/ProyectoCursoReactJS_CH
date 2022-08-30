import './App.css';

function App() {
let nroClase=3;

  return (
    <div className="App">
      {/*comentatio*/}
      <p style={
        {
          color:"salmon",
          fontWeight: '800',
          fontSize: '3rem',
        }
      }>Hola numero {nroClase}</p>
      <input placeholder='ingrese su nombre'/>
    </div>
  );
}

export default App;
