import React from "react";
import PropTypes from "prop-types";
import ExpertisePage from "../../templates/expertise-page";

const ExpertisePagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS() || {};

  if (data) {
    return (
      <ExpertisePage
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

export default ExpertisePagePreview;
