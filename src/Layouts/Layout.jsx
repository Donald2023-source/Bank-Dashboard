import { useState } from "react";
import Header from "../Components/Header";
import Sidebar from "../Components/SIdebar";

export default function Layout({ children }) {
  const [nav, setNav] = useState(false);

  return (
    <div className="flex h-screen w-full">
      <aside
        className={`w-72 transform transition-transform duration-300 ease-in-out fixed top-0 left-0 h-full z-40 bg-white sm:relative sm:translate-x-0 sm:block ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </aside>

      {nav && (
        <div
          onClick={() => setNav(false)}
          className="absolute backdrop-blur-lg w-full h-full inset-0"
        />
      )}
      {nav && (
        <h2
          onClick={() => setNav(false)}
          className="absolute right-2 cursor-pointer top-3 font-semibold text-lg"
        >
          X
        </h2>
      )}

      <div className="flex flex-col  flex-1">
        <header className="p-4">
          <Header nav={nav} setNav={setNav} />
        </header>

        <main className="flex-1 overflow-y-auto bg-[#8BA3CB]/20 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
