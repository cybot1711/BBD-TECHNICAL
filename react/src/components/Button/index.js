import React from 'react';
import { PropTypes } from 'prop-types';
import './styles.scss';

const Button = props => <button onClick={props.onClick} disabled={!props.enabled} className={props.enabled ? 'button' : 'button disabled'}>{props.lable}</button>;

Button.propTypes = {
  onClick: PropTypes.func,
  enabled: PropTypes.bool,
  lable: PropTypes.string,
};

export default Button;
