import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from '.';

function renderBrand(navType: string) {
    return <a>{navType}</a>;
}

storiesOf('Navbar', module)
    .add('Regular', () => <Navbar>{renderBrand('Regular')}</Navbar>)
    .add('Purple', () => <Navbar color='purple'>{renderBrand('Purple')}</Navbar>)
    .add('Blue', () => <Navbar color='blue'>{renderBrand('Blue')}</Navbar>)
    .add('With Items', () => <Navbar color='blue'><>{renderBrand('Brand')}<a>Link</a><a>Link</a></></Navbar>);