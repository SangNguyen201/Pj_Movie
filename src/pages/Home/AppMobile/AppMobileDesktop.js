import React from "react";
import bgbanner from "./AppImg/bg-AppMobile.jpg";
import slider1 from "./AppImg/app-slider-1.jpg";
import slider2 from "./AppImg/app-slider-2.jpg";
import slider from "./AppImg/app-slider.jpg";
import frame from "./AppImg/frame-mobile.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";

export default function AppMpbile() {
  let settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 300,
    slidesToShow: true,
    slidesToScroll: true,
  };
  return (
    <div
      className="mt-10  "
      style={{
        backgroundImage: `url(${bgbanner})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className=" py-10 flex justify-center items-center">
        <div className="text-left text-white" style={{ maxWidth: 550 }}>
          <h3 className="text-3xl">
            Ứng dụng tiện lợi dành cho người yêu điện ảnh .
          </h3>
          <p className="my-5">
            Không chỉ đặt vé, bạn còn có thể bình luận phim, chấm điểm rạp và
            đổi quà hấp dẫn.
          </p>
          <a
            tabindex="0"
            aria-disabled="false"
            target="_blank"
            href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
          >
            <span className="py-5 px-10 rounded bg-red-600 my-5 inline-block text-xl">
              App miễn phí - Tải về ngay !
            </span>
          </a>
          <p>
            CINEMA có hai phiên bản{" "}
            <a
              className="text-blue-500 underline underline-offset-1"
              rel="noreferrer"
              target="_blank"
              href="https://apps.apple.com/us/app/123phim-mua-ve-lien-tay-chon/id615186197"
            >
              IOS
            </a>{" "}
            &{" "}
            <a
              className="text-blue-500 underline underline-offset-1"
              rel="noreferrer"
              target="_blank"
              href="https://play.google.com/store/apps/details?id=vn.com.vng.phim123"
            >
              Android
            </a>{" "}
          </p>
        </div>
        <div id="slider-mobile">
          <Slider
            {...settings}
            className=""
            style={{
              backgroundImage: `url(${frame})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              width: 250,
            }}
          >
            <div className="">
              <img style={{ borderRadius: 30 }} src={slider1} />
            </div>
            <div>
              <img style={{ borderRadius: 30 }} src={slider2} />
            </div>
            <div>
              <img style={{ borderRadius: 30 }} src={slider} />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
}
