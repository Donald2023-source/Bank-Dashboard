import logo from "../assets/BankDash logo.png";
export default function Sidebar() {
  return (
    <div>
      {/* Logo */}
      <span className="flex items-center gap-2">
        <img className="h-7" src={logo} alt="" />
        <h2 className="font-bold text-lg text-[#343C6A]">Bank Dash.</h2>
      </span>
    </div>
  );
}
