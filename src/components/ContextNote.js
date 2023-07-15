import React, { useState, createContext } from "react";

const ContextNote = createContext({
  isShowForm: false,
  changeHandlerShowForm: () => {},
  arrNote: [],
  addNewNote: () => {},
  idChoiceNote: Number,
  handlerIdChoiceNote: () => {},
  isEditForm: false,
  handlerEditForm: () => {},
  deleteNote: () => {},
  choiceNoteDate: "",
  choiceNoteText: "",
  handlerChoiceNoteDate: () => {},
  handlerChoiceNoteText: () => {},
});

export const ContextNoteProvider = (props) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const [arrNote, setArrNote] = useState([]);
  const [idChoiceNote, setIdChoiceNote] = useState(Number);
  const [isEditForm, setIsEditForm] = useState(false);
  const [choiceNoteDate, setChoiceNoteDate] = useState("");
  const [choiceNoteText, setChoiceNoteText] = useState("");

  console.log(arrNote);
  console.log("choice", typeof idChoiceNote, idChoiceNote);

  function changeHandlerShowForm() {
    setIsShowForm((prev) => !prev);
  }

  function addNewNote(note) {
    setArrNote((prev) => {
      const arr = [note, ...prev];
      return arr;
    });
  }

  function handlerIdChoiceNote(id) {
    setIdChoiceNote(id);
    handlerEditForm();
  }

  function handlerEditForm() {
    setIsEditForm((prev) => !prev);
  }

  function deleteNote() {
    console.log(arrNote);
    console.log(idChoiceNote);
    const arr = arrNote.filter((item) => item.id !== idChoiceNote);
    setArrNote(arr);
    handlerEditForm();
  }

  function handlerChoiceNoteDate(item) {
    setChoiceNoteDate(item);
  }

  function handlerChoiceNoteText(item) {
    setChoiceNoteText(item);
  }

  return (
    <ContextNote.Provider
      value={{
        isShowForm: isShowForm,
        changeHandlerShowForm: changeHandlerShowForm,
        arrNote: arrNote,
        addNewNote: addNewNote,
        idChoiceNote: idChoiceNote,
        handlerIdChoiceNote: handlerIdChoiceNote,
        isEditForm: isEditForm,
        handlerEditForm: handlerEditForm,
        deleteNote: deleteNote,
        choiceNoteDate: choiceNoteDate,
        choiceNoteText: choiceNoteText,
        handlerChoiceNoteDate: handlerChoiceNoteDate,
        handlerChoiceNoteText: handlerChoiceNoteText,
      }}
    >
      {props.children}
    </ContextNote.Provider>
  );
};

export default ContextNote;
