import React from "react";
import { Panel } from "@fluentui/react";
import { DrawerProps } from "../../interface/index.interface";

const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  isOpen,
  children,
  dismissPanel,
  width,
}) => {
  return (
    <Panel
      isBlocking={false}
      isOpen={isOpen}
      onDismiss={dismissPanel}
      closeButtonAriaLabel="Close"
      customWidth={width}
      style={{
        height: "100vh",
      }}
    >
      {children}
    </Panel>
  );
};

export default Drawer;
