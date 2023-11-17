import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Saludo from './Components/Saludo/Saludo'
import ListaDeTareas from './Components/ListaDeTareas/ListaDeTareas'
import Perfil from './Components/Perfil/Perfil'
import Contador from './Components/Contador/Contador'
import Tema from './Components/Tema/Tema'

function App() {
  const tareas = [
    {id:1, nombre: "registro basico"},
    {id:2, nombre: "informacion basico"},
    {id:3, nombre: "registro 2"}
];
  
  return (
    <div>
      
      <Saludo nombre="Cleopatra"/>
      <ListaDeTareas tareas={tareas}/>
      <Perfil nombre="Vanesa" edad="29" correo="vane@gmail.com"/>
      <Contador/>
      <Tema/>
    </div>
      )
}

export default App



