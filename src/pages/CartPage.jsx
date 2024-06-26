import Container from "../components/Container";
import { useCart } from "../context/cart.context";
import "./CartPage.css";

function CartPage() {
  const { cart, decreaseQuantity, increaseQuantity } = useCart();
  console.log(cart);

  return (
    <Container>
      <div className="cart-layout">
        <div className="cart-contenido">
          {cart &&
            cart.map((product) => (
              <div
                key={product._id}
                //   onClick={() => handleProductClick(product)}
                className="all-product"
              >
                <img
                  src={`../../public/images/All/${product.nameProduct}.jpg`}
                  alt={`${product.nameProduct}`}
                  className="cart-products-image"
                />
                <p>{product.nameProduct}</p>
                <strong>${product.price}</strong>
                <div>
                  <button
                    className="size-button"
                    onClick={() => decreaseQuantity(product._id)}
                  >
                    -
                  </button>
                  <button className="size-button">{product.quantity}</button>
                  <button
                    className="size-button"
                    onClick={() => increaseQuantity(product._id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))}
        </div>
        <button className="product-button">CONTINUE</button>
      </div>
    </Container>
  );
}

export default CartPage;
