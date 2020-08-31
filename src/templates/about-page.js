import React from "react";
import Profile from "../components/Profile";
import Wrapper from "../components/AppWrapper";

import davidthomas from "../img/AboutUs/David_Thomas.jpg";
import ediebowles from "../img/AboutUs/EdieBowles.jpg";
import vanessa from "../img/AboutUs/Vanessa_Johansson.jpeg";
import alice from "../img/AboutUs/Alice_Collinson.jpg";
import aboutusimg from "../img/Animals/animal1.jpg";

import { graphql } from "gatsby";

class AboutUs extends React.Component {
  constructor() {
    super();
    this.state = {
      currentProfile: null,
    };
  }

  toggleProfile = (profile) => {
    this.setState({ currentProfile: profile });
  };

  goBackToAboutUs = () => {
    this.setState({ currentProfile: null });
  };

  componentDidMount() {
    console.log(this?.props?.data.aboutUs.edges[0].node.frontmatter.member);
  }

  render() {
    const aboutUsProfile = this?.props?.data.aboutUs.edges[0].node.frontmatter
      .member;

    return (
      <Wrapper>
        <div className="aboutus">
          <h2 className="sub-heading">About Us</h2>
          {this.state.currentProfile === null && (
            <>
              <div
                className="about-us-inner"
                dangerouslySetInnerHTML={{
                  __html: this.props.data.aboutUs.edges[0].node.html,
                }}
              />

              <h2 className="sub-heading">Who Are We?</h2>
              <div className="aboutus__redirect-container">
                {aboutUsProfile.map((profile, index) => {
                  return (
                    <figure
                      className="aboutus__redirect"
                      onClick={() => this.toggleProfile(index)}
                    >
                      <img
                        className="aboutus__redirect--img"
                        alt={profile.name}
                        src={"/img/" + profile.image.relativePath}
                      />
                      <figcaption className="aboutus__redirect--name">
                        {profile.name}
                      </figcaption>
                    </figure>
                  );
                })}
              </div>
            </>
          )}
          {this.state.currentProfile !== null && (
            <>
              <Profile profile={aboutUsProfile[this.state.currentProfile]} />
              <div className="aboutus__goBack" onClick={this.goBackToAboutUs}>
                ◀Go Back
              </div>
            </>
          )}
        </div>
      </Wrapper>
    );
  }
}

export const pageQuery = graphql`
  query AboutUs {
    aboutUs: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/about/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          html
          frontmatter {
            member {
              body
              image {
                relativePath
              }
              name
            }
          }
        }
      }
    }
  }
`;

export default AboutUs;
