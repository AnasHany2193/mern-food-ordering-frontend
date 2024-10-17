import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  searchQuery: z.string().min(3, {
    message: "Username must be at least 3 characters.",
  }),
});

const SearchBar = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex flex-row items-center justify-between gap-3 p-3 border-2 rounded-full ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search strokeWidth={2.5} size={30} className="ml-1 text-orange-500 " />

        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  placeholder="Search By City or Town"
                  {...field}
                  className="text-xl border-none shadow-none focus-visible:ring-0"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="button" variant="outline" className="rounded-full">
          Reset
        </Button>
        <Button type="submit" className="bg-orange-500 rounded-full">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
