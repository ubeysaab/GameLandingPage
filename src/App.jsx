import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'



import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/mousewheel'







// TODO : first import the components css then your css in the app not where you use the component


import "./sass/index.scss"
import Header from './components/Header'
import Home from "./pages/Home"
function App() {

  return (
    <>
      
     <Header/>
     <Home/>
    </>
  )
}

export default App
