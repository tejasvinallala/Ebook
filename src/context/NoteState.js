import React, { useState } from 'react';
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const notesInitial=[];
    const [notes,setNotes]=useState(notesInitial);
    const host="http://localhost:5000"
    
    //fetching notes
    const getnote = async () => {
  try {
    const response = await fetch(`${host}/api/notes/fetchnotes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token": localStorage.getItem("token"),
      },
    });

    const json = await response.json();

    console.log(json);

    if (json.notes) {
      setNotes(json.notes);
    } else {
      setNotes([]);
    }
  } catch (error) {
    console.error(error);
    setNotes([]);
  }
};

      //addnotes api
      const addnote=async(title,description,tag)=>{
        const response=await fetch(`${host}/api/notes/addnotes`,{
          method:"POST",
          headers:{
            "content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
            
          },
          body:JSON.stringify({title,description,tag})
    
      });
      const json=await response.json();
      setNotes(notes.concat(json));

    }
    //deletenote
    const deleteNote=async(id)=>{
      const response=await fetch(`${host}/api/notes/deletenotes/${id}`,{
          method:"DELETE",
          headers:{
            "content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
            
          },
        });

      const json=await response.json();
      console.log("deleting notes"+id);
      const newNote=notes.filter((notes)=>{
        return notes._id!==id

      })
      setNotes(newNote);

    }
    //updatenotes
    const updateNote=async(id,title,description,tag)=>{
      const response=await fetch(`${host}/api/notes/updatenotes/${id}`,
        {
          method:"PUT",
          headers:{
            "content-Type":"application/json",
            "auth-token":localStorage.getItem('token')
            
          },
          body:JSON.stringify({title,description,tag})
    
      });
     const json=await response.json();
     const newNotes=JSON.parse(JSON.stringify(notes));
      for(let i=0;i<newNotes.length;i++){
        if(newNotes[i]._id===id){
          newNotes[i].title=title;
          newNotes[i].description=description;
          newNotes[i].tag=tag;
          break;
        }
      }
      setNotes(newNotes);
    }
    
    return (
    <div>
      <NoteContext.Provider value={{notes,setNotes,addnote,deleteNote,getnote,updateNote}}>
        {props.children}
        </NoteContext.Provider>    
    </div>
  );
}

export default NoteState;
