import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import firebase from 'firebase';

import './App.css';
import config from './config/config';

import BookList from './containers/book-list';
import SearchBar from './containers/search-bar';
import Navbar from './components/navbar'
import AddNew from './containers/add-book'
import SelectedBook from './containers/selected-book'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    componentWillMount() {
        firebase.initializeApp(config);
        const firestore = firebase.firestore()
        
        const settings = {timestampsInSnapshots: true};
        firestore.settings(settings);
    }
    
    
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Fragment>
                        <Navbar/>
                        <div className="App container">
                            <Switch>
                                <Route path="/add" component={AddNew}/>
                                <Route path="/:id" component={Read}/>
                                <Route path="/" component={BooksPage}/>
                            </Switch>
                        </div>
                    </Fragment>
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
