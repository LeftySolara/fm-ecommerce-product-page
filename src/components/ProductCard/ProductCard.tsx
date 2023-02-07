import QuantityForm from "./QuantityForm";

interface ProductCardProps {
  company: string;
  name: string;
  description: string;
  regularPrice: number;
  salePrice: number;
}

const ProductCard = (props: ProductCardProps) => {
  const { company, name, description, regularPrice, salePrice } = props;

  return (
    <div className="flex h-[480px] w-full flex-col justify-evenly">
      <p className="font-[700] text-orange">{company.toUpperCase()}</p>
      <h1 className="text-5xl font-[700] text-blue-400">{name}</h1>
      <p className="text-blue-300">{description}</p>
      <div>
        <div className="flex w-1/2 flex-row items-center justify-start">
          <p className="text-3xl font-[700] text-blue-400">
            ${salePrice.toFixed(2)}
          </p>
          <p className="ml-4 rounded-md bg-paleOrange px-2 font-[700] text-orange">
            {((salePrice / regularPrice) * 100).toFixed(0)}%
          </p>
        </div>
        <p className="font-[700] text-blue-200 line-through">
          ${regularPrice.toFixed(2)}
        </p>
      </div>
      <QuantityForm />
    </div>
  );
};

export default ProductCard;
