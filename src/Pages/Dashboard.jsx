import { Link } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";
import RecentTransaction from "../Components/RecentTransaction";

export default function Dashboard() {
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
      </div>
    </>
  );
}
