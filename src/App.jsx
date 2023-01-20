import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_grid from "./pages/Main_grid";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import Brands from "./pages/Brands";
import { useShoppingCart } from "./context/ToggleCardContext";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Sale from "./pages/Sale";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShoppingCartEmpty from "./components/ShoppingCartEmpty";
import ShoppingCart from "./components/ShoppingCart";
import Favorite from "./components/UserDashboard/Favorite";
import Orders from "./components/UserDashboard/Orders";
import Screen from "./components/UserDashboard/Screen";

function App() {
  const { cartQuantity } = useShoppingCart();

  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        {cartQuantity > 0 ? <ShoppingCart /> : <ShoppingCartEmpty />}
        <Routes>
          <Route path="/" element={<Main_grid />} />
          <Route path="/login" element={<Login />} />
          <Route path="/rejestracja" element={<Registration />} />
          <Route path="/profil" element={<UserDashboard />}>
            <Route path="pulpit" element={<Screen />} />
            <Route path="schowek" element={<Favorite />} />
            <Route path="zamówienia" element={<Orders />} />
          </Route>
          <Route path="/marki" element={<Brands />} />
          <Route path="/wyprzedaż" element={<Sale />} />
          <Route path="/:id" element={<SingleProduct />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
