import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
const Note = (props) => {

    const deletenote = () => {
       props.delete(props.id);
    }
    return (
        <> 
         
        <div className="note  m-5">
                <h5 className="m-2 text-muted">{props.title}</h5><br />
                <p className="m-2 text-dark text-capitalize">
                     {props.content}
            </p>
                <button className='btn  border delete' onClick={deletenote}>
                <DeleteIcon></DeleteIcon>
                </button>
     </div>


       
           
        </>
    )
}

export default Note;