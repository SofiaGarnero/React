import './App.css'
import { useState, useEffect } from 'react'
import Navbar from './assets/components/navbar/navbar'
import ItemListContainer from './assets/containers/itemListContainer/itemListContainer'
import Promises from './assets/components/promise/promises'



function App() {
return(
    <div>
      <Navbar />
      <ItemListContainer greeting ='Bienvenido/a a mi Tienda'/> 
      <Promises />
    </div>
   
    
  )
}

export default App
