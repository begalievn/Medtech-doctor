import React from "react";
import SearchIcon from "@mui/icons-material/Search";

import classes from "./userSearch.module.css";

const UserSearch = () => {
  return (
    <div className={classes.input_container}>
      <span className={classes.icon}>
        <SearchIcon sx={{ width: "30px", height: "30px", color: "gray" }} />
      </span>
      <input type={"text"} className={classes.input} />
    </div>
  );
};

export default UserSearch;
