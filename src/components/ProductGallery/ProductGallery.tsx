import { useState } from "react";
import ProductThumb from "./ProductThumb";
import { Image } from "../../assets/images";

interface ProductGalleryProps {
  images: Array<Image>;
}

const ProductGallery = (props: ProductGalleryProps) => {
  const { images } = props;

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  return (
    <div className="w-1/3">
      <div className="w-full">
        <div className="w-full">
          <img src={images[selectedIndex].full} className="rounded-xl" />
        </div>
      </div>
      <div>
        <ul className="mt-12 flex flex-row justify-between">
          {images.map((image) => (
            <ProductThumb
              src={image.thumb}
              selected={selectedIndex === images.indexOf(image)}
              key={image.thumb}
              handleClick={() => setSelectedIndex(images.indexOf(image))}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductGallery;
