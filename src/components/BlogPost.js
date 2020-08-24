import React from "react";
import { Link } from "gatsby";

const BlogPost = ({ post = {} }) => {
  return (
    <div className="blog-post">
      <h3 className="blog-post__heading">{post.frontmatter?.title}</h3>
      <p className="blog-post__author">{`Posted on ${post.frontmatter?.date}`}</p>
      <div
        className="blog-post__excerpt"
        dangerouslySetInnerHTML={{ __html: post.excerpt }}
      />
      <Link className="blog-post__read-more" to={post.fields?.slug}>
        Read More
      </Link>
    </div>
  );
};

export default BlogPost;
