import NavLinkList from "./NavLinkList";
import Logo from "./Logo";
import CartIcon from "../CartIcon";
import Avatar from "../../assets/images/image-avatar.png";

const Navbar = () => {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="flex w-full items-center justify-center">
      <div className="flex h-24 w-10/12 flex-row justify-between border-b-[1px] border-solid border-blue-200 border-opacity-50">
        <div className="flex w-auto flex-row items-center justify-between">
          <Logo />
          <NavLinkList items={navItems} />
        </div>
        <div className="flex w-28 flex-row items-center justify-between">
          <CartIcon fillColor="fill-blue-300" hoverColor="fill-blue-400" />
          <img
            src={Avatar}
            className="w-12 border-2 border-white hover:rounded-full hover:border-2 hover:border-solid hover:border-orange"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
