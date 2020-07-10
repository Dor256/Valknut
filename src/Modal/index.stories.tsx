import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Modal } from '.';

storiesOf('Modal', module)
  .add('Regular', () => <Modal onDismiss={action('click')} show><h1 style={{ textAlign: 'center' }}>Regular</h1></Modal>)
  .add('Hidden', () => <Modal onDismiss={action('click')} show={false}><h1>Flex</h1></Modal>);
