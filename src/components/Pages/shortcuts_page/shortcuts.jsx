import React, { useState } from "react";
import HorizontalCard from "../../Cards/HorizontalCard";
import shortcutsJson from "../../../resources/shortcuts.json";
import "./shortcuts_style.css";

export default function Shortcuts() {
 
  const [customLink, setCustomLink] = useState("");

  const buttonClick = (event) => {
    event.preventDefault();
    if (customLink === "" || customLink === null) return;
    var url = `intent://${customLink}/#Intent;scheme=android-app;end`
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const setLink = (event) => {
    setCustomLink(event.target.value);
  };

  //eslint-disable-next-line 
  if (shortcutsJson == '' || shortcutsJson == null) {
    return (
        <h2 className="text-color-primary centered">     
          Erro ao carregar a lista 
        </h2>
 
    );
  }  

  return (
    
    <div>
      <h2 className="text-center text-color-primary text-title"> Atalhos </h2>

      <div className="text-center text-color-primary subtext-title">
        Clique para abrir o App
      </div>

      <div className="centered">

        {shortcutsJson.map((item, index) => {
           
          return <HorizontalCard key={index} item={item} />;
        })}
      </div>

      <div className="text-center">
        <h2 className="text-center text-color-primary subtext-title">
          Ou digite o nome do pacote
        </h2>
        <p className="text-color-primary">
          Por exemplo <strong> com.android.settings </strong>
        </p>
      </div>

      <div className="centered">
        <input
          className="roundedInput text-center"
          type="text"
          placeholder="com.android.settings"
          value={customLink}
          onChange={setLink}
        />
        <p>
          <button className="customButton" onClick={buttonClick}>
            Abrir
          </button>
        </p>
      </div>
    </div>
  );
      
}
