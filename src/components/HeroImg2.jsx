import "./HeroImg2Styles.css";
import React, { Component } from "react";

class HeroImg2 extends Component {
  render() {
    return (
      <div className="hero-img" >
        <div className="heading">
          <img src={this.props.imglink} alt="back" />
          <h1>{this.props.title}</h1>
          <p>{this.props.description}</p>
        </div>
      </div >
    );
  }
}

export default HeroImg2;
