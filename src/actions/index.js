
import firebase from 'firebase';
import DB_CONFIG from '../config/config';

import Parse from 'parse';

Parse.initialize("benjaminorimoloye");
Parse.serverURL = 'http://comic-book-benjamin.herokuapp.com/parse'

const app = firebase.initializeApp(DB_CONFIG);
const database = app.database().ref();

export const getBooks = () => {
    let books = [];
    
    var test = Parse.Object.extend("ComicBooks");
    var query = new Parse.Query(test);
    
    query.find({
        success: function(results) {
            console.log("Successfully retrieved " + results.length + " books.");
            // Do something with the returned Parse.Object values
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log(object.get('title'));
            }
            return {
                type: 'GET_BOOKS',
                payload: books
            };
        },
        error: function(error) {
            alert("Error: " + error.code + " " + error.message);
        }
    });
    
    
    // database.once('child_added', snapshot => {
    //     books.push({
    //         id: snapshot.key,
    //         title: snapshot.val().title,
    //         cover: snapshot.val().cover
    //     });
    //     console.log(snapshot.val().title);
    //         return {
    //             type: 'GET_BOOKS',
    //             payload: books
    //         };
    // });
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

