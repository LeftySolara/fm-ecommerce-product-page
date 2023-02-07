import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import { images } from "./assets/images";
import details from "./assets/productDetails.json";

function App() {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full flex-row items-center justify-evenly">
        <ProductCard images={images} details={details} />
      </div>
    </>
  );
}

export default App;
