"use client";
import { Link, useLocation, useNavigation } from "react-router-dom";
import logo from "../assets/BankDash logo.png";
import {
  BadgeCent,
  BadgeDollarSign,
  ChartNoAxesCombined,
  CreditCard,
  House,
  Lightbulb,
  Settings,
  UserRound,
  Wrench,
} from "lucide-react";
export default function Sidebar() {
  const navItems = [
    { name: "Dashboard", link: "/", icon: <House /> },
    { name: "Transactions", link: "/transactions", icon: <BadgeDollarSign /> },
    { name: "Accounts", link: "/accounts", icon: <UserRound /> },
    {
      name: "Investments",
      link: "/investments",
      icon: <ChartNoAxesCombined />,
    },
    { name: "Credit Cards", link: "/credit-cards", icon: <CreditCard /> },
    { name: "Loans", link: "/loans", icon: <BadgeCent /> },
    { name: "Services", link: "/services", icon: <Wrench /> },
    { name: "My Previledges", link: "/my-previledges", icon: <Lightbulb /> },
    { name: "Settings", link: "/settings", icon: <Settings /> },
  ];

  const path = useLocation()?.pathname;

  return (
    <div>
      {/* Logo */}
      <span className="flex py-6 px-5  h-full w-full border-r border-[#E6EFF5] items-center gap-2">
        <img className="h-7" src={logo} alt="" />
        <h2 className="font-bold text-lg text-[#343C6A]">Bank Dash.</h2>
      </span>

      <div className="mt-8 flex flex-col gap-3">
        {navItems.map((item) => (
          <Link
            className={`${path === item?.href && "border"}`}
            to={item?.href}
          >
            <div
              className={`flex items-center px-5 gap-2 py-4   hover:bg-[#F0F4FF] ${
                item?.link === path &&
                "border-l-4 border-[#2D60FF] text-[#2D60FF] font-medium "
              }`}
            >
              <span>{item.icon}</span>
              <span className="text-sm">{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
