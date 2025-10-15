import React from 'react'

function Start() {
  return (
    <div className='star'>
        <img src="./img/start_spotify.png" alt="" />
        <div className='logo'><img src="./img/logo.png" alt="" /></div>
        <b className='textlogo'>Millions of Songs. <br/> Free on Spotify.</b>
        <button className='sign'><b>Sign up free</b></button>

        <button className='google' onClick={() => handleLogin('google')}>
        <img src="./img/G.png" alt="" />
        <b>Continue con Google</b>
      </button>
    </div>
  )
}

export default Start