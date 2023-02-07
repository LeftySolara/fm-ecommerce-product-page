interface NavListItemProps {
  text: string;
}

const NavLink = (props: NavListItemProps) => {
  const { text } = props;
  return (
    <li className="flex-column flex h-full items-center border-b-4 border-b-white text-base text-blue-300 hover:border-b-4 hover:border-solid hover:border-b-orange hover:text-blue-400">
      <a href="#">{text}</a>
    </li>
  );
};

export default NavLink;
