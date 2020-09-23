import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Scrollbars } from "react-custom-scrollbars";

import BlogPost from "../components/BlogPost";
import Wrapper from "../components/AppWrapper";

import BlogContainer from "../components/BlogContainer";

const News = ({ data }) => {
  return (
    <Wrapper>
      <div>
        <h2 className="sub-heading">Blog</h2>
        <div
          className="news-blog-text"
          dangerouslySetInnerHTML={{
            __html: data?.blogPage?.edges[0]?.node.html,
          }}
        />
        <BlogContainer />
      </div>
    </Wrapper>
  );
};

export const pageQuery = graphql`
  query BlogPage {
    blogPage: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/news/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
        }
      }
    }
  }
`;

export default News;
