import React from "react";
import "./AboutMe.scss";
import backgroundPhoto from "../../assets/aboutMe.jpg";

const AboutMe = () => {
  return (
    <div className="page-wrapper">
      <div className="card-content">
        <div className="info-image-wrapper">.</div>
        <div className="text-wrapper">
          <p className="bolded-title">Cine sunt eu?</p>
          <p>
            Sunt Irina și sunt alături de tine pentru a depăși diverse provocări
            (anxietate, depresie, experiențe traumatice și altele) sau dacă vrei
            să te angajezi într-un proces de dezvoltare personală. Lucrez
            preponderent prin strategii din Terapia Schemelor, Terapia prin
            Acceptare și Angajament și Terapia Cognitiv Comportamentală. Valori
            personale care îmi ghidează munca în cabinet: compasiune,
            vulnerabilitate și echilibru. Atunci când nu sunt în cabinet îmi
            place să gătesc, să scriu sau să mă conectez cu natura și cei dragi.
            Dacă ești în căutarea unui îndrumător sunt lângă tine la fiecare
            pas.
          </p>
        </div>
      </div>
      <div className="card-content">
        <div className="text-wrapper">
          <p className="bolded-title">Parcursul meu</p>
          <p>
            Am urmat cursurile Facultății de Psihologie și Științe ale Educației
            Universitatea Babeș Bolyai, iar mai apoi Masterul Tehnici
            Psihologice pentru Controlul Comportamentului și Dezvoltarea
            Potențialului Uman din cadrul aceleiași universități. Din dorința de
            specializare am continuat să mă formez în cursurile: "Terapia prin
            acceptare și angajament (ACT) pentru traumă", "Terapia prin
            acceptare și angajament (ACT) pentru simptomatologia anxioasă",
            "Tulburările de personalitate din perspectiva
            cognitiv-comportamentală" și altele pe care le găsești pe profilul
            meu de LinkedIn.
          </p>
        </div>
        <div className="info-image-wrapper">.</div>
      </div>
      <div className="card-content">
        <div className="info-image-wrapper">.</div>
        <div className="text-wrapper">
          <p className="bolded-title">Filozofia mea</p>
          <p>
            Cred cu tărie într-o terapie personalizată, adaptată nevoilor și
            personalității fiecărei persone. Fie că te confrunți cu provocări,
            decizii grele sau doar vrei să împărtășești gândurile care te
            frământă, sunt aici să te ascult, să te sprijin și să te ghidez.
            Valori personale care îmi ghidează munca în cabinet: compasiune,
            vulnerabilitate și echilibru. Atunci când nu sunt în cabinet îmi
            place să gătesc, să scriu sau să mă conectez cu natura și cei dragi.
            Dacă ești în căutarea unui îndrumător sunt lângă tine la fiecare pas
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
