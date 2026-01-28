import { HEADER_STYLES } from "./constants";

import SearchInput from "./components/SearchInput";
import CartButton from "./components/CartButton";
import MenuButton from "./components/MenuButton";
import UserButton from "./components/UserButton";
import Logo from "./components/Logo";

function Header() {
  return (
    <header className={HEADER_STYLES.container}>
      <div className={HEADER_STYLES.topRow}>
        <Logo />
        <div className="flex gap-3">
          <SearchInput className={HEADER_STYLES.searchDesktop} />

          {/* Action buttons */}
          <div className="flex gap-3">
            <UserButton className="hidden lg:flex" />
            <MenuButton />
            <CartButton />
          </div>
        </div>
      </div>

      <hr className={HEADER_STYLES.divider} />
      <SearchInput className={HEADER_STYLES.searchMobile} />
      <hr className={HEADER_STYLES.divider} />
    </header>
  );
}

export default Header;
