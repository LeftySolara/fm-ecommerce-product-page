interface ImageCardProps {
  src: string;
}

const ImageCard = (props: ImageCardProps) => {
  const { src } = props;

  return <img src={src} className="rounded-xl" />;
};

export default ImageCard;
