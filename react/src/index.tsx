import * as React from "react";
import * as ReactDOM from "react-dom";
import { App } from "./containers/App/";

import './index.scss';

ReactDOM.render(
    <App className="container" compiler={"TypeScript"} framework={"React"} />,
    document.querySelector(".app")
);