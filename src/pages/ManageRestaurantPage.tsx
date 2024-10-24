import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from "@/api/MyRestaurantApi";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

function ManageRestaurantPage() {
  const { getRestaurant } = useGetMyRestaurant();
  const { isLoading: isCreating, createRestaurant } = useCreateMyRestaurant();

  return (
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
          onSave={createRestaurant}
          restaurant={getRestaurant}
          isLoading={isCreating}
        />
      </TabsContent>
    </Tabs>
  );
}

export default ManageRestaurantPage;
