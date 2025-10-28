import React, { useState } from "react"
import { cn } from "@/lib/utils"
import type { InputProps } from "./types"
import { inputWrapper, helperTextStyle } from "./styles"
import { X } from "lucide-react"

export const Input: React.FC<InputProps> = ({
  id,
  label,
  helperText,
  errorText,
  startIcon,
  endIcon,
  showClear,
  fullWidth,
  isDisabled,
  isInvalid,
  hasHelper,
  variant,
  color,
  inputSize,
  value: controlledValue,
  defaultValue,
  onChange,
  onClear,
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState(defaultValue ?? "")

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : uncontrolledValue

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!isControlled) setUncontrolledValue(e.target.value)
    onChange?.(e)
  }

  const handleClear = () => {
    if (!isControlled) setUncontrolledValue("")
    onClear?.()
    onChange?.({ target: { value: "" } } as React.ChangeEvent<HTMLInputElement>)
  }

  return (
    <div className={cn("flex flex-col", fullWidth && "w-full")}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1 text-sm font-medium text-neutral-700"
        >
          {label}
        </label>
      )}

      <div
        className={cn(
          inputWrapper({
            variant,
            color,
            size: inputSize,
            fullWidth,
            disabled: isDisabled,
            invalid: isInvalid,
          })
        )}
      >
        {startIcon && <span className="text-neutral-500">{startIcon}</span>}

        <input
          id={id}
          disabled={isDisabled}
          value={value}
          onChange={handleChange}
          className={cn(
            "flex-1 bg-transparent outline-none border-none placeholder-neutral-500",
            startIcon && "pl-2",
            endIcon && "pr-2"
          )}
          {...props}
        />

        {/* End Icon / Clear Button */}
        {showClear && value ? (
          <button
            type="button"
            onClick={handleClear}
            className="mr-3 text-neutral-400 hover:text-neutral-600"
            aria-label="Clear input"
          >
            <X size={16} />
          </button>
        ) : (
          endIcon && <span className="text-neutral-500">{endIcon}</span>
        )}
      </div>

      {(hasHelper || isInvalid) && (
        <p className={helperTextStyle({ invalid: isInvalid })}>
          {isInvalid ? errorText : helperText}
        </p>
      )}
    </div>
  )
}