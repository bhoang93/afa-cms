import React from "react";
import { StaticQuery } from "gatsby";
import { Scrollbars } from "react-custom-scrollbars";

import BlogPost from "../components/BlogPost";
import Wrapper from "../components/AppWrapper";

const News = ({ posts = [] }) => {
  return (
    <Wrapper>
      <div>
        <h2 className="sub-heading">Blog</h2>
        <p className="news-blog-text">
          Thank you everyone who has contributed to our blog! Please note these
          articles represent the views of the author and not necessarily those
          of Advocates for Animals. They are not intended as advice for
          particular situations. We would be happy to advise if you think we may
          be able to help. If you are interested in writing a blog please email{" "}
          <a
            className="news-blog-link"
            href="mailto:info@advocates-for-animals.com"
          >
            info@advocates-for-animals.com
          </a>
        </p>
        <div className="news-blog-container">
          <StaticQuery
            query={graphql`
              query BlogPlQuery {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
                ) {
                  edges {
                    node {
                      excerpt(pruneLength: 400)
                      id
                      fields {
                        slug
                      }
                      frontmatter {
                        title
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                        featuredpost
                        featuredimage {
                          childImageSharp {
                            fluid(maxWidth: 120, quality: 100) {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            `}
            render={(data, count) => (
              <Scrollbars style={{ height: 600 }}>
                {data.allMarkdownRemark.edges.map((post, i) => {
                  return <BlogPost post={post.node} key={i} />;
                })}
              </Scrollbars>
            )}
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default News;
