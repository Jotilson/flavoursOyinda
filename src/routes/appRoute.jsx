 import { lazy } from 'react'
 import {Routes, Route} from 'react-router-dom'
 
const Home = lazy(()=> import('../paginas/home'))
const Eventos = lazy(()=> import('../paginas/eventos'))
const Menus = lazy(()=> import('../paginas/menu'))
const Encomenda = lazy(()=> import('../paginas/encomenda'))

function AppRoutes(){
    return(
        <>
           <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/eventos' element={<Eventos/>}/>
      <Route path='/menu' element={<Menus/>}/>

      <Route path='/encomenda' element={<Encomenda/>}/>
    
        </Routes>
        </>
    )
}

export default AppRoutes;