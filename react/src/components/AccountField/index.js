import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Button from '../Button';

import './styles.scss';

export default class AccountField extends Component {
    static defaultProps = {
      accountNumber: 'xxxxxxxxxxxx',
      accountType: 'not specified',
      accountBalance: '0.00',
      setAccType: () => {},
      setAmount: () => {},
      setId: () => {},
      toggle: () => {},
      id: 0,
    };

    isEnabled = (amount, type) => {
      if (type === 'savings' && amount > 0) {
        return true;
      }
      if (type === 'cheque' && amount > -500) {
        return true;
      }
      return false;
    }

    formatAmount = (amount) => {
      const absAmount = Math.abs(amount).toFixed(2);
      if (amount > 0) {
        return `ZAR ${absAmount}`;
      }
      return `-ZAR ${absAmount}`;
    }

    render() {
      const {
        accountNumber, accountType, accountBalance, setId, setAmount, setAccType, toggle, id,
      } = this.props;
      return (
        <div className="account-field-wrapper">
          <div className="account-field">{accountNumber}</div>
          <div className="account-field">{accountType}</div>
          <div className="account-field">{this.formatAmount(accountBalance)}</div>
          <div className="account-field">
            <Button
              onClick={(e) => {
                e.preventDefault();
                setId(id);
                setAmount(Number(accountBalance));
                setAccType(accountType);
                toggle();
              }}
              lable="withdraw"
              enabled={this.isEnabled(accountBalance, accountType)}
            />
          </div>
        </div>
      );
    }
}

AccountField.propTypes = {
  accountNumber: PropTypes.string,
  accountType: PropTypes.string,
  accountBalance: PropTypes.string,
  setAccType: PropTypes.func,
  setId: PropTypes.func,
  toggle: PropTypes.func,
  id: PropTypes.number,
  setAmount: PropTypes.func,
};
