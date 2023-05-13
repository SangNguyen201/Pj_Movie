import React, { useEffect } from "react";
import HomeMenu from "../Home/HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import ListMovie from "../../components/ListMovie/ListMovie";
import MultipleRows from "../../components/ReactSlick/MutipleRowSlick";
import { getMovieAction } from "../../redux/action/ManageMovieAction";
import { getListRapAction } from "../../redux/action/ManageRapAction";
import Event from "./Event/Event";
import AppMpbile from "./AppMobile/AppMobileDesktop";
import HomeCarousel from "../../template/Hometemplate/HomeLayOut/Carousel/HomeCarousel";

export default function HomePage(props) {
  const { arrMovie } = useSelector((state) => state.ManageMovieReducer);
  const { heThongRapChieu } = useSelector((state) => state.ManageRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = getMovieAction();
    dispatch(action);
    dispatch(getListRapAction());
  }, []);

  return (
    <div className="">
      <HomeCarousel />
      <div className="pb-10 text-gray-600 body-font ">
        <MultipleRows arrMovie={arrMovie} />
      </div>
      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
      <div>
        <Event />
      </div>
      <div>
        <AppMpbile />
      </div>
    </div>
  );
}
