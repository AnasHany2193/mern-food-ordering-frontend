import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

function ManageRestaurantPage() {
  const isLoading = false;
  const onSave = () => {
    console.log("save");
  };
  return (
    <Tabs defaultValue="orders">
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
        <ManageRestaurantForm onSave={onSave} isLoading={isLoading} />
      </TabsContent>
    </Tabs>
  );
}

export default ManageRestaurantPage;
