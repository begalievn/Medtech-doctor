// modules
import React from 'react';

// styles
import classes from './textFieldV3.module.scss';

const TextFieldV3 = ({placeholder, label, value, onChange, labelStyles, inputStyles, type, textAreaStyles, ...props}) => {

  if(type === 'textArea') {
    return (
      <div className={classes.container}>
        <p className={classes.label} style={labelStyles}>{label}</p>
        <textarea placeholder={placeholder} value={value} onChange={onChange} className={classes.textArea} style={textAreaStyles} {...props} />
      </div>
    )
  }

  return (
    <div className={classes.container}>
      <p className={classes.label} style={labelStyles}>{label}</p>
      <input placeholder={placeholder} value={value} onChange={onChange} className={classes.input} style={inputStyles} {...props} />
    </div>
  );
};

export default TextFieldV3;