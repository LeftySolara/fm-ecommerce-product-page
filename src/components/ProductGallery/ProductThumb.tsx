interface ProductThumbProps {
  src: string;
  selected: boolean;
  handleClick: () => any;
}

const ProductThumb = (props: ProductThumbProps) => {
  const { src, selected, handleClick } = props;

  return (
    <>
      <li className="w-1/5 rounded-xl">
        <button
          type="button"
          className={`rounded-xl border-4 border-white ${
            selected ? "border-4 border-orange" : ""
          }`}
          onClick={handleClick}
        >
          <img
            src={src}
            className={`rounded-lg object-cover hover:opacity-30 ${
              selected ? "opacity-30" : ""
            }`}
          />
        </button>
      </li>
    </>
  );
};

export default ProductThumb;
