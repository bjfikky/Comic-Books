import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import firebase from 'firebase';

import './App.css';
import config from './config/config';

import BookList from './containers/book-list';
import SearchBar from './containers/search-bar';
import Navbar from './components/navbar';
import AddNew from './containers/add-book';
import SelectedBook from './containers/selected-book';
import ShowBook from './containers/show-book';

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
                                <Route path="/books/add" component={AddNew}/>
                                <Route path="/books/:id" component={ShowBook}/>
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






export default App;
