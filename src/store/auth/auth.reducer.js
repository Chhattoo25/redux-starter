import {
  Login_Loading,
  Login_Error,
  Login_Success,
  Logout,
} from "./auth.types";
let token = localStorage.getItem("token")
const initialState = {
  loading: false,
  error: false,
  isAuth: !false,
  token: "",
};

export const authreducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case Login_Error: {
      return { ...state, loading: false, error: true, isAuth: false };
    }
    case Login_Loading: {
      return { ...state, loading: true, error: false };
    }
    case Login_Success: {
localStorage.setItem("token",payload.token)
      return {
        ...state,
        loading: false,
        error: false,
        isAuth: true,
        token: payload.token,
      };
    }
    case Logout: {
                     localStorage.removeItem("token")

      return { ...state, isAuth: false ,token:""};
    }
    default: {
      return state;
    }
  }
};
