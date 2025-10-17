import React, { useState, useRef } from "react";
import "../App.css";
import BotonSpotify from "../Components/BotonSpotify";
import Izquierda from "../Components/Izquierda";

export default function Api() {
  const [busqueda, setBusqueda] = useState("");
  const [resultados, setResultados] = useState([]);
  const [trackActual, setTrackActual] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const audioRef = useRef(null);

  function buscarCanciones() {
    if (busqueda.trim() === "") {
      setResultados([]);
      setMensaje("");
      return;
    }

    setMensaje("Buscando...");

    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(busqueda)}&entity=musicTrack&limit=20`)
      .then((res) => res.json())
      .then((data) => {
        if (data.results.length > 0) {
          setResultados(data.results);
          setMensaje("");
        } else {
          setResultados([]);
          setMensaje("Información no encontrada");
        }
      })
      .catch((error) => {
        console.error(error);
        setMensaje("Error al buscar información");
      });
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      buscarCanciones();
    }
  }

  function reproducirPreview(track) {
    setTrackActual(track);
    if (audioRef.current) {
      audioRef.current.src = track.previewUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  }

  function togglePlayPause() {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  }

  return (
    <>
      <div className="barra">
        <div className="iconos">
          <div className="log"><img src="/logo.png" alt="logo" /></div>
          <div className="inicio"><img src="/h.png" alt="inicio" /></div>
        </div>

        <div className="busqueda">
          <input type="text" placeholder="Escribe una canción..." value={busqueda} 
          onChange={(e) => setBusqueda(e.target.value)} onKeyDown={handleKeyPress}/>
          <button className="buscar" onClick={buscarCanciones}>
            <img src="/lupa.png" alt="buscar" />
          </button>
        </div>

        <div className="botonesbarra">
          <button className="premiun"><b>Descubrir Premium</b></button>
          <BotonSpotify />
        </div>
      </div>

      <div className="cuerpo">
        <Izquierda />

        <div className="center">
          {mensaje && <p className="mensaje">{mensaje}</p>}
          {resultados.map((track) => (
            <div className="albumes" key={track.trackId}>            
              <imgsrc={track.artworkUrl100}alt={track.trackName}
                onClick={() => reproducirPreview(track)}/>
              <p><strong>{track.trackName}</strong></p>
              <p>{track.artistName}</p>
            </div>
          ))}
        </div>

        <div className="derecha">
          {trackActual && (
            <div className="reproductor">
              <img src={trackActual.artworkUrl100} alt={trackActual.trackName} />
              <h4>{trackActual.trackName}</h4>
              <p>{trackActual.artistName}</p>
              <button onClick={togglePlayPause}>
                {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
              </button>
            </div>
          )}
        </div>
      </div>

      {trackActual && (
        <footer>
          <div className="pie">
            <img src={trackActual.artworkUrl60} alt={trackActual.trackName} />
            <div>
              <strong>{trackActual.trackName}</strong>
              <p>{trackActual.artistName}</p>
            </div>
            <audio ref={audioRef} controls autoPlay></audio>
          </div>
        </footer>
      )}
    </>
  );
}
