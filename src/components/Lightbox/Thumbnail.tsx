interface ThumbnailProps {
  image: string;
  handleClick: (e: React.MouseEvent<HTMLElement>) => any;
}

const Thumbnail = (props: ThumbnailProps) => {
  const { image, handleClick } = props;

  return (
    <img
      src={image}
      key={image}
      onClick={handleClick}
      className="z-10 w-1/6 rounded-2xl"
    />
  );
};

export default Thumbnail;
