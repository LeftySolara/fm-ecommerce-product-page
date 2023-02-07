import QuantityForm from "./QuantityForm";

interface ProductInfoProps {
  details: {
    company: string;
    name: string;
    description: string;
    regularPrice: number;
    salePrice: number;
  };
}

const ProductInfo = (props: ProductInfoProps) => {
  const { details } = props;

  return (
    <div className="flex h-full w-1/3 items-center justify-end">
      <div className="flex h-[480px] w-full flex-col justify-evenly">
        <p className="font-[700] text-orange">
          {details.company.toUpperCase()}
        </p>
        <h1 className="text-5xl font-[700] text-blue-400">{details.name}</h1>
        <p className="text-blue-300">{details.description}</p>
        <div>
          <div className="flex w-1/2 flex-row items-center justify-start">
            <p className="text-3xl font-[700] text-blue-400">
              ${details.salePrice.toFixed(2)}
            </p>
            <p className="ml-4 rounded-md bg-paleOrange px-2 font-[700] text-orange">
              {((details.salePrice / details.regularPrice) * 100).toFixed(0)}%
            </p>
          </div>
          <p className="font-[700] text-blue-200 line-through">
            ${details.regularPrice.toFixed(2)}
          </p>
        </div>
        <QuantityForm />
      </div>
    </div>
  );
};

export default ProductInfo;
