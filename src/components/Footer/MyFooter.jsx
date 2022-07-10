import React, { Component } from "react";
import './my_footer_style.css'

export default class Footer extends Component {
  state = {};
  render() {
    return (
      <div >
        <footer className="footer" >
         <div className="footerContent text-white" > 
           
            <script>document.write(new Date().getFullYear())</script>2022
            Copyright © - {'\u00a0'}
            <a className="text-white" href="https://github.com/gabrielk66/">
              <strong>Gabriel K </strong>
            </a>
         
          </div>
        </footer>
      </div>
    );
  }
}