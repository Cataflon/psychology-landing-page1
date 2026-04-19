import React, { useState } from "react";
import backgroundImage from "../../assets/backgroundImage.png";
import Card from "../../components/Card/Card";
import cardImage from "../../assets/cards/cardImage.png";
import "./HomePage.scss";
import Tag from "../../components/Tag/Tag";
import GradientText from "../../components/GradientText/GradientText";
import Iridescence from "../../components/Iridescence/Iridescence";

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
          <Iridescence
            color={[1, 1, 1]}
            speed={0.5}
            amplitude={0.2}
            mouseReact={true}
            className="hero-iridescence"
          />
          <div className="dark-overlay"></div>
        </div>
        <div className="text-overlay">
          <GradientText
            colors={["#160f3d", "#202084", "#0bb5d1", "#0798b1"]}
            animationSpeed={6}
            showBorder={false}
            className="custom-gradient-title"
          >
            Psihoterapeut si Psiholog Irina Manarca
          </GradientText>

          <h1>Acreditata de Colegiul Psihologilor din Romania</h1>
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
