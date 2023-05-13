import React, { useEffect, useState } from "react";
import { RadioChangeEvent } from "antd";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "./Detail.css";
import { Tabs, Rate } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { SET_CHI_TIET_PHIM } from "../../redux/action/configType/ManageRapType";
import {
  getListRapAction,
  layThongTinChiTietPhim,
} from "../../redux/action/ManageRapAction";
import moment from "moment";
import { getMovieAction } from "../../redux/action/ManageMovieAction";
const { TabPane } = Tabs;

export default function Detail(props) {
  const [tabPosition, setTabPosition] = useState("left");
  const changeTabPosition = (e) => {
    setTabPosition(e.target.value);
  };
  const filmDetail = useSelector(
    (state) => state.ManageMovieReducer.filmDetail
  );
  const heThongRapChieu = useSelector((state) => state.ManageRapReducer);
  console.log("heThongRapChieu: ", heThongRapChieu);
  const dispatch = useDispatch();
  useEffect(() => {
    let { id } = props.match.params;
    dispatch(layThongTinChiTietPhim(id));
    dispatch(getListRapAction());
  }, []);
  return (
    <div
      className="pt-20"
      style={{
        backgroundImage: `url(${filmDetail.hinhAnh})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <CustomCard
        style={{ paddingTop: 150, minHeight: "100vh" }}
        effectColor="#000" // required
        color="#fff"
        // default color is white
        blur={7} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="container flex d-flex justify-around">
          <div className="flex d-flex justify-between ">
            <img src={filmDetail.hinhAnh} style={{ width: 250, height: 300 }} />
            <div className="ml-10">
              <p className="text-xl font-bold" style={{ color: "#34b0f8" }}>
                {filmDetail.tenPhim}
              </p>
              <p className="">
                Ngày Khởi Chiếu :{" "}
                {moment(filmDetail.ngayKhoiChieu).format("DD.MM.YYYY")}
              </p>
              <p className="w-96 mt-5">{filmDetail.moTa}</p>
            </div>
          </div>
          <div>
            <div className="clearfix">
              <div className={`c100 p${filmDetail.danhGia * 10} big green`}>
                <span>{filmDetail.danhGia * 10}%</span>
                <div className="slice">
                  <div className="bar"></div>
                  <div className="fill"></div>
                </div>
              </div>
              <div className="">
                <h1
                  className="text-xl font-bold"
                  style={{ color: "#34b0f8", marginLeft: "30%" }}
                >
                  Đánh Giá
                </h1>
                <h1>
                  <Rate
                    className="flex d-flex space-x-2 text-xl "
                    style={{ color: "yellow", marginLeft: "22%" }}
                    value={filmDetail.danhGia / 2}
                  />
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div>
          <Tabs
            className="detail_tabs container space-x-2 flex d-flex"
            style={{ marginTop: "20px" }}
            tabPosition={tabPosition}
          >
            {heThongRapChieu.heThongRapChieu?.map((htr, index) => {
              return (
                <TabPane
                  tab={
                    <div>
                      <img
                        src={htr.logo}
                        width={50}
                        height={50}
                        alt={htr.logo}
                      />
                      {htr.tenHeThongRap}
                    </div>
                  }
                  key={index}
                >
                  <div className="">
                    {htr.lstCumRap?.slice(0, 4).map((cumRap, index) => {
                      return (
                        <div key={index} className="flex d-flex">
                          <div>
                            <img
                              style={{
                                width: 100,
                                height: 100,
                                marginBottom: 20,
                              }}
                              src="https://booking.bhdstar.vn/CDN/Image/Entity/CinemaGallery/0000000005?width=1024&height=316"
                            />
                          </div>
                          <div className=" ml-5">
                            <div>{cumRap.maHeThongRap}</div>
                            <div>
                              <p className="text-xl "> {cumRap.diaChi}</p>

                              <p>{cumRap.tenCumRap}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </TabPane>
              );
            })}
          </Tabs>
        </div>
      </CustomCard>
    </div>
  );
}
