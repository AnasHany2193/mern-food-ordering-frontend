import { useState } from "react";
import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "@/api/RestaurantApi";

import Loader from "@/components/Loader";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultCard from "@/components/SearchResultCard";
import SearchBar, { SearchFrom } from "@/components/SearchBar";

export type searchState = {
  page: string;
  sortOption: string;
  searchQuery: string;
  selectedCuisines: string[];
};

const SearchPage = () => {
  const [searchState, setSearchState] = useState<searchState>({
    page: "1",
    searchQuery: "",
    selectedCuisines: [],
    sortOption: "lastUpdated",
  });

  const { city } = useParams();
  const { isLoading, restaurants } = useSearchRestaurants(searchState, city);

  const setSearchQuery = (searchFormData: SearchFrom) => {
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
    }));
  };

  const resetSearch = () => {
    setSearchState((prevState) => ({
      ...prevState,
      page: "1",
      searchQuery: "",
      selectedCuisines: [],
      sortOption: "lastUpdated",
    }));
  };

  return isLoading ? (
    <Loader />
  ) : !restaurants?.data || !city ? (
    <span className="text-2xl font-bold text-center text-gray-500 text-opacity-50 ">
      No restaurants founded!
    </span>
  ) : (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[250px_1fr]">
      <div id="cuisines-list" className="">
        <span>Insert cuisine here :)</span>
      </div>
      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          onReset={resetSearch}
          onSubmit={setSearchQuery}
          searchQuery={searchState.searchQuery}
          placeholder="Search by Cuisine or Restaurant"
        />

        <SearchResultInfo total={restaurants.pagination.total} city={city} />

        {restaurants.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} key={restaurant._id} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
