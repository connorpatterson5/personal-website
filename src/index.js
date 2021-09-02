import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import FrontPage from './components/frontpage/frontPage';
import ContactPage from './components/contactpage/contactPage';
import * as serviceWorker from './serviceWorker';

const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={FrontPage} />
        <Route path="/contact-me" component={ContactPage} />
      </Switch>
      </BrowserRouter>,
      rootElement
    );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();