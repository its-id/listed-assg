"use client";

import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";

import dashboardIcon from "../../../public/dashbaord/dashboard_icon.svg";
import transactionsIcon from "../../../public/dashbaord/transaction_icon.svg";
import scheduleIcon from "../../../public/dashbaord/schedule_icon.svg";
import userIcon from "../../../public/dashbaord/user_icon.svg";
import settingsIcon from "../../../public/dashbaord/setting_icon.svg";
import XIcon from "../../../public/dashbaord/XIcon.svg";

const navigation = [
  { name: "Dashboard", href: "#", icon: dashboardIcon, current: true },
  { name: "Transactions", href: "#", icon: transactionsIcon, current: false },
  { name: "Schedules", href: "#", icon: scheduleIcon, current: false },
  { name: "Users", href: "#", icon: userIcon, current: false },
  { name: "Settings", href: "#", icon: settingsIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  return (
    <>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 flex z-40 md:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative flex-1 flex flex-col max-w-xs w-full py-8 bg-black">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <Image src={XIcon} className="h-6 w-6 text-white" aria-hidden="true" alt="XIcon" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 flex items-center px-8">
                <p className="font-montserrat tracking-wide font-bold text-white text-3xl">Board.</p>
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-8 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? "bg-gray-900 text-white" : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "group flex items-center px-2 py-2 text-base font-medium rounded-md"
                      )}
                    >
                      <Image
                        src={item.icon}
                        className={classNames(
                          item.current ? "text-gray-300" : "text-gray-400 group-hover:text-gray-300",
                          "mr-4 flex-shrink-0 h-3 w-3"
                        )}
                        alt="item-icon"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14" aria-hidden="true">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-56 md:flex-col md:fixed md:left-5 md:top-5 md:bottom-5">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex-1 flex flex-col min-h-0 px-4 bg-black rounded-3xl justify-between">
          <div className="flex flex-col">
            <div className="flex items-center px-4 w-full md:py-8">
              <p className="font-montserrat tracking-wide font-bold text-white text-3xl">Board.</p>
            </div>
            <div className="flex-1 flex flex-col overflow-y-auto">
              <nav className="flex-1 px-2 py-4 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={classNames(
                      item.current ? "text-white font-medium" : "text-gray-400 hover:text-white",
                      "group flex items-center px-2 py-2 text-md rounded-md bg-black"
                    )}
                  >
                    <Image
                      src={item.icon}
                      className={classNames(item.current ? "text-gray-300" : "text-gray-500 group-hover:text-gray-300", "mr-3 flex-shrink-0")}
                      aria-hidden="true"
                    />
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>
          </div>
          <div className="flex flex-col text-sm mb-5 px-4">
            <a href="#" className="flex items-center px-2 mb-2 text-gray-400 hover:text-white">
              Help
            </a>
            <a href="#" className="flex items-center px-2 text-gray-400 hover:text-white">
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
