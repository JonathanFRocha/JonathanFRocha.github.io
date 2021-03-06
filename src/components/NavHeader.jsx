import React from "react";
import { Link } from "react-router-dom";

import twitterLogo from "../images/blue.svg";
import gmailLogo from "../images/gmail-icon.svg";
import linkedinLogo from "../images/linkedin.svg";
import githubLogo from "../images/github.svg";
import resumePt from "../resume/resumePt.pdf";
import "../style/NavHeader.css";

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showElement: "hide" };
  }

  render() {
    return (
      <header className="header">
        <nav>
          <ul className="head_text_contact">
            <li className="head_btn">
              <Link className="head_lnk" to="/projects">
                Projects
              </Link>
            </li>
            <li className="head_btn">
              <Link className="head_lnk" to="/aboutme">
                About me
              </Link>
            </li>

            <li
              className="head_btn"
              onMouseEnter={() => this.setState({ showElement: "show" })}
              onMouseLeave={() => this.setState({ showElement: "hide" })}
            >
              <a className="head_lnk" target="_blank" rel="noreferrer" href={resumePt}>
                Resume
              </a>
            </li>
            <a
              target="_blank"
              rel="noreferrer"
              onMouseEnter={() => this.setState({ showElement: "show" })}
              onMouseLeave={() => this.setState({ showElement: "hide" })}
              href={resumePt}
            >
              <span id="ptResume" className={`element-${this.state.showElement}`}>
                pt-br
              </span>
            </a>
          </ul>
        </nav>
        <nav>
          <ul className="head_logo_contact">
            <li>
              <a
                className="head_logo_twittern"
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/Jonathanferocha"
              >
                <img src={twitterLogo} alt="Twitter Logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a
                className="head_logo_linkedin"
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/jonathan-ferreira-rocha/"
              >
                <img src={linkedinLogo} alt="Linkedin Logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a
                className="head_logo_github"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/JonathanFRocha/"
              >
                <img src={githubLogo} alt="Github logo, link to my perfil" />
              </a>
            </li>
            <li>
              <a className="head_logo_gmail" href="mailto: jonathanferreira.contato@gmail.com">
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
