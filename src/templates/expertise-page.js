import React, { useState, useEffect } from "react";
import Wrapper from "../components/AppWrapper";
import { Remarkable } from "remarkable";

const Expertise = ({ data, location }) => {
  const [selectedArea, setArea] = useState(null);
  const areas = data.expertise.edges[0].node.frontmatter.areas;
  const md = new Remarkable();

  useEffect(() => {
    setArea(null);
  }, [location]);

  return (
    <Wrapper>
      <div className="expertise">
        {selectedArea ? (
          <div className="expertise expertise--sub">
            <div
              dangerouslySetInnerHTML={{
                __html: md.render(selectedArea),
              }}
            />
            <a className="expertise__back" onClick={() => setArea(null)}>
              ◀Go Back
            </a>
          </div>
        ) : (
          <>
            <h2 className="sub-heading">Areas of Expertise</h2>
            <div className="expertise__wrapper">
              {areas.map((area, index) => {
                return (
                  <a
                    key={index}
                    className={`expertise__link`}
                    onClick={() => {
                      setArea(area.body);
                    }}
                  >
                    <div className="expertise__redirect">
                      <span>{area.name}</span>
                    </div>
                  </a>
                );
              })}
            </div>
          </>
        )}
      </div>
    </Wrapper>
  );
};

export default Expertise;

export const pageQuery = graphql`
  query Expertise {
    expertise: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/expertise/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            areas {
              body
              name
            }
          }
        }
      }
    }
  }
`;
