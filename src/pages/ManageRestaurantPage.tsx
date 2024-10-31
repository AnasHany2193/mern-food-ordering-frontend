import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

import Loader from "@/components/Loader";
import OrderItemCard from "@/components/OrderItemCard";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";

/**
 * Manage Restaurant Page
 * @description This page is used to create and manage a restaurant or update the restaurant information. This page is only accessible to the restaurant owner.
 */
function ManageRestaurantPage() {
  const { orders } = useGetMyRestaurantOrders();
  const { isLoading: isGettingRestaurant, restaurant } = useGetMyRestaurant();
  const { isLoading: isCreating, createRestaurant } = useCreateMyRestaurant();
  const { isLoading: isUpdating, updateRestaurant } = useUpdateMyRestaurant();

  const isEditing = !!restaurant;

  return isGettingRestaurant ? (
    <Loader />
  ) : (
    <Tabs defaultValue="orders" className="mx-8 md:mx-0">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>

      <TabsContent
        value="orders"
        className="p-10 space-y-5 rounded-lg bg-gray-50"
      >
        <h2 className="text-2xl font-bold">{orders?.length} active orders</h2>
        {orders?.map((order) => (
          <OrderItemCard order={order} key={order._id} />
        ))}
      </TabsContent>

      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={restaurant}
          isLoading={isCreating || isUpdating}
          onSave={isEditing ? updateRestaurant : createRestaurant}
        />
      </TabsContent>
    </Tabs>
  );
}

export default ManageRestaurantPage;
