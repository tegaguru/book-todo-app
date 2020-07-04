import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';
import {ReactComponent as EditSvg} from '../edit.svg';
import {ReactComponent as DeleteSvg} from '../delete.svg';
const BookDetails = ({book}) =>{
    
    const {dispatch} = useContext(BookContext);

    //This was my first try and i don't know why this wasn't working!
    
    // const [newData, editData] = useState({title:book.title, 
    //                                     author:book.author,  
    //                                     id: book.id });
    
    // const editAuthor = (e) => {
    //     editData({author: e.target.value})
    // }

    // const editTitle = (e) => {
    //     editData({title: e.target.value})
    // }



    //This is my second try! and it's working!
    
    const [newTitle, editTitle] = useState(book.title);
    const [newAuthor, editAuthor] = useState(book.author);
        
    
    const handleEdit = (e) => {
        e.preventDefault();
        dispatch({type: "FINAL_EDIT", 
        id: book.id, 
        newTitle: newTitle, 
        newAuthor: newAuthor
        });
        

    }
    return (
        <li> 
            {book.isEdit ?
              ( 
                    <div>
                        <form onSubmit={handleEdit}> 
                            <input type="text" 
                            name="title"  value={newTitle}  id={book.id} 
                            onChange={(e) => editTitle(e.target.value)} 
                            required/>
                            
                            <input type="text" 
                            name="author"  value={newAuthor} id={book.id} 
                            onChange={(e)=> editAuthor(e.target.value)} 
                            required/>
                            
                            <input type="submit" value="save"/>
                        </form>
                    </div>
              )
                :(
                    <div className="details">
                        <div className="details--main"> 
                            <div className="title">{book.title}</div>
                            <div className="author">{book.author}</div>
                        </div>
                        <div className="details--controls"> 
                            
                            <EditSvg className="icon icon__edit" 
                            onClick={()=>dispatch({type: "EDIT_BOOK", id: book.id})}/>
                            
                            <DeleteSvg className="icon icon__delete"
                            onClick={()=>dispatch({type: "REMOVE_BOOK", id: book.id})}/>
                        </div>
                        
                    </div>
                )} 
         </li>
    )
}

export default BookDetails;