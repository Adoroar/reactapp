import React from 'react';
import NewsList from '../news/NewsList'

const Article_news = () => {
  return (
    <>
    <div className="left">
                <h6>Article & News</h6>
                <h1>Get Every Single Article And News</h1>
            </div>
    <div className='news-list'>
      <NewsList maxArticles={3} className="row-layout" />
    </div>
    </>
  );
}

export default Article_news;
