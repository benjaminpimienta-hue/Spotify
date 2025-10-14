import React from 'react'

function Izquierda() {
  return (
    <>
  <div className='izquierda'>
    <div className='biblioteca'>
    <h2>Tu biblioteca </h2>
    <button>+</button>
    </div> 
    <div>
      <h4>Crea tu primera lista</h4>
      <p>Es muy fácil, y te echaremos una mano.</p>
      <button>Crear lista</button>
    </div>
    <div>
      <h4>Encuentra pódcasts que quieras seguir</h4>
      <p>Te avisaremos cuando salgan nuevos episodios</p>
      <button>Explorar pódcasts</button>
    </div>
  </div>
  </>
  )
}

export default Izquierda