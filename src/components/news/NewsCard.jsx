import React from 'react';
import { Link } from 'react-router-dom';

const NewsCard = ({ id, title, content, imageUrl, published, className, category }) => {
  const date = new Date(published);
  const dateStamp = date.getDate();
  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const dateMonth = monthNames[date.getMonth()];

  return (
    <Link to={`/newsdetails/${id}`} className={`card-article ${className}`}>
      <div className="date-stamp">{dateStamp}</div>
      <div className="date-month">{dateMonth}</div>
      <img src={imageUrl} alt={title} />
      <p>{category}</p>
      <h6>{title}</h6>
      <p>{content}</p>
    </Link>
  );
};

export default NewsCard;
