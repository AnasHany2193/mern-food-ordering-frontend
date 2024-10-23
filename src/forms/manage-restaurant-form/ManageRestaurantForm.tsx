import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import MenuSection from "./MenuSection";
import ImageSection from "./ImageSection";
import DetailsSection from "./DetailsSection";
import CuisinesSection from "./CuisinesSection";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import LoadingButton from "@/components/LoadingButton";

const formSchema = z.object({
  restaurantName: z.string({ required_error: "Restaurant name is required" }),
  city: z.string({ required_error: "City is required" }),
  country: z.string({ required_error: "Country is required" }),
  deliveryPrice: z.coerce.number({
    required_error: "Delivery price is required",
    invalid_type_error: "Delivery price must be a number",
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: "Estimated delivery time is required",
    invalid_type_error: "Estimated delivery time must be a number",
  }),
  cuisines: z
    .array(z.string())
    .nonempty({ message: "Please select at least one cuisine" }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, "Name is required"),
      price: z.coerce.number().min(1, "Price is required"),
    })
  ),
  imageFile: z.instanceof(File, { message: "Image file is required" }),
});

type restaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: FormData) => void;
  isLoading: boolean;
};

function ManageRestaurantForm({ onSave, isLoading }: Props) {
  // 1. Define your form.
  const form = useForm<restaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [
        {
          name: "",
          price: 0,
        },
      ],
      imageFile: undefined,
    },
  });

  const onsubmit = (formDataJson: restaurantFormData) => {
    // TODO: convert formDataJson to a new formData object
    console.log(formDataJson);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onsubmit)}
        className="p-10 space-y-8 rounded-lg bg-gray-50"
      >
        <DetailsSection />
        <Separator />

        <CuisinesSection />
        <Separator />

        <MenuSection />
        <Separator />

        <ImageSection />

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Create
          </Button>
        )}
      </form>
    </Form>
  );
}

export default ManageRestaurantForm;
