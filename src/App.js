import React, { useState } from 'react'; 
import Header from './Header';
import Footer from './Footer.jsx'; 
import Keepnote from './keepnote.jsx';
import Note from './note.jsx';

function App() {
  const [newnote , setnote] = useState([]);
  
  const createNote = (note) => {
    setnote((prevdta) =>{
      return [  ...prevdta , note ]
    });
      console.log(note);
  }
 const deleteNote = (id) =>{
     setnote((revData) =>
        revData.filter((current , indx) =>{
          return indx !==id;
        })
     )
 }

  return (
     <>
       <Header />
      
      
       <Keepnote create={createNote} />
       <div className="d-flex flex-wrap ">
       {
         newnote.map((value , index) =>{
           return <Note 
           key={index} 
           title ={value.title}
           id={index} 
           content={value.content}  
           delete={deleteNote}
           />
         })
       }
       </div> 
       <Footer />
     </>
    );
}

export default App;
