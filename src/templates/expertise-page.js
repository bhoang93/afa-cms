import React from "react";
import Wrapper from "../components/AppWrapper";

const areas = [
  { link: "/expertise/freedom-of-information", text: "Freedom of Information" },
  { link: "/expertise/judicial-review", text: "Judicial Review" },
  {
    link: "/expertise/achieving-a-level-playing-field",
    text: "Achieving A Level Playing Field",
  },
  {
    link: "/expertise/undercover-investigations",
    text: "Undercover investigations",
  },
  { link: "/expertise/animal-protection-law", text: "Animal Protection Law" },
  { link: "/expertise/private-prosecutions", text: "Private Prosecutions" },
];

const Expertise = () => {
  return (
    <Wrapper>
      <div className="expertise">
        <h2 className="sub-heading">Areas of Expertise</h2>
        <div className="expertise__wrapper">
          {areas.map((area, index) => {
            return (
              <a key={index} className={`expertise__link`} exact to={area.link}>
                <div className="expertise__redirect">
                  <span>{area.text}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Expertise;
