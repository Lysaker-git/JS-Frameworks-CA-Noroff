import { Routes, Route } from "react-router"
import Layout from "./Layout";
import Cart from "./cart/Cart";
import ProductPage from "./productPage/ProductPage";
import HomePage from "./HomePage";
import SuccessPage from "./Success/Success";
import ContactPage from "./contact/Contact";

export default function MyRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/:id" element={<ProductPage />} />
        <Route path="/cart/:id" element={<ProductPage />} />
        <Route path="/successScreen" element={<SuccessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Route>
    </Routes>
  );
}