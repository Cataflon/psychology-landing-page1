import React from "react";
import "./AboutMe.scss";
import backgroundPhoto from "../../assets/aboutMe.jpg";

const AboutMe = () => {
  return (
    <div>
      <img src={backgroundPhoto} alt="" />
      <p className="text-content">
        <p className="bolded-title">Cine sunt eu?</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum,
        incidunt temporibus eius odit eum minima doloremque sapiente aspernatur,
        vel accusantium omnis ad dolores consequuntur odio? Cumque ut quidem
        error?
      </p>
      <p className="text-content">
        <p className="bolded-title">Parcursul meu</p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum,
        incidunt temporibus eius odit eum minima doloremque sapiente aspernatur,
        vel accusantium omnis ad dolores consequuntur odio? Cumque ut quidem
        error?
      </p>
    </div>
  );
};

export default AboutMe;
