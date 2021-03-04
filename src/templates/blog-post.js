import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import { Helmet } from "react-helmet";
import { graphql, Link } from "gatsby";
import Wrapper from "../components/AppWrapper";
import Content, { HTMLContent } from "../components/Content";

import fb from "../img/SocialMediaIcons/facebook2.svg";
import twitter from "../img/SocialMediaIcons/twitter.svg";
import linkedIn from "../img/SocialMediaIcons/linkedin.svg";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  title,
  helmet,
  slug,
}) => {
  const PostContent = contentComponent || Content;
  return (
    <div className="full-blog-post">
      <h3 className="full-blog-post__heading">{title}</h3>
      <div
        className="full-blog-post__content"
        dangerouslySetInnerHTML={{ __html: content }}
      />
      <p className="full-blog-post__disclaimer">
        We are grateful to everyone who contributes to the Advocates for Animals
        blog. Blogs should not be taken as legal advice nor do they necessarily
        reflect the views of the firm
      </p>

      <div className="full-blog-post__share">
        <h3>Share this post</h3>
        <a
          target="_blank"
          href={`https://www.facebook.com/sharer/sharer.php?u=${
            process.env.URL + slug
          }`}
        >
          <img src={fb} alt="facebook" />
        </a>
        <a
          target="_blank"
          href={`https://twitter.com/home?status=${process.env.URL + slug}`}
        >
          <img src={twitter} alt="twitter" />
        </a>
        <a
          target="_blank"
          href={`https://www.linkedin.com/shareArticle?mini=true&url=${
            process.env.URL + slug
          }`}
        >
          <img src={linkedIn} alt="twitter" />
        </a>
      </div>

      <Link className="full-blog-post__go-back" to={"/news"}>
        Go Back
      </Link>
    </div>
  );
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;
  return (
    <Wrapper>
      <BlogPostTemplate
        slug={post.fields.slug}
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.description}
        helmet={
          <Helmet titleTemplate="%s | Blog">
            <title>{`${post.frontmatter.title}`}</title>
            <meta
              name="description"
              content={`${post.frontmatter.description}`}
            />
          </Helmet>
        }
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
      />
    </Wrapper>
  );
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`;
