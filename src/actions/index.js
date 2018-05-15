
const selectBook = (book) => {
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}



export default selectBook;