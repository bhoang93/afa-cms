import React from "react";
import PropTypes from "prop-types";
import BlogPage from "../../templates/blog-page";

const BlogPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS() || {};

  if (data) {
    return (
      <BlogPage
        image={getAsset(data.image)}
        title={data.title}
        heading={data.heading}
        subheading={data.subheading}
        description={data.description}
        intro={data.intro || { blurbs: [] }}
        mainpitch={data.mainpitch || {}}
      />
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default BlogPagePreview;
