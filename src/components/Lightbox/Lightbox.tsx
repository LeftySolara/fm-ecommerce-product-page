import React, { useState } from "react";
import IconNext from "./IconNext";
import IconPrevious from "./IconPrevious";
import ImageCard from "./ImageCard";

interface LightboxProps {
  images: Array<string>;
  thumbnails: Array<string>;
  initialImage: string;
  handleClick: () => any;
}

const Lightbox = (props: LightboxProps) => {
  const { images, thumbnails, initialImage, handleClick } = props;

  const [selectedImage, setSelectedImage] = useState<string>(initialImage);

  const showNext = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(selectedImage);
    if (currentIndex === images.length - 1) {
      return;
    }
    const nextImage = images[currentIndex + 1];
    setSelectedImage(nextImage);
  };

  const showPrevious = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    const currentIndex = images.indexOf(selectedImage);
    if (currentIndex === 0) {
      return;
    }
    const previousImage = images[images.indexOf(selectedImage) - 1];
    setSelectedImage(previousImage);
  };

  return (
    <>
      <div
        className="fixed top-0 left-0 z-10 flex h-full w-full items-center justify-center bg-blue-200 bg-opacity-50"
        onClick={handleClick}
      >
        <div className="flex h-2/5 w-2/5 flex-row items-center justify-evenly">
          <IconPrevious handleClick={showPrevious} />
          <ImageCard src={selectedImage} />
          <IconNext handleClick={showNext} />
        </div>
      </div>
      <div>
        {thumbnails.map((thumbnail) => (
          <img
            src={thumbnail}
            key={thumbnail}
            onClick={() =>
              setSelectedImage(images[thumbnails.indexOf(thumbnail)])
            }
          />
        ))}
      </div>
    </>
  );
};

export default Lightbox;
