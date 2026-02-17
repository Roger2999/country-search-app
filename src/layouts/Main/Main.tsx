import { Input } from "@/components/ui/Input";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"main"> {}
export const Main = ({ className, ...props }: Props) => {
  return (
    <main {...props} className={`${className}`}>
      <div className="border-2 border-red-600 px-14 py-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-3">
          <Input
            className="w-100 max-w-full"
            placeholder="Search for a country..."
          />
          <select name="" id="" className="border-2 border-black w-36">
            <option value="1">Selecciona</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="grid-container">
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
          <div className="w-20 h-20 bg-gray-900"></div>
        </div>
      </div>
    </main>
  );
};
