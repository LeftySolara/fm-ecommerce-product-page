import NavLink from "./NavLink";

interface NavListProps {
  items: Array<string>;
}

const NavLinkList = (props: NavListProps) => {
  const { items } = props;
  return (
    <ul className="flex w-1/2 flex-none flex-row flex-nowrap justify-evenly">
      {items.map((item) => (
        <NavLink text={item} key={item} />
      ))}
    </ul>
  );
};

export default NavLinkList;
