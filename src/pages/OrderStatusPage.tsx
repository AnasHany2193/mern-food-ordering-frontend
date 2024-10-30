import { PackageX } from "lucide-react";

import { useGetMyOrders } from "@/api/OrderApi";

import { AspectRatio } from "@/components/ui/aspect-ratio";

import Loader from "@/components/Loader";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import OrderStatusDetails from "@/components/OrderStatusDetails";

function OrderStatusPage() {
  const { isLoading, orders } = useGetMyOrders();

  return isLoading ? (
    <Loader screen />
  ) : !orders || orders.length === 0 ? (
    <div className="flex justify-center gap-3">
      <PackageX color="red" />
      <span>No orders available yet!</span>
    </div>
  ) : (
    <div className="mx-8 space-y-10 md:mx-0">
      {orders.map((order) => (
        <div className="p-10 space-y-10 rounded-lg bg-gray-50" key={order._id}>
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetails order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                alt={`${order.restaurant.restaurantName} image`}
                className="object-cover w-full h-full rounded-md"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OrderStatusPage;
