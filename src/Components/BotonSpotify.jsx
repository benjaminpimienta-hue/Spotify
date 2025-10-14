import React from "react";

export default function BotonSpotify() {
  const irASpotify = () => {
    window.open("https://www.spotify.com/co-es/download/other/", "_blank");
  };

  return (

    <button className="instalar" onClick={irASpotify}>
        <b>⬇ Instalar app</b>
    </button>
    
  );
}