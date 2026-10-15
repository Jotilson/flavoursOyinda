import { useRef, useEffect, memo } from "react";

function VideoAutoPlays({ src }) {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Função para tentar tocar com segurança
    const tryPlay = () => {
      if (video.paused) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.log("Erro ao tocar vídeo:", err);
            // Garante que está muted e tenta outra vez
            video.muted = true;
            video.play().catch(() => {});
          });
        }
      }
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Só tenta tocar se o vídeo já tiver dados carregados
          if (video.readyState >= 2) {
            tryPlay();
          } else {
            // Espera o vídeo estar pronto
            video.addEventListener("loadeddata", tryPlay, { once: true });
          }
        } else {
          video.pause();
        }
      },
      {
        threshold: 0.25,        // mais baixo → funciona melhor no PC
        rootMargin: "0px 0px -10% 0px", // ajuda a detetar um pouco antes
      }
    );

    observer.observe(video);

    // Caso o vídeo já esteja visível no momento em que o componente monta
    // (muito comum no desktop)
    if (video.getBoundingClientRect().top < window.innerHeight) {
      if (video.readyState >= 2) {
        tryPlay();
      } else {
        video.addEventListener("loadeddata", tryPlay, { once: true });
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [src]);

  return (
    <video className="videos"
      ref={videoRef}
      src={src}
      muted
      playsInline
      loop
      preload="auto"          // ← importante: carrega o vídeo mais cedo
      // controls            // deixa comentado se não quiseres controlos
      style={{
        width: "90%",
        maxWidth: "800px",
        borderRadius: "5px",
        boxShadow: "1px 1px 2px black",
      }}
    />
  );
}

export default memo(VideoAutoPlays);