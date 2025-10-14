import React from 'react'
import './Card.css' // Opcional para estilos

function ArtistCard({ artist }) {
  return (
    <div key={song.idTrack || song.id} className="card">
      <img
        src={song.strTrackThumb || song.image || 'https://via.placeholder.com/300x300?text=No+Image'}
        alt={song.strTrack || song.name}
        style={{ width: '100%', borderRadius: '10px' }}
      />
      <h3>{song.strTrack || song.name}</h3>
      <p>Artista: {song.strArtist || song.artist}</p>
      <p>Álbum: {song.strAlbum || song.album}</p>
      {song.intDuration && (
        <p>Duración: {Math.floor(song.intDuration / 60000)}:{String(Math.floor((song.intDuration % 60000) / 1000)).padStart(2, '0')} min</p>
      )}
      {song.external_url && (
        <a href={song.external_url} target="_blank" rel="noreferrer">
          Ver más
        </a>
      )}
    </div>
  )
}

export default ArtistCard
