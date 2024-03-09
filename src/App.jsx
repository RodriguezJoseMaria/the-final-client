import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
import AllPage from "./pages/AllPage";
import ProductDetail from "./pages/ProductDetail";
import "./App.css";
import { AuthProviderWrapper } from "./context/auth.context";

function App() {
  return (
    <AuthProviderWrapper>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/all" element={<AllPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
      </Router>
    </AuthProviderWrapper>
  );
}

export default App;
