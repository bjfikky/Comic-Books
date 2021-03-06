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

export const showBook = (bookId) => {
    
    let database = firebase.firestore();
    
    let booksRef = database.collection("books");
    
    let bookQuery = booksRef.doc(bookId).get();
    
    console.log("showing book");
    
    return {
        type: 'GET_BOOK',
        payload: bookQuery
    }
    
}

export const addBook = (values, image ,callback) => {
    
    let database = firebase.firestore();
    
    let storage = firebase.storage();
    
    let booksRef = database.collection("books");
    
    let imageName = image.name.replace(/\s+/g, "-").toLowerCase();
    
    imageName = imageName + Date.now();
    
    let imageRef = storage.ref().child(imageName);
    
    console.log(image);
    
    imageRef.put(image);
    
    let addBook = booksRef.add({
        title: values.title,
        cover: `https://firebasestorage.googleapis.com/v0/b/comic-book-8ad1f.appspot.com/o/${imageName}?alt=media`
    }).then(() => callback());
    
    console.log("Add book");
    
    return {
        type: 'ADD_BOOK',
        payload: addBook
    }
};

export const deleteBook = (bookId, callback) => {
    console.log(bookId);
    
    let database = firebase.firestore();
    
    let booksRef = database.collection("books");
    
    //TODO: Delete associated image when book is deleted
    
    
    let booksQuery = booksRef.doc(bookId).delete().then(() => {
        callback();
        console.log("Book deleted successfully");

        return booksRef.get();
        
    });
    
    return {
        type: 'GET_BOOKS',
        payload: booksQuery
    }
    
};

export const clearSelectedBook = () => {

    return {
        type: 'CLEAR_BOOK',
        payload: 'clear'
    }
}

