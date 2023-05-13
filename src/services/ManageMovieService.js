import { GROUPID } from "../util/settings/configDomain";
import { baseService } from "./baseServices";

export class ManageMovieService extends baseService {
  constructor() {
    super();
  }
  getListBanner = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachBanner`);
  };
  getListMovie = () => {
    return this.get(`/api/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUPID}`);
  };
}

export const manageMovieService = new ManageMovieService();
