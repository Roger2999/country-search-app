import { Input } from "@/components/ui/Input";
import type { ComponentProps } from "react";
import style from "./Main.module.css";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
type Props = ComponentProps<"main">;
export const Main = ({ className, ...props }: Props) => {
  return (
    <main {...props} className={`${className}`}>
      <div className="flex flex-col gap-5 sm:flex-row sm:justify-between sm:gap-3 h-14">
        <div className="relative">
          <img
            src="/vite.svg"
            alt=""
            className="absolute left-5 top-5 size-5"
          />
          <Input
            className="w-100 max-w-full h-full pl-16"
            placeholder="Search for a country..."
          />
        </div>
        <Select>
          <SelectTrigger className="w-full max-w-48 min-h-full pl-6">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent position="popper" align="center">
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={`${style.girdContainer}`}>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
        <div className="w-full h-52 bg-gray-900"></div>
      </div>
    </main>
  );
};
