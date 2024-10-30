import { useGetMyOrders } from "@/api/OrderApi";
import Loader from "@/components/Loader";
import OrderStatusDetails from "@/components/OrderStatusDetails";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";

function OrderStatusPage() {
  const { isLoading, orders } = useGetMyOrders();

  return isLoading ? (
    <Loader screen />
  ) : !orders || orders.length === 0 ? (
    <span className="flex justify-center text-2xl font-bold text-gray-500">
      No orders yet!
    </span>
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
