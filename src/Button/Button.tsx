import React from 'react';
import './Button.scss';

export type ButtonProps = {
    children?: React.ReactNode,
    color?: 'blue' | 'green'
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = (props: ButtonProps) => {
    const { children, className, color } = props;
    const cssClass = `${color ? ` ${color} ` : ''}${className ? ` ${className}` : ''}`;
    return <button {...props} className={`val${cssClass}`}>{children}</button>;
}
