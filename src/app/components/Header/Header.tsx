import SearchInput from "./components/SearchInput";
import CartButton from "./components/CartButton";
import MenuButton from "./components/MenuButton";
import UserButton from "./components/UserButton";
import Logo from "./components/Logo";

function Header() {
  return (
    <header className="flex flex-col gap-3.5 p-3 px-12 pt-10 lg:px-36 lg:pb-3">
      <div className="flex flex-wrap justify-between">
        <Logo />
        <div className="flex gap-3">
          <SearchInput className="relative hidden lg:block lg:w-85" />

          {/* Action buttons */}
          <div className="flex gap-3">
            <UserButton className="hidden lg:flex" />
            <MenuButton />
            <CartButton />
          </div>
        </div>
      </div>

      <hr className="block text-[#EFEFEF] lg:hidden" />
      <SearchInput className="relative lg:hidden lg:w-85" />
      <hr className="block text-[#EFEFEF] lg:hidden" />
    </header>
  );
}

export default Header;
