import { useParams } from "react-router-dom";
import { useSearchRestaurants } from "@/api/RestaurantApi";

import Loader from "@/components/Loader";

const SearchPage = () => {
  const { city } = useParams();
  const { isLoading, restaurants } = useSearchRestaurants(city);

  if (isLoading) return <Loader />;

  const data = restaurants?.data;
  console.log({ data });

  return (
    <span>
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-900 ">
        Search Page
      </h1>
      <ul className="text-2xl font-bold text-center text-gray-500">
        {restaurants?.data.map((restaurant, i) => (
          <li key={i}>{restaurant.restaurantName}</li>
        ))}
      </ul>
    </span>
  );
};

export default SearchPage;
