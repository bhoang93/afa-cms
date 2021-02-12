import React from "react";
import { Link } from "gatsby";

import SocialMediaIcon from "../components/SocialMediaIcon";

import twitter from "../img/SocialMediaIcons/twitter.svg";
import instagram from "../img/SocialMediaIcons/instagram.svg";
import facebook from "../img/SocialMediaIcons/facebook2.svg";
import linkedin from "../img/SocialMediaIcons/linkedin.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__sra">
        <div
          style={{
            position: "relative",
            paddingBottom: "59.1%",
            height: "auto",
            overflow: "hidden",
          }}
        >
          <iframe
            frameBorder="0"
            scrolling="no"
            allowTransparency="true"
            referrerpolicy="origin"
            src="https://cdn.yoshki.com/iframe/55845r.html"
            style={{
              border: 0,
              margin: 0,
              padding: 0,
              backgroundColor: "transparent",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              position: "absolute",
            }}
          ></iframe>
        </div>
      </div>
      <div className="footer__complaints_container">
        <Link className="footer__complaints" exact to="/complaints">
          Complaints Procedure
        </Link>
        <a
          className="footer__complaints"
          href="/privacy-policy.docx"
          target="_blank"
        >
          Privacy Policy
        </a>
      </div>

      <div className="footer__social">
        <SocialMediaIcon
          link="https://twitter.com/Animallawyersuk"
          src={twitter}
          alt="Twitter"
        />
        <SocialMediaIcon
          link="https://www.instagram.com/animallawyersuk/"
          src={instagram}
          alt="Instagram"
        />
        <SocialMediaIcon
          link="https://www.facebook.com/animallawyersuk/"
          src={facebook}
          alt="Facebook"
        />
        <SocialMediaIcon
          link="https://www.linkedin.com/company/animaladvocates/"
          src={linkedin}
          alt="LinkedIn"
        />
      </div>
      <div className="footer__name">Advocates for Animals Ltd</div>
    </footer>
  );
};

export default Footer;
