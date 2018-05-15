const activeBook = (state = null, action) => {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    
        case 'BOOKS_SEARCHED':
            return action.payload;
            
        default: return state;
    }
}

export default activeBook;