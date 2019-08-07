import React from "react";
import Product from "./Product";
import Title from "../Globals/Title";
import { StaticQuery, graphql } from "gatsby";

const getProducts = graphql`
  {
    products: allContentfulStampSet {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 1000) {
              src
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`;

export default function Products() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-1">
            <div className="container-fluid">
              <Title title="" />
              <div className="row">
                {data.products.edges.map(({ node: product }) => {
                  return <Product key={product.id} product={product} />;
                })}
              </div>
            </div>
          </section>
        );
      }}
    />
  );
}
