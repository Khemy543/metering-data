import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login }  from '../src/pages/loginpage';
import { Homepage }  from '../src/pages/homepage';
import {Report} from './pages/reportspage';
import {Stats} from './pages/statisticpage';
import {Nodepage} from './pages/nodepage';
import {Settings} from './pages/settings';
import {About} from './pages/about';
import {Addnode} from './pages/addnode';


export const Routers =() => 
    <BrowserRouter>

    
        <Switch>
        <Route exact path='/' component={Login} />
        <Route exact path='/homepage' component={Homepage} />
        <Route exact path='/report' component={Report} />
        <Route exact path='/stats' component={Stats} />
        <Route exact path='/nodepage' component={Nodepage} />
        <Route exact path='/settings' component={Settings} />
        <Route exact path='/about' component={About} />
        <Route exact path='/registernode' component={Addnode} />
        </Switch>
    </BrowserRouter>