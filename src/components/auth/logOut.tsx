import React, { useEffect } from "react";
import auth from "../../@core/auth/auth";
import { useNavigate } from "react-router-dom";

const LogOut = () => {
  const navigate = useNavigate();
  useEffect(() => {
    auth.logOut();
    return navigate("/");
  }, []);

  return <></>;
};

export default LogOut;
