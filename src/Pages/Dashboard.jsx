import { Link } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";
import RecentTransaction from "../Components/RecentTransaction";

export default function Dashboard() {
  return (
    <>
      <div className="w-full">
        <section className="flex md:flex-row w-full  flex-col items-center gap-10">
          <div className=" md:w-2/3 scroll overflow-x-auto">
            <span className="flex items-center justify-between py-4">
              <h4 className="text-lg font-semibold text-[#343C6A]">My Cards</h4>
              <Link className="font-semibold text-[#343C6A]">See All</Link>
            </span>
            <div className="flex w-full justify-between gap-8 items-center overflow-x-auto">
              <div className=" bg-linear-to-r from-[#4C49ED] to-[#0A06F4] w-[85%] text-white rounded-2xl md:w-[47%] shrink-0">
                <DashboardCard chipColor={"white"} />
              </div>
              <div className="w-[85%] rounded-2xl bg-white shadow md:w-[47%] shrink-0">
                <DashboardCard chipColor={"black"} />
              </div>
            </div>
          </div>
          <div className="flex-1 w-full">
            <RecentTransaction />
          </div>
        </section>
      </div>
    </>
  );
}
