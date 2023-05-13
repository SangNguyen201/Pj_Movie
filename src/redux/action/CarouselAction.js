import { SET_CAROUSEL } from "../action/configType/configType";
import { manageMovieService } from "../../services/ManageMovieService";

export const getCarouselAction = () => {
  return async (dispacth) => {
    try {
      const result = await manageMovieService.getListBanner();
      dispacth({
        type: SET_CAROUSEL,
        arrImg: result.data.content,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
