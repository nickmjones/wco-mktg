import React, { Component } from "react";
import lilogo from "images/linkedin.svg";

export default class Biopop extends Component {

  constructor(props, _railsContext) {
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

  escFunction = (event) => {
    if (event.keyCode === 27) {
      this.setState({
        bioFrameOpen: false
      });
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.escFunction, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.escFunction, false);
  }

  render() {

    return (
      <>
        <figure className="column column--33 align-center padding-bottom-medium biocard">
          <img src={require(`images/${this.props.image}.png`)} className="avatar" onClick={this.setBioFrameVisibility} />
          
          <p>{this.props.name}</p>
          <p className="xsmall color-quartz">{this.props.title}</p>
        </figure>

        <div className={
            this.state.bioFrameOpen
              ? "bioframe bioframe--opened"
              : "bioframe bioframe--closed"
          }
        >
          <div className={
              this.state.bioFrameOpen
                ? "biobox biobox--in"
                : "biobox biobox--out"
              }
            >
            <span 
              className="bioboxClose" 
              onClick={this.setBioFrameVisibility}
            >
              &times;
            </span>
            <div className="image">
              <img src={require(`images/${this.props.image}.png`)} />
            </div>
            <div className="content">
              <h5>{this.props.name}</h5>
              <p className="large color-quartz">{this.props.title}</p>
              <p className="break">
                {this.props.shortbio}
              </p>
              {this.props.linkedin ? <span className="linkedinlogo"><a href={this.props.linkedin}><img src={lilogo} /></a></span> : null}
            </div>
          </div>
        </div>
      </>
    );
  }
}
