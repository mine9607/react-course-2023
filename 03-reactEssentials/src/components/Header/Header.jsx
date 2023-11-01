import React from "react";
import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";

export default function Header() {
  const reactDescriptions = ["Fundamental", "Crucial", "Core"];
  const randomIndex = Math.floor(Math.random() * reactDescriptions.length);
  const description = reactDescriptions[randomIndex];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  );
}
