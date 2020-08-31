import React from "react";
import Wrapper from "../components/AppWrapper";
import Quote from "../components/Quote";
import { graphql } from "gatsby";

const Clients = ({ data }) => {
  const clientQuotes = data.clients.edges[0].node.frontmatter.quotes;
  return (
    <Wrapper>
      <div>
        <h2 className="sub-heading">What Clients Say</h2>
        <div className="quotes-container">
          {clientQuotes.map((quote, index) => {
            return (
              <Quote
                text={quote.quote}
                attr={quote.author}
                scrollbars={true}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Clients;

export const pageQuery = graphql`
  query Clients {
    clients: allMarkdownRemark(
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
