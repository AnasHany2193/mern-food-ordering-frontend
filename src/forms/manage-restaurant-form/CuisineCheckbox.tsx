import { Checkbox } from "@/components/ui/checkbox";
import { ControllerRenderProps, FieldValues } from "react-hook-form";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";

type Prop = {
  cuisine: {
    id: string;
    label: string;
  };
  field: ControllerRenderProps<FieldValues, "cuisines">;
};

function CuisineCheckbox({ cuisine, field }: Prop) {
  return (
    <FormItem className="flex flex-row items-center mt-0 space-x-1 space-y-0">
      <FormControl>
        <Checkbox
          className="bg-white"
          checked={field.value.includes(cuisine.id)}
          onCheckedChange={(checked) => {
            return checked
              ? field.onChange([...field.value, cuisine.id])
              : field.onChange(
                  field.value.filter((value: string) => value !== cuisine.id)
                );
          }}
        />
      </FormControl>
      <FormLabel className="text-sm font-normal">{cuisine.label}</FormLabel>
    </FormItem>
  );
}

export default CuisineCheckbox;
