const comicbooks = (state , action) => {
    
    var books = [
        {id: 1, title: 'Astonishing X-men'},
        {id: 2, title: 'Justice League of America'},
        {id: 3, title: 'New Avengers'},
        {id: 4, title: 'Batman'},
        {id: 5, title: 'Amazing Spiderman'},
        {id: 6, title: 'The Incredible Hulk'},
        {id: 7, title: 'Wolverine'},
        {id: 8, title: 'Captain America'},
        {id: 9, title: 'Superman'},
        {id: 10, title: 'Iron Man'},
        {id: 11, title: 'Green Lantern'},
        {id: 12, title: 'Black Panther'},
        {id: 13, title: 'Thanos'},
        {id: 14, title: 'Teenage Mutant Ninja Turtles'},
        {id: 15, title: 'The Punisher'},
        {id: 16, title: 'Fantastic Four'},
    ]
    
    switch (action.type) {
        case 'BOOKS_SEARCHED':
            let term = action.payload;
            
            let searchedBooks = [];
            
            for (let i = 0; i < books.length; i++) {
                if (books[i].title.toLowerCase().includes(term.toLowerCase()) ) {
                    searchedBooks.push(books[i]);
                }
            }
            
            return searchedBooks;
    
        default: return books;
    }
}

export default comicbooks;