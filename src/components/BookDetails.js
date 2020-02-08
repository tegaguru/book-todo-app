import React, { useContext, useState } from 'react';
import { BookContext } from '../contexts/BookContext';

const BookDetails = ({book}) =>{
    const {dispatch} = useContext(BookContext);

    const [newData, editData] = useState({author:book.author, title:book.title, id: book.id });
    
    const editAuthor = (e) => {
        editData({author: e.target.value})
    }

    const editTitle = (e) => {
        editData({title: e.target.value})
    }


    const handleEdit = (e) => {
        e.preventDefault();
        dispatch({type: "FINAL_EDIT", 
        id: book.id, 
        newTitle: newData.title, 
        newAuthor: newData.author
        });

    }
    
    console.log(newData.title);
    console.log(newData.author);
    
    


    //const[{author}, editAuthor] = useState(book);

    //const[{title}, editTitle] = useState(book);
    return (
        <li onClick={()=>dispatch({type: "EDIT_BOOK", id: book.id})}> 
            {book.isEdit ?
              ( 
                    <div>
                        <form onSubmit={handleEdit}> 
                            <input type="text" name="title"  value={newData.title}  id={book.id} onChange={editTitle} />
                            <input type="text" name="author"  value={newData.author} id={book.id} onChange={editAuthor}/>
                            <input type="submit" value="save"/>
                        </form>
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