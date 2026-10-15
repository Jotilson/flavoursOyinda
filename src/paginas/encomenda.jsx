import { memo } from "react";

function Encomenda(){
     const mensagem = "Olá, pretendo alugar o vosso serviço para um evento!"
const url = `https://wa.me/351936667540?text=${encodeURIComponent(mensagem)}`
    return(
        <>
        <section className="Encomenda">
            <br />
        <h1>Orders</h1>
           <br />
        <p>Click the button to place your order.</p>

        <abbr title="Clique pra fazer a sua encomenda com o glovo">
            <a target="_blank" href="https://glovoapp.com/pt/pt/porto/stores/flavors-by-oyinda-opo">
                <div className="encomenda">
                <img className="imgEncomendas" src="/Glovo_logo.png" alt="glovo logo" />
                </div>
            </a>
        </abbr>

        <abbr title="Clique pra fazer a sua encomenda com Uber Eats">
            <a target="_blank" href="https://www.ubereats.com/pt-en/store/flavors-by-oyinda-rua-do-amial-1060/SEEj4XtnQsKzMsGVoOtD6w">
                <div className="encomenda">
                    <img className="imgEncomendas" src="uberEats.jpg" alt="uber eats logo" />
                </div>
            </a>
        </abbr>

        <abbr title="Clique pra reservar o seu pedido">
            <a href={url}>
                <div className="encomenda">
                    <h3>Book for an Event</h3>
                    <img className="imgEncomendas" src="whatsapp.png" alt="whatsapp logo" />
                </div>
            </a>
        </abbr>

        </section>
        
        </>
    )
}

export default memo(Encomenda);