import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import MainNav from "./MainNav";

import Logo from "../assets/logo.png";

function Header() {
  return (
    <header className="py-6 border-b-2 border-b-orange-500">
      <div className="container flex items-center justify-between px-6 mx-auto">
        <Link
          to="/"
          className="flex items-center gap-3 text-3xl font-bold tracking-tight text-orange-500 "
        >
          <span>MernEats.com</span>
          <img src={Logo} alt="logo-img" width={50} height={50} />
        </Link>

        <div className="md:hidden">
          <MobileNav />
        </div>

        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </header>
  );
}

export default Header;
