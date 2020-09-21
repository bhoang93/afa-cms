import React from "react";
import { Link } from "gatsby";

import bg1 from "../img/Animals/animal12.jpg";
import bg3 from "../img/Animals/animal5.jpg";
import bg4 from "../img/Animals/animal13.jpg";
import bg5 from "../img/Animals/animal7.jpg";
import bg6 from "../img/Animals/animal14.jpg";

const pages = [
  { label: "About Us", link: "about", bg: bg3 },
  { label: "Areas of Expertise", link: "expertise", bg: bg4 },
  { label: "What Clients Say", link: "clients", bg: bg5 },
  { label: "News", link: "news", bg: bg1 },
  { label: "Contact Us", link: "contact", bg: bg6 },
];

const HomeNav = () => {
  return (
    <div>
      <nav className="home-nav">
        {pages.map((page, index) => {
          return (
            <Link
              key={index}
              className="home-nav__link"
              exact
              to={`/${page.link}`}
              style={{ backgroundImage: `url(${page.bg})` }}
            >
              {page.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default HomeNav;
