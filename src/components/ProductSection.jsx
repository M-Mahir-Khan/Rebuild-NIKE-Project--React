import React from "react";
// import "./Products.css"; // Move custom styles here if not already

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    image: "/Images/shoes1.png",
    stars: 5,
  },
  {
    id: 2,
    name: "Nike Revolution",
    image: "/Images/shoes2.png",
    stars: 4,
  },
  {
    id: 3,
    name: "Nike Flex Runner",
    image: "/Images/shoes5.png",
    stars: 4,
  },
  {
    id: 4,
    name: "Nike Tanjun",
    image: "/Images/shoes6.png",
    stars: 5,
  },
  {
    id: 5,
    name: "Nike Pegasus",
    image: "/Images/shoes3.png",
    stars: 4,
  },
  {
    id: 6,
    name: "Nike Infinity",
    image: "/Images/shoes4.png",
    stars: 5,
  },
];

const Products = () => {
  return (
    <section id="products" className="wrapper">
      <div className="container">
        <h2 className="text-center mb-5 main-h2">Our Products</h2>
        <div className="row">
          {products.map((product) => (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card">
                <div className="product-img">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="card-text">
                  <h2>{product.name}</h2>
                  <div className="product-stars">
                    {Array.from({ length: product.stars }).map((_, i) => (
                      <i key={i} className="fa fa-star"></i>
                    ))}
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur.</p>
                  <button className="main-btn mt-2">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
