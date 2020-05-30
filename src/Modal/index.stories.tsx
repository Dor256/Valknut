import React from 'react';
import { storiesOf } from '@storybook/react';
import { Modal } from '.';

storiesOf('Modal', module)
    .add('Regular', () => <Modal show><h1 style={{ textAlign: 'center' }}>Regular</h1></Modal>)
    .add('Hidden', () => <Modal show={false}><h1>Flex</h1></Modal>);