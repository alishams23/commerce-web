import { ArrowDown2 } from "iconsax-reactjs";
import { NAVBAR_ITEMS } from "../constants";

function Navbar() {
  return (
    <div className="border-muted mx-36 flex gap-5 border-b pb-2">
      {NAVBAR_ITEMS.map(({ enTitle, faTitle, icon, children }) => (
        <div
          key={enTitle}
          className="text-title flex items-center gap-2 hover:text-black"
        >
          <div>{icon}</div>
          <div>
            <div>{enTitle}</div>
            <div>{faTitle}</div>
          </div>

          {children && <ArrowDown2 />}
        </div>
      ))}
    </div>
  );
}

export default Navbar;
