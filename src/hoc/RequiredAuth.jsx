import React from "react";

import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const RequiredAuth = ({children}) => {
const location = useLocation()
  const { isAuth } = useSelector((state) => state.auth);
  const from ={
pathname:location.pathname
  }
  if(isAuth)return children;
  return <Navigate to={"/login"} state ={from} replace/>;
};

export default RequiredAuth;
