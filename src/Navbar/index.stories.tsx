import React from 'react';
import { storiesOf } from '@storybook/react';
import { Navbar } from '.';
import { Searchbar } from '../Searchbar';

function renderBrand(navType: string) {
  return <a>{navType}</a>;
}

storiesOf('Navbar', module)
  .add('Regular', () => <Navbar>{renderBrand('Regular')}</Navbar>)
  .add('Purple', () => <Navbar color='purple'><>{renderBrand('Purple')}<a>Link</a><a>Link</a></></Navbar>)
  .add('Blue', () => <Navbar color='blue'><>{renderBrand('Blue')}<a>Link</a><a>Link</a></></Navbar>)
  .add('With search bar', () => <Navbar color='blue'><>{renderBrand('Brand')}<Searchbar placeholder='Search...' /></></Navbar>);
