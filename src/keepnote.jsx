import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add'; 

const Keepnote = (props) =>{
    const   [note , setnote] = useState({   
        title : "",
        content : "",
    });

    const changeNote = (event) =>{
      const {name , value} = event.target;
     
      setnote( (prevVal) =>{
        return {
            ...prevVal,
            [name] : value,
      };

      });
    }
    
    const addnote = () => {
         props.create(note);
         setnote( {
            title : "",
            content : "",
         })
    }
    return (
        <>
             <div className="main-note">
                 <form>
                     <input type="text" className="font-weight-bold " name ="title" placeholder="Title" autoComplete="off" value={note.title} onChange={changeNote} />
                     <textarea rows="" column="" placeholder="write a note" name="content" value={note.content} onChange={changeNote}></textarea>
                      <Button className="border text-white bg-warning  button  " onClick={addnote}>
                          <AddIcon  >  </AddIcon>
                      </Button>
                 </form>
             </div>
        </>
    )
}

export default Keepnote;