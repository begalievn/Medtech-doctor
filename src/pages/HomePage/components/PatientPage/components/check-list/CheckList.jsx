import React from "react";

import classes from "./checkList.module.scss";
import { Switch } from "@mui/material";
import CheckListTable from "../check-list-table/CheckListTable";

const CheckList = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <h2>Чеклист</h2>
        <div>
          <div className={classes.activate}>
            <p>Активировать</p>
            <Switch color="success" />
          </div>
          <div>
            <button className={classes.save_button}>Сохранить</button>
          </div>
        </div>
      </div>
      <div className={classes.content}>
        <div>
          <CheckListTable />
        </div>
      </div>
    </div>
  );
};

export default CheckList;
