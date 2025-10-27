import type { Meta, StoryObj } from '@storybook/react'

import { Input as InputComponent } from './input'

const meta: Meta<typeof InputComponent> = {
  component: InputComponent,
}

export default meta
type Story = StoryObj<typeof InputComponent>

export const Input: Story = {
  args: {
    fullWidth: true,
    isDisabled: false,
    label: 'Label for input',
  },
  render: args => (
    <div className='w-50'>
      <InputComponent {...args} />
    </div>
  ),
}
