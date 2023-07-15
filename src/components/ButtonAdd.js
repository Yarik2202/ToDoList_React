import React, { useContext } from 'react';

import classes from './ButtonAdd.module.css';

import ContextNote from './ContextNote';

function ButtonAdd() {
    const {changeHandlerShowForm, isEditForm} = useContext(ContextNote);
    

    return (
        <button className={isEditForm ? classes.button_hidden : classes.button_add} onClick={changeHandlerShowForm}>+ Note</button>
    );
}

export default ButtonAdd;