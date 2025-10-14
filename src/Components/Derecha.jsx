import React from 'react'

function Derecha() {
  return (
    <>
      {videoId && (
        <aside>
          <iframe
            width="300"
            height="200"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{ marginTop: "20px" }}
          ></iframe>
        </aside>
      )}
      </>
  )
}

export default Derecha