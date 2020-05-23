import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from '.';

function renderBrand(navType: string) {
    return <h1 style={{ textAlign: 'center' }}>{navType}</h1>;
}

storiesOf('Navbar', module)
    .add('Regular', () => <Navbar>{renderBrand('Regular')}</Navbar>)
    .add('Purple', () => <Navbar color='purple'>{renderBrand('Purple')}</Navbar>)
    .add('Blue', () => <Navbar color='blue'>{renderBrand('Blue')}</Navbar>);