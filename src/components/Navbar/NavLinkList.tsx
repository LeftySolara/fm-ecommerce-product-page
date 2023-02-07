import NavLink from "./NavLink";

interface NavListProps {
  items: Array<string>;
}

const NavLinkList = (props: NavListProps) => {
  const { items } = props;
  return (
    <ul className="m-0 flex h-full w-96 flex-none flex-row flex-nowrap items-center justify-evenly">
      {items.map((item) => (
        <NavLink text={item} key={item} />
      ))}
    </ul>
  );
};

export default NavLinkList;
