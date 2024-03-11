import { Toggle, IToggleProps } from "@fluentui/react/lib/Toggle";
import { Stack } from "@fluentui/react/lib/Stack";
import React from "react";

const Switch: React.FC<IToggleProps> = ({ onChange, label, ...rest }) => {
  return (
    <Stack>
      <Toggle
        label={!!label ? <div>label</div> : ""}
        onChange={onChange}
        {...rest}
      />
    </Stack>
  );
};

export default Switch;
