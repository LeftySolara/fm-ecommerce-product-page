import NavLink from "./NavLink";

interface NavListProps {
  items: Array<string>;
}

const NavLinkList = (props: NavListProps) => {
  const { items } = props;
  return (
    <ul className="m-12 flex w-96 flex-none flex-row flex-nowrap justify-evenly">
      {items.map((item) => (
        <NavLink text={item} key={item} />
      ))}
    </ul>
  );
};

export default NavLinkList;
