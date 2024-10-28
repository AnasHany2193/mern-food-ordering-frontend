import { Dot } from "lucide-react";
import { Restaurant } from "@/types";
import {
  Card,
  CardTitle,
  CardHeader,
  CardContent,
  CardDescription,
} from "./ui/card";

type Props = {
  restaurant: Restaurant;
};

/**
 * Restaurant Information Component
 * @description That displays the restaurant information as a card with the restaurant name, city, and country. Also, it displays the cuisines of the restaurant.
 */

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border-sla">
      <CardHeader>
        <CardTitle className="text-3xl font-bold tracking-tight">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription>
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex">
        {restaurant.cuisines.map((cuisine, i) => (
          <span className="flex" key={i}>
            <span>{cuisine}</span>
            {i < restaurant.cuisines.length - 1 && <Dot />}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
