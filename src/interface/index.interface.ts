import { MessageBarType } from "@fluentui/react";
import { CSSProperties } from "styled-components";
import { FormikFormProps } from "formik";

interface FormikProps extends FormikFormProps {
  initialValues: object;
  validationSchema: object;
  onSubmit: (params: any) => any;
  render: (props: any) => React.ReactElement;
}

interface RegisterState {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}

interface ModalProps {
  isOpen: boolean;
  toggle(): void;
  width?: number | string;
  showCloseButton?: boolean;
  size?: "small" | "medium" | "large";
  type?: "modal" | "drawer";
  styles?: object;
  className?: string;
  color?: string;
  id?: string | number;
}

interface AlertProps {
  text: string;
  type:
    | MessageBarType.error
    | MessageBarType.warning
    | MessageBarType.success
    | MessageBarType.info
    | MessageBarType.severeWarning;
  hasBtn?: boolean;
  resetChoice?: () => void;
}

interface BadgeProps {
  style: CSSProperties;
  background: string;
  borderRadius: string;
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  color?: string;
  borderRadius?: string;
  backgroundColor?: string;
  fontSize?: number;
  height?: number | string;
  isLoading?: boolean;
  width?: string | string;
  className?: string;
}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  hasIcon?: boolean;
  label?: string;
  labelColor?: string;
  error?: string | undefined;
  option?: [{ label: string; value: string }, { label: string; value: string }];
}

interface DrawerProps {
  isOpen: boolean;
  dismissPanel?: () => void;
  width?: string;
}

interface PinProps {
  length: number;
  secrete?: boolean;
  type?: string;
  onChange: (params: any) => any;
}

interface TextProps {
  text?: string;
  style?: React.CSSProperties;
  fontWeight?: string | number;
  fontSize?: string;
  className?: string;
}

interface AuthWrapperProps {
  headerText: string;
  subText: string;
  error: string;
  routeText?: string;
  linkto?: string | "";
  authIcon?: React.FC<any> | any;
}

interface Error {
  status: boolean;
  message: string;
}

export type {
  Error,
  PinProps,
  TextProps,
  AlertProps,
  InputProps,
  ModalProps,
  BadgeProps,
  FormikProps,
  ButtonProps,
  DrawerProps,
  AuthWrapperProps,
  RegisterState
};
