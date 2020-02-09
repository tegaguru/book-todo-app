import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const NewBookForm = () =>{
    const{dispatch} = useContext(BookContext);
    const[title, setTitle] = useState('');
    const[author, setAuthor] = useState('');
    const handleSubmit = (event) =>{
        event.preventDefault();
        dispatch({type: 'ADD_BOOK', book:
        {title, author}
    })
        setTitle('');
        setAuthor('');
    }
    console.log(title);
    console.log(author);
    return (
        <form onSubmit={handleSubmit}> 
            <input type="text" placeholder="book title" value={title}
            onChange={(e)=> setTitle(e.target.value)} required/>
            <input type="text" placeholder="book author" value={author}
            onChange={(e)=> setAuthor(e.target.value)} required/>
            <input type="submit" value="add book!"/>
        </form>
    )
}


export default NewBookForm;