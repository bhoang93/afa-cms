import React from "react";
import PropTypes from "prop-types";
import ClientsPage from "../../templates/clients-page";

const ClientsPagePreview = ({ entry, getAsset }) => {
  console.log(entry);
  const data = entry.getIn(["data"]).toJS() || {};
  if (data) {
    return (
      <ClientsPage
        entry={entry}
        data={data}
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

export default ClientsPagePreview;
