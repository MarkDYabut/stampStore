import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import BigMenu from "../components/Home/BigMenu";
import Menu from "../components/Home/Menu";

const CollectionPage = ({ data }) => (
  <Layout>
    <Menu items={data.menu} />
  </Layout>
);

export const query = graphql`
  {
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
            fixed(width: 100, height: 100) {
              ...GatsbyContentfulFixed_tracedSVG
            }
            fluid(maxHeight: 1100) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default CollectionPage;
