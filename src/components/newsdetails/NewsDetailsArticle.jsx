import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const NewsDetailsArticle = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const response = await fetch(`https://win23-assignment.azurewebsites.net/api/articles/${id}`);
        const data = await response.json();
        setArticle(data);
      } catch (error) {
        console.error('Error fetching article:', error);
      }
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wrapper-digit-sidebar">
      <section className="article-digitalization">
        <div className="container-digitalization">
          <div className="header-digitalization">
            <h1>{article.title}</h1>
            <div className="info">
              <p> {new Date(article.published).toLocaleDateString()}</p>
              <p>{article.category}</p>
              <p>{article.author}</p>
            </div>
          </div>
          <div className="left-center-side">
            <img src={article.imageUrl} alt="Article" /> 
            <p className="first-part">
              {article.content}
            </p>
                    <div className="box-details">
                    <div className="details-row-circles">
                        <p>Digitalization</p>
                        <p>School</p>
                        <p>IT</p>
                        <p>Design</p>
                        <p>Work</p>
                        <p>Tech</p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    <div className="sidebar-details">
        <div className="sidebar-container">
            <div className="container">
                <div className="input-group">
                    <input type="text" className="form-control" placeholder="Search..." aria-label="Search..." style={{ borderRadius: '50px' }}/>
                    <div className="input-group-prepend">
                        <span className="input-group-text">
                            <i className="fa-solid fa-magnifying-glass" style={{ color: 'black' }}></i>
                        </span>
                    </div>
                </div>                  
            </div>
            <div className="box-one-sidebar">
                <h6>Recent Posts</h6>
                <p>How To Blow Through Capital At An<br/> Incredible Rate</p>
                <p className="date-details">Jan 14, 2023</p>
                <p>How To Blow Through Capital At An<br/> Incredible Rate</p>
                <p className="date-details">Jan 14, 2023</p>
                <p>How To Blow Through Capital At An<br/> Incredible Rate</p>
                <p className="date-details">Jan 14, 2023</p>
                <p>How To Blow Through Capital At An<br/> Incredible Rate</p>
                <p className="date-details">Jan 14, 2023</p>
            </div>
            <div className="box-two-sidebar">
                <h6>Categories </h6>
                <p>Technology - <span>16 Posts</span></p>
                <p>Freelancing - <span>16 Posts</span></p>
                <p>Writing - <span>12 Posts</span></p>
                <p>Marketing - <span>20 Posts</span></p>
                <p>Business - <span>10 Posts</span></p>
                <p>Education - <span>8 Posts</span></p>
            </div>
        </div>
    </div>
</div>
  )
}

export default NewsDetailsArticle