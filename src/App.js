import React, { Component } from 'react';

import './App.css';

import BookList from './containers/book-list';
import Navbar from './components/navbar'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className=" App container">
                    <BookList/>
                </div>
            </div>
        );
    }
}

export default App;
