import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }

  handleButtonClick = () => {
    this.setState({
      loading: !this.state.loading
    })
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div onClick={this.handleButtonClick} className={styles.loading}>
          Loading...
        </div>
      );
    } else {
      return (
        <div
          onClick={this.handleButtonClick}
          className={`${styles[this.props.type]}`}
        >
          {this.props.text}
        </div>
      );
    }
  }
}

export default Button;
