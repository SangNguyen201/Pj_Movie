import { SET_HE_THONG_RAP_CHIEU } from "../../redux/action/configType/ManageRapType";
const stateDefault = {
  heThongRapChieu: [],
};
export const ManageRapReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_HE_THONG_RAP_CHIEU: {
      state.heThongRapChieu = action.heThongRapChieu;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
