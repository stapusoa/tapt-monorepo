import type { InputVariant, InputColor, InputSize } from "./constants"
import type { ReactNode, ChangeEvent, InputHTMLAttributes } from "react"

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "color" | "onChange"> {
  id?: string;
  label?: string;
  helperText?: string;
  errorText?: string;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  showClear?: boolean;
  fullWidth?: boolean;
  isDisabled?: boolean;
  isInvalid?: boolean;
  hasHelper?: boolean;
  variant?: InputVariant;
  color?: InputColor;
  inputSize?: InputSize;
  value?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onClear?: () => void;
}