import React, { useState, useEffect } from "react";
import Wrapper from "../components/AppWrapper";
import { StaticQuery } from "gatsby";

import HomeNav from "../components/HomeNav";
import BlogPost from "../components/BlogPost";

import bgMp4 from "../Videos/bg-video.mp4";
import bgWebm from "../Videos/bg-video.webm";

const Home = () => {
  return (
    <Wrapper>
      <div className="home-container">
        <StaticQuery
          query={graphql`
            query HomeBlogQuery {
              allMarkdownRemark(
                sort: { order: DESC, fields: [frontmatter___date] }
                filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
              ) {
                edges {
                  node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      templateKey
                      date(formatString: "MMMM DD, YYYY")
                      featuredpost
                    }
                  }
                }
              }
            }
          `}
          render={(data, count) => (
            <div className="blog-container">
              <h3 className="latest-news-heading">Latest News</h3>
              {data.allMarkdownRemark.edges.map((post, index) => {
                if (index < 3) {
                  return <BlogPost key={index} post={post.node} />;
                }
              })}

              <video className="home-bg-video" autoPlay muted loop>
                <source src={bgMp4} type="video/mp4" />
                <source src={bgWebm} type="video/webm" />
                Your browser is not supported!
              </video>
            </div>
          )}
        />
        <HomeNav />
      </div>
    </Wrapper>
  );
};

export default Home;
