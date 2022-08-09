// modules
import React from 'react';

// styles
import classes from './editSaveButton.module.scss';

const EditSaveButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className={classes.edit_save_button}>
      {text}
    </button>
  );
};

export default EditSaveButton;