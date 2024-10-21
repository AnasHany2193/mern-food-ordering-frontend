import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound } from "lucide-react";

import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/**
 * Username Menu component
 * @description Username Menu component that displays the user's name and logout button
 */
const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <div className="flex">
      <Link to="/order" className="font-bold hover:text-orange-500">
        Order Status
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-2 px-3 font-bold capitalize hover:text-orange-500">
          <CircleUserRound className="text-orange-500" />
          {user?.nickname}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <Link
              className="font-bold hover:text-orange-500"
              to="/manage-restaurant"
            >
              Manage Restaurant
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link
              className="font-bold hover:text-orange-500"
              to="/user-profile"
            >
              User Profile
            </Link>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Button
              onClick={() => logout()}
              className="flex flex-1 font-bold bg-orange-500"
            >
              Log Out
            </Button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default UsernameMenu;
