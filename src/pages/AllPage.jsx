import productService from "../api/product.js";
import { useEffect, useState } from "react";
import "./AllPage.css";
import { Link, useNavigate } from "react-router-dom";
import Container from "../components/Container.jsx";

function AllPage() {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  const handleProductClick = (product) => {
    navigate(`/product/${product._id}`, { state: { product } });
  };

  useEffect(() => {
    productService
      .getAllProduct()
      .then((res) => {
        setProducts(res.data);
      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <Container>
      <div className="contenido">
        {products.map((product) => (
          <div
            key={product._id}
            onClick={() => handleProductClick(product)}
            className="all-product"
          >
            <img
              src={`../../public/images/All/${product.nameProduct}.jpg`}
              alt={`${product.nameProduct}`}
              className="all-products-image"
            />
            <p>{product.nameProduct}</p>
            <strong>${product.price}</strong>
          </div>
        ))}
      </div>
    </Container>
  );
}

export default AllPage;
