import React from 'react';
import { storiesOf } from '@storybook/react';
import { Debugger } from '.';

storiesOf('Debugger', module)
    .add('Regular', () => <Debugger>Debug</Debugger>);