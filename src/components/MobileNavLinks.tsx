import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

/**
 * Mobile Navbar Links component
 * @description Mobile Navbar Links component that renders the links to the different pages
 */
const MobileNavLinks = () => {
  const { logout } = useAuth0();

  return (
    <>
      <Link
        to="/order-status"
        className="flex items-center font-bold bg-white hover:text-orange-500"
      >
        Orders
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex items-center font-bold bg-white hover:text-orange-500"
      >
        Manage Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex items-center font-bold bg-white hover:text-orange-500"
      >
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center px-3 font-bold hover:bg-gray-500"
      >
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;
