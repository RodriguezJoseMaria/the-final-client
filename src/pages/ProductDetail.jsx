import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import "./ProductDetail.css";
import { useState } from "react";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};
  const sizes = ["S", "M", "L", "XL"];

  const [selectedSize, setSelectedSize] = useState(null);

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };
  console.log(selectedSize);
  return (
    <Container>
      <div className="product-card">
        <div className="image-product-container">
          <img
            className="image-product"
            src={`../../public/images/All/${product.nameProduct}.jpg`}
            alt={`${product.nameProduct}`}
          />
        </div>
        <div className="product-information">
          <div className="product-detail">
            <p className="product-price">
              <strong>{product.nameProduct}</strong>
              <strong>${product.price}</strong>
            </p>
            <p>{product.description}</p>
          </div>
          <div className="product-sizes-container">
            <div className="product-sizes">
              {sizes.map((size) => (
                <div key={size} className="product-size">
                  <button
                    className={`size-button ${
                      selectedSize === size ? "selected" : ""
                    }`}
                    onClick={() => handleSizeSelection(size)}
                  >
                    {size}
                  </button>
                </div>
              ))}
            </div>
          </div>
          <button className="product-button">ADD TO BAG</button>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
