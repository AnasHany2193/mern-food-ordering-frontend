import { Trash } from "lucide-react";
import { Restaurant } from "@/types";

import { CartItem } from "@/pages/DetailPage";

import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { CardContent, CardHeader, CardTitle } from "./ui/card";

type Props = {
  cartItems: CartItem[];
  restaurant: Restaurant;
  removeFromCart: (cartItem: CartItem) => void;
};

/**
 * Order Summary component
 * @description This component is used to display the order summary on the restaurant detail page and You can remove items from the cart by clicking on the trash icon.
 */
const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="flex justify-between text-2xl font-bold tracking-tight">
          <p>Your Order</p>
          <p>£{getTotalCost()}</p>
        </CardTitle>
      </CardHeader>

      <CardContent className="flex flex-col gap-5">
        {cartItems.map((cartItem) => (
          <div key={cartItem._id} className="flex justify-between">
            <span>
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
            <span className="flex items-start gap-1">
              <Trash
                size={20}
                color="red"
                className="cursor-pointer"
                onClick={() => removeFromCart(cartItem)}
              />
              £{((cartItem.price * cartItem.quantity) / 100).toFixed(2)}
            </span>
          </div>
        ))}

        <Separator />

        <div className="flex justify-between">
          <span className="">Delivery</span>
          <span className="">
            £{(restaurant.deliveryPrice / 100).toFixed(2)}
          </span>
        </div>

        <Separator />
      </CardContent>
    </>
  );
};

export default OrderSummary;
