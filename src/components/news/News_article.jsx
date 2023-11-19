import React from 'react'
import NewsList from './NewsList'



const News = () => {
  return (
    <>
        <div className="wrapper-news">
            <div className='news-list'>
            <NewsList maxArticles={9} className="row-layout" />
           </div>
        </div>
</>
  )
}

export default News