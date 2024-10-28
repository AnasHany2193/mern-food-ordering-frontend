import { MenuItem as MenuItemType } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {
  menuItem: MenuItemType;
  addToCart: () => void;
};

/**
 * Menu Item Component
 * @description This component renders a menu item card with a name and price as well as a button to add the item to the cart.
 */
const MenuItem = ({ menuItem, addToCart }: Props) => {
  return (
    <Card className="cursor-pointer" onClick={addToCart}>
      <CardHeader>
        <CardTitle>{menuItem.name}</CardTitle>
      </CardHeader>
      <CardContent className="font-bold">
        £{(menuItem.price / 100).toFixed(2)}
      </CardContent>
    </Card>
  );
};

export default MenuItem;
