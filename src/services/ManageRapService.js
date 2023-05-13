import { GROUPID } from "../util/settings/configDomain";
import { baseService } from "./baseServices";

export class ManageRapService extends baseService {
  constructor() {
    super();
  }
  getListRap = () => {
    return this.get(
      `api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUPID}`
    );
  };
  layThongTinLichChieuPhim = (maPhim) => {
    return this.get(`api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`);
  };
}

export const manageRapService = new ManageRapService();
