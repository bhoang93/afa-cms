import React from "react";
import AboutPageTemplate from "../../templates/about-page";

const AboutPagePreview = ({ entry, widgetFor }) => {
  return (
    <AboutPageTemplate
      title={entry.getIn(["data", "title"])}
      content={widgetFor("body")}
    />
  );
};

export default AboutPagePreview;
