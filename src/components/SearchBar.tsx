import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Search } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormItem, FormField, FormControl } from "@/components/ui/form";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant Name is required.",
  }),
});

export type SearchFrom = z.infer<typeof formSchema>;

type Props = {
  placeholder: string;
  onReset?: () => void;
  searchQuery?: string;
  onSubmit: (formData: SearchFrom) => void;
};

/**
 * Search Bar Component
 * @description Search Bar Component that uses react-hook-form to validate and submit the form.
 */
const SearchBar = ({ onReset, onSubmit, searchQuery, placeholder }: Props) => {
  // 01. Define your form.
  const form = useForm<SearchFrom>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) onReset();
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex flex-1 items-center justify-between flex-row gap-3 mx-5 p-3 border-2 rounded-full ${
          form.formState.errors.searchQuery && "border-red-500"
        }`}
      >
        <Search
          size={30}
          strokeWidth={2.5}
          className="hidden ml-1 text-orange-500 md:block"
        />

        <FormField
          name="searchQuery"
          control={form.control}
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  placeholder={placeholder}
                  className="text-xl border-none shadow-none focus-visible:ring-0"
                />
              </FormControl>
            </FormItem>
          )}
        />

        {form.formState.isDirty && (
          <Button
            onClick={handleReset}
            type="button"
            variant="outline"
            className="rounded-full"
          >
            Clear
          </Button>
        )}

        <Button type="submit" className="bg-orange-500 rounded-full">
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
