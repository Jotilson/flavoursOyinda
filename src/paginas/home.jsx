import DivAnimada from "../components/div";
import IframeAnimado from "../components/iframe";
import ImagemAnimada from "../components/imagem";
import ImagemA from "../components/img";
import VideoAutoPlay from "../components/video";

import CarrosselPratos from "../components/carrosselPratos.jsx"

import { memo } from "react";
function Home(){
    const mensagem = "Olá, pretendo alugar o vosso serviço para um evento!"
const url = `https://wa.me/351936667540?text=${encodeURIComponent(mensagem)}`
 return(
    <>
   

        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To <br /> MY RESTAURANT!</div>
                <div class="masthead-heading text-uppercase">FLAVORS BY OYINDA</div>
                
            </div>
         
            <ImagemA src={'/pratoIMG.png'}/>
               
            <div className="btnClick">
                <a class="btn btn-primary btn-xl text-uppercase" href="/encomenda">Place Your Order Now</a>
                
                
                <a class="btn btn-primary btn-xl text-uppercase" target="_blank"  href={url}>Book Us for Your Event</a>
                
            </div>

        </header>      
        <section class="page-section" id="services">
              
            <div class="container">
              
              <div className="sectionTXT">
                 <p>Sabor que te leva a África… sem sair do Porto.
      </p>
      <p> Descobre a verdadeira cozinha Afro-Fusion.</p>
     <p>Flavors by Oyinda — o sabor que faltava na tua vida.</p>
      <p>O sabor da África, feito com amor no Porto.</p>
      </div>
     

            </div>
             <VideoAutoPlay/>

           
        </section>

        <section className=" section-pratos">
            <h2>Enjoy Our Dishes</h2>
                Swipe to discover more of our delicious dishes. 🍽️
                <br /> <br />
            <div className="container">

            <DivAnimada>
            <CarrosselPratos />
            </DivAnimada> 
            </div>
        </section>
       
       <section>
        <br/> <br/>
            <h2>Our Location 📍</h2>
            <br />

<IframeAnimado 
  src="https://maps.google.com/maps?q=Flavors+by+Oyinda,+Rua+do+Amial+1060,+4200-057+Porto&layer=c&output=svembed"
  title="Localização Flavors by Oyinda"
/>
 <p className="txtEsp">We are located in: Rua do Amial 1060, 4200-057 Porto, Portugal</p>
        </section>

      
       
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>
        
        
        
        
        <script src="https://cdn.startbootstrap.com/sb-forms-latest.js"></script>
    </>
 )

}

export default memo(Home);
