import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import { history } from "../../../../App";
export default function Header(props) {
  return (
    <div>
      <header className="header_nav p-4 fixed w-full z-10">
        <div className="grid grid-cols-3 h-16 items-center mx-auto">
          <NavLink to="/" style={{ width: 50 }}>
            <img src={require("./logo.png")} />
          </NavLink>
          <ul className="items-stretch hidden space-x-3 lg:flex mx-auto">
            <li className="flex">
              <NavLink
                to="/Home"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent focus:text-blue-400 dark:border-violet-400"
              >
                Trang Chủ
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/Contact"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent focus:text-blue-400"
              >
                Liên Hệ
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/News"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  focus:text-blue-400"
              >
                Tin Tức
              </NavLink>
            </li>
            <li className="flex">
              <NavLink
                to="/News"
                className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent  focus:text-blue-400"
              >
                Ứng Dụng
              </NavLink>
            </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex justify-end">
            <button
              onClick={() => history.push("/login")}
              className=" self-center px-8 py-3 rounded"
            >
              Đăng Nhập
            </button>
            <button
              onClick={() => history.push("/register")}
              className="btn self-center px-8 py-3 font-semibold rounded"
            >
              Đăng Ký
            </button>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 dark:text-gray-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </header>
    </div>
  );
}
