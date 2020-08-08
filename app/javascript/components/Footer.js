import React from "react";
import Logo from "../../assets/images/wp_logo.svg";

export default function Footer() {
  return (
    <footer className="breakout bgcolor-belaire padding-y-xxlarge">
      <div className="columns">

        <div className="column">
          <ul>
            <li>
              <img src={ Logo } width="240px" alt="Workpath logo" />
            </li>
            <li>Copyright &copy; 2020 Workpath</li>
            <li>All rights reserved</li>
          </ul>
        </div>

        <div className="column column--is-flex">

          <div className="column">
            <p className="large">Company</p>
            <ul className="margin-top-small">
              <li><a href="/company">Company</a></li>
              <li><a href="/platform">Platform</a></li>
              <li><a href="/casestudies">Case Studies</a></li>
              <li><a href="https://blog.workpath.co">Blog</a></li>
            </ul>
          </div>

          <div className="column">
            <p className="large">Resources</p>
            <ul className="margin-top-small">
              <li><a href="/careers">Careers</a></li>
              <li><a href="https://help.workpath.co">Help Center</a></li>
              <li><a href="/privacy">Privacy</a></li>
              <li><a href="/tos">Terms of Service</a></li>
            </ul>
          </div>

          <div className="column">
            <p className="large">Follow Us</p>
            <ul className="margin-top-small">
              <li>
                <a href="https://www.linkedin.com/company/workpathco/">
                  LinkedIn
                </a>
              </li>
              <li><a href="http://eepurl.com/gNXcnH">Join the mailing list</a></li>
              <li>For media inquiries: press@workpath.co</li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
