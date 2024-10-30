import { useState } from "react";
import { useParams } from "react-router-dom";
import { UtensilsCrossed } from "lucide-react";
import { useSearchRestaurants } from "@/api/RestaurantApi";

import Loader from "@/components/Loader";
import CuisineFilter from "@/components/CuisineFilter";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultCard from "@/components/SearchResultCard";
import SearchBar, { SearchFrom } from "@/components/SearchBar";
import PaginationSelector from "@/components/PaginationSelector";
import SortOptionDropdown from "@/components/SortOptionDropdown";

export type searchState = {
  page: number;
  sortOption: string;
  searchQuery: string;
  selectedCuisines: string[];
};

/**
 * Search Page component
 * @description Search Page that displays all restaurants in the city based on the search query and filters like cuisine and sort option selected by the user and also allows the user to reset the search query and sort option to default values and select multiple cuisines.
 */
const SearchPage = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  const [searchState, setSearchState] = useState<searchState>({
    page: 1,
    searchQuery: "",
    selectedCuisines: [],
    sortOption: "bestMatch",
  });

  const { city } = useParams();
  const { isLoading, restaurants } = useSearchRestaurants(searchState, city);

  const setSearchQuery = (searchFormData: SearchFrom) =>
    setSearchState((prevState) => ({
      ...prevState,
      searchQuery: searchFormData.searchQuery,
      page: 1,
    }));

  const resetSearch = () =>
    setSearchState((prevState) => ({
      ...prevState,
      page: 1,
      searchQuery: "",
    }));

  const setPage = (page: number) =>
    setSearchState((prevState) => ({
      ...prevState,
      page,
    }));

  const setSelectedCuisines = (selectedCuisines: string[]) =>
    setSearchState((prevState) => ({
      ...prevState,
      page: 1,
      selectedCuisines,
    }));

  const setSortOption = (sortOption: string) =>
    setSearchState((prevState) => ({ ...prevState, sortOption, page: 1 }));

  return isLoading ? (
    <Loader />
  ) : !restaurants?.data || !city ? (
    <div className="flex justify-center gap-3">
      <UtensilsCrossed color="red" />
      <span>No restaurants available</span>
    </div>
  ) : (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-[250px_1fr] mx-8 md:mx-0">
      <div id="cuisines-list" className="">
        <CuisineFilter
          isExpanded={isExpanded}
          onChange={setSelectedCuisines}
          selectedCuisines={searchState.selectedCuisines}
          onExpandedClick={() => setIsExpanded((expand) => !expand)}
        />
      </div>

      <div id="main-content" className="flex flex-col gap-5">
        <SearchBar
          onReset={resetSearch}
          onSubmit={setSearchQuery}
          searchQuery={searchState.searchQuery}
          placeholder="Search by Cuisine or Restaurant"
        />

        <div className="flex flex-col justify-between gap-3 lg:flex-row">
          <SearchResultInfo total={restaurants.pagination.total} city={city} />
          <SortOptionDropdown
            sortOption={searchState.sortOption}
            onChange={(value) => setSortOption(value)}
          />
        </div>

        {restaurants.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} key={restaurant._id} />
        ))}

        <PaginationSelector
          page={restaurants.pagination.page}
          pages={restaurants.pagination.pages}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default SearchPage;
