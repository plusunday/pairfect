import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import firebase from "firebase/app";
import "firebase/database";

import { CONFIG } from "./config";
import "../node_modules/antd/dist/antd.min.css";

import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

const config = {
    apiKey: CONFIG.apiKey,
    authDomain: CONFIG.authDomain,
    databaseURL: CONFIG.databaseURL
};
firebase.initializeApp(config);
ReactDOM.render(<Routes />, document.getElementById("root"));
registerServiceWorker();
