import React from "react";
import afraid from "../images/afraid.jpg";

function Settings(){
    return (
      <div className="settings">
        <p> There is Settings </p>
        <a href="https://google.com.tw/">前往google</a>
        <p> 這是怕豹 </p>
        <img src={afraid} />
        <img src={afraid} />
        <img src={afraid} />
        <img src={afraid} />
      </div>
    );
}

export default Settings;
