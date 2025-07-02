import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto flex overflow-x-auto gap-4 py-4 px-2 custom-scroll">
      {data?.map((item: IGenre) => (
        <div
          key={item.id}
          className="px-4 py-2 whitespace-nowrap rounded-full border border-gray-300 dark:border-gray-700 bg-gray-100 dark:bg-[#1a1a1a] text-gray-800 dark:text-white text-sm font-medium hover:bg-[#C61F1F] hover:text-white dark:hover:bg-[#C61F1F] cursor-pointer transition-colors duration-200"
        >
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Genre);
