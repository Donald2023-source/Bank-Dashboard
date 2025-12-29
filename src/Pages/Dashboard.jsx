import { Link } from "react-router-dom";
import DashboardCard from "../Components/DashboardCard";

export default function Dashboard() {
  return (
    <>
      <div className="border  flex items-center gap-10">
        <div className="border w-2/3">
          <span className="flex items-center justify-between">
            <h4 className="text-lg font-semibold text-[#343C6A]">My Cards</h4>
            <Link className="font-semibold text-[#343C6A]">See All</Link>
          </span>
          <div className="flex  justify-between items-center">
            <div className="border bg-linear-to-r from-[#4C49ED] to-[#0A06F4] text-white rounded-2xl w-[42%]">
              <DashboardCard chipColor={"white"} />
            </div>
            <div className=" rounded-2xl bg-white shadow w-[42%]">
              <DashboardCard chipColor={"black"} />
            </div>
          </div>
        </div>
        <div className="flex-1 border"></div>
      </div>
    </>
  );
}
