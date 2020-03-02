import React from "react";
import { storiesOf } from '@storybook/react';
import { Button } from '.';
import { Container } from "../Container";

storiesOf('Button', module)
  .add('Plain', () => {
    return (
      <Container flex>
        <Button>Regular</Button>
        <Button color='green'>Green</Button>
        <Button color='blue'>Blue</Button>
        <Button color='yellow'>Yellow</Button>
        <Button color='red'>Red</Button>
        <Button color='black'>Black</Button>
        <Button color='purple'>Purple</Button>
        <Button color='violet'>Violet</Button>
        <Button color='teal'>Teal</Button>
        <Button color='orange'>Orange</Button>
        <Button color='brown'>Brown</Button>
      </Container>
    );})
  .add('Basic', () => {
    return (
      <Container flex>
        <Button color='green' basic>Green</Button>
        <Button color='blue' basic>Blue</Button>
        <Button color='yellow' basic>Yellow</Button>
        <Button color='red' basic>Red</Button>
        <Button color='black' basic>Black</Button>
        <Button color='purple' basic>Purple</Button>
        <Button color='violet' basic>Violet</Button>
        <Button color='teal' basic>Teal</Button>
        <Button color='orange' basic>Orange</Button>
        <Button color='brown' basic>Brown</Button>
      </Container>
    );});