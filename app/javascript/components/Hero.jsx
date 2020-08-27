import React, { Component } from "react";

export default class Hero extends Component {

  render() {
    return (
      <section className="breakout margin-y-large">
        <div className="columns">
          <div className="column column--center-children align-center">
            <p className="large color-quartz">{this.props.superhead}</p>
            <h4 className="display color-admiral circular">{this.props.headline}</h4>
          </div>
        </div>
      </section>
    );
  }

}
