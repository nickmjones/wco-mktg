import React, { Component } from "react";
import "../../assets/stylesheets/modules/biopop.scss";

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
        <figure className="column column--33 align-center padding-bottom-medium">
          <img src={require(`images/${this.props.image}.png`)} className="avatar" onClick={this.setBioFrameVisibility} />
          
          <p>{this.props.name}</p>
          <p className="small color-quartz">{this.props.title}</p>
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
              <p>
                {this.props.shortbio}
              </p>
            </div>
          </div>
        </div>
      </>
    );
  }
}
