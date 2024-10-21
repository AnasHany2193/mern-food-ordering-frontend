import { useAuth0 } from "@auth0/auth0-react";

import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";

/**
 * Main NavBar component
 * @description Main NavBar component that contains the user's username menu and a button to log in
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
