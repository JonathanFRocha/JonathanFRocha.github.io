import React from "react";
import twitterLogo from "../images/blue.svg";
import gmailLogo from "../images/gmail.svg";
import linkedinLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import "./NavHeader.css";

class Box extends React.Component {
  render() {
    return (
      <header className="header">
        <nav>
          <ul className="head_text_contact">
            <li className="head_btn">Projects</li>
            <li className="head_btn">About me</li>
            <li className="head_btn">Resume</li>
          </ul>
        </nav>
        <nav>
          <ul className="head_logo_contact">
            <li>
              <a target="_blank" href="https://twitter.com/">
                <img src={twitterLogo} alt="Twitter Logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/jonathan-ferreira-rocha/">
                <img
                  className="linkedin_logo"
                  src={linkedinLogo}
                  alt="Linkedin Logo, link to my perfil"
                />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/JonathanFRocha/">
                <img id="github_logo" src={githubLogo} alt="Github logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a href="mailto: jonathanferreira.contato@gmail.com">
                <img src={gmailLogo} alt="Gmail logo, link to send a mail to me" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Box;
