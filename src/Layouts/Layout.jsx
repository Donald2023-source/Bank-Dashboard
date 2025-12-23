import Header from "../Components/Header";
import Sidebar from "../Components/SIdebar";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen w-full">
      <aside className="w-60 sm:block hidden border-r p-4">
        <Sidebar />
      </aside>

      <div className="flex flex-col flex-1">
        <header className="border-b p-4">
          <Header />
        </header>

        <main className="flex-1 overflow-y-auto p-4">{children}</main>
      </div>
    </div>
  );
}
