import { BellDot, Search, Settings } from "lucide-react";

export default function Header() {
  return (
    <div>
      <h2 className="font-bold text-lg text-[#343C6A]">Overview</h2>
      <div>
        <fieldset>
          <Search />
          <input type="text" placeholder="Search for something..." />
        </fieldset>

        <span>
          <Settings />
        </span>

        <span>
          <BellDot />
        </span>
      </div>
    </div>
  );
}
