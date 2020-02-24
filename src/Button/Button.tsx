import React from 'react';
import './Button.scss';

export type ButtonProps = {
    className?: string,
    onClick?(event?: React.MouseEvent<HTMLButtonElement>): void,
    children?: React.ReactNode,
    color?: 'blue' | 'green'
}

export const Button = (props: ButtonProps) => {
    const { children, className, color, onClick } = props;
    return <button className={`${color} ${className}`} onClick={onClick}>{children}</button>;
}
