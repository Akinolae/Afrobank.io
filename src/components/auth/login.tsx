import React from "react";
import styled, { CSSProperties } from "styled-components";
import ui from "../ui";

const LoginWrapper = styled.div<CSSProperties>`
  width: ${(props) => props.width || "100%"};
  background: ${(props) => props.background || ""};
  height: ${(props) => props.height};
  padding: 0px;
  margin: 0px;
  position: relative;
`;

const FormWrapper = styled.div``;

const Login = () => {
  return (
    <LoginWrapper background={"red"} height="100vh">
      <FormWrapper>
        <ui.CustomInput
          type={"email"}
          label="email"
          hasIcon={true}
          onChange={(e: any) => console.log(e.target.value)}
        />
        <div style={{ marginTop: "20px" }}>
          <ui.CustomPasswordInput hasIcon={true} label="password" />
        </div>

        <ui.Button
          text="Login"
          fontSize={18}
          color={"white"}
          style={{ marginTop: "20px" }}
        />
      </FormWrapper>
    </LoginWrapper>
  );
};

export default Login;
