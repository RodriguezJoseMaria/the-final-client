import { useLocation } from "react-router-dom";
import productImage from "../../public/images/Tops/Hoody/76509478b_15_d.png";
import "./ProductDetail.css";

function ProductDetail() {
  const location = useLocation();
  const { product } = location.state || {};
  const sizes = ["S", "M", "L", "XL"];
  return (
    <div className="product-card">
      <div className="image-product-container">
        <img className="image-product" src={productImage} alt="Product Image" />
      </div>
      <div className="product-detail">
        <p className="product-price">
          <strong>{product.nameProduct}</strong>
          <strong>${product.price}</strong>
        </p>
        <p>{product.description}</p>
        <div className="product-sizes-container">
          <div className="product-sizes">
            {sizes.map((size) => (
              <div key={size} className="product-size">
                <button>{size}</button>
              </div>
            ))}
          </div>
        </div>
        <button className="product-button">ADD TO BAG</button>
      </div>
    </div>
  );
}

export default ProductDetail;
