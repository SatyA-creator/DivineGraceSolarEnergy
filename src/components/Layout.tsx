import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 pt-[76px] sm:pt-[84px] lg:pt-[124px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
