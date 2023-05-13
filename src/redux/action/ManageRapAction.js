import { manageRapService } from "../../services/ManageRapService";
import {
  SET_CHI_TIET_PHIM,
  SET_HE_THONG_RAP_CHIEU,
} from "./configType/ManageRapType";

export const getListRapAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageRapService.getListRap();
      if (result.status === 200) {
        dispatch({
          type: SET_HE_THONG_RAP_CHIEU,
          heThongRapChieu: result.data.content,
        });
      }
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};

export const layThongTinChiTietPhim = (id) => {
  return async (dispatch) => {
    try {
      const result = await manageRapService.layThongTinLichChieuPhim(id);
      dispatch({
        type: SET_CHI_TIET_PHIM,
        filmDetail: result.data.content,
      });
    } catch (error) {
      console.log("error: ", error.response?.data);
    }
  };
};
