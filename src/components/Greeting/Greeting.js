import React from "react";
import "./styles.scss";
import {
  Bar,
  BarItem,
  indexActiveTab,
  SubBarItem
} from "react-costumized-nav-bar";
import BleachLogo from "../../img/bleach-logo.png";

const Greeting = ({ message }) => (
  <div className="greeting_container">
    <Bar
      style={{
        height: "60px",
        paddingTop: "50px"
      }}
      forceStyle
      itemWidth={80}
      theme={{ type: "simple-underlined-boxes" }}
    >
      <img
        src={BleachLogo}
        style={{
          height: "100px",
          width: "120px",
          position: "relative",
          bottom: "70%"
        }}
      />
      <BarItem title={"Hollows"}></BarItem>
      <BarItem title={"Shinigamis"}></BarItem>
      <BarItem title={"Worlds"}>
        <SubBarItem title={"Soul Sociaty"} />
        <SubBarItem title={"Human World"} />
        <SubBarItem title={"Hueco Mundo"} />
      </BarItem>
      <BarItem title={"Quincies"} />{" "}
    </Bar>
  </div>
);

export default Greeting;
