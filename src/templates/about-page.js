import React from "react";
import Profile from "../components/Profile";
import Wrapper from "../components/AppWrapper";

import davidthomas from "../img/AboutUs/David_Thomas.jpg";
import ediebowles from "../img/AboutUs/EdieBowles.jpg";
import vanessa from "../img/AboutUs/Vanessa_Johansson.jpeg";
import alice from "../img/AboutUs/Alice_Collinson.jpg";
import aboutusimg from "../img/Animals/animal1.jpg";

import { graphql } from "gatsby";

const aboutUsProfile = [
  {
    name: "David Thomas",
    text: (
      <>
        <span className="profile__text--block">
          David is a solicitor and part-time judge. He has acted for nearly all
          the major animal protection organisations in the UK (and beyond) and
          is highly experienced in EU and international animal law, including
          trade law. He has also acted extensively in human rights cases (which
          can be relevant to animal protection law), much of it again
          international, and public law more generally.
        </span>
        <span className="profile__text--block">
          He is a fellow of the Oxford Centre for Animal Ethics, a former chair
          of the RSPCA (currently a trustee) and a former director of Cruelty
          Free International and Compassion in World Farming. He has written
          extensively about animal protection law and ethics and taken part in
          numerous presentations, debates and media appearances. He gave oral
          evidence to the Burns Inquiry on hunting and has given oral testimony
          to several parliamentary committees and a Royal Commission as well as
          holding countless meetings with ministers and officials. He has been a
          member of European Commission and UK government panels and is an
          experienced teacher of law.
        </span>

        <h3 className="third-heading">
          How did you get into animal protection?
        </h3>
        <span className="profile__text--block">
          I have had an interest since a young age. I ran RSPCA Cardiff Dog's
          Home as an 18 year old volunteer before going to uni. I have always
          believed that one assesses injustice by its effect on the victim, not
          on the victim's identity, Sadly humankind's inhumanity to humankind,
          terrible though it is, is dwarfed by humanity's inhumanity to other
          animals. Society should fight injustice wherever it finds it and I
          have also done a lot of human rights legal work.
        </span>
        <h3 className="third-heading"> Why do you care about animal law?</h3>
        <span className="profile__text--block">
          I believe that the law - working in close harmony with science,
          investigative skills, ethical argument, campaigning and lobbying - can
          make a huge difference to the welfare of animals, through creative
          deployment at each stage of the campaigning process. Ultimately,
          though education has a vital role, the best protection is through
          well-drawn, philosophically consistent, properly interpreted and
          rigorously enforced legislation.
        </span>
      </>
    ),
    image: davidthomas,
  },
  {
    name: "Edie Bowles",
    text: (
      <>
        <span className="profile__text--block">
          Edie is a solicitor specialising in animal protection law. She has
          advised many animal protection organisations and individuals on a wide
          range of issues, including all aspects of the Animal Welfare Act and
          regulations made under it, the Zoo Licensing Act, Animals (Scientific
          Procedures) Act and more. She is a trustee of The Humane League and
          the UK Centre for Animal Law, where she set up and managed the student
          group. She often speaks on animal protection issues and has done so in
          the UK Parliament, the French Senat and the East African Legislative
          Assembly.
        </span>
        <h3 className="third-heading">
          How did you get into animal protection?
        </h3>
        <span className="profile__text--block">
          For as long I can remember I have felt empathy towards animals and
          recognised their vulnerability at the hands of human interest, whether
          commercial or simply sadistic. This awareness has led to me carving a
          career aimed at ensuring animals are given the protections they are
          entitled to under the law.
        </span>
        <h3 className="third-heading"> Why do you care about animal law?</h3>
        <span className="profile__text--block">
          Despite all the incredible attributes animals possess and their
          sentience, they are extremely vulnerable in our society, it is
          therefore essential that a framework is in place to prevent certain
          treatment. You do not have to be an animal lover or an activist in
          this area to recognise that animals deserve protection under the law
          and that those laws need to be enforced.
        </span>
      </>
    ),
    image: ediebowles,
  },
  {
    name: "Vanessa Johansson",
    text: (
      <>
        <span className="profile__text--block">
          Vanessa has dedicated her career to the non-profit and education
          sectors. From management to hands-on help, Vanessa loves guiding
          people and organisations towards success. In 2018, she co-founded the
          Solberga Foundation, a philanthropic organisation focused on animal
          and environmental justice. Enthusiastic and personable, she is a
          tireless advocate for a more compassionate world. Vanessa joins the
          team as an Operational Support Officer.
        </span>
        <h3 className="third-heading">
          How did you get into animal protection?
        </h3>
        <span className="profile__text--block">
          My mission in life is to seek justice for animals and reduce as much
          suffering as possible. My passion for this cause has led me to
          volunteer for a number of animal charities and establish an
          organisation that supports the animal protection industry. As a
          dedicated vegan, I also try to be an ambassador for animal protection
          wherever I can. When I learned of Advocates for Animals’ mission:
          ‘making full use of the law to protect animals’ I was eager to get
          involved.
        </span>
        <h3 className="third-heading"> Why do you care about animal law?</h3>
        <span className="profile__text--block">
          Without a voice to speak up and protest their treatment, animals are
          among the most abused beings on the planet. If we ensure existing laws
          and regulations are strictly enforced, we can significantly improve
          animal protection.
        </span>
      </>
    ),
    image: vanessa,
  },
  {
    name: "Alice Collinson",
    text: (
      <>
        <span className="profile__text--block">
          Alice is a solicitor with a particular interest in international
          wildlife protection law.
        </span>
        <span className="profile__text--block">
          She has worked as a legal consultant with many leading animal welfare
          and conservation organisations in the UK and abroad, following an
          international Animal Law masters (LL.M) from Lewis and Clark Law
          School in the U.S, and 6 years as a civil litigation lawyer in London.
        </span>
        <span className="profile__text--block">
          She provides legal training on captive animal legislation as a trustee
          with Freedom for Animals, supports the UK Centre for Animal Law
          student team, and sits on the British Veterinary Association’s Ethics
          and Welfare Advisory Panel.
        </span>
        <h3 className="third-heading">
          How did you get into animal protection?
        </h3>
        <span className="profile__text--block">
          A passion for wildlife has drawn me to a number volunteer projects
          from a young age; to include tracking endangered wild dogs in South
          Africa, caring for elephants released from the tourist industry in
          Thailand, and rehabilitating rescued seals in Cornwall. Pursuing the
          Animal Law masters has enabled me to focus my legal skills entirely on
          animal protection.
        </span>
        <h3 className="third-heading"> Why do you care about animal law?</h3>
        <span className="profile__text--block">
          Animals are primarily property in the eyes of the law, with minimal
          protections across the many industries that impact billions of
          individual sentient beings. At the very least, we should effectively
          enforce existing laws to protect animals internationally, and
          challenge the status quo to create change and reduce animal suffering.
        </span>
      </>
    ),
    image: alice,
  },
];

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
    console.log(this.props.data.aboutUs.edges[0].node.frontmatter.member);
  }

  render() {
    const aboutUsProfile = this.props.data.aboutUs.edges[0].node.frontmatter
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
                        src={profile.image}
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
              image
              name
            }
          }
        }
      }
    }
  }
`;

export default AboutUs;
