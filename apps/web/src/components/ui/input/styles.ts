import { cn } from "@/lib/utils"

export const containerCss = (fullWidth: boolean) =>
  cn(
    'inline-flex flex-col data-[invalid="true"]:color-red min-w-0 min-h-0 children:min-w-0 children:min-h-0',
    fullWidth ? 'w-full' : 'w-auto'
  )

export const labelStyle = 'flex flex-col data-[invalid="true"]:color-red'

export const labelCss =
  "type-small-text-desktop text-left color-grey-800 pl-3.5 capitalize after:[&[data-required='true']]:content-['*'] after:color-red after:pl-0.5"

export const helperTextCss = (hasError: boolean) =>
  cn(
    'type-subtext text-left font-2.5 pl-3.5 m-0 data-[invalid="true"]:color-current-color',
    hasError ? 'color-red' : 'color-grey-700'
  )

export const inputWrapCss = ({
  noPaddingForSlotAfter,
  isDisabled,
  isInvalid,
}: {
  noPaddingForSlotAfter: boolean
  isDisabled: boolean
  isInvalid: boolean
}) =>
  cn(
    'flex flex-row items-center b-1px b-solid b-grey-300 rd-2 my-0.5 p-0 pl-3.5 gap-2.5 [&:focus-within]:b-canyon',
    {
      'pr-0': noPaddingForSlotAfter,
      'pr-3.5': !noPaddingForSlotAfter,
      'bg-grey-200': isDisabled,
      'bg-white': !isDisabled,
      'b-current-color': isInvalid,
    }
  )

export const inputCss =
  'bg-transparent b-none w-0 flex-grow outline-none py-3.5 px-0 color-current-color cursor-pointer text-4 placeholder:color-grey-700 disabled:cursor-default'

