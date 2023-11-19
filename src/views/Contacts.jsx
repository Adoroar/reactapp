import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Contact_form from '../components/contact_form/Contact_form'
import Map from '../components/map/Map'
import Contact_info from '../components/contact_info/Contact_info'
import Showcase_top from '../components/showcase_top/Showcase_top'



const Contacts = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <Showcase_top/>
        <Contact_info/>
        <Contact_form/>
        <Map/>
        <Footer/>

    </div>
  )
}

export default Contacts