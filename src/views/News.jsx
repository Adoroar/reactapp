import React from 'react'
import Header from '../components/header/Header'
import Showcase_contact from '../components/showcase_contact/Showcase_contact'
import Footer from '../components/footer/Footer'
import News_article from '../components/news/News_article'

const News = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <Showcase_contact/>
        <News_article/>
        <Footer/>
    </div>
  )
}

export default News