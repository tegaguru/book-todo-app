export const bookReducer = (state,action) =>{
    switch(action.type){
        case "ADD_BOOK":
            return [...state, {
                title: action.book.title,
                author:action.book.author, 
                id: state.length + 1,
                isEdit: false
            }]
        case "REMOVE_BOOK":
            return state.filter(book=> book.id !== action.id);

        case "EDIT_BOOK":
            return state.map(book=>{
                if(book.id === action.id){
                    var newCondition = true;
                    book.isEdit =  newCondition; 
                }
        
                return book;
            })
        case "FINAL_EDIT":
            return state.map(book=> {
                if(book.id === action.id){
                    book.title = action.newTitle;
                    book.isEdit = false;
                }
                return book;
            }) 
                
        default: 
            return state
    }
}


