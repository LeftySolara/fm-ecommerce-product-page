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
          className={`rounded-xl border-4 border-white hover:brightness-110 ${
            selected ? "border-4 border-orange brightness-110" : ""
          }`}
          onClick={handleClick}
        >
          <img src={src} className="rounded-lg object-cover" />
        </button>
      </li>
    </>
  );
};

export default ProductThumb;
