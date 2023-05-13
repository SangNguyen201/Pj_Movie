import { SET_CHI_TIET_PHIM } from "../action/configType/ManageRapType";
import {
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../action/configType/configType";
import { SET_LIST_MOVIE } from "../action/configType/manageMovieStype";

const stateDefault = {
  arrMovie: [
    {
      maPhim: 10894,
      tenPhim: "Nhà Kho Chết Chóc",
      biDanh: "nha-kho-chet-choc",
      trailer: "https://www.youtube.com/embed/UzudqOzRfmU",
      hinhAnh:
        "http://movieapi.cyberlearn.vn/hinhanh/nha-kho-chet-choc_gp00.jpeg",
      moTa: "Một gia đình chuyển đến một nơi yên tĩnh và biệt lập, nhưng ác mộng lại ập tới khi người vợ nghe thấy những điều quỷ dị trong nhà kho, và ngày càng tồi tệ đến mức họ khó có thể phân biệt được đâu là mơ và đâu là thực.",
      maNhom: "GP00",
      ngayKhoiChieu: "2023-05-04T14:20:09.557",
      danhGia: 9,
      hot: true,
      dangChieu: true,
      sapChieu: true,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrDefault: [],
  filmDetail: {},
};

export const ManageMovieReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_LIST_MOVIE: {
      state.arrMovie = action.arrMovie;
      state.arrDefault = state.arrMovie;
      return { ...state };
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;
      state.arrMovie = state.arrDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;
      state.arrMovie = state.arrDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
