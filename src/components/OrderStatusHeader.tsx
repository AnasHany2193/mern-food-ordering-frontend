import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

/**
 * Order Status Header component
 * @description This component renders the order status header with the order status and expected delivery time.
 */
const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours() % 12;
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? "0" + minutes : minutes;
    const paddedHours = hours < 10 ? "0" + hours : hours;

    return `${paddedHours} : ${paddedMinutes} ${hours >= 12 ? "PM" : "AM"}`;
  };

  const getOrderStatusInfo = () =>
    ORDER_STATUS.find((status) => status.value === order.status) ||
    ORDER_STATUS[0];

  return (
    <>
      <h1 className="flex flex-col gap-5 text-2xl font-bold tracking-tight md:text-3xl md:flex-row md:justify-between">
        <span>Order Status: {getOrderStatusInfo().label}</span>
        <span>Expected by: {getExpectedDelivery()}</span>
      </h1>
      <Progress
        className="animate-pulse"
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
