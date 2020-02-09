import React, { createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();


const BookContextProvider = (props) => {
    const [books, dispatch] = useReducer(bookReducer,[
        {title: 'Sophies world', author: 'Jostein Gaarder',id:1, isEdit: false},
        {title: 'Insight', author: 'Tasha Eurich', id:2, isEdit: false},
    ], 
    
    //this is optional and helps you in caching data! - Almost like a min database for you
    ()=>{
        const localData = localStorage.getItem('books');
        return  localData ? JSON.parse(localData): []
    })
    

    
    useEffect(()=>{
       localStorage.setItem('books', JSON.stringify(books))
    })


    

    return(
        <BookContext.Provider value = {{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}


export default BookContextProvider;