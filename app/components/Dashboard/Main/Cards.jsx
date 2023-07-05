import Image from "next/image";

import { cardsData } from "../../../utils/data";

const Cards = () => {
  return (
    <div className="mt-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
      {cardsData?.map((item, idx) => {
        return (
          <div
            className={"px-8 md:px-6 pb-8 md:pb-4 flex justify-between items-center rounded-2xl"}
            style={{ backgroundColor: item.bgColor }}
            key={idx}
          >
            <div className="flex flex-col flex-1 pt-8 md:pt-12">
              <p className="text-lg md:text-base font-light text-black">{item?.title}</p>
              <p className="text-2xl md:text-2xl font-bold text-black">{item?.value}</p>
            </div>
            <div className="pt-8 sm:pt-0 sm:mt-4 md:self-start max-w-fit">
              <Image src={item?.icon} alt="icon" className="h-12 w-12 sm:h-auto sm:w-auto" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
