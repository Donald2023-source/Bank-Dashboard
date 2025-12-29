import { BellDot, Menu, Search, Settings } from "lucide-react";
import profile from "../assets/profile.png";
export default function Header({ setNav, nav }) {
  return (
    <div className="flex items-center justify-between">
      <span className="flex items-center gap-4">
        <Menu
          onClick={() => setNav(!nav)}
          className="md:hidden block hover:scale-95 transition-all cursor-pointer text-[#718EBF]"
        />
        <h2 className="font-bold text-lg sm:block hidden text-[#343C6A]">
          Overview
        </h2>
      </span>

      <h2 className="font-bold text-lg sm:hidden block text-[#343C6A]">
        Overview
      </h2>
      <div className="flex items-center gap-4">
        <fieldset className="hidden md:flex items-center gap-2 p-3 rounded-full bg-[#8BA3CB]/20">
          <Search color="gray" size={20} />
          <input
            className="outline-none"
            type="text"
            placeholder="Search for something..."
          />
        </fieldset>

        <span className="p-3 md:block hidden hover:scale-95 transition-all cursor-pointer text-[#718EBF] bg-[#718EBF]/20 rounded-full">
          <Settings size={18} />
        </span>

        <span className="p-3 md:block hidden hover:scale-95 transition-all cursor-pointer text-[#FE5C73] bg-[#718EBF]/20 rounded-full">
          <BellDot size={18} />
        </span>

        <img
          className="h-10 hover:scale-95 transition-all cursor-pointer rounded-full"
          src={profile}
          alt="Profile"
        />
      </div>
    </div>
  );
}
