import React, { Component } from 'react';
import * as Services from '../../services'
import { AccountField } from '../AccountField';

import './styles.scss'


export class AccountList extends Component {

    state = {
        data: []
    }

    componentWillMount() {
        Services.getAccounts()
            .then(data => this.setState({ data }))
    }

    render() {
        const { data } = this.state;
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
            <div className="account-list-fields-wrapper">
                {data.length > 0 ? data.map((item, i) =>
                    <AccountField
                        key={i}
                        accountNumber={item.account_number}
                        accountType={item.account_type}
                        accountBalance={item.balance}
                    />)
                    : <AccountField />}
            </div>
        </div>
    }

}