import React from "react";
import { Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

interface Props {
  element?: React.ReactElement;
  isSignedIn: boolean;
}

const ProtectedRoute = (props: Props) => {
  const { element, isSignedIn } = props;

  if (!isSignedIn) {
    return <Navigate to={"/"} replace />;
  }

  return <>{element}</>;
};

const mapStateToProps = (state: any) => ({
  isSignedIn: state.user.isSignedIn,
});

export default connect(mapStateToProps, {})(ProtectedRoute);
