import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
