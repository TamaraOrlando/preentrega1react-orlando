import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'


function App() {

  return (
    <div>
      <NavBar />
      <ItemListContainer bienvenida="¡Bienvenidos a TR VIAL!" />
      <h2 className='hDos'>El lugar que te facilita la limpieza y mejora el paisaje de tu hogar</h2>
    </div>
  )
}

export default App
