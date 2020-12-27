// import React from 'react';
// import { storiesOf } from '@storybook/react';
// import Button from './index';
// import { action } from '@storybook/addon-actions';
// import { withKnobs, text, select } from '@storybook/addon-knobs';

// storiesOf('Button', module)
//     .addDecorator(withKnobs)
//     .add('default', () => <Button text={text('text', 'button label')} onClick={action('clicked')} />)
//     .add('different', () => (
//         <Button
//             text={select(
//                 'text',
//                 { 'button-label-1': 'button-label-1', 'button-label-2': 'button-label-2' },
//                 'button-label-1',
//             )}
//             onClick={action('clicked')}
//         />
//     ));

import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Button from './index';
import { Props } from './index';

export default {
    title: 'Button',
    component: Button,
} as Meta;

const Template: Story<any> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    text: 'button',
};
