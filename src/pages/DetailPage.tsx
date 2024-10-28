import { useParams } from "react-router-dom";

import { useGetRestaurant } from "@/api/RestaurantApi";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Loader from "@/components/Loader";
import MenuItem from "@/components/MenuItem";
import RestaurantInfo from "@/components/RestaurantInfo";

const DetailPage = () => {
  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  return isLoading || !restaurant ? (
    <Loader />
  ) : (
    <div className="flex flex-col gap-10 mx-8 md:mx-0">
      <AspectRatio ratio={16 / 5}>
        <img
          src={restaurant.imageUrl}
          alt={`${restaurant.restaurantName} image`}
          className="object-cover w-full h-full rounded-md"
        />
      </AspectRatio>

      <div className="grid grid-cols-1 md:grid-cols-[4fr_2fr] gap-5 md:px-32">
        <div className="flex flex-col gap-5">
          <RestaurantInfo restaurant={restaurant} />

          <span className="text-2xl font-bold tracking-tight">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItem key={menuItem._id} menuItem={menuItem} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
