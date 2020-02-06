import React, { useContext } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) =>{
    const {dispatch} = useContext(BookContext);

    return (
        <li onClick={()=>dispatch({type: "EDIT_BOOK", id: book.id})}> 
            {book.isEdit ?
              ( 
                    <div>
                        <input type="text" placeholder={book.title} value={book.title}/>
                        <input type="text" placeholder={book.author} value={book.author}/>
                    </div>
              )
                :(
                    <div>
                        <div className="title">{book.title}</div>
                        <div className="author">{book.author}</div>
                    </div>
                )} 
         </li>
    )
}

export default BookDetails;