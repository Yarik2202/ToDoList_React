import React, { useContext } from "react";

import classes from "./Notes.module.css";
import ContextNote from "./ContextNote";

function Notes() {
  const {isShowForm, arrNote, handlerIdChoiceNote, isEditForm, idChoiceNote} = useContext(ContextNote);

  if (arrNote.length < 1) {
    return (
      <div
        className={
          isShowForm ? classes.notes_message_none : classes.notes_message
        }
      >
        You do not have any notes
      </div>
    );
  }
  return (
    <>
      {arrNote.map((item) => {
        if(isEditForm) {
            if(item.id === idChoiceNote) {
                return (
                    <div key={item.id} className={classes.choice_note_none} onClick={() => handlerIdChoiceNote (item.id)}>
                      <div className={classes.notes_date}>{item.date}</div>
                      <div className={classes.notes_text}>{item.text}</div>
                    </div>
                );
            }
        }
        return (
          <div key={item.id} className={classes.notes_background} onClick={() => handlerIdChoiceNote (item.id)}>
            <div className={classes.notes_date}>{item.date}</div>
            <div className={classes.notes_text}>{item.text}</div>
          </div>
        );
      })}
    </>
  );
}

export default Notes;
