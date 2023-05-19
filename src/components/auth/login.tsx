import auth from "../../@core/auth/auth";
import AuthWrapper from "./authWrapper";
import { LoginForm } from "../forms/forms";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Login = () => {
  const [erorr, setError] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
    auth.isSignedIn() && navigate("/user-dashboard");
  }, []);

  const login = async (e: any) => {
    setError("");
    try {
      const res = await auth.login(e);
      return res ? navigate("/authenticate") : navigate("/user-dashboard");
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <AuthWrapper
      error={erorr}
      headerText="Welcome Back"
      subText="Welcome Back! please enter your details"
      routeText="I don't have an account"
      linkto="/signup"
    >
      <LoginForm onSubmit={login} />
    </AuthWrapper>
  );
};

export default Login;
