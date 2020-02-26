import React from "react";
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '.';

storiesOf('Button', module)
  .add('Reguler', () => <Button>Regular</Button>)
  .add('Green', () => <Button color='green'>Green</Button>)
  .add('Yellow', () => <Button color='yellow'>Yellow</Button>)
  .add('Red', () => <Button color='red'>Red</Button>)
  .add('Black', () => <Button color='black'>Black</Button>)
  .add('Purple', () => <Button color='purple'>Purple</Button>)
  .add('Violet', () => <Button color='violet'>Violet</Button>)
  .add('Teal', () => <Button color='teal'>Teal</Button>)
  .add('Orange', () => <Button color='orange'>Orange</Button>)
  .add('Brown', () => <Button color='brown'>Brown</Button>)
  .add('Inverse', () => <Button color='blue' inverted>Inverse Blue</Button>)
  .add('Clickable', () => <Button onClick={action('clicked')}>Click Me!</Button>);