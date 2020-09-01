import React from "react";
import Wrapper from "../components/AppWrapper";
import Quote from "../components/Quote";
import { graphql } from "gatsby";

import web from "../img/Contact/sphere.svg";
import phone from "../img/Contact/phone.svg";
import mail from "../img/Contact/mail4.svg";

const Clients = ({ data }) => {
  return (
    <Wrapper>
      <div className="complaints">
        <div className="complaints__1st">
          <img src={""} alt="Cows" className="complaints__image" />
        </div>

        <div className="complaints__2nd">
          <h2 className="sub-heading">Complaints Procedure</h2>
          <div
            className="about-us-inner"
            dangerouslySetInnerHTML={{
              __html: "",
            }}
          />
          <div className="complaints__contact">
            <h3 className="complaints__contact--heading">Contact details</h3>
            <div className="complaints__contact-details">
              <img className="complaints__icon" src={web} alt="website" />
              <a className="complaints__link" href="www.legalombudsman.org.uk">
                www.legalombudsman.org.uk
              </a>
            </div>

            <div className="complaints__contact-details">
              <img className="complaints__icon" src={phone} alt="phone" />
              <p>
                0300 555 0333{" "}
                <span className="complaints__small-text">
                  (between 9am to 5pm)
                </span>
              </p>
            </div>

            <div className="complaints__contact-details">
              <img className="complaints__icon" src={mail} alt="E-mail" />
              <a
                className="complaints__link"
                href="mailto:enquiries@legalombudsman.org.uk"
              >
                enquiries@legalombudsman.org.uk
              </a>
            </div>

            <p>Legal Ombudsman PO Box 6806, Wolverhampton, WV1 9WJ</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Clients;

export const pageQuery = graphql`
  query Complaints {
    complaints: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/clients/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          rawMarkdownBody
          frontmatter {
            quotes {
              author
              quote
            }
          }
        }
      }
    }
  }
`;
