import auth from "../../../@core/auth/auth";
import AuthWrapper from "../authWrapper";
import { useState } from "react";
import { RegisterForm } from "../../forms/forms";
import { useNavigate } from "react-router-dom";
import { RegisterParams } from "afrobank-sdk/types/index.interface";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submit = async (params: RegisterParams) => {
    setError("");
    try {
      await auth.register(params);
      navigate("/verify", {
        state: { email: params?.email },
      });
    } catch (error: any) {
      setError(error);
    }
  };

  return (
    <AuthWrapper
      linkto="/login"
      error={error}
      headerText="Create account"
      subText="We're delighted to have you join us"
      routeText="I have an account"
    >
      <RegisterForm onSubmit={submit} />
    </AuthWrapper>
  );
};

export default Register;
