import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main_grid from "./components/Main_grid";
import SingleProduct from "./components/SingleProduct";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Main_grid />} />
        <Route path="/:id" element={<SingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
