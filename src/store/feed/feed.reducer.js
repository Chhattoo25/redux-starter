import {
  Get_Feeds_Error,
  Get_Feeds_Loading,
  Get_Feeds_Success,
} from "./feed.types";

const initialState = {
  getFeeds: {
    loading: false,
    error: false,
  },
  data: [],
};

export const feedReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Get_Feeds_Loading: {
      return {
        ...state,
        getFeeds: {
          ...state,
          getFeeds,
          loading: true,
          error: false,
        },
   
      };
    }
    case Get_Feeds_Success: {
      return {
...state,
getFeeds:{
...state,getFeeds,
loading:false,
error:false,
}
      };
    }

    case Get_Feeds_Success: {
      return {};
    }
    default: {
      return state;
    }
  }
};
