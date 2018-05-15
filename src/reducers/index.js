import { combineReducers } from 'redux';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active-book';
import SearchTerm from './reducer_search-term';

const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    searchTerm: SearchTerm
});

export default rootReducer;