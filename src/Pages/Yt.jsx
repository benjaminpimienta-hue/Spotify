import React, { useState, useEffect } from "react";
import "../App.css"

export default function Yt() {
  const [busqueda, setBusqueda] = useState("");
  const [query, setQuery] = useState(""); // para ejecutar búsqueda
  const [resultados, setResultados] = useState([]);
  const [videoId, setVideoId] = useState("");
  const [mostrarTodos, setMostrarTodos] = useState(false);

  const API_KEY = "AIzaSyCAom4vz2L1t0-k6f1e6Oel8WdtReqOtCA";

  useEffect(() => {
    if (query === "") return;

    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=5&q=${encodeURIComponent(
        query
      )}&key=${API_KEY}`
    )
      .then((res) => res.json())
      .then((data) => setResultados(data.items || []))
      .catch((err) => console.error(err));
  }, [query]);

   
  const videosParaMostrar = mostrarTodos ? resultados : resultados.slice(0, 5);

  return (
    <>
    <div className="barra">
      <div className='log'><img src="./img/logo.png" alt="" /></div>
      <div className='inicio'><img src="https://img.icons8.com/?size=48&id=8xhovyHdOQzF&format=png" alt="" /></div>
     
      <input value={busqueda} placeholder="Escribe una canción..." onChange={(e) => setBusqueda(e.target.value)} />
      
      <button onClick={() => setQuery(busqueda)}>Buscar</button>
      <button className="premiun"><b>Descubrir Premium</b></button>
      <button className="instalar"><b>Instalar app</b></button>
      <span>👤</span>
    </div>

    <div className="cuerpo">

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
      
    <div className="center">
      {resultados.map((video) => (
        <div className="albumes" key={video.id.videoId}>
          <img src={video.snippet.thumbnails.default.url} alt={video.snippet.title} onClick={() => setVideoId(video.id.videoId)}          />
          <p><strong>{video.snippet.title}</strong></p>
        </div> 
        ))}
          {resultados.length > 12 && !mostrarTodos && (
            <button onClick={() => setMostrarTodos(true)}>Ver más</button>
          )}
    </div>

    <div className="derecha">
      {videoId && (        
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            allowFullScreen
          ></iframe>
      )}
    </div>
    </div>

  </>
  );
}