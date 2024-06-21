import '.';
import type { Meta, StoryObj } from '@storybook/web-components';
import { WUIButton } from './wui-button.element';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

const meta: Meta<WUIButton> = {
  title: 'Buttons/Button',
  component: 'wui-button',
  id: 'wui-button',
  tags: ['autodocs'],

  args: {
    href: undefined,
    look: 'default'
  },
  argTypes: {
    look: {
      control: { type: 'select' },
      options: ['default', 'primary']
    }
  },

  render: (props) => 
    html`
      <wui-button
        href=${ifDefined(props.href)}
        look=${props.look}
        >
        I am a button!
      </wui-button>
    `
}

export default meta;
type Story = StoryObj<WUIButton>;

export const Basic: Story = {};

export const Primary: Story = {
  args: {
    look: 'primary'
  }
}