import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "@/api/RestaurantApi";

import Loader from "@/components/Loader";
import SearchResultInfo from "@/components/SearchResultInfo";
import SearchResultCard from "@/components/SearchResultCard";
import SearchBar from "@/components/SearchBar";

const SearchPage = () => {
  const { city } = useParams();
  const { isLoading, restaurants } = useSearchRestaurants(city);

  const handleSearchSubmit = () => {};

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
          onSubmit={handleSearchSubmit}
          placeholder="Search by Cuisine or Restaurant"
        />

        <SearchResultInfo total={restaurants.pagination.total} city={city} />

        {restaurants.data.map((restaurant) => (
          <SearchResultCard restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
