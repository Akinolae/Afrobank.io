import { Dropdown, IDropdownProps } from "@fluentui/react/lib/Dropdown";

const CustomDropDown: React.FC<IDropdownProps> = ({
  label,
  placeholder,
  styles,
  options,
  onChange,
  ...rest
}) => {
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
