import React from 'react';
import './_style.scss';

export type NavbarProps = {
  children?: React.ReactNode,
  color?: 'blue' | 'green' | 'yellow' | 'red' | 'black' | 'purple' | 'violet' | 'teal' | 'orange' | 'brown'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export function Navbar(props: NavbarProps) {
  const { children, color, className, ...divProps } = props;
  const cssClass = `${color ? ` ${color}` : ''}${className ? ` ${className}` : ''}`;

  return (
    <nav {...divProps} className={`val${cssClass}`}>
      {children}
      <div className='val hamburger'>|||</div>
    </nav>
  );
}
