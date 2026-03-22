import React, { useState } from "react";
import backgroundImage from "../../assets/backgroundImage.png";
import Card from "../../components/Card/Card";
import cardImage from "../../assets/cards/cardImage.png";
import "./HomePage.scss";
import Tag from "../../components/Tag/Tag";

const HomePage = () => {
  const cardsModel = [
    {
      image: cardImage,
      text: "Text1",
    },
    {
      image: cardImage,
      text: "Text1223",
    },
    {
      image: cardImage,
      text: "Text3",
    },
    {
      image: cardImage,
      text: "Text4",
    },
  ];
  const tagsModel = [
    {
      text: "Text1",
    },
    {
      text: "Text2",
    },
    {
      text: "Text3",
    },
    {
      text: "Text4",
    },
  ];
  const frameModel = [
    {
      image: "",
      title: "Title 1",
      description: "",
      button_link: "",
      color: "black",
    },
    {
      image: "",
      title: "Title 2",
      description: "",
      button_link: "",
      color: "green",
    },
    {
      image: "",
      title: "Title 3",
      description: "",
      button_link: "",
      color: "red",
    },
    {
      image: "",
      title: "Title 4",
      description: "",
      button_link: "",
      color: "brown",
    },
  ];

  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="homepage-container">
      <div className="homepage-wrapper">
        <div className="image-wrapper">
          <img src={backgroundImage} alt="a" className="bckgrnd" />
        </div>
        <div className="text-overlay">
          <h1>Psiholog Clinician Irina Manarca</h1>
          <h1>Evidence Based Practitioner</h1>
          <p>Evaluare si Consiliere Psihologica Individuala pentru Adulti</p>
        </div>
      </div>

      <div className="main">
        <div className="cards-info-wrapper">
          {cardsModel.map((item, index) => (
            <Card cardImage={item.image} cardText={item.text} key={index} />
          ))}
        </div>

        <div className="tags-info-wrapper">
          {tagsModel.map((item, index) => (
            <Tag
              text={item.text}
              key={index}
              active={activeTab === index}
              onHandle={() => setActiveTab(index)}
            />
          ))}
        </div>

        <div className="tags-frame">
          {frameModel.map((item, index) => (
            <div
              key={index}
              className={`screen ${index <= activeTab ? "visible" : ""}`}
              style={{
                backgroundColor: item.color,
                zIndex: index,
              }}
            >
              <div className="screen-content">
                <h2>{item.title}</h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
