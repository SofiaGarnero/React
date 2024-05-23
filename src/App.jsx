import './App.css'
import Navbar from './assets/components/navbar/navbar'
import ItemListContainer from './assets/containers/itemListContainer/itemListContainer'

function App() {

  return (
    <div>
      <Navbar />
      <ItemListContainer greeting='Bienvenido/a a mi Tienda' />

    </div>
  )
}

export default App
