import { toast } from "sonner";
import { useQuery } from "react-query";
import { RestaurantSearch } from "@/types";
import { searchState } from "@/pages/SearchPage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

/**
 * Search restaurants
 * @description Search restaurants by city name using the API endpoint /api/restaurant/search/{city} and returns the data in the form of a list of restaurants.
 */
export const useSearchRestaurants = (
  searchState: searchState,
  city?: string
) => {
  const createSearchRequest = async (): Promise<RestaurantSearch> => {
    const params = new URLSearchParams();
    params.set("page", searchState.page.toString());
    // params.set("sortOption", searchState.sortOption);
    params.set("searchQuery", searchState.searchQuery);
    params.set("selectedCuisines", searchState.selectedCuisines.join(","));

    const response = await fetch(
      `${API_BASE_URL}/api/restaurant/search/${city}?${params.toString()}`
    );

    if (!response.ok) {
      throw new Error("Failed to get restaurants");
    }

    return response.json();
  };

  const { data: restaurants, isLoading } = useQuery(
    ["searchRestaurants", searchState],
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
