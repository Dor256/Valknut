import React from 'react';
import './_style.scss';
export declare type ContainerProps = {
    children?: React.ReactNode;
    flex?: boolean;
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare const Container: (props: ContainerProps) => JSX.Element;
