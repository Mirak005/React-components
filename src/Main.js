import React from "react";
import Adress from "./profile/ProfileAddress";
import Name from "./profile/ProfileName";
import Photo from "./profile/ProfilePhoto";
import "./Main.css";

function Main() {
  return (
    <div className="card ">
      <Photo />
      <Name />
      <Adress />
    </div>
  );
}

export default Main;
