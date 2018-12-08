import React, { Component } from 'react';
import * as Services from '../../services';
import AccountField from '../AccountField';

import './styles.scss';


export default class AccountList extends Component {
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
      this.fetchData();
    }


    toggleModal = () => this.setState(prevState => ({
      isVisible: !prevState.isVisible,
    }));

    setId = activeId => this.setState({ activeId })

    setAccType = activeAccountType => this.setState({ activeAccountType })

    setAmount = activeAmount => this.setState({ activeAmount })

    fetchData = () => Services.getAccounts()
      .then(data => this.setState({ data }), () => {
      });


    updateAccount = amount => Services.patchAccount({ balance: amount }, this.state.activeId)


    updateAmount = (e) => {
      const { activeAccountType, activeAmount } = this.state;
      this.setState({ amount: Number(e.target.value) });
      if (activeAccountType === 'savings' && activeAmount - e.target.value > 0) {
        this.setState({ canWithdraw: true });
        return;
      }
      if (activeAccountType === 'cheque' && activeAmount - e.target.value > -500) {
        this.setState({ canWithdraw: true });
        return;
      }
      this.setState({ canWithdraw: false });
    }

    computeValidWithdrawl = (amount) => {
      this.updateAccount(amount)
        .then(() => this.fetchData())
        .then(() => this.toggleModal())
        .then(() => alert('Success'));
    }

    computeTotal = data => data
      .reduce((accumulator, { balance }) => accumulator + Number(balance), 0).toFixed(2)

    render() {
      const {
        data, canWithdraw, activeAmount, amount, isVisible,
      } = this.state;
      return (
        <div className="account-list">
          <div className="title">
            <h1>Account List</h1>
          </div>
          <div className="headings">
            <h3 className="heading">Account number</h3>
            <h3 className="heading">Account Type</h3>
            <h3 className="heading">Balance</h3>
            <h3 className="heading" />
          </div>
          <div className="account-list-fields-wrapper">
            {data.length > 0 ? data.map(item => (
              <AccountField
                key={item.id}
                id={item.id}
                toggle={this.toggleModal}
                setId={this.setId}
                setAmount={this.setAmount}
                setAccType={this.setAccType}
                accountNumber={item.account_number}
                accountType={item.account_type}
                accountBalance={item.balance}
              />
            ))
              : <AccountField />}
          </div>
          <div className="footer">
            <h2 className="copy">Balance</h2>
            <div className="total">
R
              {this.computeTotal(data)}
            </div>
          </div>
          <div className={isVisible ? 'modal' : 'hide'}>
            <div className="modal-inner">
              <h2 className="heading">Withdraw</h2>
              {!canWithdraw && <span>Cannot Withdraw</span>}
              <input
                type="number"
                onChange={this.updateAmount}
                className="get-amount"
              />
              <button
                type="submit"
                disabled={!canWithdraw}
                onClick={() => this.computeValidWithdrawl(activeAmount - amount)}
              >
                Ok
              </button>
              <button type="reset" onClick={this.toggleModal}>Cancel</button>
            </div>
          </div>
        </div>
      );
    }
}
