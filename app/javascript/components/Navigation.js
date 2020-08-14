import React, { Component } from "react";
import Logo from "../../assets/images/wp_logo.svg"

export default class Navigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
      triggerAtTop: false
    };
  }

  toggleMenuClick = () => {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  };

  handleScroll = () => {
    if ( window.pageYOffset > 100 ) {
      this.setState({ triggerAtTop: false });
    } else {
      this.setState({ triggerAtTop: true });
    }
  }


  render() {
    return (
      <div className={this.state.menuAtTop ? 'navWrapper' : 'navWrapper navWrapper--stuck' }>

        <div className="banner">
          <a href="https://try.workpath.co/comp-free-lp" target="_blank">Workpath is now free for small teams &rarr;</a>
        </div>

        <ul className="navigation" role="navigation" aria-label="Main Navigation">
          <li className="navigationLogo">
            <a href="/">
              <img src={ Logo } width="140px" alt="Workpath logo" />
            </a>
          </li>
          <li className="autohide">
            <a href="/platform">Platform</a>
          </li>
          <li className="autohide">
            <a href="/casestudies">Case Studies</a>
          </li>
          <li className="autohide">
            <a href="/company">Company</a>
          </li>
          <li className="autohide">
            <a href="https://blog.workpath.co">Blog</a>
          </li>
          <li className="divider autohide"></li>
          <li className="autohide">
            <a href="https://app.workpath.co">Log In</a>
          </li>
          <li className="special autohide">
            <a href="/demo">Get a Demo</a>
          </li>
        </ul>
        
      </div>
    );
  }
}
