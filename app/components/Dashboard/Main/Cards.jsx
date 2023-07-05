import Image from "next/image";

import revenueIcon from "../../../../public/dashbaord/revenue_icon.svg";
import transactionIcon from "../../../../public/dashbaord/transaction_black.svg";
import thumbsUpIcon from "../../../../public/dashbaord/thumbsup_icon.svg";
import usersIcon from "../../../../public/dashbaord/users_icon.svg";

const data = [
  {
    title: "Total Revenues",
    value: "$ 2,129,430",
    icon: revenueIcon,
    bgColor: "#DDEFE0",
  },
  {
    title: "Total Transactions",
    value: "1,520",
    icon: transactionIcon,
    bgColor: "#F4ECDD",
  },
  {
    title: "Total Likes",
    value: "9,721",
    icon: thumbsUpIcon,
    bgColor: "#EFDADA",
  },
  {
    title: "Total Users",
    value: "892",
    icon: usersIcon,
    bgColor: "#DEE0EF",
  },
];

const Cards = () => {
  return (
    <div className="mt-1 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 w-full">
      {data?.map((item, idx) => {
        return (
          <div className={"px-8 md:px-6 pb-8 flex justify-between items-center rounded-xl"} style={{ backgroundColor: item.bgColor }} key={idx}>
            <div className="flex flex-col flex-1 pt-8">
              <p className="text-lg md:text-base font-light text-black">{item?.title}</p>
              <p className="text-2xl md:text-xl font-bold text-black">{item?.value}</p>
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
