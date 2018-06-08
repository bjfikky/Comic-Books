
let books = [

];

const comicbooks = (state=[] , action) => {
    
    switch (action.type) {
        case 'GET_BOOKS':
            
            state = [];
            
            books = action.payload;
            
            books.forEach(book => {
                console.log(book.id);
                state.push({
                    id: book.data().title,
                    cover: book.data().cover,
                    title: book.data().title
                })
            });
            
            books = state;
            
            return state;
        
        case 'BOOKS_SEARCHED':
            let term = action.payload;
            
            let searchedBooks = [];
            
            for (let i = 0; i < books.length; i++) {
                if (books[i].title.toLowerCase().includes(term.toLowerCase()) ) {
                    searchedBooks.push(books[i]);
                }
            }
            
            return searchedBooks;
            
        default: return state;
    }
    
};

export default comicbooks;