const selectBook = (book) => {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}

const searchBooks = (term) => {
    return {
    
    }
}

export {selectBook, searchBooks};