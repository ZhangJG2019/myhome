import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

import Login from "./login";
import Main from "./module/main";
import AuthCheck from './auth';

function Info(){
  return <div>信息</div>
}

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/home" component={Main} />
            <AuthCheck path='/abc' component={Info}/>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
export default App;
