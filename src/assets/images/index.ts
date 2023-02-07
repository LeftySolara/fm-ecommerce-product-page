import ProductImage1 from "./image-product-1.jpg";
import ProductImage2 from "./image-product-2.jpg";
import ProductImage3 from "./image-product-3.jpg";
import ProductImage4 from "./image-product-4.jpg";
import ProductImage1Thumb from "./image-product-1-thumbnail.jpg";
import ProductImage2Thumb from "./image-product-2-thumbnail.jpg";
import ProductImage3Thumb from "./image-product-3-thumbnail.jpg";
import ProductImage4Thumb from "./image-product-4-thumbnail.jpg";

interface Image {
  full: string;
  thumb: string;
}

const images: Array<Image> = [
  { full: ProductImage1, thumb: ProductImage1Thumb },
  { full: ProductImage2, thumb: ProductImage2Thumb },
  { full: ProductImage3, thumb: ProductImage3Thumb },
  { full: ProductImage4, thumb: ProductImage4Thumb },
];

export { images, type Image };
