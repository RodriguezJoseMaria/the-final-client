import React, { useState, useEffect, useContext } from "react";
import CartService from "../api/cart";

const API_URL = import.meta.env.VITE_API_URL;

const CartContext = React.createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

function CartProviderWrapper({ children }) {
  const [cart, setCart] = useState([]);
  const addProductToCart = (product) => {
    CartService.addProduct({ productId: product._id, quantity: 1 })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
    setCart((prevCart) => {
      let newCart = [...prevCart];
      const productIndex = newCart.findIndex((pr) => pr._id === product._id);
      if (productIndex !== -1) {
        newCart[productIndex].quantity += 1;
      } else {
        product.quantity = 1;
        newCart = [...cart, product];
      }
      return newCart;
    });
  };

  const decreaseQuantity = (productId) => {
    let newCart = [...cart];
    const productIndex = newCart.findIndex((pr) => pr._id === productId);
    // console.log(productIndex);
    if (productIndex !== -1) {
      newCart[productIndex].quantity -= 1;
      if (newCart[productIndex].quantity <= 0) {
        newCart.splice(productIndex, 1);
      }
    }
    setCart(newCart);
  };

  const increaseQuantity = (productId) => {
    let newCart = [...cart];
    const productIndex = newCart.findIndex((pr) => pr._id === productId);
    // console.log(productIndex);
    if (productIndex !== -1) {
      newCart[productIndex].quantity += 1;
    }
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{ cart, addProductToCart, decreaseQuantity, increaseQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProviderWrapper, CartContext };
