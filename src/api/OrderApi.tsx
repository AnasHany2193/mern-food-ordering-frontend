import { Order } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Get my orders
 * @description This function is used to get my orders from the backend API and update every 5 seconds
 */
export const useGetMyOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) throw new Error("Failed to get orders");

    return response.json();
  };

  const { isLoading, data: orders } = useQuery(
    "fetchMyOrders",
    getMyOrdersRequest,
    {
      refetchInterval: 5000,
    }
  );

  return { isLoading, orders };
};

/**
 * Checkout session request type
 * @description This type is used to send checkout session request to the backend
 */
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
    isLoading,
    mutateAsync: createCheckoutSession,
  } = useMutation(createCheckoutSessionRequest, {
    onError: (error: Error) => {
      toast.error(error.toString());
      reset();
    },
  });

  return { isLoading, createCheckoutSession };
};
