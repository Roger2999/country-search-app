import { Input } from "@/components/ui/Input";
import type { ComponentProps } from "react";

interface Props extends ComponentProps<"main"> {}
export const Main = ({ className, ...props }: Props) => {
  return (
    <main {...props} className={`${className}`}>
      <div className="border-2 border-red-600 p-10">
        <div className="">
          <Input
            className="w-100 max-w-md"
            placeholder="Search for a country..."
          />
        </div>
        <div className="grid-container"></div>
      </div>
    </main>
  );
};
