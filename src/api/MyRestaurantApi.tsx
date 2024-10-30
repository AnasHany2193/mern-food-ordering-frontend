import { Order, Restaurant } from "@/types";
import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Gets the current user's restaurant
 * @description This function is used to get the current user's restaurant. It sends a GET request to the API.
 */
export const useGetMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantRequest = async (): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!response.ok) throw new Error("Failed to get restaurant");

    return response.json();
  };

  const { isLoading, data: restaurant } = useQuery(
    "fetchMyRestaurant",
    getMyRestaurantRequest
  );

  return { isLoading, restaurant };
};

/**
 * Creates a new restaurant in the database
 * @description This function is used to create a new restaurant in the database. It takes in a restaurant object and sends a POST request to the API.
 */
export const useCreateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const createMyRestaurantRequest = async (
    restaurantDataForm: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantDataForm,
    });

    if (!response.ok) throw new Error("Failed to create restaurant");

    return response.json();
  };

  const { isLoading, mutate: createRestaurant } = useMutation(
    createMyRestaurantRequest,
    {
      onSuccess: () => {
        toast.success("Restaurant created successfully");
      },
      onError: (error: Error) => {
        toast.error(error.message);
      },
    }
  );

  return { isLoading, createRestaurant };
};

/**
 * Updates the current user's restaurant
 * @description This function is used to update the current user's restaurant. It takes in a restaurant object and sends a PUT request to the API.
 */
export const useUpdateMyRestaurant = () => {
  const { getAccessTokenSilently } = useAuth0();

  const updateMyRestaurantRequest = async (
    restaurantDataForm: FormData
  ): Promise<Restaurant> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: restaurantDataForm,
    });

    if (!response.ok) throw new Error("Failed to update restaurant");

    return response.json();
  };

  const { isLoading, mutate: updateRestaurant } = useMutation(
    updateMyRestaurantRequest,
    {
      onSuccess: () => {
        toast.success("Restaurant updated successfully");
      },
      onError: (error: Error) => {
        toast.error(error.message);
      },
    }
  );

  return { isLoading, updateRestaurant };
};

/**
 * Gets the current user's restaurant orders
 * @description This function is used to get the current user's restaurant orders. It sends a GET request to the API.
 */
export const useGetMyRestaurantOrders = () => {
  const { getAccessTokenSilently } = useAuth0();

  const getMyRestaurantOrdersRequest = async (): Promise<Order[]> => {
    const accessToken = await getAccessTokenSilently();

    const response = await fetch(`${API_BASE_URL}/api/my/restaurant/order`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) throw new Error("Failed to get orders");

    return response.json();
  };

  const { isLoading, data: orders } = useQuery(
    "fetchMyRestaurantOrders",
    getMyRestaurantOrdersRequest
  );

  return { isLoading, orders };
};
