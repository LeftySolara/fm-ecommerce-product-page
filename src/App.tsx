import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";
import ProductImage1 from "./assets/images/image-product-1.jpg";

function App() {
  return (
    <div className="flex w-[1440px] flex-col items-center">
      <div className="flex w-full items-center justify-center">
        <Navbar />
      </div>
      <div className="flex h-full w-full flex-row items-center justify-evenly">
        <div className="w-1/3">
          <img src={ProductImage1} className="rounded-xl" />
        </div>
        <div className="flex h-full w-1/3 items-center justify-end">
          <ProductCard
            company="Sneaker Company"
            name="Fall Limited Edition Sneakers"
            description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
            salePrice={125.0}
            regularPrice={250.0}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
