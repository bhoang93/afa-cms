import React from "react";
import { StaticQuery } from "gatsby";
import { Scrollbars } from "react-custom-scrollbars";
import BlogPost from "./BlogPost";

const BlogContainer = () => {
  return (
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
  );
};

export default BlogContainer;
