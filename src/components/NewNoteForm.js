import React, { useContext, useEffect } from "react";

import classes from "./NewNoteForm.module.css";

import ContextNote from "./ContextNote";

function NewNoteForm() {
  const {
    isShowForm,
    arrNote,
    idChoiceNote,
    addNewNote,
    changeHandlerShowForm,
    isEditForm,
    handlerEditForm,
    deleteNote,
    choiceNoteDate,
    choiceNoteText,
    handlerChoiceNoteDate,
    handlerChoiceNoteText,
  } = useContext(ContextNote);

  function SubmitHandler(e) {
    e.preventDefault();
    const newDate = e.target[0].value;
    const newText = e.target[1].value;
    const id = Math.random(1, 9);

    if (newText.trim().length < 1) {
      alert("You try add empty note");
    } else {
      if (isEditForm) {
        for (let item of arrNote) {
          if (item.id === idChoiceNote) {
            item.date = newDate;
            item.text = newText;
            e.target.reset();
            handlerEditForm();
          }
        }
      } else {
        const newNote = {
          id: id,
          date: newDate,
          text: newText,
        };
        addNewNote(newNote);
        e.target.reset();
        changeHandlerShowForm();
      }
    }
  }

  useEffect(() => {
    if (isEditForm) {
      for (let item of arrNote) {
        if (item.id === idChoiceNote) {
          handlerChoiceNoteDate(item.date);
          handlerChoiceNoteText(item.text);
        }
      }
    }
  }, [isEditForm, arrNote]);

  return (
    <div
      className={
        isShowForm || isEditForm
          ? classes.background_form
          : classes.display_none
      }
    >
      <form className={classes.form_element_position} onSubmit={SubmitHandler}>
        <input
          type="date"
          defaultValue={isEditForm ? choiceNoteDate : ""}
        ></input>
        <textarea
          maxLength={40}
          wrap="soft"
          defaultValue={isEditForm ? choiceNoteText : ""}
        ></textarea>
        <div className={classes.form_button_position}>
          <button
            type="button"
            onClick={isShowForm ? changeHandlerShowForm : handlerEditForm}
          >
            Cancel
          </button>
          <button type="submit">{isEditForm ? "Save" : "Add"}</button>
          {isEditForm ? <button onClick={deleteNote}>Delete</button> : null}
        </div>
      </form>
    </div>
  );
}

export default NewNoteForm;
