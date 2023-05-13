// import React, { Component } from "react";
// import { Tabs } from "antd";
// import { NavLink } from "react-router-dom";
// import moment from "moment";
// import "./style.css";
// const { TabPane } = Tabs;
// export default class HomeMenu extends React.PureComponent {
//   state = {
//     tabPosition: "left",
//   };
//   changeTabPosition = (e) => {
//     this.setState({ tabPosition: e.target.value });
//   };
//   renderHeThongRap = () => {
//     let { tabPosition } = this.state;
//     return this.props.heThongRapChieu?.map((heThongRap, index) => {
//       return (
//         <TabPane
//           tab={
//             <img
//               src={heThongRap.logo}
//               className="rounded-full mb-5 mr-5"
//               width="60"
//             />
//           }
//           key={index}
//         >
//           <Tabs tabPosition={tabPosition} className="flex d-flex ml-10">
//             {heThongRap.lstCumRap?.slice(0, 5).map((cumRap, index) => {
//               return (
//                 <TabPane
//                   tab={
//                     <div style={{ width: "350px", display: "flex" }}>
//                       <img
//                         src="https://booking.bhdstar.vn/CDN/Image/Entity/CinemaGallery/0000000005?width=1024&height=316"
//                         width="90"
//                         className="mb-4"
//                       />
//                       <div className="text-left ml-2">{cumRap.tenCumRap}</div>
//                     </div>
//                   }
//                   key={index}
//                 >
//                   {cumRap.danhSachPhim.slice(0, 5).map((phim, index) => {
//                     return (
//                       <div
//                         style={{ display: "flex", width: "400px" }}
//                         key={index}
//                       >
//                         <div className="ml-1">
//                           <img
//                             className="mb-3"
//                             style={{ width: 80, height: 70 }}
//                             src={phim.hinhAnh}
//                             alt={phim.tenPhim}
//                           />
//                         </div>
//                         <div className="ml-2">
//                           <h3
//                             className="font-bold"
//                             style={{ color: "#34b0f8" }}
//                           >
//                             {phim.tenPhim}
//                           </h3>
//                           <p>{cumRap.diaChi}</p>
//                           {phim.lstLichChieuTheoPhim
//                             .slice(0, 2)
//                             .map((lichChieu, index) => {
//                               return (
//                                 <NavLink
//                                   className="mr-1 text-red-500 "
//                                   to=""
//                                   key={index}
//                                 >
//                                   {moment(lichChieu.ngayChieuGioChieu).format(
//                                     "hh:mm A"
//                                   )}
//                                 </NavLink>
//                               );
//                             })}
//                         </div>
//                       </div>
//                     );
//                   })}
//                 </TabPane>
//               );
//             })}
//           </Tabs>
//         </TabPane>
//       );
//     });
//   };
//   render() {
//     const { tabPosition } = this.state;
//     return (
//       <div className="container style_menu">
//         <Tabs tabPosition={tabPosition} className="flex d-flex justify-start ">
//           {this.renderHeThongRap()}
//         </Tabs>
//       </div>
//     );
//   }
// }
import React from "react";
import { Tabs } from "antd";
export default function HomeMenu() {
  return (
    <div>
      <Tabs
        defaultActiveKey="1"
        items={[
          {
            label: "Tab 1",
            key: "1",
            children: "Tab 1",
          },
          {
            label: "Tab 2",
            key: "2",
            children: "Tab 2",
            disabled: true,
          },
          {
            label: "Tab 3",
            key: "3",
            children: "Tab 3",
          },
        ]}
      />
    </div>
  );
}
