import React from 'react'

function Center() {
  return (
    <div className='center'>
    <div>
      <h2>Álbumes con canciones que te gustan</h2>
      <div className="albumes">
        <div>
          <img src="https://i.scdn.co/image/ab67616d0000b273db89b08034de626ebee6823d" alt="" />
          <p>Dookie</p>
          <p>Green Day</p>
        </div>
        <div>
          <img src="https://i.scdn.co/image/ab67616d0000b273c31d3c870a3dbaf7b53186cc" alt="" />
          <p>Gangsta's Paradise</p>
          <p>Coolio</p>
        </div>
        <div>
          <img src="https://i.scdn.co/image/ab67616d0000b27306ce0d1f846c525e847d60e7" alt="" />
          <p>Believe</p>
          <p>Cher</p>
        </div>
      </div>
    </div>

    <div>
      <h2>Escuchado recientemente</h2>
    </div>
  </div>
  )
}

export default Center