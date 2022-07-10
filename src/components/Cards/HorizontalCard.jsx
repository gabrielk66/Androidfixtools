import React, { Component } from "react";

export default class HorizontalCard extends Component {
  state = {};
  render() {
    return (
      <a className="text-center horizontal-card" href={this.props.item.link}>
        <div>
          <p className="text-color-primary"> {this.props.item.name} </p>
        </div>
      </a>
    );
  }
}