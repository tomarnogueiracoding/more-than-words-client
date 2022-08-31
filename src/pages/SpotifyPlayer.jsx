import { useEffect } from 'react';

function SpotifyPlayer() {
  useEffect(() => {}, []);

  return (
    <div>
      <h1>Spotify Player</h1>
      <div>
        <iframe
          src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j"
          width="480"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        ></iframe>
      </div>
    </div>
  );
}

export default SpotifyPlayer;

<iframe
  style="border-radius:12px"
  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX5trt9i14X7j?utm_source=generator"
  width="100%"
  height="80"
  frameBorder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>;
