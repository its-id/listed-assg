"use client";

import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

import chevronDown from "@/public/dashbaord/chevron-down.svg";
import { chartData, sampleNavigation } from "@/app/utils/data";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Charts = () => {
  return (
    <div className="mt-12 w-full rounded-2xl bg-white p-8">
      <div className="w-full flex mb-8 justify-between items-center">
        <div className="flex-1 flex flex-col">
          <h1 className="text-xl font-bold">Activities</h1>
          <Menu as="div" className="relative">
            <Menu.Button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600">
              <div className="flex text-md items-center gap-2 text-gray-300">
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
                  "absolute origin-top-right z-10 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
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
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 justify-between text-sm md:text-base">
          <div className="flex items-center gap-3">
            <div className="w-4 h-4 ml-2 rounded-full bg-[#E9A0A0]"></div>
            <span>Guest</span>
          </div>
          <div className="flex items-center gap-3">
            <div className="h-4 w-4 ml-2 rounded-full bg-[#9BDD7C]"></div>
            <span>User</span>
          </div>
        </div>
      </div>
      <ResponsiveContainer width="100%" aspect={2 / 1}>
        <LineChart
          width={500}
          height={300}
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            // left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid horizontal={true} vertical={false} strokeOpacity={0.4} />
          <XAxis dataKey="name" strokeOpacity={0.2} opacity={0.5} />
          <YAxis strokeOpacity={0} opacity={0.5} />
          {/* <Tooltip /> */}
          <Line type="monotone" dataKey="pv" stroke="#E9A0A0" strokeWidth={2.5} dot={false} />
          <Line type="monotone" dataKey="uv" stroke="#9BDD7C" strokeWidth={2.5} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Charts;
