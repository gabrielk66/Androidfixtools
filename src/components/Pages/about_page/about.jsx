import React from "react";
import './about_style.css'

export default class About extends React.Component {
 
  render() {
    return (
      <>
          <h2 className="text-white text-center text-title"> Sobre </h2>

          <div className="text-color-primary text-center subtext-title">
            <p> Conjunto para facilitar o diagnóstico e reparo de seu dispositivo android </p>
            <p>
              Feito com <strong> ReactJS </strong> e
              <strong> Netlify </strong> 
            </p>
            <p className="subtext-title"> Visite o repositório no <a href="https://github.com/gabrielk66/Androidfixtools" rel="noopener noreferrer" target="_blank" className="text-white"> <strong>  Github  </strong> </a> </p>
          </div>
        
      </>
    );
  }
}
