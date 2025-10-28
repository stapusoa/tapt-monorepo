export const INPUT_SIZE = ['sm', 'md', 'lg'] as const
export type InputSize = (typeof INPUT_SIZE)[number];

export const INPUT_VARIANT = ['default', 'outline', 'filled'] as const
export type InputVariant = (typeof INPUT_VARIANT)[number];

export const INPUT_COLOR = ['default', 'primary', 'success', 'danger', 'neutral'] as const
export type InputColor = (typeof INPUT_COLOR)[number];