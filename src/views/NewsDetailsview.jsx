import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import NewsDetailsArticle from '../components/newsdetails/NewsDetailsArticle'
import Article_news from '../components/article_and_news/Article_news'
import Showcase_top from '../components/showcase_top/Showcase_top'

const NewsDetailsview = () => {
  return (
    <div className='wrapper'>
        <Header/>
        <Showcase_top title="News Details"/>
        <NewsDetailsArticle/>
        <Article_news/>
        <Footer/>
    </div>
  )
}

export default NewsDetailsview