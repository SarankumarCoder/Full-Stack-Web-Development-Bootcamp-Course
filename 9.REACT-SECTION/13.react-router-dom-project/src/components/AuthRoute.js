import React from "react";

const AuthRoute = ({ children }) => {
  const islogin = true;
  if (!islogin) return <h1>Access Denied</h1>;
  return <div>{children}</div>;
};

export default AuthRoute;
