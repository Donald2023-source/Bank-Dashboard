import { BellDot, Search, Settings } from "lucide-react";
import profile from "../assets/profile.png";
export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <h2 className="font-bold text-lg text-[#343C6A]">Overview</h2>
      <div className="flex items-center gap-4">
        <fieldset className="flex items-center gap-2 p-3 rounded-full bg-[#8BA3CB]/20">
          <Search color="gray" size={20} />
          <input
            className="outline-none"
            type="text"
            placeholder="Search for something..."
          />
        </fieldset>

        <span className="p-3 hover:scale-95 transition-all cursor-pointer text-[#718EBF] bg-[#718EBF]/20 rounded-full">
          <Settings size={20} />
        </span>

        <span className="p-3 hover:scale-95 transition-all cursor-pointer text-[#FE5C73] bg-[#718EBF]/20 rounded-full">
          <BellDot size={20} />
        </span>

        <img
          className="h-12 hover:scale-95 transition-all cursor-pointer rounded-full"
          src={profile}
          alt="Profile"
        />
      </div>
    </div>
  );
}
