import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { RegisterPage } from "./pages/RegisterPage";
import { LoginPage } from "./pages/LoginPage";
import HomePage from "./pages/HomePage";
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
        </Routes>
      </Router>
    </AuthProviderWrapper>
  );
}

export default App;
