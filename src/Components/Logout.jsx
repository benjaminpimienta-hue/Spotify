import React from 'react'
import { supabase } from '../supabaseClient'


function Logout() {
    const handleLogout = () => {
    supabase.auth.signOut()
      .then(() => {
        window.location.reload()
      })
      .catch((error) => {
        console.error('Error al cerrar sesión:', error)
      })
  }
  return (
    <>
    <button className='out' onClick={handleLogout}>
      <img src="/salida.png" alt="" />
    </button>
  </>
  )
}

export default Logout