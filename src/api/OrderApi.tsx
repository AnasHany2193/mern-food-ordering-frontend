import { useAuth0 } from "@auth0/auth0-react";
import { useMutation } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

type CheckoutSessionRequest = {
  cartItems: {
    name: string;
    quantity: string;
    menuItemId: string;
  }[];
  deliveryDetails: {
    name: string;
    city: string;
    email: string;
    country: string;
    addressLine1: string;
  };
  restaurantId: string;
};

/**
 * Create a checkout session
 * @description This function is used to create a checkout session
 */
export const useCreateCheckoutSession = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createCheckoutSessionRequest = async (
    checkoutSessionRequest: CheckoutSessionRequest
  ) => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(
      `${API_BASE_URL}/api/order/checkout/create-checkout-session`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
        body: JSON.stringify(checkoutSessionRequest),
      }
    );

    if (!response.ok) throw new Error("Failed to create checkout session");

    return response.json();
  };

  const {
    reset,
    error,
    isLoading,
    mutateAsync: createCheckoutSession,
  } = useMutation(createCheckoutSessionRequest);

  if (error) {
    toast.error(error.toString());
    reset();
  }

  return { isLoading, createCheckoutSession };
};
