import { Loader2 } from "lucide-react";

/**
 * Loader component
 * @description Loader component that is used to show the loading state of the application while the data is being fetched
 */
const Loader = ({ screen = false }: { screen?: boolean }) => {
  return (
    <div className={`flex items-center justify-center ${screen && "h-screen"}`}>
      <Loader2 className="items-center justify-center w-10 h-10 text-orange-500 animate-spin" />
    </div>
  );
};

export default Loader;
