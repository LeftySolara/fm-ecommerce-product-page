import NavListItem from "./NavListItem";

interface NavListProps {
  items: Array<string>;
}

const NavList = (props: NavListProps) => {
  const { items } = props;
  return (
    <ul className="flex w-1/2 flex-none flex-row flex-nowrap justify-evenly">
      {items.map((item) => (
        <NavListItem text={item} key={item} />
      ))}
    </ul>
  );
};

export default NavList;
