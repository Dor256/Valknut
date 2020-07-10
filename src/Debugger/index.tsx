import React from 'react';
import './_style.scss';

export function Debugger(props: React.PropsWithChildren<{}>) {
  return <div className='val debugger'>{JSON.stringify(props.children)}</div>;
}