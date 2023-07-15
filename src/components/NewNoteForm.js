import React, { useContext } from "react";

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

    if (isShowForm) {
      if (newText.trim().length < 1) {
        alert("You try add empty note");
        changeHandlerShowForm();
        return;
      } else {
        const newNote = {
          id: id,
          date: newDate,
          text: newText,
        };
        addNewNote(newNote);
        changeHandlerShowForm();
        e.target.reset();
      }
    }
  }

  if (isEditForm) {
    for (let item of arrNote) {
      if (item.id === idChoiceNote) {
        handlerChoiceNoteDate(item.date);
        handlerChoiceNoteText(item.text);
      }
    }
  }

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
          <button
            type={isEditForm ? "button" : "submit"}
            onClick={isEditForm ? deleteNote : null}
          >
            {isEditForm ? "delete" : "Add"}
          </button>
          {isEditForm ? <button>Edit</button> : null}
        </div>
      </form>
    </div>
  );
}

export default NewNoteForm;
