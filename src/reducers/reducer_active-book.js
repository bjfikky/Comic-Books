const activeBook = (state = null, action) => {
    switch (action.type) {
        case 'BOOK_SELECTED':
            return action.payload;
    
        case 'GET_BOOK':
            console.log(action.payload.data().title);
        
            let payload = action.payload;
        
            state = {
                id: payload.id,
                cover: payload.data().cover,
                title: payload.data().title
            };
        
            return state;
            
            
        default: return state;
    }
}

export default activeBook;