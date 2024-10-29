import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import { useLocation } from "react-router-dom";
import LoadingButton from "./LoadingButton";

const CheckoutButton = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    isLoading: isAuthLoading,
  } = useAuth0();

  const { pathname } = useLocation();

  const onLogin = async () => {
    console.log("pathname", pathname);
    await loginWithRedirect({
      appState: { returnTo: pathname },
    });
    console.log("isAuthenticated", isAuthenticated);
  };

  return isAuthenticated ? (
    <Button className="flex-1 bg-orange-500">Go to Checkout</Button>
  ) : isAuthLoading ? (
    <LoadingButton />
  ) : (
    <Button onClick={onLogin} type="button" className="flex-1 bg-orange-500">
      Log in to Checkout
    </Button>
  );
};

export default CheckoutButton;
