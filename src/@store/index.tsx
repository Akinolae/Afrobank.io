import React, { useCallback, useEffect } from "react";

interface Props {
  children?: React.ReactElement;
  initialState: object;
}

const store = localStorage;

const StoreWrapper = (props: Props) => {
  const { initialState } = props;

  const hasData = (value: object) => Object.keys(value).length;

  if (!initialState || !hasData(initialState))
    throw new Error(`initialState is required`);

  useEffect(() => {
    if (!hasData(store)) {
      store.setItem("user", JSON.stringify(initialState));
    }
  }, []);

  const Render = useCallback((e: any) => {
    return <>{props.children}</>;
  }, []);

  return <Render />;
};

export { StoreWrapper };
