import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/cards/card'


function App() {


  return (
    <>  
    
    <Card titulo="Raichu" 
    descripcion="Su cola actúa como toma de tierra y descarga electricidad al suelo, lo que le protege de los calambrazos."
    imagen='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/026.png'
    ataque="6"
    ps="4"
    defensa="4"
    ataqueEspecial="6"
    defensaEspecial="5"
    velocidad="7"
    altura="0,8m"
    categoria="Raton"
    peso="30,0 kg"
    habilidad="Elec.estatica"
    tipo="Electrico"
    debilidad="Tierra"
    />

    <Card titulo="Pikachu" 
    descripcion="Cuando se enfada, este Pokémon descarga la energía que almacena en el interior de las bolsas de las mejillas."
    imagen='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/025.png'
    />
    
    <Card titulo='Pichu'
    descripcion='No se le da muy bien el almacenamiento de electricidad. A la mínima, descarga energía sin darse cuenta.'
    imagen='https://www.pokemon.com/static-assets/content-assets/cms2/img/pokedex/full/172.png'
    />

    <Card/>
    </>
  )
}

export default App
