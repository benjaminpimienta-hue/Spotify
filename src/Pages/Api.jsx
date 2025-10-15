import React, { useState, useEffect, useRef } from "react";
import "../App.css";
import BotonSpotify from "../Components/BotonSpotify";
import Izquierda from "../Components/Izquierda";

export default function Api() {
  const [busqueda, setBusqueda] = useState("");
  const [query, setQuery] = useState("");
  const [resultados, setResultados] = useState([]);
  const [mostrarTodos, setMostrarTodos] = useState(false);
  const [trackActual, setTrackActual] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (query === "") return;

    fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(query)}&entity=musicTrack&limit=20`)
      .then((res) => res.json())
      .then((data) => setResultados(data.results || []))
      .catch((err) => console.error(err));
  }, [query]);

  const reproducirPreview = (track) => {
    setTrackActual(track);
    if (audioRef.current) {
      audioRef.current.src = track.previewUrl;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (audioRef.current.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef.current.pause();
      setIsPlaying(false);
    }
  };

  const cancionesParaMostrar = mostrarTodos ? resultados : resultados.slice(0, 9);

  return (
    <>
      <div className="barra">

      <div className="iconos">
        <div className="log"><img src="./img/logo.png" alt="" /></div>
        <div className="inicio"><img src="./img/h.png" alt="" /></div>
      </div>

      <div className="busqueda">
        <input value={busqueda} placeholder="Escribe una canción..." 
          onChange={(e) => setBusqueda(e.target.value)}/>
        <button className="buscar" onClick={() => setQuery(busqueda)}> <img src="./img/lupa.png" alt="" /> </button>
      </div>       

      <div className="botonesbarra">
        <button className="premiun"><b>Descubrir Premium</b></button>
        <BotonSpotify></BotonSpotify>
      </div>
      </div>

      <div className="cuerpo">
        {/* Izquierda */}
        <Izquierda></Izquierda>

        {/* Centro */}
        <div className="center">
          {cancionesParaMostrar.map((track) => (
            <div className="albumes" key={track.trackId}>
              <img src={track.artworkUrl100} alt={track.trackName} onClick={() => reproducirPreview(track)}/>

              <p><strong>{track.trackName}</strong></p>
              <p>{track.artistName}</p>
            </div>
          ))}

          {resultados.length > 5 && !mostrarTodos && (
            <button className="mostrar" onClick={() => setMostrarTodos(true)}> 
            <img src="./img/flecha.png" alt="" /> 
            </button>
          )}
        </div>

        {/* Derecha */}
        <div className="derecha">
          {trackActual && (
            <div className="reproductor">
              <img src={trackActual.artworkUrl100} alt={trackActual.trackName}/>
              <h4>{trackActual.trackName}</h4>
              <p>{trackActual.artistName}</p>
              <button onClick={togglePlayPause}>
                {isPlaying ? "⏸️ Pausar" : "▶️ Reproducir"}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
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
  );
}
