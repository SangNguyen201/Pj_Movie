import React, { Component } from "react";
import Slider from "react-slick";
import ListMovie from "../ListMovie/ListMovie";
import styleSlick from "./Style.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../../redux/action/configType/configType";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const MultipleRows = (props) => {
  const { dangChieu, sapChieu } = useSelector(
    (state) => state.ManageMovieReducer
  );
  const dispatch = useDispatch();
  const renderMovie = () => {
    return props.arrMovie.slice(0, 12).map((item, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <ListMovie movie={item} />
        </div>
      );
    });
  };
  let activeClassDC = dangChieu === true ? "active_film" : "non_active_film";
  let activeClassSC = sapChieu === false ? "active_film" : "non_active_film";
  const settings = {
    className: "center variable-width",
    centerMode: true,
    infinite: true,
    slidesToShow: 3,
    speed: 500,
    rows: 1,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container btn_list_movie my-5 text-center">
      <button
        className={`${styleSlick[activeClassDC]} rounded mr-2 `}
        onClick={() => {
          const action = { type: SET_FILM_DANG_CHIEU };
          dispatch(action);
        }}
      >
        Phim Đang Chiếu
      </button>
      <button
        className={`${styleSlick[activeClassSC]} rounded `}
        onClick={() => {
          const action = { type: SET_FILM_SAP_CHIEU };
          dispatch(action);
        }}
      >
        Phim Sắp Chiếu
      </button>
      <Slider className="style_slick" {...settings}>
        {renderMovie()}
      </Slider>
    </div>
  );
};

export default MultipleRows;
