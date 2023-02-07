interface IconNextProps {
  handleClick: (e: React.MouseEvent<HTMLElement>) => any;
}

const IconNext = (props: IconNextProps) => {
  const { handleClick } = props;

  return (
    <div
      className="z-20 -translate-x-7 transform rounded-full bg-white p-6"
      onClick={handleClick}
    >
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2 1 8 8-8 8"
          stroke="#1D2026"
          stroke-width="3"
          fill="none"
          fill-rule="evenodd"
        />
      </svg>
    </div>
  );
};

export default IconNext;
