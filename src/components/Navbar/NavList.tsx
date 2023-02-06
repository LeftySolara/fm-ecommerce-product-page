import NavListItem from "./NavListItem";

interface NavListProps {
  items: Array<string>;
}

const NavList = (props: NavListProps) => {
  const { items } = props;
  return (
    <ul>
      {items.map((item) => (
        <NavListItem text={item} key={item} />
      ))}
    </ul>
  );
};

export default NavList;
