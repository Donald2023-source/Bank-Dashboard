import Header from "../Components/Header";
import Sidebar from "../Components/SIdebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <aside className="w-60 sm:block hidden py-7 px-4">
        <Sidebar />
      </aside>

      <div className="flex flex-col  flex-1">
        <header className="p-4">
          <Header />
        </header>

        <main className="flex-1 overflow-y-auto bg-[#718EBF]/20 p-4">
          {children}
        </main>
      </div>
    </div>
  );
}
