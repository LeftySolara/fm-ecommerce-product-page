interface NavListItemProps {
  text: string;
}

const NavLink = (props: NavListItemProps) => {
  const { text } = props;
  return (
    <li className="text-base text-blue-300">
      <a href="#">{text}</a>
    </li>
  );
};

export default NavLink;
