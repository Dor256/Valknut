import React, { useState } from 'react';
import { storiesOf } from '@storybook/react';
import { Checkbox } from './';

function CheckboxWrapper(props: { withStrikethrough?: boolean, label: string }) {
  const [checked, setChecked] = useState(false);

  return <Checkbox checked={checked} onCheck={(value) => setChecked(value)} label={props.label} withStrikethrough={props.withStrikethrough} />;
}

storiesOf('Checkbox', module)
  .add('Simple', () => {
    return (
      <>
        <CheckboxWrapper label='Regular' />
        <CheckboxWrapper withStrikethrough label='Strikethrough' />
      </>
    );
  });
