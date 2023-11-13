import React from 'react'
import img_paperz from '../../assets/images/paperz.svg'
import img_dorfus from '../../assets/images/dorfus.svg'
import img_martino from '../../assets/images/martino.svg'
import img_square from '../../assets/images/square.svg'
import img_gobona from '../../assets/images/gobona.svg'

const Company_info = () => {
  return (
    <section className="company-info">
            <div className="container">
                <img className="companyimg" src={img_paperz} alt="paperz"/>
                <img className="companyimg" src={img_dorfus} alt="dorfus"/>
                <img className="companyimg" src={img_martino} alt="martino"/>
                <img className="companyimg" src={img_square} alt="square"/>
                <img className="companyimg" src={img_gobona} alt="gobona"/>
            </div>
        </section>
  )
}

export default Company_info