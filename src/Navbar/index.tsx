import React from 'react';
import './_style.scss';

export type NavbarProps = {
    children?: React.ReactNode
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Navbar = (props: NavbarProps) => {
    const { children, className, ...divProps } = props;
    const cssClass = `${className ? `${className}` : ''}`;

    return (
        <nav {...divProps} className={`val${cssClass}`}>
            {children}
        </nav>
    );
};