
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './styles.css'

function NavBar() {

  useEffect(() => {

    // Navbar shrink
    const navbarShrink = () => {
      const navbar = document.querySelector('#mainNav')

      if (!navbar) return

      if (window.scrollY === 0) {
        navbar.classList.remove('navbar-shrink')
      } else {
        navbar.classList.add('navbar-shrink')
      }
    }

    // Executa quando o componente aparece
    navbarShrink()

    // Executa quando fazemos scroll
    window.addEventListener('scroll', navbarShrink)

    // Fechar menu mobile depois de clicar num link
    const navbarToggler = document.querySelector('.navbar-toggler')
    const responsiveNavItems = document.querySelectorAll(
      '#navbarResponsive .nav-link'
    )

    responsiveNavItems.forEach((item) => {
      item.addEventListener('click', () => {

        if (
          navbarToggler &&
          window.getComputedStyle(navbarToggler).display !== 'none'
        ) {
          navbarToggler.click()
        }

      })
    })

    // Limpeza dos eventos quando o componente sair
    return () => {
      window.removeEventListener('scroll', navbarShrink)

      responsiveNavItems.forEach((item) => {
        item.replaceWith(item.cloneNode(true))
      })
    }

  }, [])


  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      id="mainNav"
    >

      <div className="container">

        {/* Logo */}
        <Link className="navbar-brand logoTXT" to="/">
        <img src="/flavours_logo.png" alt="FLAVORS LOGO" /> <br />
        </Link>


        {/* Botão mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarResponsive"
          aria-controls="navbarResponsive"
          aria-expanded="false"
          aria-label="Abrir navegação"
        >
          Menu
          <span className="navbar-toggler-icon"></span>
        </button>


        {/* Navegação */}
        <div
          className="collapse navbar-collapse"
          id="navbarResponsive"
        >

          <ul className="navbar-nav ms-auto">

            <li className="nav-item">
              <Link className="nav-link" onClick={() => window.scrollTo(0, 0)} to="/">
                Home
              </Link>
              <div className="barra"></div>
            </li>

            <li className="nav-item">
              <Link className="nav-link"  onClick={() => window.scrollTo(0, 0)} to="/eventos">
                Events
              </Link>
              <div className="barra"></div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" onClick={() => window.scrollTo(0, 0)} to="/menu">
                Our Menu
              </Link>
              <div className="barra"></div>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#contatos">Contacts</a>
             <div className="barra"></div>
            </li>

            <li className="nav-item">
              <Link className="nav-link" onClick={() => window.scrollTo(0, 0)} to="/encomenda" >
                Orders
              </Link>
              <div className="barra"></div>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  )
}

export default NavBar

