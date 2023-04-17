import React, { JSXElementConstructor } from "react";
import styled, { CSSProperties } from "styled-components";
import ui from "../ui";
import { FaKey } from "react-icons/fa";
import { MessageBarType } from "@fluentui/react";
import { Link } from "react-router-dom";
import { MdOutlineCopyright } from "react-icons/md";

const Wrapper = styled.div<CSSProperties>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
  padding: 0px;
  margin: 0px;
  overflow-y: scroll;
  transition: all ease 0.03s;
  display: flex;
  flex-direction: column;
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
    <Wrapper className="bg-dots" height="100vh">
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
