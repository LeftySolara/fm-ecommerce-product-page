import NavList from "./NavList";
import Logo from "./Logo";

const Navbar = () => {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="flex h-24 w-10/12 flex-row items-center justify-start border-b-2 border-solid border-blue-200">
      <Logo />
      <NavList items={navItems} />
    </div>
  );
};

export default Navbar;
