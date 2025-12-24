import { Link } from "react-router-dom";
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
  return (
    <div>
      {/* Logo */}
      <span className="flex  items-center gap-2">
        <img className="h-7" src={logo} alt="" />
        <h2 className="font-bold text-lg text-[#343C6A]">Bank Dash.</h2>
      </span>

      <div className="mt-8">
        {navItems.map((item) => (
          <Link to={item?.href}>
            <div className="flex items-center gap-2 py-4 rounded-lg text-gray-400 hover:bg-[#F0F4FF]">
              <span>{item.icon}</span>
              <span>{item.name}</span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
