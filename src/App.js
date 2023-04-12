import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import ProductDetail from "./views/productDetail";
import Login from "./views/login";
import SignUp from "./views/signUp";
import ShoppingCart from "./views/shoppingCart";
import PaymentMethod from "./views/paymentMethod";

function App() {
  return (
    <Routes>
      <Route path="/metodo-de-pago" element={<PaymentMethod />} />
      <Route path="/carro-de-compras" element={<ShoppingCart />} />
      <Route path="/detalle-producto" element={<ProductDetail />} />
      <Route path="/registro" element={<SignUp />} />
      <Route path="/inicio-sesion" element={<Login />} />
      <Route path="/productos" element={<Home />} />
      <Route path="/" element={<Login />} />
    </Routes>
  );
}

export default App;
