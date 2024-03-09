import productService from "../api/product.js";
import { useEffect, useState } from "react";
import "./AllPage.css";
import Container from "../components/Container.jsx";
import { Link, useNavigate } from "react-router-dom";

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
    <div>
      <Container>
        <div className="contenido">
          <span>1</span>
          <span>2</span>
          {products.map((product) => (
            // <Link to={`/product/${product._id}`} state={{product}}>
            <div key={product._id} onClick={() => handleProductClick(product)}>
              <img src="" alt="" />
              <p>{product.nameProduct}</p>
              <strong>${product.price}</strong>
            </div>
            // </Link>
          ))}
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
      </Container>
    </div>
  );
}

export default AllPage;
