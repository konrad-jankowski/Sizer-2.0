import Main_grid from "./components/Main_grid";
import Navbar from "./components/Navbar";
import banner from "./images/SALE_banner.jpg";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <img src={banner} alt="" />
      {/* <Main_grid /> */}
      <ProductPage />
    </div>
  );
}

export default App;
