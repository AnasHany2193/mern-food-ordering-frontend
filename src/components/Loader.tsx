import { Loader2 } from "lucide-react";

/**
 * Loader component
 * @description Loader component that is used to show the loading state of the application while the data is being fetched
 */
const Loader = () => {
  return (
    <div className="flex items-center justify-center ">
      <Loader2 className="w-10 h-10 text-orange-500 animate-spin" />
    </div>
  );
};

export default Loader;
