import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StrainPicker from "./StrainPicker";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={StrainPicker} />
            <Route  path="/strain/Id" component={App} />
            <Route  component={NotFound} />
        </Switch>
    </BrowserRouter>
);

export default Router;