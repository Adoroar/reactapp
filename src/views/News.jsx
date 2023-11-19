import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import News_article from '../components/news/News_article'
import Showcase_top from '../components/showcase_top/Showcase_top'
import Title from '../components/generics/Title'

const News = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <Showcase_top title='News'/>
        <Title title='Our News'/>
        <News_article/>
        <Footer/>
    </div>
  )
}

export default News