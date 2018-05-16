
const selectBook = (book) => {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

const searchBooks = (term) => {
    return {
        type: 'BOOKS_SEARCHED',
        payload: term
    }
}

export  {selectBook, searchBooks};