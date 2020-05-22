import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from '.';

storiesOf('Navbar', module)
    .add('Regular', () => <Navbar><h1 style={{ textAlign: 'center' }}>Regular</h1></Navbar>);