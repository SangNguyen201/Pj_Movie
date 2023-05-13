import React from "react";
import { useSelector } from "react-redux";
import _ from "lodash";
import "./footer.css";
export default function Footer() {
  const { heThongRapChieu } = useSelector((state) => state.ManageRapReducer);
  const arrHeThongRap = _.map(heThongRapChieu, (heThongRap) =>
    _.pick(heThongRap, ["maHeThongRap", "tenHeThongRap", "logo"])
  );
  return (
    <div>
      <footer
        className="text-white"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", zIndex: -1 }}
      >
        <div className="container">
          <div className="grid grid-cols-12 border-b py-2">
            <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
              <img className="footer_img" src={require("../Header/logo.png")} />
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul className="grid grid-cols-3">
                {arrHeThongRap.map((heThongRap, index) => {
                  return (
                    <li className="" key={index}>
                      <img className="footer_img my-1 " src={heThongRap.logo} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="col-span-6 text-center md:text-left md:col-span-3">
              <p className="pb-1 text-lg font-medium">Category</p>
              <ul>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-400"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-400"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-400"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-400"
                  >
                    Link
                  </a>
                </li>
                <li>
                  <a
                    rel="noopener noreferrer"
                    href="#"
                    className="hover:dark:text-violet-400"
                  >
                    Link
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="grid justify-center pt-6 lg:justify-between">
            <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
              <span>©2023 All rights reserved</span>
              <a rel="noopener noreferrer" href="#">
                <span>Privacy policy</span>
              </a>
              <a rel="noopener noreferrer" href="#">
                <span>Terms of service</span>
              </a>
            </div>
            <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
              <a
                rel="noopener noreferrer"
                href="#"
                title="Email"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="Twitter"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
              ></a>
              <a
                rel="noopener noreferrer"
                href="#"
                title="GitHub"
                className="flex items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
              ></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
