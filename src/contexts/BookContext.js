import React, { createContext, useReducer, useEffect} from 'react';
import { bookReducer } from '../reducers/bookReducer';

export const BookContext = createContext();


const BookContextProvider = ({children}) => {
    const [books, dispatch] = useReducer(bookReducer,[], ()=>{
        const data = localStorage.getItem('books');
        return data ? JSON.parse(data) : [];
    }); 
    
    
    useEffect(()=>{
       localStorage.setItem('books', JSON.stringify(books))
    }, [books]);


    

    return(
        <BookContext.Provider value = {{books, dispatch}}>
            {children}
        </BookContext.Provider>
    )
}


export default BookContextProvider;