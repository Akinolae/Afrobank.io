import ui from "../ui";
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MessageBarType } from "@fluentui/react";
import { AuthWrapperProps } from "../../interface/index.interface";
import { MdOutlineCopyright } from "react-icons/md";
import styled, { CSSProperties } from "styled-components";
import { Key } from "iconsax-react";

const Wrapper = styled(motion.div)<CSSProperties | any>`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  padding: 3%;
  display: flex;
  overflow-y: scroll;
  align-items: center;
  flex-direction: column;
  transition: all ease 0.03s;
`;

const FormWrapper = styled(motion.div)`
  margin: auto;
  display: flex;
  border-radius: 10px;
  flex-direction: column;
  box-sizing: border-box;
  transition: all ease 0.3s;
  transition: all ease-in-out 0.3s;
  box-shadow: -18px 7px 82px 0px rgba(0, 0, 0, 0.23);
  -moz-box-shadow: -18px 7px 82px 0px rgba(0, 0, 0, 0.23);
  -webkit-box-shadow: -18px 7px 82px 0px rgba(0, 0, 0, 0.23);
`;

const AuthWrapper = (props: React.PropsWithChildren<AuthWrapperProps>) => {
  const IconComponent = props?.authIcon;
  return (
    <Wrapper className="bg-dots">
      <FormWrapper className="w-11/12 p-7 bg-white md:w-[50%] lg:w-[45%] xl:w-[30%] md:p-10 lg:p-10">
        <ui.Badge
          background="#b5f7cd"
          borderRadius="50%"
          style={{
            marginBottom: "10px",
            height: "50px",
          }}
        >
          {props?.authIcon ? (
            <IconComponent variant="Bold" color="green" />
          ) : (
            <Key variant="Bold" color="green" />
          )}
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
        {props?.error ? (
          <div className="pb-4">
            <ui.Alert type={MessageBarType.error} text={props.error} />
          </div>
        ) : null}
        <>{props.children}</>
        <div style={{ display: "flex", placeContent: "center" }}>
          <Link
            to={props?.linkto || ""}
            style={{
              textDecoration: "none",
              fontSize: "12px",
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
