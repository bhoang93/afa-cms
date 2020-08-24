import React from "react";
import { Link } from "gatsby";

const pages = [
  { label: "Home", link: "" },
  { label: "About Us", link: "about" },
  { label: "Areas of Expertise", link: "expertise" },
  { label: "What Clients Say", link: "clients" },
  { label: "Blog", link: "blog" },
  { label: "Donate", link: "donate" },
  { label: "Contact Us", link: "contact" },
];

const linkStyle = {
  borderBottom: "2px solid #67aed9",
};

const Navigation = () => {
  return (
    <div>
      <nav className="navigation">
        {pages.map((page, index) => {
          return (
            <Link
              key={index}
              className="navigation__link"
              activeStyle={linkStyle}
              exact
              to={`/${page.link}`}
            >
              {page.label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
};

export default Navigation;
