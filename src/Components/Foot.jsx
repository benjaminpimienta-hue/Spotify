import React from 'react'

function Foot() {
  return (
    <>
    {trackActual && (
        <footer> 
          <div className="pie">
            <img src={trackActual.artworkUrl60} alt={trackActual.trackName}/>
            <div>
              <strong>{trackActual.trackName}</strong>
              <p>{trackActual.artistName}</p>
            </div>
            <audio ref={audioRef} controls autoPlay></audio>
          </div>
        </footer>
      )}
      </>
     
  )
}

export default Foot