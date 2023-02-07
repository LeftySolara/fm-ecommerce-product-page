import Navbar from "./components/Navbar/Navbar";
import ProductCard from "./components/ProductCard/ProductCard";

function App() {
  return (
    <div className="flex w-[1440px] flex-col">
      <div className="flex w-full items-center justify-center">
        <Navbar />
      </div>
      <div className="flex h-full w-full justify-center">
        <ProductCard
          company="Sneaker Company"
          name="Fall Limited Edition Sneakers"
          description="These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer."
          salePrice={125.0}
          regularPrice={250.0}
        />
      </div>
    </div>
  );
}

export default App;
