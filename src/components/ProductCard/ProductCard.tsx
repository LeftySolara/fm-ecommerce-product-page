import ProductGallery from "../ProductGallery/ProductGallery";
import ProductInfo from "../ProductInfo/ProductInfo";
import { Image } from "../../assets/images";

interface ProductCardProps {
  images: Array<Image>;
  details: {
    company: string;
    name: string;
    description: string;
    salePrice: number;
    regularPrice: number;
  };
}

const ProductCard = (props: ProductCardProps) => {
  const { images, details } = props;

  return (
    <div className="flex h-full w-full flex-row items-center justify-evenly">
      <ProductGallery images={images} />
      <ProductInfo details={details} />
    </div>
  );
};

export default ProductCard;
