import { Link } from "react-router-dom";

type Props = {
  city: string;
  total: number;
};

const SearchResultInfo = ({ city, total }: Props) => {
  return (
    <div className="flex flex-col justify-between gap-3 text-xl font-bold lg:items-center lg:flex-row">
      <span>
        {total} Restaurants found in {city}
        <Link
          to="/"
          className="ml-1 text-sm font-semibold text-blue-500 underline cursor-pointer"
        >
          Change Location
        </Link>
      </span>
      Insert Sort DorpDown Here :)
    </div>
  );
};

export default SearchResultInfo;
