import React from 'react';
import {
    Route,
    Switch
} from "react-router-dom";
import Home from './components/home/home';
import Library from './components/library/library'



export default function Router() {
    return (

            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/library" component ={Library}/>
            </Switch>

    )
}