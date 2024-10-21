/**
 * Loader component
 * @description Loader component that is used to show loading state when data is being fetched
 */
const Loader = () => {
  return (
    <div className="w-full flex-center">
      <img src="../assets/loader.svg" alt="loader" width={48} height={48} />
    </div>
  );
};

export default Loader;
