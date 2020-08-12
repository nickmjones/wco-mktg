import React, { Component } from "react";

export default class Hero extends Component {

  render() {
    return (
      <section class="breakout margin-bottom-large">
        <div class="columns margin-y-xlarge">
          <div class="column column--center-children align-center">
            <p class="large color-quartz">{this.props.superhead}</p>
            <h4 class="display color-admiral">{this.props.headline}</h4>
          </div>
        </div>
      </section>
    );
  }

}
