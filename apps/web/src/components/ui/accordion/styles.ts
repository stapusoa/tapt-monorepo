export const accordionItemClass = "border-b last:border-b-0 typography"

export const accordionTriggerClass = `
  focus-visible:border-ring focus-visible:ring-ring/50
  flex flex-1 items-start justify-between gap-4
  rounded-md py-4 text-left transition-all
  outline-none hover:underline focus-visible:ring-[3px]
  disabled:pointer-events-none disabled:opacity-50
  [&[data-state=open]>svg]:rotate-180
  body-lg
`

export const accordionContentOuterClass = `
  data-[state=closed]:animate-accordion-up
  data-[state=open]:animate-accordion-down
  overflow-hidden body-md
`

export const accordionContentInnerClass = "pt-0 pb-4"