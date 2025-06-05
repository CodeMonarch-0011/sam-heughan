import './App.css'
import { useState } from 'react'
import { Navbar } from './components/navbar'
import Main from "./pages/main/Page"
import { MobileSlider } from './components/mobile-slider'
import { ContactForm } from './components/contact-form'

function App() {

  const [ sliderOpen, setSliderOpen ] = useState(false)
  const [ contactOpen, setContactOpen ] = useState(false)



  return (
    <div className='app'> 
      <Navbar setSliderOpen={setSliderOpen} setContactOpen={setContactOpen} />

      <Main setContactOpen={setContactOpen} />
      
      {
        sliderOpen && !contactOpen
        ?
        <MobileSlider setSliderOpen={setSliderOpen} setContactOpen={setContactOpen} />
        :
        <></>
      }

      {
        contactOpen
        ?
        <ContactForm setContactOpen={setContactOpen} />
        :
        <></>
      }
    </div>
  )
}

export default App
