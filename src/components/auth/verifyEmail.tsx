import AuthWrapper from "./authWrapper";
import { Verify } from "iconsax-react";
import Ui from "../../components/ui";
import auth from "../../@core/auth/auth";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const VerifyEmail = () => {
  const [error, setError] = useState<string>("");
  const [code, setCode] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const location = useLocation();

  const submit = async () => {
    setLoading(true);
    setError("");

    try {
      await auth.verifyEmail(location.state?.email, code);
      navigate("/login");
    } catch (error: string | any) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthWrapper
      error={error}
      headerText="Verify your account"
      subText="Enter the code that was sent to your email"
      authIcon={Verify}
    >
      <Ui.PinInput length={6} onChange={(e) => setCode(e)} />
      <Ui.Button
        text="Verify"
        className="hover h-12 text-sm font-black m-auto mt-5 mb-3 justify-center items-center"
        backgroundColor={"#3B1FA4"}
        borderRadius="10px"
        color={"white"}
        onClick={submit}
        isLoading={loading}
        disabled={loading}
      />
    </AuthWrapper>
  );
};

export default VerifyEmail;
