import { Dropdown, IDropdownProps } from "@fluentui/react/lib/Dropdown";
import { Error } from "./customInput";

interface Props extends IDropdownProps {
  error?: string;
}

const CustomDropDown: React.FC<Props> = ({
  label,
  placeholder,
  styles,
  options,
  error,
  onChange,
  ...rest
}) => {
  return (
    <>
      <Dropdown
        options={options}
        label={label}
        placeholder={placeholder}
        styles={
          styles || {
            caretDownWrapper: {
              height: "100%",
              display: "flex",
              alignItems: "center",
              paddingRight: "15px",
            },
            title: {
              height: "45px",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              fontSize: "12px",
              border: `1px solid #858282`,
              paddingLeft: "15px",
              outline: "none",
              boxShadow: "none",
            },
            dropdownItem: {
              fontSize: "10px",
              background: "#3B1FA4",
            },
            dropdownItemSelected: {
              fontSize: "10px",
            },
          }
        }
        onChange={onChange}
        {...rest}
      />
      {!!error ? <Error className="font-black text-xs pt-[1.5%]">{error}</Error> : null}
    </>
  );
};

export default CustomDropDown;
