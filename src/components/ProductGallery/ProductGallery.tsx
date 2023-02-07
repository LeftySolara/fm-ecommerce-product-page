import { useState } from "react";
import ProductImage1 from "../../assets/images/image-product-1.jpg";
import ProductImage2 from "../../assets/images/image-product-2.jpg";
import ProductImage3 from "../../assets/images/image-product-3.jpg";
import ProductImage4 from "../../assets/images/image-product-4.jpg";
import ProductImage1Thumb from "../../assets/images/image-product-1-thumbnail.jpg";
import ProductImage2Thumb from "../../assets/images/image-product-2-thumbnail.jpg";
import ProductImage3Thumb from "../../assets/images/image-product-3-thumbnail.jpg";
import ProductImage4Thumb from "../../assets/images/image-product-4-thumbnail.jpg";
import ProductThumb from "./ProductThumb";
import Lightbox from "../Lightbox/Lightbox";

const ProductGallery = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [displayLightbox, setDisplayLightbox] = useState<boolean>(false);

  const images = [ProductImage1, ProductImage2, ProductImage3, ProductImage4];

  const thumbs = [
    ProductImage1Thumb,
    ProductImage2Thumb,
    ProductImage3Thumb,
    ProductImage4Thumb,
  ];

  const hideLightbox = () => {
    setDisplayLightbox(false);
  };

  return (
    <div className="w-1/3">
      {displayLightbox ? (
        <Lightbox
          images={images}
          thumbnails={thumbs}
          initialImage={images[selectedIndex]}
          handleClick={hideLightbox}
        />
      ) : null}
      <div className="w-full">
        <div className="w-full">
          <img
            src={images[selectedIndex]}
            className="rounded-xl"
            onClick={() => setDisplayLightbox((oldValue) => !oldValue)}
          />
        </div>
      </div>
      <div>
        <ul className="mt-12 flex flex-row justify-between">
          {thumbs.map((thumb) => (
            <ProductThumb
              src={thumb}
              selected={selectedIndex === thumbs.indexOf(thumb)}
              key={thumb}
              handleClick={() => setSelectedIndex(thumbs.indexOf(thumb))}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductGallery;
