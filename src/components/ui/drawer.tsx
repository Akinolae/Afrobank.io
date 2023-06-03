import React from "react";
import { Panel } from "@fluentui/react";

interface DrawerProps {
  isOpen: boolean;
  children?: React.ReactElement;
  dismissPanel?: () => void;
}

const Drawer = (props: DrawerProps) => {
  const { isOpen, children, dismissPanel } = props;
  return (
    <Panel
      isBlocking={false}
      isOpen={isOpen}
      onDismiss={dismissPanel}
      closeButtonAriaLabel="Close"
      style={{
        background: 'yello'
      }}
    >
      {children}
    </Panel>
  );
};

export default Drawer;
