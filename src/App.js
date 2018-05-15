import React, { Component } from 'react';

import './App.css';

import BookList from './containers/book-list';
import SearchBar from './containers/search-bar';
import Navbar from './components/navbar'
import SelectedBook from './containers/selected-book'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                <div className="App container">
                    <SearchBar/>
                    <div className="row">
                        <BookList/>
                        <SelectedBook/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
