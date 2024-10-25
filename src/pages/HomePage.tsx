import { useNavigate } from "react-router-dom";
import SearchBar, { SearchFrom } from "@/components/SearchBar";

import landingImage from "@/assets/landing.png";
import appDownload from "@/assets/appDownload.png";

/**
 * Home Page component
 * @description This is the landing page of the app that allows users to search for restaurants and view their menu and order history.
 */
const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchFrom) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12 mx-5">
      <div className="flex flex-col gap-5 px-5 py-8 -mt-16 text-center bg-white rounded-lg shadow-md md:px-32">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeaway today
        </h1>
        <span className="text-xl">Food is just a click away!</span>
        <SearchBar
          onSubmit={handleSearchSubmit}
          placeholder="Search By City or Town"
        />
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <img src={landingImage} alt="landing-image" className="rounded-3xl" />

        <div className="flex flex-col justify-center gap-4 text-center">
          <span className="text-3xl font-bold tracking-tight">
            Order takeaway even faster
          </span>
          <span className="px-2 text-lg">
            Download the MernEats App for faster ordering and personalized
            recommendations
          </span>
          <img
            src={appDownload}
            alt="app-download"
            width={180}
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
