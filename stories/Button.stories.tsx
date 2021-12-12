import { Button, Props } from '../src/components/Button';
import { Meta, Story } from '@storybook/react';

const meta: Meta = {
  title: 'Button',
  component: Button,
};

export default meta;

// export const Default = () => <Button variant="primary">I'm button</Button>;
const Template = (props) => <Button {...props}>{props.children}</Button>;

export const Primary = Template.bind({});
const Secondary = Template.bind({});

Primary.args = {
  variant: 'primary',
  children: 'Im button',
};

// export { Primary};
// export default Primary;
