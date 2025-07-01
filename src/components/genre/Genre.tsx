import type { IGenre } from "@/types";
import React, { type FC } from "react";

interface Props {
  data: undefined | IGenre[];
}

const Genre: FC<Props> = ({ data }) => {
  return (
    <div className="container mx-auto flex overflow-x-auto gap-6  custom-scroll">
      {data?.map((item: IGenre) => (
        <div className="text-nowrap dark:text-white" key={item.id}>
          {item.name}
        </div>
      ))}
    </div>
  );
};

export default React.memo(Genre);
