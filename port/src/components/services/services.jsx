import React from 'react'
import "./services.css"
import thme from "../../assets/logo.jpg"
import services from '../../assets/serviceData.js'
function Services() {
  return (
   <div className="services">
    <div className="services-title">
        <h1>my services</h1>
        <img src={thme} alt="" />
    </div>
    <div className="service-container">
      {services &&
          services.map((service , index)=>{
          return(
            <div className="service_format"  key={index}>
              <h3>{service.sno}</h3>
              <h2>{service.sName}</h2>
              <p>{service.sDesc}</p>
              <div className="services-readmore">
                <img src="aeroicon" alt="" />
              </div>
            </div>
          )
        })
      }
    </div>
   </div>
  )
}

export default Services