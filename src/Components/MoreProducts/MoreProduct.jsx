import React from "react";
import { Carousel, Container, Row, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MoreProduct.css";

const productsData = [
  {
    id: 1,
    name: "B-22009",
    price: 3390,
    discount: 0.19,
    image: "src/assets/pic5.png",
  },
  {
    id: 2,
    name: "B-22013",
    price: 5290,
    discount: 0.19,
    image: "src/assets/pic6.png",
  },
  {
    id: 3,
    name: "B-22018",
    price: 4590,
    discount: 0.19,
    image: "src/assets/pic7.png",
  },
  {
    id: 3,
    name: "Cl-316B",
    price: 4290,
    discount: 0.19,
    image: "src/assets/pic8.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3890,
    discount:0.19,
    image: "src/assets/pic6.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 4390,
    discount: 0.19,
    image: "src/assets/pic8.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 3390,
    discount: 0.19,
    image: "src/assets/pic5.png",
  },
  {
    id: 3,
    name: "Product 3",
    price: 4390,
    discount: 0.19,
    image: "src/assets/pic7.png",
  },
];
const ProductCard = ({ product, addToCart }) => {
  const discountedPrice = product.price * (1 - product.discount);
  return (
    <Col>
      <div className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>
          <strike>Rs {product.price.toFixed()}</strike>{" "}
          <strong>Rs {discountedPrice.toFixed()}</strong>
        </p>
        <Button className="Addtocard" onClick={() => addToCart(product)}><i class="bi bi-cart-fill"></i>Add to Cart</Button>
      </div>
    </Col>
  );
};

const ProductSlider = ({ addToCart }) => {
  return (
    <Container>
      <Carousel>
        {[...Array(Math.ceil(productsData.length / 4))].map((_, index) => (
          <Carousel.Item key={index}>
            <Row>
              {productsData.slice(index * 4, (index + 1) * 4).map((product) => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} />
              ))}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};


export default ProductSlider;
