import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import App from './App';

// app
import Admin from './Admin';
import Login from './views/login';
import NotFound from './views/404';

// 业务
import Home from './pages/home';
import BaseTable from './pages/table';
import Test from './pages/Test';
import Form from './pages/form';

export default class AppRouter extends Component {

  render() {
    return (
        <Router>
            <App>
                <Route path="/login" component={Login}/>
                <Route exact path="/" render={() => 
                    <Redirect to="/login"/>
                } />
                <Route path="/admin" render={() => 
                    <Admin>
                        <Switch>
                            <Route path="/admin/home" component={Home}/>
                            <Route path="/admin/t" component={Test} />
                            <Route path="/admin/table" component={BaseTable}/>
                            <Route path="/admin/form" component={Form}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </Admin>
                }/>
            </App>
        </Router>
    );
  }
}
