import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Container from './component/Container.js';


const Routing = () =>
    <Router>
        <Route  path="/Container:item.id.videoId" component={Container}/> 
    </Router>

export default Routing;