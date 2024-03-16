import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import RegisterPage from "./register/rgister";
import Login from "./login/login";
import AboutPage from "./about/about";

export default function Stack() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}


