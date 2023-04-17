import { useState, useEffect } from "react";
import ui from "../ui";
import auth from "../../@core/auth/auth";
import { useNavigate } from "react-router-dom";
import AuthWrapper from "./authWrapper";

const Auth2fa = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [networkErr, setNetworkErr] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  useEffect(() => {
    auth.has2fa() && navigate("/user-dashboard");
  }, []);

  const onSubmit = async () => {
    setLoading(true);
    setNetworkErr("");
    try {
      if (!code || code.length !== 6) {
        setLoading(false);
        setError("code is required");
      } else {
        setError("");
        await auth.validate2fa(code);
        setLoading(false);

        navigate("/user-dashboard");
      }
    } catch (error: string | any) {
      setLoading(false);

      setNetworkErr(error);
    }
  };

  return (
    <AuthWrapper
      headerText="2FA Authentication"
      subText="Enter the 6 digit authentication code"
      error={networkErr}
    >
      <>
        <ui.CustomInput
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          maxLength={6}
          error={error}
        />
        <ui.Button
          isLoading={loading}
          text="Proceed"
          onClick={() => onSubmit()}
          fontSize={18}
          color={"white"}
          backgroundColor={"#3B1FA4"}
          style={{ margin: "22px auto", fontWeight: 500 }}
        />
      </>
    </AuthWrapper>
  );
};

export default Auth2fa;
