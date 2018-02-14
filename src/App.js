import React, { Component } from 'react';
import './App.css';
import { hot } from 'react-hot-loader';

import Map from './Map';

class App extends Component {
    render() {
        return (
            <div className="App">
                Test
                <Map />
            </div>
        );
    }
}

export default hot(module)(App);
