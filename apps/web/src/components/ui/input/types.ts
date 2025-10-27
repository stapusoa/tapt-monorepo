import type * as React from "react"

export interface InputProps extends NativeInput {
  errorText?: string
  fullWidth?: boolean
  isInvalid?: boolean
  isDisabled?: boolean
  focusOnInput?: boolean
  label?: string
  helperText?: string
  slotBefore?: React.ReactElement
  slotAfter?: React.ReactElement
  onClear?: (e: React.MouseEvent | React.KeyboardEvent) => void
  onChange?:
    | React.ChangeEventHandler<HTMLInputElement>
    | React.FormEventHandler<HTMLInputElement>
  /** Useful for accessing the outer container element rather than the input itself */
  containerRef?: React.Ref<HTMLDivElement>
}

export type NativeInput = React.InputHTMLAttributes<HTMLInputElement>
