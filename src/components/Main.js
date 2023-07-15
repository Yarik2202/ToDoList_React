import React, { useContext } from "react";

import classes from "./Main.module.css";

import NewNoteForm from "./NewNoteForm";
import ContextNote from "./ContextNote";
import Notes from "./Notes";

function Main() {
  const dataCtx = useContext(ContextNote);

  return (
    <div className={classes.main_element_position}>
      <NewNoteForm />
      <div className={classes.main_notes_position} >
        <Notes />
      </div>
    </div>
  );
}

export default Main;
