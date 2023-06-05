import React from "react";
import { Panel } from "@fluentui/react";

interface DrawerProps {
  isOpen: boolean;
  dismissPanel?: () => void;
}

const Drawer: React.FC<React.PropsWithChildren<DrawerProps>> = ({
  isOpen,
  children,
  dismissPanel,
}) => {
  return (
    <Panel
      isBlocking={false}
      isOpen={isOpen}
      onDismiss={dismissPanel}
      closeButtonAriaLabel="Close"
      style={{
        background: "yello",
      }}
    >
      {children}
    </Panel>
  );
};

export default Drawer;
