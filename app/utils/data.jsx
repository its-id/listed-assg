import revenueIcon from "../../public/dashbaord/revenue_icon.svg";
import transactionIcon from "../../public/dashbaord/transaction_black.svg";
import thumbsUpIcon from "../../public/dashbaord/thumbsup_icon.svg";
import usersIcon from "../../public/dashbaord/users_icon.svg";

import dashboardIcon from "../../public/dashbaord/dashboard_icon.svg";
import transactionsIcon from "../../public/dashbaord/transaction_icon.svg";
import scheduleIcon from "../../public/dashbaord/schedule_icon.svg";
import userIcon from "../../public/dashbaord/user_icon.svg";
import settingsIcon from "../../public/dashbaord/setting_icon.svg";

export const cardsData = [
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

export const sidebarNavigation = [
  { name: "Dashboard", href: "#", icon: dashboardIcon, current: true },
  { name: "Transactions", href: "#", icon: transactionsIcon, current: false },
  { name: "Schedules", href: "#", icon: scheduleIcon, current: false },
  { name: "Users", href: "#", icon: userIcon, current: false },
  { name: "Settings", href: "#", icon: settingsIcon, current: false },
];

export const chartData = [
  {
    name: "Week 1",
    uv: 1400,
    pv: 2000,
    amt: 2400,
  },
  {
    name: "Week 2",
    uv: 5000,
    pv: 4000,
    amt: 2290,
  },
  {
    name: "Week 3",
    uv: 2080,
    pv: 2508,
    amt: 2000,
  },
  {
    name: "Week 4",
    uv: 3990,
    pv: 4500,
    amt: 2181,
  },
  {
    name: "Week 5",
    uv: 2490,
    pv: 1800,
    amt: 2500,
  },
  {
    name: "Week 6",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export const sampleNavigation = [
  { name: "Menu 1", href: "#" },
  { name: "Menu 2", href: "#" },
  { name: "Menu 3", href: "#" },
];
