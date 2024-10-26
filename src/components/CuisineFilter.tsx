import { cuisineList } from "@/config/restaurant-options-config";
import { Button } from "./ui/button";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";

type Props = {
  onChange: (cuisines: string[]) => void;
  onExpandedClick: () => void;
  selectedCuisines: string[];
  isExpanded: boolean;
};

/**
 * Cuisine Filter component
 * @description Cuisine Filter that allows user to select multiple cuisines to filter restaurants (e.g. Italian, Mexican) and reset the filter
 */
const CuisineFilter = ({
  onChange,
  isExpanded,
  onExpandedClick,
  selectedCuisines,
}: Props) => {
  const handleCuisinesReset = () => onChange([]);

  const handleCuisinesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    const clickedCuisine = e.target.value;

    const newCuisineList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisineList);
  };

  return (
    <>
      <div className="flex items-center justify-between px-2">
        <div className="mb-2 text-lg font-semibold">Filter By Cuisine</div>
        <div
          onClick={handleCuisinesReset}
          className="mb-2 text-sm font-semibold text-blue-500 underline cursor-pointer"
        >
          Reset Filter
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine.label);
            return (
              <div className="flex" key={cuisine.id}>
                <input
                  id={`cuisine_${cuisine.id}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine.label}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <label
                  htmlFor={`cuisine_${cuisine.id}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-full px-4 py-2 font-semibold ${
                    isSelected
                      ? "border border-green-600 text-green-600"
                      : "border border-slate-300"
                  }`}
                >
                  {isSelected && <Check size={20} strokeWidth={3} />}
                  {cuisine.label}
                </label>
              </div>
            );
          })}

        <Button
          variant="link"
          className="flex-1 mt-4"
          onClick={onExpandedClick}
        >
          {!isExpanded ? (
            <div className="flex items-center">
              View More <ChevronDown />
            </div>
          ) : (
            <div className="flex items-center">
              View less <ChevronUp />
            </div>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
