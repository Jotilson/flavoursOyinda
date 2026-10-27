import { memo } from "react";
import '../components/navBar/styles.css'
import ImagemAnimada from "../components/imagem";
import VideoAutoplays from '../components/videos'
import DivAnimada from '../components/div'
import IMGeventos from '../components/imgEventos.jsx'

function Eventos(){
  
const reproduzirVideo = (e) => {
  e.currentTarget.play();
};

const pararVideo = (e) => {
  e.currentTarget.pause();
  e.currentTarget.currentTime = 0;
};

    return(
   <>
  
   <header className="masthead2">
   
   </header>
   
   <section className="apresentacao">
      <br />
        <h1>Events</h1>
        <br />   <br />
       <div>
        
<p>Moments that stay in our memories… and on our taste buds.</p>

<p>From special dinners to flavour-filled events, here we capture the best moments at Flavors by Oyinda.</p>

<p>Photos, videos, and dishes that have shaped our story — and the stories of everyone who has visited us.</p>

       </div>  
   </section>
    
<section>
    <br />
  <h1>Memories Videos 🎬</h1>
  <DivAnimada>
  <div className="divVideos">
      <video
      className="videos"
      src="/video3.mov"
      preload="auto"
      controls
      muted
      playsInline
      loop
      style={{
        width: "30%",
        maxWidth: "300px"
      }}
       onMouseEnter={reproduzirVideo}
  onMouseLeave={pararVideo}
      >
      O teu browser não suporta este vídeo.
      </video>
      
       <video
      className="videos"
      src="/videosFlavorsOyinda/video4.mov"
      preload="auto"
      controls
      muted
      playsInline
      loop
      style={{
        width: "30%",
        maxWidth: "300px"
      }}
       onMouseEnter={reproduzirVideo}
  onMouseLeave={pararVideo}
      >
      O teu browser não suporta este vídeo.
      </video>
      <video
      className="videos"
      src="/videosFlavorsOyinda/video5.mov"
      preload="auto"
      controls
      muted
      playsInline
      loop
      style={{
        width: "30%",
        maxWidth: "300px"
      }}
       onMouseEnter={reproduzirVideo}
  onMouseLeave={pararVideo}
      >
      O teu browser não suporta este vídeo.
      </video>
      
       <video
      className="videos"
      src="/videosFlavorsOyinda/video20.mp4"
      preload="auto"
      controls
      muted
      playsInline
      loop
      style={{
        width: "30%",
        maxWidth: "300px"
      }}
       onMouseEnter={reproduzirVideo}
  onMouseLeave={pararVideo}
      >
      O teu browser não suporta este vídeo.
      </video>
        <video
      className="videos"
      src="/videosFlavorsOyinda/video18.mp4"
      preload="auto"
      controls
      muted
      playsInline
      loop
      style={{
        width: "30%",
        maxWidth: "300px"
      }}
       onMouseEnter={reproduzirVideo}
  onMouseLeave={pararVideo}
      >
      O teu browser não suporta este vídeo.
      </video>
 
     
  </div>

  </DivAnimada>
    <br />
   </section> 
    
    <section>
      <h2>Memories photos</h2>
     <DivAnimada>
      <IMGeventos/>

      </DivAnimada>
        <br />
      </section>
   
   
   
   
   </>
    )
}

export default memo(Eventos);