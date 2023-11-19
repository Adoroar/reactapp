import React from 'react'

const Title = ({ title = '' }) => {
  return (
    <section className="showcase-contact">
    <div className="container">
        <h1>{title}</h1> 
    </div>
</section>
  )
}

export default Title