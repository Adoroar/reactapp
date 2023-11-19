import React from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Showcase from '../components/showcase/Showcase'
import Company_info from '../components/company_info/Company_info'
import Features from '../components/features/Features'
import About_company from '../components/about_company/About_company'
import Our_services from '../components/our_services/Our_services'
import Why_choose_us from '../components/why-choose_us/Why_choose_us'
import Projects_and_cases from '../components/project_and _cases/Projects_and_cases'
import Team from '../components/team/Team'
import Article_news from '../components/article_and_news/Article_news'
import Subscribe from '../components/subscribe/Subscribe'


const Home = () => {
  return (
    <>
        <Header/>
        <Showcase/>
        <Company_info/>
        <Features/>
        <About_company/>
        <Our_services/>
        <Why_choose_us/>
        <Projects_and_cases/>
        <Team/>
        <Article_news/>
        <Subscribe/>
        <Footer/>
    </>
  )
}

export default Home