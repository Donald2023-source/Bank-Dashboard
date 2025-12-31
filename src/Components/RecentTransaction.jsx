import { Wallet } from "lucide-react";
import img1 from "../assets/Finance.png";
import img2 from "../assets/Paypal.png";
import img3 from "../assets/Dolar.png";
export default function RecentTransaction() {
  const recentTransactions = [
    {
      name: "Deposit from my Card",
      date: "28 January 2021",
      price: "-$850",
      icon: img1,
      bg: "#FFF5D9",
    },
    {
      name: "Deposit Paypal",
      date: "25 January 2021",
      price: "+ $2,850",
      icon: img2,
      bg: "#E7EDFF",
    },
    {
      name: "Jemi Wilson",
      date: "28 January 2021",
      price: "+$5,400",
      icon: img3,
      bg: "#DCFAF8",
    },
  ];
  return (
    <div className="w-full">
      <h4 className="text-lg py-3 md:py-5 font-semibold text-[#343C6A]">
        Recent Transactions
      </h4>

      <div className="flex flex-col bg-white p-3 rounded-xl gap-8 md:gap-3">
        {recentTransactions.map((item, idx) => (
          <div className="flex items-center justify-between" key={idx}>
            <div className="flex items-center gap-3">
              <img
                className="p-5 h-15 rounded-full"
                style={{ backgroundColor: item?.bg }}
                src={item?.icon}
                alt="icon"
              />
              <span>
                <p className="font-semibold">{item?.name}</p>
                <p className="text-[#718EBF] py-1">{item?.date}</p>
              </span>
            </div>
            <p
              className={`${
                item?.price.startsWith("+") ? "text-green-400" : "text-red-500"
              } font-semibold `}
            >
              {item?.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
