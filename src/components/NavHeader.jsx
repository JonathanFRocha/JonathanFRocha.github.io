import React from "react";
import twitterLogo from "../images/blue.svg";
import gmailLogo from "../images/gmail.svg";
import linkedinLogo from "../images/linkedin.png";
import githubLogo from "../images/github.png";
import "./NavHeader.css";

class Box extends React.Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li>Projects</li>
            <li>About me</li>
            <li>Resume</li>
          </ul>
        </nav>
        <nav>
          <ul>
            <li>
              <a target="_blank" href="https://twitter.com/">
                <img className="twitter" src={twitterLogo} alt="Twitter Logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://www.linkedin.com/in/jonathan-ferreira-rocha/">
                <img src={linkedinLogo} width="40" alt="Linkedin Logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/JonathanFRocha/">
                <img src={githubLogo} width="40" alt="Github logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a href="mailto: jonathanferreira.contato@gmail.com">
                <img src={gmailLogo} width="40" alt="Gmail logo, link to send a mail to me" />
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Box;
