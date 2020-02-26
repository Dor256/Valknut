import React from 'react';
import './_style.scss';

export type ButtonProps = {
    children?: React.ReactNode,
    color?: 'blue' | 'green' | 'yellow' | 'red' | 'black' | 'purple' | 'violet' | 'teal' | 'orange' | 'brown',
    inverted?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export const Button = (props: ButtonProps) => {
    const { children, className, color, inverted, ...buttonProps } = props;
    const cssClass = `${inverted ? ' inverted' : ''}${color ? ` ${color} ` : ''}${className ? `${className}` : ''}`;

    return <button {...buttonProps} className={`val${cssClass}`}>{children}</button>;
};
