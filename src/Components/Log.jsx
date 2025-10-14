import React from 'react'

function Log() {
  const handleLogin = () => {
    window.location = "https://accounts.spotify.com/authorize" +
      "?client_id=TU_CLIENT_ID_DE_SPOTIFY" + // Pega tu Client ID
      "&redirect_uri=http://localhost:5173" + // Cambia si tu app usa otro puerto
      "&response_type=token";
  };

  return (
    <div>
      <h1>Iniciar sesión con Spotify</h1>
      <button onClick={handleLogin}>Login con Spotify</button>
    </div>
  );
}

export default Log;