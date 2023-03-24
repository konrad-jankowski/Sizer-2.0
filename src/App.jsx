import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Main_grid from "./pages/Main_grid";
import SingleProduct from "./pages/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import Brands from "./pages/Brands";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Sale from "./pages/Sale";
import UserDashboard from "./pages/UserDashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ShoppingCart from "./components/ShoppingCart";
import Favorite from "./components/UserDashboard/Favorite";
import Orders from "./components/UserDashboard/Orders";
import Screen from "./components/UserDashboard/Screen";
import Cart from "./pages/Cart";
import SizerClub from "./components/UserDashboard/SizerClub";

function Layout() {
  return (
    <>
      {<ShoppingCart />}
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Main_grid />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rejestracja" element={<Registration />} />
            <Route path="/profil" element={<UserDashboard />}>
              <Route path="pulpit" element={<Screen />} />
              <Route path="sizerclub" element={<SizerClub />} />
              <Route path="schowek" element={<Favorite />} />
              <Route path="zamówienia" element={<Orders />} />
            </Route>
            <Route path="/marki" element={<Brands />} />
            <Route path="/wyprzedaż" element={<Sale />} />
            <Route path={`/:id`} element={<SingleProduct />} />
          </Route>
          <Route path="/koszyk/lista" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
