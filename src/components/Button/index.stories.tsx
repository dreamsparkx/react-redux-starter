import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './index';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

storiesOf('Button', module)
    .addDecorator(withKnobs)
    .add('default', () => <Button text={text('text', 'button label')} onClick={action('clicked')} />)
    .add('different', () => (
        <Button
            text={select(
                'text',
                { 'button-label-1': 'button-label-1', 'button-label-2': 'button-label-2' },
                'button-label-1',
            )}
            onClick={action('clicked')}
        />
    ));
