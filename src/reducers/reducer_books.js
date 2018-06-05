var books = [
    {id: 1, title: 'Astonishing X-men', cover: 'images/xmen.jpg'},
    {id: 2, title: 'Justice League of America', cover: 'images/justiceleague.jpg'},
    {id: 3, title: 'New Avengers', cover: 'images/newavengers.jpg'},
    {id: 4, title: 'Batman', cover: 'images/batman.jpg'},
    {id: 5, title: 'Amazing Spiderman', cover: 'images/amazingspiderman.jpg'},
    {id: 6, title: 'The Incredible Hulk', cover: 'images/hulk.jpg'},
    {id: 7, title: 'Wolverine', cover: 'images/wolverine.jpg'},
    {id: 8, title: 'Captain America', cover: 'images/captainamerica.jpg'},
    {id: 9, title: 'Superman', cover: 'images/superman.jpg'},
    {id: 10, title: 'Iron Man', cover: 'images/ironman.jpg'},
    {id: 11, title: 'Green Lantern', cover: 'images/greenlantern.jpg'},
    {id: 12, title: 'Black Panther', cover: 'images/blackpanther.jpg'},
    {id: 13, title: 'Thanos', cover: 'images/thanos.jpg'},
    {id: 14, title: 'Teenage Mutant Ninja Turtles', cover: 'images/tmnt.jpg'},
    {id: 15, title: 'The Punisher', cover: 'images/punisher.jpg'},
    {id: 16, title: 'Fantastic Four', cover: 'images/fantasticfour.jpg'},
];

const comicbooks = (state = books , action) => {
    
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