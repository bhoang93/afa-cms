import React from "react";
import ContactForm from "../components/ContactForm";
import email from "../img/Contact/mail4.svg";
import phone from "../img/Contact/phone.svg";
import Wrapper from "../components/AppWrapper";
import { graphql } from "gatsby";

const Contact = ({ data }) => {
  const number = data.contact.edges[0].node.frontmatter.phone;
  const mail = data.contact.edges[0].node.frontmatter.email;

  return (
    <Wrapper>
      <div className="contact">
        <h2 className="sub-heading">Contact Us</h2>
        <a className="contact__link" href={`tel:${number}`}>
          <div className="contact__block">
            <img src={phone} className="contact__block--img" alt="phone" />
            <p className="contact__link--text"> (+44) {number}</p>
          </div>
        </a>
        <a className="contact__link" href={`mailto:${mail}`}>
          <div className="contact__block">
            <img src={email} className="contact__block--img" alt="email" />
            <p className="contact__link--text">{mail}</p>
          </div>
        </a>
      </div>
    </Wrapper>
  );
};

export const pageQuery = graphql`
  query Contact {
    contact: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contact/" } }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            email
            phone
          }
        }
      }
    }
  }
`;

export default Contact;
