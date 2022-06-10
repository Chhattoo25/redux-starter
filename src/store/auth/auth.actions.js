import axios from "axios";
import {
  Login_Loading,
  Login_Error,
  Login_Success,
  Logout,
} from "./auth.types";

export const login = (data) => (dispatch) => {
  dispatch({ type: Login_Loading });
  axios
    .post("https://reqres.in/api/login", {
      email: data.email,
      password: data.password,
    })
    .then((r) => {
      dispatch({ type: Login_Success, payload: r.data });
    })
    .catch(() => {
      dispatch({ type: Login_Error });
    });
};

export const logout =()=> ({ type: Logout });
