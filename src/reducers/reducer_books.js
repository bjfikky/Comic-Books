const comicbooks = (state , action) => {
    
    var books = [
        {title: 'Astonishing X-men'},
        {title: 'Justice League of America'},
        {title: 'New Avengers'},
        {title: 'Batman'},
        {title: 'Amazing Spiderman'},
        {title: 'The Incredible Hulk'},
        {title: 'Wolverine'},
        {title: 'Captain America'},
        {title: 'Superman'},
        {title: 'Iron Man'},
        {title: 'Green Lantern'},
        {title: 'Black Panther'},
        {title: 'Thanos'},
        {title: 'Teenage Mutant Ninja Turtles'},
        {title: 'The Punisher'},
        {title: 'Fantastic Four'},
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