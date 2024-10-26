import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";
import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import { Loader } from "lucide-react";

/**
 * Manage Restaurant Page
 * @description This page is used to create and manage a restaurant or update the restaurant information. This page is only accessible to the restaurant owner.
 */
function ManageRestaurantPage() {
  const { isLoading: isGetting, getRestaurant } = useGetMyRestaurant();
  const { isLoading: isCreating, createRestaurant } = useCreateMyRestaurant();
  const { isLoading: isUpdating, updateRestaurant } = useUpdateMyRestaurant();

  const isEditing = !!getRestaurant;

  return isGetting ? (
    <Loader />
  ) : (
    <Tabs defaultValue="orders" className="mx-5">
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="p-10 space-y-5 rounded-lg bg-gray-50"
      >
        orders
      </TabsContent>
      <TabsContent value="manage-restaurant">
        <ManageRestaurantForm
          restaurant={getRestaurant}
          isLoading={isCreating || isUpdating}
          onSave={isEditing ? updateRestaurant : createRestaurant}
        />
      </TabsContent>
    </Tabs>
  );
}

export default ManageRestaurantPage;
