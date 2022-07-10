import React, { Component } from "react";
import logo from "./android.png";
import "./home_style.css";

import Card from "../../Cards/Card";

export default class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
  
        <h3 className="text-title-padding text-title text-center text-white">
          Android Fix Tools
        </h3>

        <Card cardImg={logo} />
  
      </div>
    );
  }
}
