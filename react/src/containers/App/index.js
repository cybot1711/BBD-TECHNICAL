import React, { Component } from "react";
import { Banner } from "../../components/Banner";
import { AccountList } from "../../components/AccountList";

export class App extends Component {
    render() {
        return (
        <React.Fragment>
            <Banner/>
            <AccountList/>
        </React.Fragment>
        );
    }
}