import { useParams } from "react-router-dom";

const SearchPage = () => {
  const { city } = useParams();

  return (
    <span>
      <h1 className="mb-10 text-4xl font-bold text-center text-gray-900 ">
        Search Page
      </h1>
      <h2 className="text-2xl font-bold text-center text-gray-500">{city}</h2>
    </span>
  );
};

export default SearchPage;
