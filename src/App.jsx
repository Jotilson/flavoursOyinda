import { Suspense, useState } from 'react'

import './App.css'
import AppRoutes from './routes/appRoute'
import NavBar from './components/navBar/navbar'
import Footer from './components/footter/footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
    <Suspense fallback={<p>A carregar...</p>}>
     <NavBar/>
      <AppRoutes/>
      <Footer/>
    </Suspense>
    
    </>
  )
}

export default App
