import React from 'react';
import './_style.scss';

export type ButtonProps = {
    children?: React.ReactNode,
    color?: 'blue' | 'green' | 'yellow' | 'red' | 'black' | 'purple' | 'violet' | 'teal' | 'orange' | 'brown',
    basic?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

export function Button(props: ButtonProps) {
    const { children, className, color, basic, ...buttonProps } = props;
    const cssClass = `${basic ? ' basic' : ''}${color ? ` ${color}` : ''}${className ? ` ${className}` : ''}`;

    return <button {...buttonProps} className={`val${cssClass}`}>{children}</button>;
}
