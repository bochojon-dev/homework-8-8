import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Products from "./pages/products/Products";
import CreateProduct from "./pages/create-product/CreateProduct";
import Login from "./pages/login/Login";
import SingleRoute from "./pages/single-route/SingleRoute";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/create-product" element={<CreateProduct />} />
        <Route path="/product/:id" element={<SingleRoute />} />
      </Routes>
    </>
  );
}

export default App;
