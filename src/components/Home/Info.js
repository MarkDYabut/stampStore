import React from "react";
import { Link } from "gatsby";
import Title from "../Globals/Title";
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Abad Auctions Ltd. operates philaetic auctions offering thousands
              of worldwide batches every month. Collectors and dealers alike
              have found Abad's catalogues to be a valuable source of philatelic
              material. Whether you are looking for a box full of stamps to sort
              through, or a single item to fill that empty space in your album
              set, you are sure to find interesting batches in our auctions.
            </p>
            <p className="lead text-muted mb-5">
              Collecting for over 60 years, Amado Abad has expanded his
              collection to over 60,000 unique pieces. Only starting in 2019 has
              his collection seen public eyes. Every month new pieces will be
              put up for sale and old pieces will be put into collection. Pieces
              put into collection will receive a 50% discount, however will
              require a minimum order pre discount of $100.00 cad. Please
              contact us for any inquiries. To place an order of a collection
              batch, please contact us and include the corresponding batch
              numbers.
            </p>
            <p className="lead text-muted mb-5">
              Please contact us for any inquiries. To place an order of a
              collection batch, please contact us and include the corresponding
              batch numbers.
            </p>
            {/* <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link> */}
          </div>
        </div>
      </div>
    </section>
  );
}
