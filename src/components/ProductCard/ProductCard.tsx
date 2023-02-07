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
    <div className="w-1/2">
      <p className="font-[700] text-orange">{company}</p>
      <h1 className="text-4xl font-[700] text-blue-400">{name}</h1>
      <p className="text-blue-300">{description}</p>
      <p className="text-3xl font-[700] text-blue-400">
        ${salePrice.toFixed(2)}
      </p>
      <p className="rounded-md bg-paleOrange font-[700] text-orange">
        {((salePrice / regularPrice) * 100).toFixed(0)}%
      </p>
      <p className="font-[700] text-blue-200 line-through">
        ${regularPrice.toFixed(2)}
      </p>
      <QuantityForm />
    </div>
  );
};

export default ProductCard;
