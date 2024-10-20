import { useAuth0 } from "@auth0/auth0-react";
import { CircleUserRound, Menu } from "lucide-react";

import MobileNavLinks from "./MobileNavLinks";

import { Button } from "./ui/button";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

/**
 * Mobile NavBar
 * @description MobileNavBar component that renders a button that toggles the mobile navigation
 */
const MobileNav = () => {
  const { loginWithRedirect, isAuthenticated, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-orange-500" />
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>
            {isAuthenticated ? (
              <span className="flex items-center gap-2 font-bold capitalize">
                <CircleUserRound className="text-orange-500" />
                {user?.nickname}
              </span>
            ) : (
              <span>Welcome to MernEats.com!</span>
            )}
          </SheetTitle>
          <Separator />
          <SheetDescription className="flex flex-col gap-4">
            {isAuthenticated ? (
              <MobileNavLinks />
            ) : (
              <Button
                onClick={() => loginWithRedirect()}
                className="flex-1 font-bold bg-orange-500"
              >
                Log In
              </Button>
            )}
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
