import React from "react";
import PropTypes from "prop-types";
import ContactPage from "../../templates/contact-page";

const ContactUsPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(["data"]).toJS() || {};

  if (data) {
    return (
      <ContactPage
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

export default ContactUsPagePreview;
