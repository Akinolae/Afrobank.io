import auth from "../../../@core/auth/auth";
import AuthWrapper from "../authWrapper";
import { useState } from "react";
import { RegisterForm } from "../../forms/forms";

const Register = () => {
  const [error, setError] = useState("");

  const submit = async (params: object) => {
    setError("");
    try {
      await auth.register(params);
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
