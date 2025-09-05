import React from 'react'
import "./myWork.css"
import mydata from "../../assets/myWork-data"
function Mywork() {
  return (
<div className="mywork">
    <div className="mywork-title">
        <h1>My latest project</h1>
        <img src="them" alt="" />
    </div>
    <div className="mywork-container">
        {mydata.map((data , index)=>(
          (
           <img src={data.w_img} key={index}  alt="img" />
          
          )
        ))}
        <div className="mywork-showmore">
          <p>Show more</p>
          <img src="icon" alt="" />
        </div>
    </div>
</div>
  )
}

export default Mywork