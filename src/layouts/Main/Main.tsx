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
      <div className="flex flex-col gap-5 h-14 sm:flex-row sm:justify-between sm:gap-3">
        <div className="relative min-h-full">
          <img
            src="/vite.svg"
            alt=""
            className="absolute left-5 top-5 size-5"
          />
          <Input
            className="w-100 max-w-full h-full pl-16 bg-input shadow-xl"
            placeholder="Search for a country..."
          />
        </div>
        <Select>
          <SelectTrigger className="w-full max-w-48 h-full pl-6 bg-select shadow-xl">
            <SelectValue placeholder="Filter by Region" />
          </SelectTrigger>
          <SelectContent
            position="popper"
            align="center"
            className="bg-select-options"
          >
            <SelectItem value="apple">Apple</SelectItem>
            <SelectItem value="banana">Banana</SelectItem>
            <SelectItem value="blueberry">Blueberry</SelectItem>
            <SelectItem value="grapes">Grapes</SelectItem>
            <SelectItem value="pineapple">Pineapple</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className={`${style.girdContainer}`}>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
        <div className="w-full h-52 bg-background-secondary border-2 border-gray-400"></div>
      </div>
    </main>
  );
};
