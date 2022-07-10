import React, { Component } from "react";
import appsJson from "../../../resources/apps.json";
import HorizontalCard from "../../Cards/HorizontalCard";
import './download_apps_style.css'

export default class DownloadApps extends Component {
  render() {

    // eslint-disable-next-line 
    if (appsJson == '' || appsJson == null) {
      return (
          <h2 className="text-color-primary centered">
            Erro ao carregar a lista 
          </h2>
    
      );
    } else 

    return (
      <div className="centered">
        <h2 className="text-color-primary"> Apps Download </h2>
        {appsJson.map((item, index) => {
          return <HorizontalCard key={index} item={item} />;
        })}
      </div>
    );
  }
}
