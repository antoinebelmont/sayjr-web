import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import { BrowserRouter } from "react-router-dom";
import "./assets/styles/base.scss";
import axios from "axios";
import Main from "./pages/Main";
import { Provider } from "react-redux";
import store from "stores";

const rootElement = document.getElementById("root");

const renderApp = Component => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter hashType="slash">
                <Component />
            </BrowserRouter>
        </Provider>,
        rootElement
    );
};
renderApp(Main);
if (module.hot) {
    module.hot.accept("./pages/Main", () => {
        const NextApp = require("./pages/Main").default;
        renderApp(NextApp);
    });
}
registerServiceWorker();
