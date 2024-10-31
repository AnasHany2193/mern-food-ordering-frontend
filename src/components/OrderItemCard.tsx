import { useEffect, useState } from "react";
import { Order, OrderStatus } from "@/types";

import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";

import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from "./ui/select";

type Props = {
  order: Order;
};

/**
 * Order Item Card Component
 * @description This component displays the order item card with the order details and status change options. It also handles the order status change.
 */
const OrderItemCard = ({ order }: Props) => {
  const [status, setStatus] = useState<OrderStatus>(order.status);

  const { isLoading, updateMyRestaurantOrderStatus } =
    useUpdateMyRestaurantOrder();

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleOrderStatusChange = async (newStatus: OrderStatus) => {
    await updateMyRestaurantOrderStatus({
      orderId: order._id as string,
      status: newStatus,
    });

    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const paddedHours = hours < 10 ? "0" + hours : hours;

    return `${paddedHours}:${paddedMinutes}`;
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="grid justify-between gap-4 mb-3 md:grid-cols-4">
          <div className="">
            Customer name:
            <span className="ml-2 font-normal">
              {order.deliveryDetails.name}
            </span>
          </div>
          <div className="">
            Delivery address:
            <span className="ml-2 font-normal">
              {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
            </span>
          </div>
          <div className="">
            Time:
            <span className="ml-2 font-normal">{getTime()}</span>
          </div>
          <div className="">
            Total Cost:
            <span className="ml-2 font-normal">
              £ {(order.totalAmount / 100).toFixed(2)}
            </span>
          </div>
        </CardTitle>
        <Separator />
      </CardHeader>

      <CardContent className="flex flex-col gap-6">
        <div className="grid gap-2 md:grid-cols-2">
          {order.cartItems.map((cartItem) => (
            <span key={cartItem.menuItemId}>
              <Badge variant="outline" className="mr-2">
                {cartItem.quantity}
              </Badge>
              {cartItem.name}
            </span>
          ))}
        </div>

        <div className="flex flex-col space-y-1.5">
          <Label htmlFor="status">What is the status of this order?</Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) =>
              handleOrderStatusChange(value as OrderStatus)
            }
          >
            <SelectTrigger id="status">
              <SelectValue placeholder="Status" />
            </SelectTrigger>

            <SelectContent position="popper">
              {ORDER_STATUS.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
