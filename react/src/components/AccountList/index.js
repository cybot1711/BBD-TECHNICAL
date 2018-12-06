import React, { Component } from 'react';
import * as Services from '../../services'
import { AccountField } from '../AccountField';

import './styles.scss'


export class AccountList extends Component {

    state = {
        data: [],
        isVisible: false,
        activeId: null,
        activeAmount: 0,
        amount: 0,
        activeAccountType: '',
        canWithdraw: false,
    }

    async componentDidMount() {
        this.fetchData()
    }


    toggleModal = () => this.setState(prevState => ({
        isVisible: !prevState.isVisible
    }));

    setId = activeId => this.setState({ activeId })

    setAccType = activeAccountType => this.setState({ activeAccountType })

    setAmount = activeAmount => this.setState({ activeAmount })

    fetchData = () =>
        Services.getAccounts()
            .then(data => this.setState({ data }), () => {
                console.log(data);
            });


    updateAccount = amount =>
        Services.patchAccount({ balance: amount }, this.state.activeId)


    updateAmount = e => {
        this.setState({ amount: Number(e.target.value) });
        if (this.state.activeAccountType === 'savings' && this.state.activeAmount - e.target.value > 0) {
            this.setState({ canWithdraw: true });
            return;
        }
        if (this.state.activeAccountType === 'cheque' && this.state.activeAmount - e.target.value > -500) {
            this.setState({ canWithdraw: true });
            return;
        }
        this.setState({ canWithdraw: false });
        return;
    }

    computeValidWithdrawl = (amount) => {
        this.updateAccount(amount)
        .then(() => this.fetchData())
        .then(() => this.toggleModal())
        .then(() => alert('Success'))
        
        
        
    }

    computeTotal = data => data.reduce((accumulator, { balance }) => accumulator + Number(balance), 0).toFixed(2)

    render() {
        const { data } = this.state;
        console.log('render')
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
                        id={item.id}
                        toggle={this.toggleModal}
                        setId={this.setId}
                        setAmount={this.setAmount}
                        setAccType={this.setAccType}
                        accountNumber={item.account_number}
                        accountType={item.account_type}
                        accountBalance={item.balance}
                    />)
                    : <AccountField />}
            </div>
            <div className="footer">
                <h2 className="copy">Balance</h2>
                <div className="total">R {this.computeTotal(data)}</div>
            </div>
            <div className={this.state.isVisible ? "modal" : "hide"}>
                <div className="modal-inner">
                    <h2 className="heading">Withdraw</h2>
                    {!this.state.canWithdraw && <span>Cannot Withdraw</span>}
                    <input
                        type="number"
                        onChange={this.updateAmount}
                        className="get-amount"
                    />
                    <button disabled={!this.state.canWithdraw} onClick={() => this.computeValidWithdrawl(this.state.activeAmount - this.state.amount)}>Ok</button>
                    <button onClick={this.toggleModal}>Cancel</button>
                </div>
            </div>
        </div>
    }

}