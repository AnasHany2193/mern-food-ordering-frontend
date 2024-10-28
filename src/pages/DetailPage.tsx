import { useState } from "react";
import { useParams } from "react-router-dom";
import { MenuItem as MenuItemType } from "@/types";

import { useGetRestaurant } from "@/api/RestaurantApi";

import { Card } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

import Loader from "@/components/Loader";
import MenuItem from "@/components/MenuItem";
import OrderSummary from "@/components/OrderSummary";
import RestaurantInfo from "@/components/RestaurantInfo";

export type CartItem = {
  _id: string;
  name: string;
  price: number;
  quantity: number;
};

const DetailPage = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const { restaurantId } = useParams();
  const { restaurant, isLoading } = useGetRestaurant(restaurantId);

  const addToCart = (menuItem: MenuItemType) => {
    setCartItems((prevCartItem) => {
      // 01. Check if the item is already in the cart
      const isItemInCart = prevCartItem.find(
        (item) => item._id === menuItem._id
      );

      return isItemInCart
        ? // 02. if already in the cart, increase the quantity by 1
          prevCartItem.map((item) =>
            item._id === menuItem._id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : // 03. if not in the cart, add the item to the cart
          [...prevCartItem, { ...menuItem, quantity: 1 }];
    });
  };

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
        <div className="flex flex-col gap-4">
          <RestaurantInfo restaurant={restaurant} />

          <span className="text-2xl font-bold tracking-tight">Menu</span>
          {restaurant.menuItems.map((menuItem) => (
            <MenuItem
              key={menuItem._id}
              menuItem={menuItem}
              addToCart={() => addToCart(menuItem)}
            />
          ))}
        </div>

        <div className="">
          <Card>
            <OrderSummary restaurant={restaurant} cartItems={cartItems} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
