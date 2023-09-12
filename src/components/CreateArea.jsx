import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  const [expanded,setExpanded] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    
    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }
  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form>
      {expanded?<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
        />:null}
        
        <textarea
          name="content"
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          placeholder="Take a note..."
          rows={expanded?"3":"1"}
        />
        {expanded?<button onClick={submitNote}>Add</button>:null}
        
      </form>
    </div>
  );
}

export default CreateArea;
