import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import VideoData from '../component/VideoData';
import FetchApi from '../component/Api';

const Routes = () => 
<Router>    
    <Switch>
        <Route path="/" exact component={FetchApi} />
        <Route path="/Videos/:id" component={VideoData}/>
        
    </Switch>
</Router>

export default Routes;