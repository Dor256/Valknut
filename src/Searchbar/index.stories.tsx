import React from 'react';
import { storiesOf } from '@storybook/react';
import { Searchbar } from '.';

storiesOf('Searchbar', module)
    .add('Regular', () => <Searchbar placeholder='Regular'/>)
    .add('Rounded', () => <Searchbar rounded placeholder='Rounded'/>);