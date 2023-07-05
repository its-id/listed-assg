"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

import { useState } from "react";

import Navbar from "../components/Dashboard/Navbar";
import Sidebar from "../components/Dashboard/Sidebar";
import Layout from "../components/Dashboard/Main/Layout";
// import { BellIcon, CalendarIcon, ChartBarIcon, FolderIcon, HomeIcon, InboxIcon, MenuAlt2Icon, UsersIcon, XIcon } from "@heroicons/react/outline";
// import { SearchIcon } from "@heroicons/react/solid";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin?callbackUrl=/dashboard");
    },
  }); //client side

  return (
    <>
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="md:pl-64 flex flex-col">
        <Navbar session={session} />
        <main className="flex-1">
          <Layout />
        </main>
      </div>
      {/* <p className="mt-4">{session?.user?.name}</p> */}
    </>
  );
};

export default Dashboard;
