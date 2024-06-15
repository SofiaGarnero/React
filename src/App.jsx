import './App.css'
import { useState } from 'react'
import Navbar from './assets/components/navbar/navbar'
import ItemListContainer from './assets/containers/itemListContainer/itemListContainer'
import Promises from './assets/components/promise/promises'




function App() {

  const [categoria, setCategoria] = useState('todos')
return(
    <div>
      <Navbar handleCategoria={setCategoria}/>
      <ItemListContainer categoria ={categoria}/> 
      <Promises />
    </div>
   
    
  )
}

export default App
