import { Link } from "react-router-dom";

type Props = {
  city: string;
  total: number;
};

/**
 * Search Result Information
 * @description Search Result that displays the total number of restaurants found in a specific city and a link to change location if needed.
 */
const SearchResultInfo = ({ city, total }: Props) => {
  return (
    <span className="text-xl font-bold lg:items-center">
      {total} Restaurants found in {city}
      <Link
        to="/"
        className="ml-1 text-sm font-semibold text-blue-500 underline cursor-pointer"
      >
        Change Location
      </Link>
    </span>
  );
};

export default SearchResultInfo;
