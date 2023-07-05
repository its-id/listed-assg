import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from "recharts";

import chevronDown from "@/public/dashbaord/chevron-down.svg";
import { sampleNavigation } from "@/app/utils/data";

const data = [
  { name: "Group B", value: 200 },
  { name: "Group A", value: 700 },
  { name: "Group C", value: 300 },
];

const COLORS = ["#EE8484", "#98D89E", "#F6DC7D"];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Info = () => {
  return (
    <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 w-full">
      <div className={"p-8 pb-4 flex flex-col justify-between items-center rounded-2xl bg-white"}>
        <div className="w-full flex mb-4 justify-between items-center">
          <h1 className="text-xl font-bold">Top Products</h1>
          <Menu as="div" className="relative">
            <Menu.Button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              <div className="flex text-sm font-normal tracking-wide items-center gap-2 text-gray-400">
                <span>May - June 2021</span>
                <Image src={chevronDown} alt="arrow-down" />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={
                  "absolute origin-top-right right-0 z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                }
              >
                {sampleNavigation?.map((item, idx) => (
                  <Menu.Item key={idx}>
                    {({ active }) => (
                      <a href={item.href} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-4 md:items-center">
          <div className="w-full md:w-[50%]">
            <ResponsiveContainer width="100%" aspect={1 / 1}>
              <PieChart width={400}>
                <Pie data={data} cx="50%" cy="50%" labelLine={false} outerRadius={80} dataKey="value">
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex gap-3">
              <div className="w-4 h-4 mt-2 rounded-full bg-[#98D89E]"></div>
              <div className="flex flex-col">
                <span className="font-bold">Basic Tees</span>
                <span className="text-sm text-gray-400">55%</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-4 h-4 mt-2 rounded-full bg-[#F6DC7D]"></div>
              <div className="flex flex-col">
                <span className="font-bold">Custom Short Pants</span>
                <span className="text-sm text-gray-400">31%</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="w-4 h-4 mt-2 rounded-full bg-[#EE8484]"></div>
              <div className="flex flex-col">
                <span className="font-bold">Super Hoodies</span>
                <span className="text-sm text-gray-400">14%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={"p-8 pb-4 flex flex-col items-center rounded-2xl bg-white"}>
        <div className="w-full flex mb-8 justify-between items-center">
          <h1 className="text-xl font-bold">Today's Schedule</h1>
          <Menu as="div" className="relative">
            <Menu.Button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              <div className="flex text-sm font-normal tracking-wide items-center gap-2 text-gray-400">
                <span>See All</span>
                <Image src={chevronDown} className="-rotate-90" alt="arrow-down" />
              </div>
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items
                className={
                  "absolute origin-top-right right-0 z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                }
              >
                {sampleNavigation?.map((item, idx) => (
                  <Menu.Item key={idx}>
                    {({ active }) => (
                      <a href={item.href} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                        {item.name}
                      </a>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
        <div className="w-full flex flex-col gap-8">
          <div className="flex gap-3">
            <div className="w-1.5 h-full bg-[#98D89E]"></div>
            <div className="flex flex-col pt-1 pb-2">
              <span className="font-semibold  text-gray-500">Meeting with suppliers from Kuta Bali</span>
              <span className="text-sm text-gray-400">14.00-15.00</span>
              <span className="text-sm text-gray-400">at Sunset Road, Kuta, Bali </span>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="w-1.5 h-full bg-[#6972C3]"></div>
            <div className="flex flex-col pt-1 pb-2">
              <span className="font-semibold text-gray-500">Custom Short Pants</span>
              <span className="text-sm text-gray-400">18.00-20.00</span>
              <span className="text-sm text-gray-400">at Central Jakarta </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
