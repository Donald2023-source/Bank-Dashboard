import { Link } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";
import RecentTransaction from "../Components/RecentTransaction";
import BarChart from "../Components/BarChart";
import PieChart from "../Components/PieChart";

export default function Dashboard() {
  const profitData = [12000, 18000, 25000, 32000, 40000, 28000, 35000, 30000];
  const expensesData = [10000, 15000, 20000, 28000, 30000, 25000, 32000, 27000];
  const categories = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <>
      <div className="w-full">
        <section className="flex lg:flex-row w-full  flex-col items-center gap-10">
          <div className="w-full lg:w-2/3 scroll overflow-x-auto">
            <span className="flex items-center justify-between py-4">
              <h4 className="text-lg font-semibold text-[#343C6A]">My Cards</h4>
              <Link className="font-semibold text-[#343C6A]">See All</Link>
            </span>
            <div className="flex w-full justify-between gap-8 items-center overflow-x-auto">
              <div className=" bg-linear-to-r from-[#4C49ED] to-[#0A06F4] w-full text-white rounded-2xl lg:w-[47%] shrink-0">
                <DashboardCard chipColor={"white"} />
              </div>
              <div className="w-full rounded-2xl border-2 border-gray-300 bg-white shadow md:w-[47%] shrink-0">
                <DashboardCard chipColor={"black"} />
              </div>
            </div>
          </div>
          <div className="flex-1 px-3 w-full">
            <RecentTransaction />
          </div>
        </section>

        <section className="bg-white mx-2 overflow-x-hidden flex lg:flex-row flex-col items-center rounded-lg my-3">
          <div className="lg:w-2/3 :w-full w-full py-3">
            <BarChart
              expensesData={expensesData}
              categories={categories}
              profitData={profitData}
            />
          </div>
          <div className="py-3 lg:w-1/3 w-full">
            <PieChart
              investment={350000}
              entertainment={120000}
              bills={180000}
              others={90000}
            />
          </div>
        </section>
      </div>
    </>
  );
}
