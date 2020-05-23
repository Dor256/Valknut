import React from 'react';
import './_style.scss';

export type SearchbarProps = {
  rounded?: boolean
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Searchbar(props: SearchbarProps) {
  const { rounded, className, ...inputProps } = props;
  const cssClass = `${rounded ? ' rounded' : ''}${className ? ` ${className}` : ''}`;
  return (
    <input
      {...inputProps}
      type='search'
      className={`val val-search${cssClass}`}
    />
  );
}