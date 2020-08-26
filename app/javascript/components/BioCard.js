import React, { Component } from "react";
import "../../assets/stylesheets/modules/biopop.scss";

export default class Biopop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bioFrameOpen: false,
    };
  }

  setBioFrameVisibility = () => {
    this.setState({
      bioFrameOpen: !this.state.bioFrameOpen,
    });
  };

  render() {
    return (
      <>
        <figure
          className="column column--33 align-center padding-bottom-medium"
        >
          <img src={this.props.image} className="avatar" onClick={this.setBioFrameVisibility} />
          <p>{this.props.name}</p>
          <p className="small color-quartz">{this.props.title}</p>
        </figure>

        <div
          className={
            this.state.bioFrameOpen
              ? "bioframe bioframe--opened"
              : "bioframe bioframe--closed"
          }
        >
          <div 
            className={
              this.state.bioFrameOpen
                ? "biobox biobox--in"
                : "biobox biobox--out"
              }
            >
            <span className="bioboxClose" onClick={this.setBioFrameVisibility}>&times;</span>
            <h5>{this.props.name}</h5>
            <p className="large color-quartz">{this.props.title}</p>
            <p>
              {this.props.shortbio}
            </p>
          </div>
        </div>
      </>
    );
  }
}
