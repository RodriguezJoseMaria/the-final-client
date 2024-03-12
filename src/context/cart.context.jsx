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
    setCart([...cart, product]);
  };
  return (
    <CartContext.Provider value={{ cart, addProductToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProviderWrapper, CartContext };
