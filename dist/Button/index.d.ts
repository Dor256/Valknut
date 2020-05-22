import React from 'react';
import './_style.scss';
export declare type ButtonProps = {
    children?: React.ReactNode;
    color?: 'blue' | 'green' | 'yellow' | 'red' | 'black' | 'purple' | 'violet' | 'teal' | 'orange' | 'brown';
    basic?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export declare const Button: (props: ButtonProps) => JSX.Element;
