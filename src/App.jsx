import Main_grid from "./components/Main_grid";
import Navbar from "./components/Navbar";
import banner from "./images/SALE_banner.jpg";
import ProductPage from "./pages/ProductPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SingleProduct from "./components/SingleProduct";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main_grid />} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
