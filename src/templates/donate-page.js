import React from "react";
import donate from "../img/Donate/donate.png";
import Wrapper from "../components/AppWrapper";

import { graphql } from "gatsby";

const Donate = ({ data = {} }) => {
  return (
    <Wrapper>
      <div className="donate">
        <h2 className="sub-heading">Donate</h2>
        <p className="donate__content">
          {data.donate.edges[0].node.frontmatter.text}
        </p>

        <form
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_top"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="TZ5L9XERNK9QU" />
          <input
            type="image"
            src="https://cyclingwithoutage.sg/wp-content/uploads/2018/11/Donate-Button-600x222.png"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
            className="donate__button"
          />
          <img
            alt=""
            border="0"
            src="https://www.paypal.com/en_GB/i/scr/pixel.gif"
            width="1"
            height="1"
          />
        </form>
      </div>
    </Wrapper>
  );
};

export const pageQuery = graphql`
  query Donate {
    donate: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/donate/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            text
          }
        }
      }
    }
  }
`;

export default Donate;
