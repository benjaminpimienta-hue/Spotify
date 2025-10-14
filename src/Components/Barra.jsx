import React from 'react'
import BotonSpotify from './BotonSpotify'

function Barra() {
    const [busqueda, setBusqueda] = useState("");
    const [query, setQuery] = useState("");
    
  return (
     <div className="barra">
        <div className="log"><img src="./img/logo.png" alt="" /></div>
        <div className="inicio"><img src="./img/h.png" alt="" /></div>

        <input value={busqueda} placeholder="Escribe una canción..." 
          onChange={(e) => setBusqueda(e.target.value)}/>

        <button className="buscar" onClick={() => setQuery(busqueda)}> <img src="./img/lupa.png" alt="" /> </button>
        <button className="premiun"><b>Descubrir Premium</b></button>
        <BotonSpotify></BotonSpotify>
        <span>👤</span>
      </div>
  )
}

export default Barra