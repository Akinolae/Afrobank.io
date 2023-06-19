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
      <div style={{ padding: "10px" }}>
        {/* <ui.PinInput length={6} onChange={(e) => setCode(e)} /> */}
        <ui.CustomInput
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          maxLength={6}
          error={error}
        />
        <ui.Button
          isLoading={loading}
          text="Proceed"
          color={"white"}
          className="hover h-12 text-sm font-black m-auto mt-5 mb-3 uppercase justify-center items-center"
          borderRadius="10px"
          backgroundColor={"#3B1FA4"}
          type="submit"
          onClick={onSubmit}
        />
      </div>
    </AuthWrapper>
  );
};

export default Auth2fa;
