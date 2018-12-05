import React, { Component } from 'react';
import { Button } from '../Button';

import './styles.scss';

export class AccountField extends Component {
    static defaultProps = {
        accountNumber: "xxxxxxxxxxxx",
        accountType: "not specified",
        accountBalance: "0.00"
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
    formatAmount = amount => {
        if (amount >= 0) {
            return `ZAR ${Math.abs(amount).toFixed(2)}`
        }
        return `-ZAR ${Math.abs(amount).toFixed(2)}`
    }
    render() {
        return <div className="account-field-wrapper">
            <div className="account-field">{this.props.accountNumber}</div>
            <div className="account-field">{this.props.accountType}</div>
            <div className="account-field">{this.formatAmount(this.props.accountBalance)}</div>
            <div className="account-field"><Button lable={"withdraw"} enabled={this.isEnabled(this.props.accountBalance, this.props.accountType)}/></div>
        </div>
    }
}
