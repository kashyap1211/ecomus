import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { path } from "../constant";
import { FiSearch, FiUser, FiHeart, FiShoppingCart } from "react-icons/fi";
import SearchSidebar from "./SearchSidebar";
import { useEffect, useMemo, useState } from "react";
import { MdOutlineBorderOuter } from "react-icons/md";
const pages = ["Home", "Shop", "Blog" , "Contact"];

export default function Navbar() {

  const navigate = useNavigate();

  const goToUserOrders = () => {
    navigate("/user/orders"); // Replace with your route
  };
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    try {
      const raw = localStorage.getItem("user");
      setUser(raw ? JSON.parse(raw) : null);
    } catch {
      setUser(null);
    }
  }, [location.pathname]);

  const firstLetter = useMemo(() => {
    if (!user) return "";
    const name = user.firstName || user.email || "U";
    return name.trim().charAt(0).toUpperCase();
  }, [user]);
  return (
    <Disclosure as="nav">
      <div className=" mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-200 focus:outline-none">
              <Bars3Icon className="block h-6 w-6 ui-open:hidden" />
              <XMarkIcon className="hidden h-6 w-6 ui-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl md:text-4xl font-bold" style={{ fontStyle: "italic" }}>
              ecomus
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex flex-1 justify-center">
            <div className="flex space-x-6">
              {pages.map((page) => {
                const isActive =
                  location.pathname === path[page.toLowerCase()] ||
                  (page === "Home" && location.pathname === "/");

                return (
                  <Link
                    key={page}
                    to={path[page.toLowerCase()] || "#"}
                    className={`text-[15px] font-medium hover:text-black ${
                      isActive
                        ? "font-bold text-black underline"
                        : "text-gray-800"
                    }`}
                  >
                    {page}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5 relative">
            <FiSearch
        className="h-5 w-5 cursor-pointer"
        onClick={() => setIsSidebarOpen(true)}
      />

      {/* Sidebar Component */}
      <SearchSidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
            {!user ? (
              <FiUser onClick={(()=>navigate(path.login))} className="h-5 w-5 cursor-pointer" />
            ) : (
              <div className="relative">
                <button
                  className="h-8 w-8 rounded-full bg-black text-white flex items-center justify-center"
                  onClick={() => setMenuOpen((v) => !v)}
                >
                  <span className="text-sm font-semibold">{firstLetter}</span>
                </button>
                {menuOpen && (
                  <div className="absolute right-0 mt-5 py-2 w-40 bg-white border rounded shadow-md z-50">
                    {/* <button
                      className="w-full text-left px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        setMenuOpen(false);
                        navigate(path.home);
                      }}
                    >
                      Home
                    </button> */}
                    {user?.role === "admin" && (
                      <button
                        className="w-full text-center px-3  hover:bg-gray-100"
                        onClick={() => {
                          setMenuOpen(false);
                          navigate(path.admin);
                        }}
                      >
                        Admin Panel
                      </button>
                    )}
                    <button
                      className="w-full text-left px-3 py-2 hover:bg-gray-100"
                      onClick={() => {
                        localStorage.removeItem("token");
                        localStorage.removeItem("user");
                        setMenuOpen(false);
                        setUser(null);
                        navigate(path.home);
                      }}
                    >
                      Logout
                    </button>
                  </div>
                )}
              </div>
            )}
            <div className="relative">
              <FiHeart onClick={(()=>navigate(path.viewcart))} className="h-5 w-5 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
            <div className="relative">
              <FiShoppingCart onClick={(()=>navigate(path.checkout))} className="h-5 w-5 cursor-pointer" />
              <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
           <div>
      <MdOutlineBorderOuter
        className="h-5 w-5 cursor-pointer text-gray-600"
        onClick={(()=>navigate(path.order))}
        title="View Orders"
      />
    </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden px-2 pt-2 pb-3 space-y-1">
        {pages.map((page) => {
          const isActive =
            location.pathname === path[page.toLowerCase()] ||
            (page === "Home" && location.pathname === "/");

          return (
            <Link
              key={page}
              to={path[page.toLowerCase()] || "#"}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive
                  ? "text-black font-bold"
                  : "text-gray-800 hover:text-black"
              }`}
            >
              {page}
            </Link>
          );
        })}
      </DisclosurePanel>
    </Disclosure>
    );
}
