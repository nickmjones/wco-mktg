import React, { Component } from "react";

class Hero extends Component {

  render() {
    if (this.props.image != null) {
      return (
        <header className="hero fade-in">
          <div className="caption">
            <p className="large color-quartz">{this.props.section}</p>
            <h3>{this.props.headline}</h3>
            <h5>{this.props.subhed}</h5>
          </div>
          <div className="image">
            <img src={this.props.img_src} />
          </div>
        </header>
      );
    } else {
      return (
        <header className="hero fade-in">
          <div className="caption">
            <p className="large color-quartz">{this.props.section}</p>
            <h3>{this.props.headline}</h3>
            <h5>{this.props.subhed}</h5>
          </div>
        </header>
      );
    }
  }
}

export default Hero;
