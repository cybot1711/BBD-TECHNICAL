import * as React from 'react';

export interface ButtonProps {
    enabled: boolean;
    className: string;
    lable: string;
}

export const Button = (props: ButtonProps) =>
    <button className={props.enabled ? "button" : "button disabled"}>{props.lable}</button>
