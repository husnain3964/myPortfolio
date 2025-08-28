import React from "react";
import "./hero.css";
import profile from "../../assets/logo.jpg";

function Hero() {
  return (
    <div   className="hero" >
      <img src={profile} alt="" />
      <h1>  <span>  I'm Husnain </span> , Mern stack developer </h1>
      <p>
        
        Passionate MERN Stack Developer crafting dynamic and scalable web
        solutions
      </p>
      <div className="hero-action">
        <div className="hero-connect"> Connect with me </div>
        <div className="hero-resume"> my resume </div>
      </div>
    </div>
  );
}

export default Hero;
