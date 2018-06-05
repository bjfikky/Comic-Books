import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active-book';


const rootReducer = combineReducers({
    books: BooksReducer,
    activeBook: ActiveBook,
    form: formReducer,
});



export default rootReducer;