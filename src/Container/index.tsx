import React from 'react';
import './_style.scss';

export type ContainerProps = {
    children?: React.ReactNode,
    flex?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Container = (props: ContainerProps) => {
    const { flex, children, className, ...divProps } = props;
    const cssClass = `${flex ? ' flex' : ''}${className ? ` ${className}` : ''}`;

    return (
        <div {...divProps} className={`val${cssClass}`}>
            {children}
        </div>
    );
};