import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AllPage from "./pages/AllPage";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import { AuthProviderWrapper } from "./context/auth.context";
import { CartProviderWrapper } from "./context/cart.context";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <AuthProviderWrapper>
      <CartProviderWrapper>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/all" element={<AllPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </Router>
      </CartProviderWrapper>
    </AuthProviderWrapper>
  );
}

export default App;
