import DivAnimada from "../components/div";
import IframeAnimado from "../components/iframe";
import ImagemAnimada from "../components/imagem";
import VideoAutoPlay from "../components/video";
import { memo } from "react";
function Home(){
    const mensagem = "Olá, pretendo alugar o vosso serviço para um evento!"
const url = `https://wa.me/351936667540?text=${encodeURIComponent(mensagem)}`
 return(
    <>
    
        <header class="masthead">
            <div class="container">
                <div class="masthead-subheading">Welcome To MY RESTAURANT!</div>
                <div class="masthead-heading text-uppercase">FLAVORS BY OYINDA</div>
                
            </div>
            
            <div className="btnClick">
                <a class="btn btn-primary btn-xl text-uppercase" href="/encomenda.jsx">Place Your Order Now</a>
                
                <a class="btn btn-primary btn-xl text-uppercase" target="_blank"  href={url}>Book Us for Your Event</a>
                
            </div>
            

        </header>      
        <section class="page-section" id="services">
            <div class="container">
             <VideoAutoPlay/>
            </div>

             <div className="sectionTXT">
                 <p>Sabor que te leva a África… sem sair do Porto.
      </p>
      <p> Descobre a verdadeira cozinha Afro-Fusion.</p>
     <p>Flavors by Oyinda — o sabor que faltava na tua vida.</p>
      <p>O sabor da África, feito com amor no Porto.</p>
      </div>
     

        </section>

        <section className=" section-pratos">
            <h2>Enjoy Our Dishes</h2>
                Swipe to discover more of our delicious dishes. 🍽️
                <br /> <br />
            <div className="container">
          <DivAnimada>
         <div className="imagensPratos">
            <img src="/prato1.jpg" alt="pratos da flavors oyinda" />
            <img src="/prato2.jpg" alt="pratos da flavors oyinda" />
            <img src="/prato3.jpg" alt="pratos da flavors oyinda" />
            <img src="/prato7.jpg" alt="pratos da flavors oyinda" />
            <img src="/prato9.jpg" alt="pratos da flavors oyinda" />

            </div>
          </DivAnimada>
           
           <DivAnimada>
            <div className="imagensPratos">
                <img src="/prato4.jpg" alt="pratos da flavors oyinda" />
            <img src="/prato5.jpg" alt="pratos da flavors oyinda" />
            <img src="/prato6.jpg" alt="pratos da flavors oyinda" />
            <img src="/prato8.jpg" alt="pratos da flavors oyinda" />
             <img src="/prato10.jpg" alt="pratos da flavors oyinda" />
              <img src="/prato11.jpg" alt="pratos da flavors oyinda" />

            </div>
            </DivAnimada>
            
            
            </div>
        </section>
       
       <section>
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
