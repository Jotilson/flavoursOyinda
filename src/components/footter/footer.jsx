


function Footer(){
     const mensagem = "Olá, pretendo alugar o vosso serviço para um evento!"
const url = `https://wa.me/351936667540?text=${encodeURIComponent(mensagem)}`

    return(
        <>
         <footer id="contatos">
        <div><h6>Orders</h6>
        <ul><li><a target="_blank" href="https://glovoapp.com/pt/pt/porto/stores/flavors-by-oyinda-opo" >Glovo</a></li>
        <li><a href={url}>Book for an Event</a></li>
        </ul>
        </div>

        
        <div><h6>Contacts</h6>
        <ul><li><a target="_blank" href="https://www.instagram.com/flavorsbyoyinda?stkn=ZGpiZXp4czdxdjl=">Instagram</a></li>
        <li><a target="_blank" href="https://vm.tiktok.com/ZS9DVPFHSuFAR-hVx6E/">TikTok</a></li>
        <li><a target="_blank" href={url}>Whatsapp</a>
      
        </li>
        </ul>
        </div>
       </footer>
        
        </>
    )
}

export default Footer