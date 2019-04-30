import React, { Component } from "react";
import Title from "../Globals/Title";
import Img from "gatsby-image";
import Product from "./Product";

const getCategories = items => {
  let tempItems = items.map(items => {
    return items.node.category;
  });
  let tempCategories = new Set(tempItems);
  let categories = Array.from(tempCategories);
  categories = [...categories];
  return categories;
};
export default class BigMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: props.items.edges,
      coffeeItems: [],
      categories: getCategories(props.items.edges)
    };
  }
  handleItems = category => {
    let tempItems = [...this.state.items];
    let items = tempItems.filter(({ node }) => node.category === category);
    this.setState(() => {
      return { coffeeItems: items };
    });
  };
  render() {
    if (this.state.items.length > 0) {
      return (
        <section className="menu py-1">
          <div className="container">
            <Title title="" />
            {/* categories */}
            <div className="row mb-5">
              <div className="col-10 mx-auto text-center">
                {this.state.categories.map((category, index) => {
                  return (
                    <button
                      type="button"
                      key={index}
                      className="btn btn-yellow text-capitalize m-3"
                      onClick={() => {
                        this.handleItems(category);
                      }}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>
            </div>
            {/* items */}
            <div className="container-fluid">
              <div className="row">
                {this.state.coffeeItems.map(({ node }) => {
                  return (
                    <div key={node.id} className="container">
                      {" "}
                      <div className="card" style={{ minHeight: "100%" }}>
                        <Img
                          fluid={node.image.fluid}
                          className="card-img-top"
                        />
                        <div className="card-body text-center">
                          <h6>{node.title}</h6>
                          <h6>${node.price}</h6>
                          <p className="text-muted">
                            <small>{node.description.description}</small>
                          </p>
                          <button
                            className="btn btn-yellow mt-3 text-capitalize snipcart-add-item"
                            data-item-id={node.id}
                            data-item-name={node.title}
                            data-item-price={node.price}
                            data-item-image={node.image.fluid.src}
                            data-item-url="https://abad-stamps.netlify.com/products"
                          >
                            add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      );
    } else {
      return (
        <section className="menu py-5">
          <div className="container">
            <Title title="best of our menu" />
            <div className="row">
              <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
                <h1>there are no items to display</h1>
              </div>
            </div>
          </div>
        </section>
      );
    }
  }
}
