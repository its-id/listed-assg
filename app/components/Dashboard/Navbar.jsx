"use client";

import { signOut } from "next-auth/react";
import Image from "next/image";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import profileIcon from "../../../public/dashbaord/profileIcon.svg";
import bellIcon from "../../../public/dashbaord/bellIcon.svg";
import searchIcon from "../../../public/dashbaord/searchIcon.svg";
import menuIcon from "../../../public/dashbaord/menuIcon.svg";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ session, setSidebarOpen }) => {
  return (
    <div className="sticky top-0 z-10 flex-shrink-0 flex h-16 pt-8">
      <button
        type="button"
        className="px-4 border-r border-gray-200 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
        onClick={() => setSidebarOpen(true)}
      >
        <span className="sr-only">Open sidebar</span>
        <Image src={menuIcon} className="h-6 w-6" alt="menuIcon" />
      </button>
      <div className="flex-1 flex px-4 justify-between">
        <div className="hidden flex-1 px-4 sm:flex items-center">
          <p className="font-montserrat tracking-wide font-bold text-xl">Dashboard</p>
        </div>
        <div className="flex-1 md:flex-0 flex justify-between md:justify-end items-center md:ml-6 rounded-lg">
          <form className="w-[60%] md:w-1/2 flex rounded-lg" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full h-[70%] text-gray-400 focus-within:text-gray-600 rounded-lg bg-white">
              <div className="absolute inset-y-0 right-0 mr-2 flex items-center pointer-events-none">
                <Image src={searchIcon} alt="searchIcon" />
              </div>
              <input
                id="search-field"
                className="block w-full h-full pr-3 py-2 rounded-lg border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>

          <div className="mx-4 flex items-center md:mx-6">
            <button
              type="button"
              className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">View notifications</span>
              <Image src={bellIcon} alt="bell-icon" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="ml-3 relative">
              <div>
                <Menu.Button className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                  <span className="sr-only">Open user menu</span>
                  <Image className="h-8 w-8 rounded-full" src={profileIcon} alt="" />
                </Menu.Button>
              </div>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <Menu.Item>
                    <button disabled className="block px-4 py-2 text-sm text-gray-700 border-b border-gray-300 w-full text-left">
                      {session?.user?.name}
                    </button>
                  </Menu.Item>

                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a href={item.href} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                  <Menu.Item>
                    {({ active }) => (
                      <button
                        onClick={() => signOut()}
                        className={classNames(active ? "bg-gray-100" : "", "text-left w-full block px-4 py-2 text-sm text-gray-700")}
                      >
                        Sign out
                      </button>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
