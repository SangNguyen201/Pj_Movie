import React, { useEffect } from "react";
import "./Carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popup from "./PopUp/Popup";
import { useSelector, useDispatch } from "react-redux";
import { getCarouselAction } from "../../../../redux/action/CarouselAction";

const contentStyle = {
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};
export default function HomeCarousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  const { arrImg } = useSelector((state) => state.CarouselReducer);

  const dispacth = useDispatch();

  useEffect(() => {
    dispacth(getCarouselAction());
  }, []);

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full  opacity-0"
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };
  return (
    <div className="">
      <div style={{ position: "relative" }}>
        <div>
          <Slider {...settings}>{renderImg()}</Slider>
        </div>
        <div className="style_carousel">
          <Popup />
        </div>
      </div>
    </div>
  );
}
