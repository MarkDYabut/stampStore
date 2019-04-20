import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import BigMenu from "../components/Home/BigMenu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    {/* <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Abad Stamps"
    /> */}
    {/* <Info /> */}
    <BigMenu items={data.menu} />
    {/* <Products /> */}
    {/* <Contact /> */}
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    menu: allContentfulStampSet {
      edges {
        node {
          id
          category
          title
          description {
            description
          }
          price
          image {
            fixed(width: 50, height: 50) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;