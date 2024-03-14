"use client";

import { FC } from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
import Image from "next/image";

interface NavBarProps {
  className?: string;
}
const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Live Crypto Price",
    link: "https://crypto-hunter.netlify.app/",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Blog",
    link: "/blogs",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  }

];
const NavBar: FC<NavBarProps> = ({ className }) => {
  return (
    <>
      <nav className="border-gray-200 bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 w-auto "
              alt=" Logo"
              width={100}
              height={100}
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-white">
              Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden  focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700">
              <li>
                <a
                  href="/"
                  className="block py-2 px-3  bg-blue-700 rounded md:bg-transparent  md:p-0 text-white md:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="https://crypto-hunter.netlify.app/"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Live Crypto Price
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  blog
                </a>
              </li>

              <li>
                <a
                  href="/contact"
                  className="block py-2 px-3  rounded  md:border-0  md:p-0 text-white md:hover:text-blue-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <FloatingNav navItems={navItems} />
    </>
  );
};

export default NavBar;
