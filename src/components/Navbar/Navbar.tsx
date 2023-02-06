import NavList from "./NavList";

const Navbar = () => {
  const navItems = ["Collections", "Men", "Women", "About", "Contact"];

  return (
    <div className="h-1 w-full border-solid">
      <NavList items={navItems} />
    </div>
  );
};

export default Navbar;
