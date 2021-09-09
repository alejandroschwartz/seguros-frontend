import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "../components/Layout";
import Home from "../containers/Home";
import Cotizar from "../containers/Cotizar";

const App = () => (
    <BrowserRouter>
        <Layout>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/cotizar" component={Cotizar} />
            </Switch>
        </Layout>
    </BrowserRouter>
);

export default App;