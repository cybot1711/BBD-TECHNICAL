import React from 'react';
import './styles.scss';

export const Button = props =>
    <button disabled={!props.enabled} className={props.enabled ? "button" : "button disabled"}>{props.lable}</button>
