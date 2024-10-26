import { toast } from "sonner";
import { useQuery } from "react-query";
import { RestaurantSearch } from "@/types";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Search restaurants
 * @description Search restaurants by city name using the API endpoint /api/restaurant/search/{city} and returns the data in the form of a list of restaurants.
 */
export const useSearchRestaurants = (city?: string) => {
  const createSearchRequest = async (): Promise<RestaurantSearch> => {
    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurants");
    }

    return response.json();
  };

  const { data: restaurants, isLoading } = useQuery(
    "searchRestaurants",
    createSearchRequest,
    {
      enabled: !!city,
      onError: () => {
        toast.error("Failed to get restaurants. Please try again later.");
      },
    }
  );

  return { restaurants, isLoading };
};
