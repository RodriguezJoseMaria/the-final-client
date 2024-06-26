import { useLocation } from "react-router-dom";
import Container from "../components/Container";
import "./ProductDetail.css";
import { useState } from "react";
import { useCart } from "../context/cart.context";
import { useNavigate } from "react-router-dom";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};
  const sizes = ["S", "M", "L", "XL"];

  const [selectedSize, setSelectedSize] = useState(null);

  const { addProductToCart } = useCart();

  const handleSizeSelection = (size) => {
    setSelectedSize(size);
  };

  const handleAddToCart = () => {
    addProductToCart(product);
  };

  const handleProcessOrder = () => {
    handleAddToCart();
    history.push("/cart");
  };

  const navigate = useNavigate();

  console.log(product);

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
          <button className="product-button" onClick={handleAddToCart}>
            ADD TO BAG
          </button>
          <button
            className="product-button"
            onClick={() => {
              handleAddToCart();
              navigate("/cart");
            }}
          >
            PROCESS ORDER
          </button>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetail;
