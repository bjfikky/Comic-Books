var books = [

];

const comicbooks = (state=[] , action) => {
    
    switch (action.type) {
        case 'GET_BOOKS':
            console.log("from reducer", action.payload);
            
            var snap = action.payload;
            
           snap.forEach( function(childSnap){
               books.push({
                   id: childSnap.key,
                   title: childSnap.val().title,
                   cover: childSnap.val().cover
               });
               console.log(childSnap.val().title);
           });
            
            return books;
        
        case 'BOOKS_SEARCHED':
            let term = action.payload;
            
            let searchedBooks = [];
            
            for (let i = 0; i < books.length; i++) {
                if (books[i].title.toLowerCase().includes(term.toLowerCase()) ) {
                    searchedBooks.push(books[i]);
                }
            }
            
            return searchedBooks;
            
        case 'ADD_BOOK':
            
            let book = action.payload;
            book.id = state.length + 1;
            
            books = [...books];
            
            books.push(book);
            
            return books;
            
        default: return state;
    }
    
}

export default comicbooks;