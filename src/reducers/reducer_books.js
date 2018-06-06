import _ from 'lodash';

var books = [

];

const comicbooks = (state=[] , action) => {
    
    switch (action.type) {
        case 'GET_BOOKS':
            
            var snap = action.payload;
            
           snap.forEach( function(childSnap){
               if (state.indexOf(childSnap.key) === -1) {
                   state.push({
                       id: childSnap.key,
                       title: childSnap.val().title,
                       cover: childSnap.val().cover
                   });
                   console.log(childSnap.val().title);
               }
               
               
           });
           
           state = [...state];
           
          state =  _.uniqBy(state, 'id');
           
           return state;
        
        case 'BOOKS_SEARCHED':
            let term = action.payload;
            
            let searchedBooks = [];
            
            for (let i = 0; i < books.length; i++) {
                if (books[i].title.toLowerCase().includes(term.toLowerCase()) ) {
                    searchedBooks.push(books[i]);
                }
            }
            
            return searchedBooks;
            
            
        default: return state;
    }
    
}

export default comicbooks;