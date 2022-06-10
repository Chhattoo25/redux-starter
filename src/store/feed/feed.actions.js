import {
  Get_Feeds_Error,
  Get_Feeds_Loading,
  Get_Feeds_Success,
} from "./feed.types";

export const getFeeds = () => (dispatch) => {
  dispatch({ type: Get_Feeds_Loading });
  axios
    .get("http://localhost:8080/feeds")

    .then((r) => {
      dispatch({ type: Get_Feeds_Success, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: Get_Feeds_Error });
    });
};
