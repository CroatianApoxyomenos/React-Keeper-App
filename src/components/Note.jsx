import React from "react";
import BackspaceIcon from '@mui/icons-material/Backspace';

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}><BackspaceIcon /></button>
    </div>
  );
}

export default Note;
