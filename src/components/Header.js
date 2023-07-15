import React, { useContext } from "react";

import classes from "./Header.module.css";

import CurrentDate from "./CurrentDate";
import ButtonAdd from "./ButtonAdd";
import ContextNote from "./ContextNote";

function Header() {
  const { isShowForm, isEditForm } = useContext(ContextNote);

  return (
    <div className={classes.header_element_position}>
      <div>
        <CurrentDate />
      </div>
      <div>
        <div className={classes.header_title}>
          {isShowForm
            ? "ADD NEW NOTE"
            : isEditForm
            ? "EDIT NOTE"
            : "TO DO LIST"}
        </div>
      </div>
      <div>
        <ButtonAdd />
      </div>
    </div>
  );
}

export default Header;
