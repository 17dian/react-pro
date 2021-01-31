import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import App from "./App.js";
import Login from "./page/login/index";
import Admin from "./admin";
import Button from './page/ui/button';
import NoMatch from "./page/nomatch"

export default class IRouter extends React.Component {
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        <Route path="/login" component={Login}></Route>
                        <Route path="/ui" render={() => {
                            return (<Admin>
                                <Switch>
                                    <Route path="/ui/buttons" component={Button}></Route>
                                    <Route component={NoMatch}></Route>
                                </Switch>
                            </Admin>)
                        }}></Route>
                    </Switch>
                </App>
            </HashRouter>
        )
    }
}