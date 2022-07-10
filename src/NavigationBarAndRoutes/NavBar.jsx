import React, { Component } from "react";
import "./navigation_bar_style.css";

class NavigationBar extends Component {
  state = {};
  render() {
    return (
  
      <div className="NavigationBar">
          <div className="NavItems">
            <a href="/">Início</a>
            <a href="/shortcuts">Atalhos</a>
            <a href="/appsdownload">Apps</a>
            <a href="/about">Sobre</a>
          </div>
      </div>
 
    );
  }
}

export default NavigationBar;