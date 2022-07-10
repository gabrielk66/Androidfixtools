import React, { Component } from "react";
import './cards_style.css'

export default class Card extends Component {
 
  state = {};
  render() {
 
    return (
      <div>
        <div className="card">
           <img className="imageZoomOut" src={this.props.cardImg} alt="AndroidLogo" /> 
          <div className="card-body">

            <div className="text-title text-center text-white">
            <strong> Precisa de ajuda? </strong> 
            </div>

            <p className="subtext-title text-center text-color-primary">
              Aqui você encontra e atalhos para diagnosticar e arrumar seu
              dispositivo android
            </p>

          </div>
        </div>
      </div>
    );
  }
}
