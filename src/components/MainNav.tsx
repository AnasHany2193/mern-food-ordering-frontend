import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

/**
 * Main NavBar
 * @description Displays the main nav bar with the username menu if the user is logged in or a log in button if not.
 */
const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex items-center space-x-2">
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          onClick={async () => await loginWithRedirect()}
          variant="ghost"
          className="font-bold hover:text-orange-500 hover:bg-white"
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
