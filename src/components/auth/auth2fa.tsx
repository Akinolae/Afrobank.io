import React, { useState } from "react";
import ui from "../ui";
import auth from "../../@core/auth/auth";
import { useNavigate } from "react-router-dom";
import { HiLockClosed } from "react-icons/hi";
import { FormWrapper, LoginWrapper } from "./login";

const Auth2fa = () => {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const onSubmit = async () => {
    try {
      if (!code || code.length !== 6) setError("code is required");
      else {
        setError("");
        await auth.validate2fa(code);
        navigate("/user-dashboard");
      }
    } catch (error: string | any) {
      setError(error);
    }
  };

  return (
    <LoginWrapper>
      <FormWrapper>
        <ui.Badge
          background="#b5f7cd"
          style={{
            marginBottom: "10px",
          }}
        >
          <HiLockClosed color="green" />
        </ui.Badge>
        {/* <ui.PinInput length={6} onChange={(e) => console.log(e)} /> */}
        <ui.Text
          text="Authenticate"
          fontSize="28px"
          fontWeight={900}
          style={{
            textAlign: "center",
          }}
        />
        <ui.Text
          text="Enter the four digit authentication code"
          fontWeight={500}
          style={{
            marginBottom: "25px",
            textAlign: "center",
          }}
        />
        <ui.CustomInput
          onChange={(e) => setCode(e.target.value)}
          placeholder="Enter code"
          maxLength={6}
          error={error}
        />
        <ui.Button
          text="Proceed"
          width="100%"
          height={50}
          onClick={() => onSubmit()}
          fontSize={18}
          color={"white"}
          backgroundColor={"#3B1FA4"}
          borderRadius={"10px"}
          style={{ margin: "22px auto", fontWeight: 500 }}
        />
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Auth2fa;
