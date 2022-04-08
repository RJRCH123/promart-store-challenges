import { Route, Routes } from "react-router-dom";
import Home from "./views/home";
import ProductDetail from "./views/productDetail";
import Login from "./views/login";
import SignUp from "./views/signUp";
import ShoppingCart from "./views/shoppingCart";
import PaymentMethod from "./views/paymentMethod";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/Método-de-Pago" element={<PaymentMethod />} />
        <Route path="/Carro-de-Compras" element={<ShoppingCart />} />
        <Route path="/Detalle-Producto" element={<ProductDetail />} />
        <Route path="/Registro" element={<SignUp />} />
        <Route path="/Inicio-Sesion" element={<Login />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
