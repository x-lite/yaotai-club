import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';

// app
import Admin from './Admin';
import Login from './views/login';
import NotFound from './views/404';

// 业务
import Home from './pages/home';
import Table from './pages/table';
import Form from './pages/form';

export default class AppRouter extends Component {

  render() {
    return (
        <Router>
            <App>
                <Route path="/login" component={Login}/>
                <Route path="/admin" render={() => 
                    <Admin>
                        <Switch>
                            <Route path="/admin/home" component={Home}/>
                            <Route path="/admin/table" component={Table}/>
                            <Route path="/admin/form" component={Form}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Admin>
                }/>
                <Route/>
                <Route/>
            </App>
        </Router>
    );
  }
}
