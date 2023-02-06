interface NavListItemProps {
  text: string;
}

const NavLink = (props: NavListItemProps) => {
  const { text } = props;
  return (
    <li className="text-base">
      <a href="#">{text}</a>
    </li>
  );
};

export default NavLink;
