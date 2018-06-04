import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'

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
                <BrowserRouter>
                    <div className="App container">
                        <Switch>
                            <Route path="/read" component={Read}/>
                            <Route path="/" component={BooksPage}/>
                        </Switch>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}



const BooksPage = () => {
    return (
        <div>
            <SearchBar/>
            <div className="row">
                <BookList/>
                <SelectedBook/>
            </div>
        </div>
    );
};


const Read = () => {
    return (
        <div>
            <h1>Read</h1>
        </div>
    );
};




export default App;
