import * as React from 'react';

import './index.scss'

export interface Accounts {
    accounts_number: number;
    type: string;
    balance: string;
    id: number;
}

export interface AccountListProps extends Array<Accounts> { }

export class AccountList extends React.Component {
    render() {
        return <div className="account-list">
            <div className="title">
                <h1>Account List</h1>
            </div>
            <div className="headings">
                <h3 className="heading">Account number</h3>
                <h3 className="heading">Account Type</h3>
                <h3 className="heading">Balance</h3>
                <h3 className="heading"></h3>
            </div>
        </div>
    }

}