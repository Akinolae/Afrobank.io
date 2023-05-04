import React, { JSXElementConstructor } from "react";
import styled, { CSSProperties } from "styled-components";
import ui from "../ui";
import { FaKey } from "react-icons/fa";
import { MessageBarType } from "@fluentui/react";
import { Link } from "react-router-dom";
import { MdOutlineCopyright } from "react-icons/md";
import { breakpoints } from "../../breakpoints";

const { xScreen } = breakpoints();

const Wrapper = styled.div<CSSProperties>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  overflow-y: scroll;
  transition: all ease 0.03s;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3%;
  ${xScreen} {
    width: 95%;
  }
`;
const FormWrapper = styled.div`
  width: 100%;
  max-width: 30rem;
  margin: auto;
  transition: all ease 0.3s;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 1.8%;
  background: white;
  border-radius: 10px;
  box-shadow: -18px 7px 82px 0px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -18px 7px 82px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -18px 7px 82px 0px rgba(0, 0, 0, 0.23);

  ${xScreen} {
    width: 95%;
  }
`;

interface Props {
  headerText: string;
  subText: string;
  children?: React.ReactElement<any, string | JSXElementConstructor<any>>;
  error: string;
  routeText?: string;
  linkto?: string | "";
}

const AuthWrapper = (props: Props) => {
  return (
    <Wrapper className="bg-dots">
      <FormWrapper>
        <ui.Badge
          background="#b5f7cd"
          borderRadius="50%"
          style={{
            marginBottom: "10px",
            height: "50px",
          }}
        >
          <FaKey color="green" />
        </ui.Badge>
        <ui.Text
          text={props.headerText}
          fontSize="24px"
          fontWeight={900}
          style={{
            textAlign: "center",
          }}
        />
        <ui.Text
          text={props.subText}
          fontSize="14px"
          fontWeight={500}
          style={{
            marginBottom: "25px",
            textAlign: "center",
          }}
        />
        <ui.Alert type={MessageBarType.error} text={props.error} />
        <>{props.children}</>
        <div style={{ display: "flex", placeContent: "center" }}>
          <Link
            to={props?.linkto || ""}
            style={{
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: 400,
            }}
          >
            {props.routeText}
          </Link>
        </div>
      </FormWrapper>
      <div style={{ paddingBottom: "20px" }} className="flex-center">
        <MdOutlineCopyright />
        <ui.Text
          text={`${new Date().getFullYear()}`}
          fontSize="12px"
          fontWeight={900}
        />
      </div>
    </Wrapper>
  );
};

export default AuthWrapper;
