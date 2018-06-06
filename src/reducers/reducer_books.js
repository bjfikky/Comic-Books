var books = [

];

const comicbooks = (state=[] , action) => {
    
    switch (action.type) {
        case 'GET_BOOKS':
            var results = action.payload;
    
            for (var i = 0; i < results.length; i++) {
                var object = results[i];
                console.log(object.id + ' - ' + object.get('title'));
                
                books.push({
                    id: object.id,
                    title: object.get("title"),
                    cover: object.get("cover")
                })
            }
            
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