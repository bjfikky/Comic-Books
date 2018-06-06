import Parse from 'parse';

import CONFIG from '../config/config';

Parse.initialize(CONFIG.api_id);
Parse.serverURL = CONFIG.url;



export const getBooks = () => {
    
    var test = Parse.Object.extend("ComicBooks");
    var query = new Parse.Query(test);
    
    var request = query.find();
    
    return {
        type: 'GET_BOOKS',
        payload: request
    };
}

export const selectBook = (book) => {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

export const searchBooks = (term) => {
    return {
        type: 'BOOKS_SEARCHED',
        payload: term
    }
}

export const addBook = (values) => {
    console.log("Add book");
    return {
        type: 'ADD_BOOK',
        payload: values
    }
}

