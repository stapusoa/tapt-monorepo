import { forwardRef, useEffect, useId } from 'react'
import {
  containerCss,
  labelCss,
  inputWrapCss,
  inputCss,
  helperTextCss,
} from './styles'
import { Button } from '@/components/ui/button'
import { IconButton } from '@/components/ui/button/iconButton'
import { KeyCode } from '@/lib/constants'
import type { InputProps } from './types'


export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      isDisabled = false,
      errorText,
      fullWidth = false,
      helperText,
      id,
      isInvalid = false,
      focusOnInput,
      label,
      placeholder,
      type = 'text',
      value,
      slotBefore = null,
      slotAfter = null,
      onClear,
      onClick,
      onKeyDown,
      onSubmit,
      containerRef,
      ...remainingProps
    },
    ref
  ) => {
    const autoId = useId()
    const htmlId = id || autoId
    const hasHelperText = !!helperText || !!errorText
    const helperTextId = hasHelperText ? `${htmlId}-helper-text` : null

    const noPaddingForSlotAfter =
      slotAfter?.type === IconButton || slotAfter?.type === Button

    if (import.meta.env.NODE_ENV !== 'production') {
      const missingAnyLabel = !label && !remainingProps['aria-label']
      if (missingAnyLabel) {
        console.warn(
          `Consider providing <Input id="${htmlId}"/> with either a label or aria-label prop. Label is shown visually, while aria-label is only surfaced to assistive technology (AT). A good label makes a difference.`
        )
      }
    }

    const handleKeyboardBehaviors: InputProps['onKeyDown'] = e => {
      // Clear input with Esc key
      if (e.key === KeyCode.ESC && !!value) {
        onClear?.(e)
      }
      // Trigger onSubmit with Enter key
      if (e.key === KeyCode.ENTER) {
        onSubmit?.(e)
      }
      // Also call user provided onKeyDown handler
      onKeyDown?.(e)
    }

    useEffect(() => {
      setTimeout(() => {
        if (focusOnInput && ref != null && typeof ref !== 'function')
          ref?.current?.focus()
      }, 300)
    }, [])

    return (
      <div
        className={containerCss(fullWidth)}
        data-disabled={isDisabled}
        data-invalid={isInvalid}
        ref={containerRef}
      >
        {!!label && (
          <label
            className={labelCss}
            data-required={remainingProps.required}
            htmlFor={htmlId}
          >
            {label}
          </label>
        )}
        <div
          className={inputWrapCss({
            noPaddingForSlotAfter,
            isDisabled,
            isInvalid,
          })}
          onClick={isDisabled ? () => {} : onClick}
        >
          {slotBefore}
          <input
            {...remainingProps}
            aria-describedby={helperTextId ?? 'What should this be?'}
            className={inputCss}
            disabled={isDisabled}
            id={htmlId}
            placeholder={placeholder}
            ref={ref}
            type={type}
            value={value}
            onKeyDown={handleKeyboardBehaviors}
          />
          {slotAfter}
        </div>
        {hasHelperText && (
          <p
            className={helperTextCss(!!errorText)}
            id={helperTextId ?? 'What should go here??'}
          >
            {errorText || helperText}
          </p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
