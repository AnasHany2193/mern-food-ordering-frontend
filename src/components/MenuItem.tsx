import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MenuItem as MenuItemType } from "@/types";

type Props = {
  menuItem: MenuItemType;
};

/**
 * Menu Item Component
 * @description That component is used to render a single menu item as a card component with a name and a price
 */
const MenuItem = ({ menuItem }: Props) => {
  return (
    <Card className="cursor-pointer border-sla">
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
