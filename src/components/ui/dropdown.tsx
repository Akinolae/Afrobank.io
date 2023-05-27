import { Dropdown, IDropdownProps } from "@fluentui/react/lib/Dropdown";

const CustomDropDown = (props: IDropdownProps) => {
  const { label, placeholder, styles, options, onChange, ...rest } = props;
  return (
    <Dropdown
      options={options}
      label={label}
      placeholder={placeholder}
      styles={styles}
      onChange={onChange}
      {...rest}
    />
  );
};

export default CustomDropDown;
