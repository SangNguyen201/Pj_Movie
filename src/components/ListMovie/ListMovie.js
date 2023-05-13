import React from "react";
import { NavLink } from "react-router-dom";
import "./List.css";
export default function (props) {
  const { movie } = props;
  return (
    <div className="test border-2 border-gray-200 border-opacity-60 my-3">
      <div
        style={{
          background: `url(${movie.hinhAnh}) no-repeat`,
          backgroundPosition: "top",
          backgroundSize: "100%",
        }}
      >
        <img
          src={movie.hinhAnh}
          alt={movie.tenPhim}
          className="w-full"
          style={{
            height: "275px",
            objectPosition: "center",
            objectFit: "fill",
          }}
        />
      </div>
      <div className="p-2 text-left">
        <h1 className="title-font text-lg font-medium text-gray-900">
          {movie.tenPhim.length > 20 ? (
            <span>{movie.tenPhim.slice(0, 20)}...</span>
          ) : (
            <span>{movie.tenPhim}</span>
          )}
        </h1>
        <p className="leading-relaxed mb-1">
          {movie.moTa.length > 100 ? (
            <span>{movie.moTa.slice(0, 30)}...</span>
          ) : (
            <span>{movie.moTa}</span>
          )}
        </p>

        <NavLink to={`/detail/${movie.maPhim}`}>
          <p className="text-red-500">Chi Tiết</p>
        </NavLink>
        <NavLink to={`/checkout/${""}`}>
          <button className="btn w-full text-white py-2">Đặt Vé</button>
        </NavLink>
      </div>
    </div>
  );
}
