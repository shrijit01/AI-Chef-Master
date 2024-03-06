// MyNavbar.jsx
// import { Fragment } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import "../MyNavbar/index.css";
import { Link, useLocation } from "react-router-dom";

export default function MyNavbar() {
  const location = useLocation();

  return (
    <>
      <Disclosure as="nav" className="my-navbar shadow-xl sticky top-0 z-50">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-[1262px] py-1 px-2 sm:px-6 lg:px-8">
              <div className="relative flex h-16 items-center">
                <div className="flex items-center w-full justify-between">
                  <Link to='/' className="text-3xl font-semibold font-primary flex items-center justify-between gap-x-2">
                    <img
                      className="h-10 rounded w-auto navbar-logo"
                      src="/assets/logo.jpeg"
                      alt="AI CHEF MASTER"
                    />
                    <h1>AIChefMaster</h1>
                  </Link>

                  <div className="hidden sm:block">
                    <div className="flex self-start space-x-4 ">
                      <Link
                        to="/"
                        className={`nav-link ${location.pathname === "/" ? "active" : ""
                          } rounded-md px-3 py-2 text-sm font-medium `}
                      >
                        Home
                      </Link>
                      <Link
                        to="/product"
                        className={`nav-link ${location.pathname === "/product"
                          ? "active"
                          : ""
                          } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        Product
                      </Link>
                      <Link
                        to="/career"
                        className={`nav-link ${location.pathname === "/career" ? "active" : ""
                          } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        Career
                      </Link>
                      <Link
                        to="/company"
                        className={`nav-link ${location.pathname === "/company"
                          ? "active"
                          : ""
                          } rounded-md px-3 py-2 text-sm font-medium`}
                      >
                        Company
                      </Link>
                    </div>
                  </div>
                  <div className="sm:hidden">
                    <Disclosure.Button className="text-black font-extrabold p-2">
                      {open ? (
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2">
                <Link
                  to="/"
                  className={` text-black  hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${location.pathname === "/" ? "active" : ""
                    }`}
                >
                  HOME
                </Link>
                <Link
                  to="/product"
                  className={`text-black  hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${location.pathname === "/product" ? "active" : ""
                    }`}
                >
                  PRODUCT
                </Link>
                <Link
                  to="/career"
                  className={`text-black hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${location.pathname === "/career" ? "active" : ""
                    }`}
                >
                  CAREER
                </Link>
                <Link
                  to="/company"
                  className={`text-black hover:bg-gray-100 hover:text-white block rounded-md px-3 py-2 text-base font-medium ${location.pathname === "/company" ? "active" : ""
                    }`}
                >
                  COMPANY
                </Link>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </>
  );
}
