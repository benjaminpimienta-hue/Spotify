import React from 'react'
import Izquierda from './Izquierda'
import Center from './Center'
import Derecha from './Derecha'

function Body() {
  return (
    <div className='cuerpo'>
    <Izquierda/>
    <Center/>
    <Derecha/>
    </div>
  )
}

export default Body