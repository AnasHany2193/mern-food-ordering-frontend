import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import LoadingButton from "@/components/LoadingButton";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormItem,
  FormLabel,
  FormField,
  FormMessage,
  FormControl,
  FormDescription,
} from "@/components/ui/form";

const formSchema = z.object({
  email: z.string().optional(),
  city: z.string().min(2, "City is required"),
  name: z.string().min(2, "Username is required"),
  country: z.string().min(2, "Country is required"),
  addressLine1: z.string().min(2, "Address Line 1 is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
};

/**
 * User Profile Form Component
 * @description  User Profile Form Component that allows users to update their profile information and submit it.
 */
const UserProfileForm = ({ onSave, isLoading }: Props) => {
  // 1. Define your form.
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
  });

  // 2. Use the form.
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-4 rounded-lg bg-gray-50 md:p-10"
      >
        <div className="">
          <h2 className="text-2xl font-bold">User Profile Form</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className="bg-white" />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className="bg-white" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 md:flex-row">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Address Line 1</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white " />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input {...field} className="bg-white " />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type="submit" className="bg-orange-500">
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
