import {
  legacy_createStore,
  applyMiddleware,
  combineReducers,
  compose,
} from "redux";

import thunk from "redux-thunk"
import { authreducer } from "./auth/auth.reducer";
import { feedReducer } from "./feed/feed.reducer";

const rootReducer = combineReducers({
  auth: authreducer,
  feed: feedReducer,
});
export const store = legacy_createStore(rootReducer,applyMiddleware(thunk));
