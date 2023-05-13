import { manageMovieService } from "../../services/ManageMovieService";
import { SET_LIST_MOVIE } from "./configType/manageMovieStype";
export const getMovieAction = () => {
  return async (dispatch) => {
    try {
      const result = await manageMovieService.getListMovie();
      dispatch({
        type: SET_LIST_MOVIE,
        arrMovie: result.data.content,
      });
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
