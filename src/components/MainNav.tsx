import { Button } from "./ui/button";

const MainNav = () => {
  return (
    <div>
      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Register
      </Button>
      <Button
        variant="ghost"
        className="font-bold hover:text-orange-500 hover:bg-white"
      >
        Log In
      </Button>
    </div>
  );
};

export default MainNav;
