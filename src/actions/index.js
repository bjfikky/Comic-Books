import Parse from 'parse';

import firebase from 'firebase';





export const getBooks = () => {
    
    var booksRef = firebase.database().ref().child('books');
    
    let books = booksRef.ref.once('value');
    
    return {
        type: 'GET_BOOKS',
        payload: books
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
    
    var booksRef = firebase.database().ref().child('books');
    
    let addbook = booksRef.push().set({
        title: 'Punisher',
        cover: 'images/punisher.jpg'
    });
    
    console.log("Add book");
    
    return {
        type: 'ADD_BOOK',
        payload: addbook
    }
}

