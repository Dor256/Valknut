import React from 'react';
import { storiesOf } from '@storybook/react';
import { Container } from '.';

storiesOf('Container', module)
    .add('Regular', () => <Container><h1 style={{ textAlign: 'center' }}>Regular</h1></Container>)
    .add('Flex', () => <Container flex><h1>Flex</h1></Container>);