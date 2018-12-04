import * as React from "react";
import { Banner } from "../../components/Banner";
import { AccountList } from "../../components/AccountList";

export interface AppProps {
    compiler: string;
    framework: string;
    className: string;
}

export class App extends React.Component<AppProps, {}> {
    render() {
        return <React.Fragment>
            <Banner/>
            <AccountList/>
        </React.Fragment>;
    }
}