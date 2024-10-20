import SearchBar from "@/components/SearchBar";

import landingImage from "@/assets/landing.png";
import appDownload from "@/assets/appDownload.png";

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col gap-12 mx-10">
        <div className="flex flex-col gap-5 py-8 -mt-16 text-center bg-white rounded-lg shadow-md">
          <h1 className="text-5xl font-bold tracking-tight text-orange-500">
            Tuck into a takeaway today
          </h1>
          <span className="text-xl">Food is just a click away!</span>
          <SearchBar />
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
    </>
  );
};

export default HomePage;
