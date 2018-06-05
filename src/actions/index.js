
import firebase from 'firebase';

export const getBooks = () => {
    return {
        type: 'BOOK_SELECTED',
        payload: null
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

