import { useRef, useEffect, memo } from "react";

function VideoAutoPlay() {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Quando o vídeo entra no ecrã → play
          video.play().catch(() => {
            // Alguns browsers bloqueiam autoplay com som
            // Se der erro, tenta sem som
            video.muted = true;
            video.play();
          });
        } else {
          // Quando sai do ecrã → pausa
          video.pause();
        }
      },
      {
        threshold: 0.5, // Só começa quando 50% do vídeo estiver visível
      }
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <video
      ref={videoRef}
      src="/videoAPT.mov"
      muted          // Importante: muted facilita o autoplay
      playsInline    // Importante no telemóvel
      loop           // Se quiseres que repita
          // Podes tirar se não quiseres os controlos
      style={{ width: "60%", maxWidth: "600px", borderRadius:"5px", boxShadow:"1px 1px 2px black" }}
    />
  );
}

export default memo(VideoAutoPlay);