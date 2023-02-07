import React, { useState } from "react";
import CartIcon from "../CartIcon";
import IconMinus from "./IconMinus";
import IconPlus from "./IconPlus";

const QuantityForm = () => {
  const [quantity, setQuantity] = useState<number>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`You've ordered ${quantity} items!`);
  };

  const handleMinus = () => {
    if (quantity > 0) {
      setQuantity((oldQuantity) => oldQuantity - 1);
    }
  };

  const handlePlus = () => {
    setQuantity((oldQuantity) => oldQuantity + 1);
  };

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setQuantity(parseInt(e.currentTarget.value));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-row items-center justify-between"
    >
      <div className="flex h-full w-36 flex-row justify-evenly rounded-md bg-blue-100 p-2">
        <button onClick={handleMinus} type="button">
          <IconMinus />
        </button>
        <input
          type="number"
          min={0}
          value={quantity}
          onChange={handleChange}
          className="w-10 bg-blue-100 text-center outline-none outline-2 focus:outline focus:outline-orange"
        />
        <button onClick={handlePlus} type="button">
          <IconPlus />
        </button>
      </div>
      <div>
        <button
          type="submit"
          className="flex w-64 flex-row justify-center rounded-lg bg-orange p-4 font-[700] text-white shadow-2xl shadow-orange/40 hover:brightness-110"
        >
          <CartIcon fillColor="fill-white" hoverColor="fill-white" />
          <p className="ml-4">Add to Cart</p>
        </button>
      </div>
    </form>
  );
};

export default QuantityForm;
