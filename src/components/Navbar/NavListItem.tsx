interface NavListItemProps {
  text: string;
}

const NavListItem = (props: NavListItemProps) => {
  const { text } = props;
  return (
    <li className="text-base">
      <a href="#">{text}</a>
    </li>
  );
};

export default NavListItem;
