import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_grid from "./components/Main_grid";
import SingleProduct from "./components/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";
import Brands from "./pages/Brands";
import { ToggleCardContextProvider } from "./context/ToggleCardContext";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Sale from "./pages/Sale";

function App() {
  return (
    <>
      <ToggleCardContextProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Main_grid />} />
            <Route path="/login" element={<Login />} />
            <Route path="/rejestracja" element={<Registration />} />
            <Route path="/marki" element={<Brands />} />
            <Route path="/wyprzedaż" element={<Sale />} />
            <Route path="/:id" element={<SingleProduct />} />
          </Routes>
        </BrowserRouter>
      </ToggleCardContextProvider>
    </>
  );
}

export default App;
