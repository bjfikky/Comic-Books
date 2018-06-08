import firebase from 'firebase';


export const getBooks = () => {
    
    let database = firebase.firestore();

    let booksRef = database.collection("books");

    // let booksQuery = booksRef.get().then(products => {
    //     products.forEach(doc => {
    //         console.log(doc.data());
    //     });
    // });
    
    let booksQuery = booksRef.get();

    return {
        type: 'GET_BOOKS',
        payload: booksQuery
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
    
    let database = firebase.firestore();
    
    let booksRef = database.collection("books");
    
    let addbook = booksRef.add({
        title: 'Punisher',
        cover: 'images/punisher.jpg'
    });
    
    console.log("Add book");
    
    return {
        type: 'ADD_BOOK',
        payload: addbook
    }
}

