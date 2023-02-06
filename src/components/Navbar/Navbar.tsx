import NavLinkList from "./NavLinkList";
import Logo from "./Logo";
import CartIcon from "./CartIcon";
import Avatar from "../../assets/images/image-avatar.png";

const Navbar = () => {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="flex h-24 w-10/12 flex-row justify-between border-b-2 border-solid border-blue-200">
      <div className="flex w-auto flex-row items-center justify-between">
        <Logo />
        <NavLinkList items={navItems} />
      </div>
      <div className="flex w-28 flex-row items-center justify-between">
        <CartIcon />
        <img src={Avatar} className="w-12" />
      </div>
    </div>
  );
};

export default Navbar;
